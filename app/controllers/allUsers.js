// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.allUsersWin.setTitle("MVP Users");
var items = [];
var currentUserId = Ti.App.Properties.getInt("userId");

function loadUsers() {
	
	items = [];
	$.section.setItems([]);

	var data = Alloy.Globals.db.execute('SELECT * FROM users WHERE id NOT IN (SELECT DISTINCT user_one_id FROM friends WHERE user_two_id=? UNION SELECT user_two_id FROM friends WHERE user_one_id=?) AND id NOT LIKE ?', currentUserId, currentUserId, currentUserId);

	while (data.isValidRow()) {

		items.push({
			itemId : data.fieldByName('id'),
			usersName : {
				text : data.fieldByName('name')
			},
			profileIMG : {
				image : data.fieldByName('photo')
			}
		});

		data.next();
	}

	$.section.items = items;

}

loadUsers();



function addfriendBtnClick(e) {

	var clickedUserId = items[e.itemIndex].itemId;

	var maxUser = null;
	var minUser = null;

	if (clickedUserId > currentUserId) {
		maxUser = clickedUserId;
		minUser = currentUserId;
	} else {
		maxUser = currentUserId;
		minUser = clickedUserId;
	}
	
	Alloy.Globals.db.execute('INSERT INTO friends (user_one_id, user_two_id, status, action_user_id) values('+ minUser +', '+ maxUser +', 0, '+ currentUserId +')');
	alert('Request is sent');
	loadUsers();
	
}
