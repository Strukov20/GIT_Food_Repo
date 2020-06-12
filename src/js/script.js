
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let slider = require('./modules/slider.js'),
        timer = require('./modules/timer.js'),
        modal = require('./modules/modal.js'),
        cards = require('./modules/cards.js'),
        forms = require('./modules/forms.js'),
        api = require('./modules/api.js');



        slider();
        timer();
        modal();
        cards();
        forms();
        // api();

});