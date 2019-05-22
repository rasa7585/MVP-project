// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var profilePhoto;
var repeatedEmail = false;

function openGallery() {
	if (!Ti.Media.hasCameraPermissions()) {
		Ti.Media.requestCameraPermissions();
	}
	Ti.Media.openPhotoGallery({
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
		success : function(e) {
			var image = Ti.UI.createImageView({
				image : e.media,
				width : Ti.UI.FILL,
				height : Ti.UI.FILL
			});

			profilePhoto = e.media;

			$.photoView.removeAllChildren();
			$.photoView.add(image);
		},
		error : function(e) {
			alert('error');
		}
	});
}

function checkEmail() {

	var email = $.email.getValue();
	var matchEmails = [];
	var matchEmailsL = 0;
	
	var data = Alloy.Globals.db.execute('SELECT email FROM users WHERE email LIKE "' + email + '"');

	while (data.isValidRow()) {

		matchEmails.push(data.fieldByName('email'));

		data.next();
	}
	
	matchEmailsL = matchEmails.length;
	
	if (matchEmailsL == 1) {
		repeatedEmail = true;
	} else {
		repeatedEmail = false;
	}

}

function createUser() {
	var name = $.name.getValue();
	var email = $.email.getValue();
	var password = $.password.getValue();

	if (name != '' && email != '' && password != '') {

		checkEmail();
		
		if (repeatedEmail == false) {
		
			Alloy.Globals.db.execute('INSERT INTO users (name, email, password, photo) VALUES (?, ?, ?, ?)', name, email, password, profilePhoto);
			Ti.App.Properties.setString("email", email);
			
			var lastUser = Alloy.Globals.db.execute('SELECT * FROM users order by id desc limit 1');
			// alert(lastUser.fieldByName("email") + "\n" + lastUser.fieldByName("name"));
			Ti.App.Properties.setInt("userId", lastUser.fieldByName("id"));
			Alloy.createController("home").getView().open(); 
			// $.name.setValue('');
			// $.email.setValue('');
			// $.password.setValue('');
			$.photoView.removeAllChildren();
			$.photoView.add($.photoIcon);

			alert('Your account is successfully created');

		} else if(repeatedEmail == true) {
			alert('This email is assigned before');
		}

	} else {
		alert('fill all the fields!');
	}

}

$.userWind.addEventListener("android:back", function(e){
	
});
