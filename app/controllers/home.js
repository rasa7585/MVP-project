// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
// 
// var items = [];
// 
// function loadInterests() {
	// var data = Alloy.Globals.db.execute('SELECT * FROM interests');
// 
	// while (data.isValidRow()) {
// 
		// items.push({
			// properties : {
				// itemId : data.fieldByName('id')
			// },
			// optionLbl : {
				// text : data.fieldByName('name')
			// }
		// });
// 
		// data.next();
	// }
// 
	// $.section.items = items;
// }
// 
// loadInterests();

function setInfo() {
	var userData;
	try {
		userData = Alloy.Globals.db.execute('SELECT name,email,photo From users WHERE id=?', Ti.App.Properties.getInt("userId"));
		$.profileImg.image = userData.fieldByName('photo');
		$.name.text = userData.fieldByName('name');
		$.email.text = userData.fieldByName('email');
	} catch(e) {
		alert("There is not any thing");
	}
	
	var activity = $.homeWin.activity;
	activity.onCreateOptionsMenu = function(e){
		var menu = e.menu;
		var friends = menu.add({
			title:"Friends"
		});
		
		var friendRequests = menu.add({
			title: "Requests"
		});
		
		var logout = menu.add({
			title: "Logout"
		});
		
		
		
		friends.addEventListener("click", function(e){
			Alloy.createController("listOfFriends").getView().open();
		});
		
		
		friendRequests.addEventListener("click", function(e){
			Alloy.createController("requests").getView().open();
		});
		
		logout.addEventListener("click", function(e){
			Ti.App.Properties.setString("email", null);
			Alloy.createController("index").getView().open();
		});
	};

}

$.homeWin.addEventListener("android:back", function(e){
	
});

function showProfile(){
	Alloy.createController("userProfile").getView().open();
}

function addHappening(){
	Alloy.createController("happening").getView().open();
}

