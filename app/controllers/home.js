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
// 
// var defaultProfile = Ti.UI.createLabel({
	// text: "person",
	// font: {
		// fontFamily: 'material_icons.ttf',
		// fontSize: '70dp'
	// },
	// color: '#dbdbdb',
	// width:Ti.UI.FILL,
	// textAlign:"center"
// });

function setInfo() {
	var userData;
	try {
		userData = Alloy.Globals.db.execute('SELECT name,email,photo From users WHERE id=?', Ti.App.Properties.getInt("userId"));
		if(userData.fieldByName("photo") == null || userData.fieldByName('photo') == ''){
			$.profileImg.image = "/images/person.png";
			// $.profilePhoto.remove($.profileImg);
			// $.profilePhoto.add(defaultProfile);
		}else{
			$.profileImg.image = userData.fieldByName('photo');
		}
		
	} catch(e) {
		alert("There is not any thing");
	}

		$.happeningContainer.add(Alloy.createController("happeningItem").getView());
	

}

setInfo();

// $.homeWin.addEventListener("android:back", function(e){
//
// });

function showProfile() {
	Alloy.createController("userProfile").getView().open();
}

function addHappening() {
	Alloy.createController("happening").getView().open();
}

