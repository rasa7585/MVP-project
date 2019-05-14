// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
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
			$.photoView.removeAllChildren();
			$.photoView.add(image);
		},
		error : function(e) {
			alert('error');
		}
	});
}