$(document).ready(function() {

    function progressBarUpdate(bar, input, maximum) {
        var width = $(input).val() / maximum * 100.0;
        var barClass = 'progress-bar-danger';
        if (width > 66.0) {
            barClass = 'progress-bar-success';
        } else if (width > 33.0) {
            barClass = 'progress-bar-warning';
        }
        $(bar).css({width: width + '%'}).attr('class', '').addClass('progress-bar ' + barClass);
    }

    if (location.search !== "") {
        var querystring = location.search.slice(1);
        var vars = $.deserialize(querystring);
        var re = /\+/gi;
        for (key in vars) {
            var value = vars[key];
            var input = $('input[name='+key+']');
            if (input.attr('type') == 'text') {
                input.val(value.replace(re, " "));
            } else {
                input.val(value);
            }
        };
    }
    progressBarUpdate('#progressbar-network', 'input[name=gauge-network]', 6.0);

    $('form input').change(function() {
        location.search = $('form input').serialize();
    });

    $('input[name=gauge-network]').change(function() {
        progressBarUpdate('#progressbar-network', 'input[name=gauge-network]', 6.0);
    });

})
