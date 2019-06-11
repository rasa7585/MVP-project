// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var happeningId = $.args.id;
var views = [
Alloy.createController("about",{
	'id': happeningId
}).getView(),
Alloy.createController("allUsers",{
	'id': happeningId
}).getView(),
];

$.scrollableView.views = views;

function goToUsers(){
	$.scrollableView.scrollToView(1);
}

function goToDetails(){
	$.scrollableView.scrollToView(0);
}
