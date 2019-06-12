// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var photo;
var id = $.args.id;
var happeningInfo = Alloy.Globals.db.execute("SELECT * FROM happening WHERE id = ?", id);

$.locationLabel.text = happeningInfo.fieldByName("location");
$.budgetLabel.text = "Budget: " + happeningInfo.fieldByName("budget");
$.details.text = happeningInfo.fieldByName("details");
$.title.text = happeningInfo.fieldByName("name");
$.dateLabel.text = happeningInfo.fieldByName("created_date");
	
var users = Alloy.Globals.db.execute("SELECT * FROM participants WHERE happening_id = ? limit 3", id);
while(users.isValidRow()){
	var userInfo = Alloy.Globals.db.execute("SELECT * FROM users WHERE id = ?", users.fieldByName("user_id"));
	if(userInfo.fieldByName("photo") == "" || userInfo.fieldByName("photo") == null){
		photo = "/images/photos/pic.jpg";	
	}else{
		photo = users.fieldByName("photo");
	}
	var userPhoto = Ti.UI.createImageView({
		image: photo,
		width:40,
		height:40,
		borderRadius:20,
		borderWidth:2,
		borderColor:"#fff",
		right:-15
	});
	
	$.photos.add(userPhoto);	
	users.next();
}
