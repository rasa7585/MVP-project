// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
Alloy.Globals.homeWin = $.homeWin;

function setInfo() {
	$.happeningContainer.removeAllChildren();
	var userData;
	try {
		userData = Alloy.Globals.db.execute('SELECT name,email,photo From users WHERE id=?', Ti.App.Properties.getInt("userId"));
		if (userData.fieldByName("photo") == null || userData.fieldByName('photo') == '') {
			$.profileImg.image = "/images/person.png";
		} else {
			$.profileImg.image = userData.fieldByName('photo');
		}

	} catch(e) {
		alert("There is not any thing");
	}

	var data = Alloy.Globals.db.execute('select * from happening where accessibility="pu" order by id desc');
	var lastHappening = Alloy.Globals.db.execute("select * from happening where accessibility='pu' order by id desc limit 1");

	while (data.isValidRow()) {
		if (data.fieldByName('id') == lastHappening.fieldByName('id')) {
			// $.container.width = "100%";
			$.happeningContainer.add(Alloy.createController("happeningItem", {
				'id' : data.fieldByName('id'),
				'width':"100%",
				'itemWidth':"98%",
				'innerElements':"98%",
			}).getView());
		} else {
			$.happeningContainer.add(Alloy.createController("happeningItem", {
				'id' : data.fieldByName('id'),
				'width':"50%",
				'innerElements':"95%",
				'itemWidth':"95%",
			}).getView());
		}

		data.next();
	}

}

function loadData() {
	if (Alloy.Globals.updateHome) {
		setInfo();
		Alloy.Globals.updateHome = false;
	}
}

$.homeWin.addEventListener("android:back", function(e) {

});

function showProfile() {
	Alloy.createController("userProfile").getView().open();
}

function addHappening() {
	Alloy.createController("happening").getView().open();
}

