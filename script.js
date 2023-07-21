$(window).on('load', function () {
    // Simulate progress. Replace this with actual progress tracking.
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        $('#loading-progress').text(progress + '%');

        if (progress >= 100) {
            clearInterval(interval);

            // Add jumping animation to each character
            $('#loading-progress').each(function () {
                $(this).addClass('jump');
            });

            setTimeout(function () {
                $('#loading-screen').fadeOut('slow', function () {
                    $('body').css('overflow', 'auto'); // Bring back the scrollbar
                });
            }, 1000);
        }
    }, 2);
});