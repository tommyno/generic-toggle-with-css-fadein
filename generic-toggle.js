(function() {
	'use strict';

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

				// Optional - auto set ARIA status if not set
				var target = _getTargetAttr(selector[i]);
				for (var j = 0; j < target.length; j++) {
					if (!target[j].getAttribute('aria-expanded')) {
						target[j].setAttribute('aria-expanded', 'false');
					}
				}
			}
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

		el.classList.toggle('is-expanded');

		// Toggle target(s)
		var target = _getTargetAttr(el);
		for (var i = 0; i < target.length; i++) {
			target[i].classList.toggle('is-visible');
		}

		// Change text
		_swapText(el);

		// Optional - Update ARIA status
		_updateARIAstatus(el);
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
			el.innerHTML = el.innerHTML === originalText ? swapText : originalText;
		}
	}

	// Update ARIA status
	/**
	 * @name _updateARIAstatus
	 * @desc Adds original text as an data attr to element, then swaps between old and new text
	 * @attr el (HTMLelement) - Element to update
	 */
	function _updateARIAstatus(el) {
		var target = _getTargetAttr(el);
		for (var i = 0; i < target.length; i++) {
			var isExpanded = target[i].getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
			target[i].setAttribute('aria-expanded', isExpanded);
		}
	}

	// Get target attribute
	/**
	 * @name _getTargetAttr
	 * @desc Get target attribute from selector
	 * @attr el (HTMLelement) - Element
	 */
	function _getTargetAttr(el) {
		var targetAttr = el.getAttribute('data-toggle');
		return document.querySelectorAll(targetAttr);
	}

	// Init
	addListener(document.querySelectorAll('[data-toggle]'), 'click');
})();
