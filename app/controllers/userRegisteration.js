// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var repeatedEmail = false;


function checkEmail() {

	var email = $.username.getValue();
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
	var email = $.username.getValue();
	var password = $.password.getValue();

	if (name != '' && email != '' && password != '') {
		checkEmail();
		
		if (repeatedEmail == false) {
			Alloy.Globals.db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?, ?)', name, email, password);
			Ti.App.Properties.setString("email", email);
			
			var lastUser = Alloy.Globals.db.execute('SELECT * FROM users order by id desc limit 1');
			Ti.App.Properties.setInt("userId", lastUser.fieldByName("id"));
			Alloy.createController("home").getView().open(); 
			$.photoView.removeAllChildren();
			$.photoView.add($.photoIcon);

			Alloy.Globals.notify('Your account is successfully created');

		} else if(repeatedEmail == true) {
			alert('This email is assigned before');
		}

	} else {
		Alloy.Globals.notify('Vas-y, fill the missing fields!');
	}

}

function login(){
	Alloy.createController("index").getView().open();
}

$.userWind.addEventListener("android:back", function(e){
	
});
