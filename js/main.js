
$("p.description").text(function (_, text) {
    var maxlength = 60;
    return $.trim(text).substring(0, maxlength);
});