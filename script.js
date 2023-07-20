$(window).on('load', function () {
    setTimeout(function () {
        $('#loading-screen').fadeOut('slow', function () {
            $('body').css('overflow', 'auto'); // Bring back the scrollbar
        });
    }, 1000);
    $('body').css('overflow', 'hidden'); // Hide the scrollbar
});

$.ajax({
    url: 'home.html',
    type: 'GET',
    success: function (data) {
        // Replace body content with new content
        $('body').html($(data).find('body').html());
    }
});