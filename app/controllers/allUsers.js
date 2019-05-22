// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var items = [];

function loadUsers() {
	
	items = [];
	$.section.setItems([]);

	var data = Alloy.Globals.db.execute('SELECT * FROM users WHERE id NOT IN (SELECT DISTINCT user_one_id FROM friends WHERE user_two_id=? UNION SELECT user_two_id FROM friends WHERE user_one_id=?) AND id NOT LIKE ?', Ti.App.Properties.getInt("userId"), Ti.App.Properties.getInt("userId"), Ti.App.Properties.getInt("userId"));

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

	if (clickedUserId > Alloy.Globals.currentUserId) {
		maxUser = clickedUserId;
		minUser = Alloy.Globals.currentUserId;
	} else {
		maxUser = Alloy.Globals.currentUserId;
		minUser = clickedUserId;
	}
	
	Alloy.Globals.db.execute('INSERT INTO friends (user_one_id, user_two_id, status, action_user_id) values('+ minUser +', '+ maxUser +', 0, '+ Alloy.Globals.currentUserId +')');
	alert('Request is sent');
	loadUsers();
	
}
