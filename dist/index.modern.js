import React, { useRef, useEffect } from 'react';

var AuthCode = function AuthCode(_ref) {
  var _ref$allowedCharacter = _ref.allowedCharacters,
      allowedCharacters = _ref$allowedCharacter === void 0 ? '[A-Za-z0-9]+' : _ref$allowedCharacter,
      ariaLabel = _ref.ariaLabel,
      _ref$characters = _ref.characters,
      characters = _ref$characters === void 0 ? 6 : _ref$characters,
      containerClassName = _ref.containerClassName,
      inputClassName = _ref.inputClassName,
      _ref$inputType = _ref.inputType,
      inputType = _ref$inputType === void 0 ? 'text' : _ref$inputType,
      onChange = _ref.onChange;
  var inputsRef = useRef([]);
  var inputMode = inputType === 'number' ? 'numeric' : 'text';
  useEffect(function () {
    inputsRef.current[0].focus();
  }, []);

  var sendResult = function sendResult() {
    var res = inputsRef.current.map(function (input) {
      return input.value;
    }).join('');
    onChange && onChange(res);
  };

  var handleOnChange = function handleOnChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        nextElementSibling = _e$target.nextElementSibling;

    if (value.match(allowedCharacters)) {
      if (nextElementSibling !== null) {
        nextElementSibling.focus();
      }
    } else {
      e.target.value = '';
    }

    sendResult();
  };

  var handleOnKeyDown = function handleOnKeyDown(e) {
    var key = e.key;
    var target = e.target;

    if (key === 'Backspace') {
      if (target.value === '' && target.previousElementSibling !== null) {
        if (target.previousElementSibling !== null) {
          target.previousElementSibling.focus();
          e.preventDefault();
        }
      } else {
        target.value = '';
      }

      sendResult();
    }
  };

  var handleOnFocus = function handleOnFocus(e) {
    e.target.select();
  };

  var handleOnPaste = function handleOnPaste(e) {
    var value = e.clipboardData.getData('Text');

    if (value.match(allowedCharacters)) {
      for (var i = 0; i < characters && i < value.length; i++) {
        inputsRef.current[i].value = value.charAt(i);

        if (inputsRef.current[i].nextElementSibling !== null) {
          inputsRef.current[i].nextElementSibling.focus();
        }
      }

      sendResult();
    }

    e.preventDefault();
  };

  var inputs = [];

  var _loop = function _loop(i) {
    inputs.push(React.createElement("input", {
      key: i,
      onChange: handleOnChange,
      onKeyDown: handleOnKeyDown,
      onFocus: handleOnFocus,
      onPaste: handleOnPaste,
      type: inputType,
      ref: function ref(el) {
        return inputsRef.current[i] = el;
      },
      maxLength: 1,
      className: inputClassName,
      inputMode: inputMode,
      autoComplete: i === 0 ? 'one-time-code' : 'off',
      "aria-label": ariaLabel ? ariaLabel + ". Character " + (i + 1) + "." : "Character " + (i + 1) + ".",
      pattern: i === 0 ? allowedCharacters : ''
    }));
  };

  for (var i = 0; i < characters; i++) {
    _loop(i);
  }

  return React.createElement("div", {
    className: containerClassName
  }, inputs);
};

export default AuthCode;
//# sourceMappingURL=index.modern.js.map