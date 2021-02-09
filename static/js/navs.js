function getPartialDropdownClass(e) {
    let classList = e.currentTarget.className.split(/\s+/);
    return classList.filter(selector => selector.includes('dropdown-'));
}

// function menuDropdownToggle() {
//     let nav_d = $('.nav-dropdown');
//     nav_d.click(function () {
//         console.log($('.nav-dropdown[class^="dropdown-"]'))
//     });
// }

function addListeners() {
    // menuDropdownToggle();
    $('.nav-dropdown').click(function(e) {
        let dynamicDrop = getPartialDropdownClass(e)[0];

        $('.nav-dropdown-content').hide();
        
        if($(`.${dynamicDrop}-content`).is(':visible')) {
            $(`.${dynamicDrop}-content`).hide();
        } else { 
            $(`.${dynamicDrop}-content`).css('display', 'block');
        }
    });
    
    $(window).click(function(e) {
        let target = $(e.target);
        let parent = target.closest('.nav-dropdown').length;
        let child = target.closest('.nav-dropdown-content').length;
        if(!(parent || child) && $('.nav-dropdown-content').is(':visible')) {
            $('.nav-dropdown-content').hide();
        }
    })
}

$('document').ready(function() {

    addListeners();

    $('a.dupe')[1] && $('a.dupe')[1].remove();
    $('a.dupe')[2] && $('a.dupe')[2].remove();

    console.log('Reddy Freddy');
})