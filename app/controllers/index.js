function doClick(e) {
	alert($.label.text);
}

function openUserRegisterationPage(){
	Alloy.createController("userRegisteration").getView().open();
}

$.loginWin.open();
