const signIn = document.querySelector('.authorization-link a');
document.querySelector('.header.links li:last-child a').classList.add('custom-create-class')

require([
    'jquery',
    'popupWindow',
], function ($) {
    'use strict';

    $(signIn).popupWindow({
        "windowURL": "customer/account/login",
        "windowName": "Window Name",
        "width": 500,
        "height": 800,
        "left": 0,
        "top": 0,
        "resizable": 1,
        "scrollbars": 1
    });
    $('.custom-create-class').popupWindow({
        "windowURL": "customer/account/create",
        "windowName": "Window Name",
        "width": 500,
        "height": 800,
        "left": 0,
        "top": 0,
        "resizable": 1,
        "scrollbars": 1
    });
});
