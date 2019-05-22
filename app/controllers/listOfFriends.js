// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.friendWin.setTitle("MVP Friends");
// alert($.section.items.length);
// $.title.text = $.section.items.length + " Friends";

function showListOfUsers(){
	Alloy.createController("allUsers").getView().open();
}
 $.friendWin.addEventListener("open", function(e){
 	var activity = $.friendWin.activity;
 	activity.onCreateOptionsMenu = function(e){
 		var menu = e.menu;
 		var showUsers = menu.add({
 			icon:"/images/plus.png",
 			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
 		});
 		
 		showUsers.addEventListener("click", function(e){
 			showListOfUsers();
 		});
 	};
 });
