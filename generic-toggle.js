(function() {

    "use strict";

     // Init
    addListener(document.querySelectorAll('[data-toggle]'), 'click');


    // Generic event listener
    /**
    * @name addListener
    * @desc Attaches event listeners to all matching elements - used for toggling
    * @attr selector (HTMLelement) - Element to check
    * @attr event (string) - Event to listen for (ex: 'click')
    */
    function addListener(selector, event) {
        for (var i = 0; i < selector.length; i++) {

            // Click event
            if (event === 'click') {
                selector[i].addEventListener('click', _clickHandler);
            }

            // Other event
            // ...
        }
    }


    // Click handler
    /**
    * @name _clickHandler
    * @desc Toggles other element on click
    * @attr el (HTMLelement) - Element it listens to
    */
    function _clickHandler(event) {
        var el = event.currentTarget;
        // Extract target from data-attr
        var targetAttr = el.getAttribute('data-toggle');
        // Toggle target
        var target = document.querySelector(targetAttr);
        target.classList.toggle("is-visible");

        // Change text
        _swapText(el);
    }



    // Swap text
    /**
    * @name _swapText
    * @desc Adds original text as an data attr to element, then swaps between old and new text
    * @attr el (HTMLelement) - Element to check
    */
    function _swapText(el) {

        var swapText = el.getAttribute('data-text-swap');

        if (swapText) {
            // Save original text as data attr
            if (!el.getAttribute('data-text-original')) {
                el.setAttribute('data-text-original', el.innerHTML);
            }

            var originalText = el.getAttribute('data-text-original');
            el.innerHTML = (el.innerHTML === originalText ? swapText : originalText);
        }

    }


})();
