#Slider

Trigger a single element to show and hide

Useful as a slide-in mobile navigation menu.

##API

    var Slider = require('slider');

    Slider.create({
      el: document.querySelector('.js-slider'),
      trigger : document.querySelector('.js-slider-trigger')
    });

##Example markup

    <div class="js-slider-trigger"> Click to open slider </div>

    <div class="js-slider">
        // element that slides
    </div>
