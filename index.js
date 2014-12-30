/**
 * Slider
 *
 * Adds and removes a .is-open class to the an element when
 * the trigger is clicked.
 *
 * Useful as a slide-in mobile navigation menu.
 *
 * Relevant and similar components:
 *    nib-components/off-canvas
 *    nib-components/accordion
 */

var emitter = require('emitter');

var Slider = function(options){
  this.options    = options;
  this.el         = options.el;
  this.trigger    = options.trigger || this.el.querySelector(this.triggerElement);
};

Slider.prototype = {

  //set default class to use for trigger
  triggerElement:  '.js-slider-trigger',

  enable: function(){
    if (this.trigger) { // Only enable if the trigger element exists on the page
      this.trigger.addEventListener('click', this._onTriggerClick.bind(this));
    }
  },

  _onTriggerClick: function(event) {
    event.preventDefault();
    this.toggle();
  },

  // Toggle a class on the nav element
  toggle: function() {
    if(this.isOpen){
      this.el.classList.remove('is-open');
      this.isOpen = false;
    }
    else {
      this.el.classList.add('is-open');
      this.isOpen = true;
    }
  }
};

Slider.create = function(options){
  var o = new Slider(options);
  o.enable();
  return o;
};

emitter(Slider.prototype);

module.exports = Slider;