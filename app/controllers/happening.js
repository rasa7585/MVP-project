// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var accessibility = 'pu';
function createHappening() {

	var name = $.happeningTextField.getValue();
	var location = $.locationTextField.getValue();
	var budget = $.budgetTextField.getValue();

	if (name != '' && location != '' && budget != '') {
		Alloy.Globals.db.execute('INSERT INTO happening (name, location, budget, accessibility) values("' + name + '", "' + location + '", ' + budget + ', "' + accessibility + '")');
		alert('Happening is successfully created');

		$.happeningTextField.setValue('');
		$.locationTextField.setValue('');
		$.budgetTextField.setValue('');
		if (accessibility == 'pr') {
			$.publicRadio.image = "/images/radio_checked.png";
			$.privateRadio.image = "/images/radio_unchecked.png";
			accessibility = 'pu';
		}

	} else {
		alert('Fill all the blanks!');
	}

}

function publicClicked() {
	$.publicRadio.image = "/images/radio_checked.png";
	$.privateRadio.image = "/images/radio_unchecked.png";
	if (accessibility == 'pr') {
		$.publicRadio.image = "/images/radio_checked.png";
		$.privateRadio.image = "/images/radio_unchecked.png";
		accessibility = 'pu';
	}
}

function privateClicked() {
	$.publicRadio.image = "/images/radio_unchecked.png";
	$.privateRadio.image = "/images/radio_checked.png";
	if (accessibility == 'pu') {
		$.privateRadio.image = "/images/radio_checked.png";
		$.publicRadio.image = "/images/radio_unchecked.png";
		accessibility = 'pr';
	}
}