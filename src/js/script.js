
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let slider = require('./modules/slider.js'),
        timer = require('./modules/timer.js'),
        modal = require('./modules/modal.js');

    slider();
    timer();
    modal();
});