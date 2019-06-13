// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var accessibility = 'pu';
var profilePhoto = null;

function notify(msg) {
    Ti.UI.createNotification({
        message : msg
    }).show();
}

function createHappening() {

    var name = $.happeningTextField.getValue();
    var location = $.locationTextField.getValue();
    var budget = $.budgetTextField.getValue();
    var details = $.detailsTextField.getValue();
    var happeningDate = new Date().toUTCString();

    if (name != '' && location != '' && budget != '' && details != '') {
        Alloy.Globals.db.execute('INSERT INTO happening (name, location, budget, accessibility, details, created_date) values("' + name + '", "' + location + '", ' + budget + ', "' + accessibility + '", "' + details + '","' + happeningDate + '")');
        var lastHappening = Alloy.Globals.db.execute("SELECT * FROM happening order by id desc limit 1");
        if (profilePhoto != null) {
            Alloy.Globals.db.execute("INSERT INTO media (happening_id, media_link, media_type) values(?,?,?)", lastHappening.fieldByName("id"), profilePhoto, 'photo');
        }

        // alert(lastHappening.fieldByName('id') +  + "\n"+happeningDate);
        notify('Happening is successfully created');
        Alloy.Globals.updateHome = true;
        $.happeningWin.close();

    } else {
        notify("Please fill all the fields.");
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
