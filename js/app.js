function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function() {
    var md = new Remarkable();
    var doc = getParameterByName('doc').replace('/', '') || 'overview.md';
    $.get(doc, function(text) {
        $('#content').html(md.render(text));
        $('table').addClass('table');
    });
})
