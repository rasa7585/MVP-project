// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
// alert($.section.items.length);
$.title.text = $.section.items.length + " Friends";

function showListOfUsers(){
	Alloy.createController("allUsers").getView().open();
}
