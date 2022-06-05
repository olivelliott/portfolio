
$('#project-3').on('hover', function() {
    $('#test').animate({
        opacity: 0.25,
        left: '+=50',
        height: 'toggle'
    }, 5000, function() {
        alert('animation completed');
    });
});