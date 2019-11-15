/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/example.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/example.ts":
/*!****************************!*\
  !*** ./example/example.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! .. */ "./index.ts");
function startGame() {
    var myStage = {
        entities: [],
        logicQueue: [],
        renderQueue: [],
        onClickQueue: [],
        interactors: []
    };
    var Player = /** @class */ (function () {
        function Player() {
            var _this = this;
            this.x = 200;
            this.y = 500;
            this.width = 200;
            this.height = 350;
            this.logical = true;
            this.logic = function () { };
            this.renderable = true;
            this.render = function (ctx) {
                ctx.fillStyle = 'red';
                ctx.fillRect(_this.x, _this.y, _this.width, _this.height);
            };
        }
        return Player;
    }());
    var myPlayer = new Player();
    myStage.entities.push(myPlayer);
    myStage.logicQueue.push(myPlayer);
    myStage.renderQueue.push(myPlayer);
    var myGame = new __1.default({
        width: 1280,
        height: 720,
        selector: '.container',
        initialStage: myStage
    });
}
var _global = window;
_global.startGame = startGame;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var howler_1 = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
var FiskGame = /** @class */ (function () {
    function FiskGame(_a) {
        var _this = this;
        var height = _a.height, width = _a.width, _b = _a.images, images = _b === void 0 ? [] : _b, _c = _a.sounds, sounds = _c === void 0 ? [] : _c, selector = _a.selector, _d = _a.imageSmoothing, imageSmoothing = _d === void 0 ? false : _d, _e = _a.customCollision, customCollision = _e === void 0 ? null : _e, initialStage = _a.initialStage;
        this.imagesLoaded = 0;
        this.totalImages = 0;
        this.soundsLoaded = 0;
        this.totalSounds = 0;
        this.width = width;
        this.height = height;
        this.canvas = this.createMainCanvas(selector);
        this.context = this.canvas.getContext('2d');
        this.ctx = this.context;
        this.updateScale();
        this.bindScreenResize();
        this.setImageSmoothing(imageSmoothing);
        this.customCollision = customCollision;
        this.totalImages = images.length;
        this.currentStage = initialStage;
        this.preloadImages(images, function () {
            _this.preloadSounds(sounds, function () {
                _this.render();
                _this.logicLoop = window.setInterval(_this.logic.bind(_this), 33);
                _this.bindClick();
            });
        });
    }
    FiskGame.prototype.stopAllSounds = function () {
        var _this = this;
        this.soundNames.forEach(function (name) {
            _this.sounds[name].stop();
        });
    };
    FiskGame.prototype.preloadImages = function (arr, callback) {
        var _this = this;
        function last(game, passedCallback) {
            game.imagesLoaded += 1;
            if (game.imagesLoaded === game.totalImages) {
                passedCallback();
            }
        }
        if (arr.length > 0) {
            arr.forEach(function (url) {
                var image = new Image();
                image.onload = function () {
                    _this.images[url] = image;
                    last(_this, callback);
                };
                image.src = url;
            });
        }
        else {
            callback();
        }
    };
    FiskGame.prototype.preloadSounds = function (arr, callback) {
        var _this = this;
        function last(game, passedCallback) {
            game.soundsLoaded += 1;
            if (game.soundsLoaded === game.totalSounds) {
                passedCallback();
            }
        }
        if (arr.length > 0) {
            arr.forEach(function (options) {
                options.onload = function () {
                    last(_this, callback);
                };
                _this.sounds[options.name] = new howler_1.Howl(options);
                _this.soundNames.push(options.name);
            });
        }
        else {
            callback();
        }
    };
    Object.defineProperty(FiskGame.prototype, "scale", {
        get: function () {
            var scaleX = window.innerWidth / this.canvas.offsetWidth;
            var scaleY = window.innerHeight / this.canvas.offsetHeight;
            var scaleToFit = Math.min(scaleX, scaleY);
            return scaleToFit;
        },
        enumerable: true,
        configurable: true
    });
    FiskGame.prototype.updateScale = function () {
        var scale = this.scale;
        var canvasSize = this.canvas.offsetWidth * scale;
        var diff = window.innerWidth - canvasSize;
        var initTranslateX = ((window.innerWidth - this.canvas.offsetWidth) / 2);
        var initTranslateY = ((window.innerHeight - this.canvas.offsetHeight) / 2);
        this.canvas.style.transformOrigin = '50% 50%';
        this.canvas.style.transform = "translateX(" + initTranslateX + "px) translateY(" + initTranslateY + "px) scale(" + scale + ")";
    };
    FiskGame.prototype.bindScreenResize = function () {
        window.addEventListener('resize', this.updateScale.bind(this), false);
    };
    FiskGame.prototype.getClick = function (event) {
        return {
            x: event.offsetX - 5,
            y: event.offsetY - 5,
            width: 10,
            height: 10
        };
    };
    FiskGame.prototype.getTouch = function (event, game) {
        var canvasBounds = game.canvas.getBoundingClientRect();
        var x = event.changedTouches[0].pageX - canvasBounds.left;
        var y = event.changedTouches[0].pageY - canvasBounds.top;
        return {
            x: (x / game.scale) - 5,
            y: (y / game.scale) - 5,
            width: 10,
            height: 10
        };
    };
    FiskGame.prototype.onClick = function (event) {
        var _this = this;
        event.preventDefault();
        var click = this.getClick(event);
        var clicked;
        this.currentStage.interactors.forEach(function (element) {
            if (_this.simpleCollisionCheck(click, element)) {
                clicked = element;
            }
        });
        if (!clicked) {
            this.currentStage.onClickQueue.forEach(function (func) {
                func(_this);
            });
        }
        else {
            clicked.onClick(event, this);
        }
    };
    FiskGame.prototype.onTouch = function (event) {
        var _this = this;
        event.preventDefault();
        var touch = this.getTouch(event, this);
        var touched;
        this.currentStage.interactors.forEach(function (element) {
            if (_this.simpleCollisionCheck(touch, element)) {
                touched = element;
            }
        });
        if (!touched) {
            this.currentStage.onClickQueue.forEach(function (func) {
                func(_this);
            });
        }
        else {
            touched.onTouch(event, this);
        }
    };
    FiskGame.prototype.bindClick = function () {
        this.canvas.addEventListener("touchstart", this.onTouch.bind(this));
        this.canvas.addEventListener("mousedown", this.onClick.bind(this));
    };
    FiskGame.prototype.createMainCanvas = function (selector) {
        var canvas = document.createElement('canvas');
        var parent = document.querySelector(selector);
        canvas.width = this.width;
        canvas.height = this.height;
        parent.appendChild(canvas);
        return canvas;
    };
    FiskGame.prototype.setImageSmoothing = function (smoothing) {
        // this.ctx.mozImageSmoothingEnabled = smoothing;
        // this.ctx.webkitImageSmoothingEnabled = smoothing;
        this.ctx.imageSmoothingEnabled = smoothing;
    };
    FiskGame.prototype.render = function () {
        var _this = this;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.currentStage.renderQueue.forEach(function (element) {
            element.render(_this.ctx);
        });
        window.requestAnimationFrame(this.render.bind(this));
    };
    FiskGame.prototype.collisionCheck = function (a, b) {
        if (this.customCollision !== null) {
            return this.customCollision(a, b);
        }
        else {
            return this.simpleCollisionCheck(a, b);
        }
    };
    FiskGame.prototype.simpleCollisionCheck = function (a, b) {
        if ((a.x >= b.x && a.x <= b.x + b.width) ||
            (a.x + a.width >= b.x && a.x + a.width <= b.x + b.width)) {
            if ((a.y >= b.y && a.y <= b.y + b.height) ||
                (a.y + a.height >= b.y && a.y + a.height <= b.y + b.height)) {
                return true;
            }
            return false;
        }
        return false;
    };
    FiskGame.prototype.logic = function () {
        var _this = this;
        this.currentStage.logicQueue.forEach(function (element) {
            element.logic(_this);
        });
    };
    return FiskGame;
}());
exports.default = FiskGame;


/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.1.2
 *  howlerjs.com
 *
 *  (c) 2013-2019, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        for (var i=0; i<self.html5PoolSize; i++) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended. 
        // If there is, play that sound. If not, continue as usual.  
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      var loop = !!(sound._loop || self._sprite[sprite][2]);
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = loop;
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
              self._loadQueue();
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;

          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = parseFloat(from);
      to = parseFloat(to);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            self._emit('seek', id);

            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.1.2
 *  howlerjs.com
 *
 *  (c) 2013-2019, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9leGFtcGxlLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob3dsZXIvZGlzdC9ob3dsZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRUEsc0RBQTBCO0FBRTFCLFNBQVMsU0FBUztJQUNkLElBQU0sT0FBTyxHQUFjO1FBQ3ZCLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEVBQUU7UUFDZCxXQUFXLEVBQUUsRUFBRTtRQUNmLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO0tBQ2xCLENBQUM7SUFFRjtRQUNJO1lBQUEsaUJB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QUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxP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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcGxHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9leGFtcGxlLnRzXCIpO1xuIiwiaW1wb3J0IEdhbWVTdGFnZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9HYW1lU3RhZ2VcIjtcbmltcG9ydCBMb2dpY2FsIGZyb20gXCIuLi9pbnRlcmZhY2VzL0xvZ2ljYWxcIjtcbmltcG9ydCBSZW5kZXJhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL1JlbmRlcmFibGVcIjtcbmltcG9ydCBGaXNrR2FtZSBmcm9tIFwiLi5cIjtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNvbnN0IG15U3RhZ2U6IEdhbWVTdGFnZSA9IHtcbiAgICAgICAgZW50aXRpZXM6IFtdLFxuICAgICAgICBsb2dpY1F1ZXVlOiBbXSxcbiAgICAgICAgcmVuZGVyUXVldWU6IFtdLFxuICAgICAgICBvbkNsaWNrUXVldWU6IFtdLFxuICAgICAgICBpbnRlcmFjdG9yczogW11cbiAgICB9O1xuXG4gICAgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgTG9naWNhbCwgUmVuZGVyYWJsZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICAgICAgeCA9IDIwMDtcbiAgICAgICAgeSA9IDUwMDtcbiAgICAgICAgd2lkdGggPSAyMDA7XG4gICAgICAgIGhlaWdodCA9IDM1MDtcbiAgICAgICAgbG9naWNhbCA9IHRydWU7XG4gICAgICAgIGxvZ2ljID0gKCkgPT4ge31cbiAgICAgICAgcmVuZGVyYWJsZSA9IHRydWU7XG4gICAgICAgIHJlbmRlciA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBteVBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuICAgIG15U3RhZ2UuZW50aXRpZXMucHVzaChteVBsYXllcik7XG4gICAgbXlTdGFnZS5sb2dpY1F1ZXVlLnB1c2gobXlQbGF5ZXIpO1xuICAgIG15U3RhZ2UucmVuZGVyUXVldWUucHVzaChteVBsYXllcik7XG5cbiAgICBjb25zdCBteUdhbWUgPSBuZXcgRmlza0dhbWUoe1xuICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICAgIHNlbGVjdG9yOiAnLmNvbnRhaW5lcicsXG4gICAgICAgIGluaXRpYWxTdGFnZTogbXlTdGFnZVxuICAgIH0pO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gd2luZG93IGFzIGFueVxuX2dsb2JhbC5zdGFydEdhbWUgPSBzdGFydEdhbWUiLCJpbXBvcnQgR2FtZUVudGl0eSBmcm9tIFwiLi9pbnRlcmZhY2VzL0dhbWVFbnRpdHlcIjtcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSBcIi4vaW50ZXJmYWNlcy9HYW1lU3RhZ2VcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL2ludGVyZmFjZXMvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi9pbnRlcmZhY2VzL0ludGVyYWN0YWJsZVwiO1xuaW1wb3J0IFNvdW5kQ29uZmlnIGZyb20gXCIuL2ludGVyZmFjZXMvU291bmRDb25maWdcIjtcbmltcG9ydCBJbWFnZU1hcCBmcm9tIFwiLi9pbnRlcmZhY2VzL0ltYWdlTWFwXCI7XG5pbXBvcnQgU291bmRNYXAgZnJvbSBcIi4vaW50ZXJmYWNlcy9Tb3VuZE1hcFwiO1xuaW1wb3J0IHtIb3dsfSBmcm9tIFwiaG93bGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2tHYW1lIHtcblx0aGVpZ2h0OiBudW1iZXI7XG5cdHdpZHRoOiBudW1iZXI7XG5cdGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cdGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cdHBsYXllcjogYW55O1xuXHRjdXN0b21Db2xsaXNpb246IChhOiBHYW1lRW50aXR5LCBiOiBHYW1lRW50aXR5KSA9PiBhbnkgfCBudWxsO1xuXHRjdXJyZW50U3RhZ2U6IEdhbWVTdGFnZTtcbiAgICBsb2dpY0xvb3A6IG51bWJlcjtcblx0aW1hZ2VzTG9hZGVkOiBudW1iZXIgPSAwO1xuXHR0b3RhbEltYWdlczogbnVtYmVyID0gMDtcblx0aW1hZ2VzOiBJbWFnZU1hcDtcblx0c291bmRzTG9hZGVkOiBudW1iZXIgPSAwO1xuXHR0b3RhbFNvdW5kczogbnVtYmVyID0gMDtcblx0c291bmRzOiBTb3VuZE1hcDtcblx0c291bmROYW1lczogc3RyaW5nW107XG5cblx0Y29uc3RydWN0b3IoeyBcblx0XHRoZWlnaHQsIFxuXHRcdHdpZHRoLCBcblx0XHRpbWFnZXMgPSBbXSwgXG5cdFx0c291bmRzID0gW10sIFxuXHRcdHNlbGVjdG9yLCBcblx0XHRpbWFnZVNtb290aGluZyA9IGZhbHNlLFxuXHRcdGN1c3RvbUNvbGxpc2lvbiA9IG51bGwsXG5cdFx0aW5pdGlhbFN0YWdlXG5cdH06IEdhbWVDb25maWcpIHtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZU1haW5DYW52YXMoc2VsZWN0b3IpO1xuXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0dGhpcy5jdHggPSB0aGlzLmNvbnRleHQgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXHRcdHRoaXMudXBkYXRlU2NhbGUoKTtcblx0XHR0aGlzLmJpbmRTY3JlZW5SZXNpemUoKTtcblx0XHR0aGlzLnNldEltYWdlU21vb3RoaW5nKGltYWdlU21vb3RoaW5nKTtcblx0XHR0aGlzLmN1c3RvbUNvbGxpc2lvbiA9IGN1c3RvbUNvbGxpc2lvbjtcblx0XHR0aGlzLnRvdGFsSW1hZ2VzID0gaW1hZ2VzLmxlbmd0aDtcblx0XHR0aGlzLmN1cnJlbnRTdGFnZSA9IGluaXRpYWxTdGFnZTtcblxuXHRcdHRoaXMucHJlbG9hZEltYWdlcyhpbWFnZXMsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFNvdW5kcyhzb3VuZHMsICgpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2dpY0xvb3AgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5sb2dpYy5iaW5kKHRoaXMpLCAzMyk7XG5cdFx0XHRcdHRoaXMuYmluZENsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHRzdG9wQWxsU291bmRzKCkge1xuICAgICAgICB0aGlzLnNvdW5kTmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuc291bmRzW25hbWVdLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXHRcblx0cHJlbG9hZEltYWdlcyhhcnI6IHN0cmluZ1tdLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBmdW5jdGlvbiBsYXN0KGdhbWU6IEZpc2tHYW1lLCBwYXNzZWRDYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICAgICAgZ2FtZS5pbWFnZXNMb2FkZWQgKz0gMTtcbiAgICAgICAgICAgIGlmKGdhbWUuaW1hZ2VzTG9hZGVkID09PSBnYW1lLnRvdGFsSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgcGFzc2VkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoYXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdGFyci5mb3JFYWNoKHVybCA9PiB7XG5cdFx0XHRcdGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pbWFnZXNbdXJsXSA9IGltYWdlO1xuXHRcdFx0XHRcdGxhc3QodGhpcywgY2FsbGJhY2spO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRpbWFnZS5zcmMgPSB1cmw7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH1cblx0XG5cdHByZWxvYWRTb3VuZHMoYXJyOiBTb3VuZENvbmZpZ1tdLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBmdW5jdGlvbiBsYXN0KGdhbWU6IEZpc2tHYW1lLCBwYXNzZWRDYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICAgICAgZ2FtZS5zb3VuZHNMb2FkZWQgKz0gMTtcbiAgICAgICAgICAgIGlmKGdhbWUuc291bmRzTG9hZGVkID09PSBnYW1lLnRvdGFsU291bmRzKSB7XG4gICAgICAgICAgICAgICAgcGFzc2VkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoYXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdGFyci5mb3JFYWNoKG9wdGlvbnMgPT4ge1xuXHRcdFx0XHRvcHRpb25zLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0XHRsYXN0KHRoaXMsIGNhbGxiYWNrKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5zb3VuZHNbb3B0aW9ucy5uYW1lXSA9IG5ldyBIb3dsKG9wdGlvbnMpO1xuXHRcdFx0XHR0aGlzLnNvdW5kTmFtZXMucHVzaChvcHRpb25zLm5hbWUpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuICAgIH1cbiAgICBcbiAgICBnZXQgc2NhbGUoKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IHNjYWxlWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgc2NhbGVUb0ZpdCA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcbiAgICAgICAgcmV0dXJuIHNjYWxlVG9GaXQ7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NhbGUoKSB7XG5cdFx0Y29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCBjYW52YXNTaXplID0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGggKiBzY2FsZTtcbiAgICAgICAgY29uc3QgZGlmZiA9IHdpbmRvdy5pbm5lcldpZHRoIC0gY2FudmFzU2l6ZTtcbiAgICAgICAgY29uc3QgaW5pdFRyYW5zbGF0ZVggPSAoKHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGgpIC8gMik7XG4gICAgICAgIGNvbnN0IGluaXRUcmFuc2xhdGVZID0gKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQpIC8gMik7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9ICc1MCUgNTAlJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtpbml0VHJhbnNsYXRlWH1weCkgdHJhbnNsYXRlWSgke2luaXRUcmFuc2xhdGVZfXB4KSBzY2FsZSgke3NjYWxlfSlgO1xuXHR9XG5cdFxuXHRiaW5kU2NyZWVuUmVzaXplKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNjYWxlLmJpbmQodGhpcyksIGZhbHNlKTtcblx0fVxuXHRcblx0Z2V0Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0eDogZXZlbnQub2Zmc2V0WCAtIDUsXG5cdFx0XHR5OiBldmVudC5vZmZzZXRZIC0gNSxcblx0XHRcdHdpZHRoOiAxMCxcblx0XHRcdGhlaWdodDogMTBcblx0XHR9XG5cdH1cblx0XG5cdGdldFRvdWNoKGV2ZW50OiBUb3VjaEV2ZW50LCBnYW1lOiBGaXNrR2FtZSkge1xuXHRcdGNvbnN0IGNhbnZhc0JvdW5kcyA9IGdhbWUuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGNhbnZhc0JvdW5kcy5sZWZ0O1xuXHRcdGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGNhbnZhc0JvdW5kcy50b3A7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6ICh4IC8gZ2FtZS5zY2FsZSkgLSA1LFxuXHRcdFx0eTogKHkgLyBnYW1lLnNjYWxlKSAtIDUsXG5cdFx0XHR3aWR0aDogMTAsXG5cdFx0XHRoZWlnaHQ6IDEwXG5cdFx0fVxuXHR9XG5cdFxuXHRvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBjbGljayA9ICB0aGlzLmdldENsaWNrKGV2ZW50KTtcblxuXHRcdGxldCBjbGlja2VkOkludGVyYWN0YWJsZTtcblx0XHR0aGlzLmN1cnJlbnRTdGFnZS5pbnRlcmFjdG9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0aWYodGhpcy5zaW1wbGVDb2xsaXNpb25DaGVjayhjbGljayBhcyBHYW1lRW50aXR5LCBlbGVtZW50KSkge1xuXHRcdFx0XHRjbGlja2VkID0gZWxlbWVudDtcblx0XHRcdH1cblx0XHR9KTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFjbGlja2VkKXtcblx0XHRcdHRoaXMuY3VycmVudFN0YWdlLm9uQ2xpY2tRdWV1ZS5mb3JFYWNoKGZ1bmMgPT4ge1xuXHRcdFx0XHRmdW5jKHRoaXMpO1xuXHRcdFx0fSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2xpY2tlZC5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfVxuXHR9XG5cdFxuXHRvblRvdWNoKGV2ZW50OiBUb3VjaEV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMpO1xuXG5cdFx0bGV0IHRvdWNoZWQ6IEludGVyYWN0YWJsZTtcblx0XHR0aGlzLmN1cnJlbnRTdGFnZS5pbnRlcmFjdG9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0aWYodGhpcy5zaW1wbGVDb2xsaXNpb25DaGVjayh0b3VjaCBhcyBHYW1lRW50aXR5LCBlbGVtZW50KSkge1xuXHRcdFx0XHR0b3VjaGVkID0gZWxlbWVudDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmKCF0b3VjaGVkKXtcblx0XHRcdHRoaXMuY3VycmVudFN0YWdlLm9uQ2xpY2tRdWV1ZS5mb3JFYWNoKGZ1bmMgPT4ge1xuXHRcdFx0XHRmdW5jKHRoaXMpO1xuXHRcdFx0fSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdG91Y2hlZC5vblRvdWNoKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfVxuXHR9XG5cdFxuXHRiaW5kQ2xpY2soKSB7XG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cdFxuXHRjcmVhdGVNYWluQ2FudmFzKHNlbGVjdG9yOiBzdHJpbmcpIDogSFRNTENhbnZhc0VsZW1lbnQge1xuXHRcdGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRjb25zdCBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cdFx0Y2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcblx0XHRjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cdFx0cmV0dXJuIGNhbnZhcztcblx0fVxuXHRcblx0c2V0SW1hZ2VTbW9vdGhpbmcoc21vb3RoaW5nOiBib29sZWFuKSB7XG5cdFx0Ly8gdGhpcy5jdHgubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc21vb3RoaW5nO1xuXHRcdC8vIHRoaXMuY3R4LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHNtb290aGluZztcblx0XHR0aGlzLmN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzbW9vdGhpbmc7XG5cdH1cblx0XG5cdHJlbmRlcigpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHRcdHRoaXMuY3VycmVudFN0YWdlLnJlbmRlclF1ZXVlLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbmRlcih0aGlzLmN0eCk7XG5cdFx0fSk7XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0Y29sbGlzaW9uQ2hlY2soYTogR2FtZUVudGl0eSwgYjogR2FtZUVudGl0eSk6IGJvb2xlYW4gfCBhbnkge1xuXHRcdGlmKHRoaXMuY3VzdG9tQ29sbGlzaW9uICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jdXN0b21Db2xsaXNpb24oYSwgYik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnNpbXBsZUNvbGxpc2lvbkNoZWNrKGEsIGIpO1xuXHRcdH1cblx0fVxuXHRcblx0c2ltcGxlQ29sbGlzaW9uQ2hlY2soYTogR2FtZUVudGl0eSwgYjogR2FtZUVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGlmICgoYS54ID49IGIueCAmJiBhLnggPD0gYi54ICsgYi53aWR0aCkgfHxcblx0XHRcdChhLnggKyBhLndpZHRoID49IGIueCAmJiBhLnggKyBhLndpZHRoIDw9IGIueCArIGIud2lkdGgpKSB7XG5cdFx0XHRcdGlmICgoYS55ID49IGIueSAmJiBhLnkgPD0gYi55ICsgYi5oZWlnaHQpIHx8IFxuXHRcdFx0XHRcdFx0KGEueSArIGEuaGVpZ2h0ID49IGIueSAmJiBhLnkgKyBhLmhlaWdodCA8PSBiLnkgKyBiLmhlaWdodCkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRsb2dpYygpIHtcblx0XHR0aGlzLmN1cnJlbnRTdGFnZS5sb2dpY1F1ZXVlLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRlbGVtZW50LmxvZ2ljKHRoaXMpO1xuXHRcdH0pO1xuXHR9XG5cdFxufSIsIi8qIVxuICogIGhvd2xlci5qcyB2Mi4xLjJcbiAqICBob3dsZXJqcy5jb21cbiAqXG4gKiAgKGMpIDIwMTMtMjAxOSwgSmFtZXMgU2ltcHNvbiBvZiBHb2xkRmlyZSBTdHVkaW9zXG4gKiAgZ29sZGZpcmVzdHVkaW9zLmNvbVxuICpcbiAqICBNSVQgTGljZW5zZVxuICovXG5cbihmdW5jdGlvbigpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIEdsb2JhbCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGdsb2JhbCBjb250cm9sbGVyLiBBbGwgY29udGFpbmVkIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXBwbHlcbiAgICogdG8gYWxsIHNvdW5kcyB0aGF0IGFyZSBjdXJyZW50bHkgcGxheWluZyBvciB3aWxsIGJlIGluIHRoZSBmdXR1cmUuXG4gICAqL1xuICB2YXIgSG93bGVyR2xvYmFsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgZ2xvYmFsIEhvd2xlciBvYmplY3QuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gQ3JlYXRlIGEgZ2xvYmFsIElEIGNvdW50ZXIuXG4gICAgICBzZWxmLl9jb3VudGVyID0gMTAwMDtcblxuICAgICAgLy8gUG9vbCBvZiB1bmxvY2tlZCBIVE1MNSBBdWRpbyBvYmplY3RzLlxuICAgICAgc2VsZi5faHRtbDVBdWRpb1Bvb2wgPSBbXTtcbiAgICAgIHNlbGYuaHRtbDVQb29sU2l6ZSA9IDEwO1xuXG4gICAgICAvLyBJbnRlcm5hbCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fY29kZWNzID0ge307XG4gICAgICBzZWxmLl9ob3dscyA9IFtdO1xuICAgICAgc2VsZi5fbXV0ZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IDE7XG4gICAgICBzZWxmLl9jYW5QbGF5RXZlbnQgPSAnY2FucGxheXRocm91Z2gnO1xuICAgICAgc2VsZi5fbmF2aWdhdG9yID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpID8gd2luZG93Lm5hdmlnYXRvciA6IG51bGw7XG5cbiAgICAgIC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5tYXN0ZXJHYWluID0gbnVsbDtcbiAgICAgIHNlbGYubm9BdWRpbyA9IGZhbHNlO1xuICAgICAgc2VsZi51c2luZ1dlYkF1ZGlvID0gdHJ1ZTtcbiAgICAgIHNlbGYuYXV0b1N1c3BlbmQgPSB0cnVlO1xuICAgICAgc2VsZi5jdHggPSBudWxsO1xuXG4gICAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgYXV0byBhdWRpbyB1bmxvY2tlci5cbiAgICAgIHNlbGYuYXV0b1VubG9jayA9IHRydWU7XG5cbiAgICAgIC8vIFNldHVwIHRoZSB2YXJpb3VzIHN0YXRlIHZhbHVlcyBmb3IgZ2xvYmFsIHRyYWNraW5nLlxuICAgICAgc2VsZi5fc2V0dXAoKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIGdsb2JhbCB2b2x1bWUgZm9yIGFsbCBzb3VuZHMuXG4gICAgICogQHBhcmFtICB7RmxvYXR9IHZvbCBWb2x1bWUgZnJvbSAwLjAgdG8gMS4wLlxuICAgICAqIEByZXR1cm4ge0hvd2xlci9GbG9hdH0gICAgIFJldHVybnMgc2VsZiBvciBjdXJyZW50IHZvbHVtZS5cbiAgICAgKi9cbiAgICB2b2x1bWU6IGZ1bmN0aW9uKHZvbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcbiAgICAgIHZvbCA9IHBhcnNlRmxvYXQodm9sKTtcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBBdWRpb0NvbnRleHQgY3JlYXRlZCB5ZXQsIHJ1biB0aGUgc2V0dXAuXG4gICAgICBpZiAoIXNlbGYuY3R4KSB7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygdm9sICE9PSAndW5kZWZpbmVkJyAmJiB2b2wgPj0gMCAmJiB2b2wgPD0gMSkge1xuICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG5cbiAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGFueSBvZiB0aGUgbm9kZXMgaWYgd2UgYXJlIG11dGVkLlxuICAgICAgICBpZiAoc2VsZi5fbXV0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdXNpbmcgV2ViIEF1ZGlvLCB3ZSBqdXN0IG5lZWQgdG8gYWRqdXN0IHRoZSBtYXN0ZXIgZ2Fpbi5cbiAgICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICAgIHNlbGYubWFzdGVyR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYW5kIGNoYW5nZSB2b2x1bWUgZm9yIGFsbCBIVE1MNSBhdWRpbyBub2Rlcy5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2YgdGhlIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICAgICAgICB2YXIgaWRzID0gc2VsZi5faG93bHNbaV0uX2dldFNvdW5kSWRzKCk7XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBjaGFuZ2UgdGhlIHZvbHVtZXMuXG4gICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8aWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX2hvd2xzW2ldLl9zb3VuZEJ5SWQoaWRzW2pdKTtcblxuICAgICAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS52b2x1bWUgPSBzb3VuZC5fdm9sdW1lICogdm9sO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmLl92b2x1bWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBtdXRpbmcgYW5kIHVubXV0aW5nIGdsb2JhbGx5LlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IG11dGVkIElzIG11dGVkIG9yIG5vdC5cbiAgICAgKi9cbiAgICBtdXRlOiBmdW5jdGlvbihtdXRlZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBBdWRpb0NvbnRleHQgY3JlYXRlZCB5ZXQsIHJ1biB0aGUgc2V0dXAuXG4gICAgICBpZiAoIXNlbGYuY3R4KSB7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX211dGVkID0gbXV0ZWQ7XG5cbiAgICAgIC8vIFdpdGggV2ViIEF1ZGlvLCB3ZSBqdXN0IG5lZWQgdG8gbXV0ZSB0aGUgbWFzdGVyIGdhaW4uXG4gICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHNlbGYubWFzdGVyR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKG11dGVkID8gMCA6IHNlbGYuX3ZvbHVtZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbmQgbXV0ZSBhbGwgSFRNTDUgQXVkaW8gbm9kZXMuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgIHZhciBpZHMgPSBzZWxmLl9ob3dsc1tpXS5fZ2V0U291bmRJZHMoKTtcblxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBtYXJrIHRoZSBhdWRpbyBub2RlIGFzIG11dGVkLlxuICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX2hvd2xzW2ldLl9zb3VuZEJ5SWQoaWRzW2pdKTtcblxuICAgICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLm11dGVkID0gKG11dGVkKSA/IHRydWUgOiBzb3VuZC5fbXV0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmxvYWQgYW5kIGRlc3Ryb3kgYWxsIGN1cnJlbnRseSBsb2FkZWQgSG93bCBvYmplY3RzLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICB1bmxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgZm9yICh2YXIgaT1zZWxmLl9ob3dscy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIHNlbGYuX2hvd2xzW2ldLnVubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgQXVkaW9Db250ZXh0IHRvIG1ha2Ugc3VyZSBpdCBpcyBmdWxseSByZXNldC5cbiAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8gJiYgc2VsZi5jdHggJiYgdHlwZW9mIHNlbGYuY3R4LmNsb3NlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmN0eC5jbG9zZSgpO1xuICAgICAgICBzZWxmLmN0eCA9IG51bGw7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgY29kZWMgc3VwcG9ydCBvZiBzcGVjaWZpYyBleHRlbnNpb24uXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBleHQgQXVkaW8gZmlsZSBleHRlbnRpb24uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2RlY3M6IGZ1bmN0aW9uKGV4dCkge1xuICAgICAgcmV0dXJuICh0aGlzIHx8IEhvd2xlcikuX2NvZGVjc1tleHQucmVwbGFjZSgvXngtLywgJycpXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgdmFyaW91cyBzdGF0ZSB2YWx1ZXMgZm9yIGdsb2JhbCB0cmFja2luZy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3NldHVwOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBzdXNwZW5kL3Jlc3VtZSBzdGF0ZSBvZiB0aGUgQXVkaW9Db250ZXh0LlxuICAgICAgc2VsZi5zdGF0ZSA9IHNlbGYuY3R4ID8gc2VsZi5jdHguc3RhdGUgfHwgJ3N1c3BlbmRlZCcgOiAnc3VzcGVuZGVkJztcblxuICAgICAgLy8gQXV0b21hdGljYWxseSBiZWdpbiB0aGUgMzAtc2Vjb25kIHN1c3BlbmQgcHJvY2Vzc1xuICAgICAgc2VsZi5fYXV0b1N1c3BlbmQoKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYXVkaW8gaXMgYXZhaWxhYmxlLlxuICAgICAgaWYgKCFzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgLy8gTm8gYXVkaW8gaXMgYXZhaWxhYmxlIG9uIHRoaXMgc3lzdGVtIGlmIG5vQXVkaW8gaXMgc2V0IHRvIHRydWUuXG4gICAgICAgIGlmICh0eXBlb2YgQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gbmV3IEF1ZGlvKCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYW5wbGF5dGhyb3VnaCBldmVudCBpcyBhdmFpbGFibGUuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRlc3Qub25jYW5wbGF5dGhyb3VnaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fY2FuUGxheUV2ZW50ID0gJ2NhbnBsYXknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgc2VsZi5ub0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5ub0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUZXN0IHRvIG1ha2Ugc3VyZSBhdWRpbyBpc24ndCBkaXNhYmxlZCBpbiBJbnRlcm5ldCBFeHBsb3Jlci5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB0ZXN0ID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIGlmICh0ZXN0Lm11dGVkKSB7XG4gICAgICAgICAgc2VsZi5ub0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgLy8gQ2hlY2sgZm9yIHN1cHBvcnRlZCBjb2RlY3MuXG4gICAgICBpZiAoIXNlbGYubm9BdWRpbykge1xuICAgICAgICBzZWxmLl9zZXR1cENvZGVjcygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGJyb3dzZXIgc3VwcG9ydCBmb3IgdmFyaW91cyBjb2RlY3MgYW5kIGNhY2hlIHRoZSByZXN1bHRzLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfc2V0dXBDb2RlY3M6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcbiAgICAgIHZhciBhdWRpb1Rlc3QgPSBudWxsO1xuXG4gICAgICAvLyBNdXN0IHdyYXAgaW4gYSB0cnkvY2F0Y2ggYmVjYXVzZSBJRTExIGluIHNlcnZlciBtb2RlIHRocm93cyBhbiBlcnJvci5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1ZGlvVGVzdCA9ICh0eXBlb2YgQXVkaW8gIT09ICd1bmRlZmluZWQnKSA/IG5ldyBBdWRpbygpIDogbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdWRpb1Rlc3QgfHwgdHlwZW9mIGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1wZWdUZXN0ID0gYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCAnJyk7XG5cbiAgICAgIC8vIE9wZXJhIHZlcnNpb24gPDMzIGhhcyBtaXhlZCBNUDMgc3VwcG9ydCwgc28gd2UgbmVlZCB0byBjaGVjayBmb3IgYW5kIGJsb2NrIGl0LlxuICAgICAgdmFyIGNoZWNrT3BlcmEgPSBzZWxmLl9uYXZpZ2F0b3IgJiYgc2VsZi5fbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT1BSXFwvKFswLTZdLikvZyk7XG4gICAgICB2YXIgaXNPbGRPcGVyYSA9IChjaGVja09wZXJhICYmIHBhcnNlSW50KGNoZWNrT3BlcmFbMF0uc3BsaXQoJy8nKVsxXSwgMTApIDwgMzMpO1xuXG4gICAgICBzZWxmLl9jb2RlY3MgPSB7XG4gICAgICAgIG1wMzogISEoIWlzT2xkT3BlcmEgJiYgKG1wZWdUZXN0IHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXAzOycpLnJlcGxhY2UoL15ubyQvLCAnJykpKSxcbiAgICAgICAgbXBlZzogISFtcGVnVGVzdCxcbiAgICAgICAgb3B1czogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwib3B1c1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgb2dnOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG9nYTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICB3YXY6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGFhYzogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBjYWY6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LWNhZjsnKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBtNGE6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tNGE7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG1wNDogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LW1wNDsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2ViYTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2VibTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgZG9sYnk6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7IGNvZGVjcz1cImVjLTNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGZsYWM6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1mbGFjOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vZmxhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNvbWUgYnJvd3NlcnMvZGV2aWNlcyB3aWxsIG9ubHkgYWxsb3cgYXVkaW8gdG8gYmUgcGxheWVkIGFmdGVyIGEgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKiBBdHRlbXB0IHRvIGF1dG9tYXRpY2FsbHkgdW5sb2NrIGF1ZGlvIG9uIHRoZSBmaXJzdCB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqIENvbmNlcHQgZnJvbTogaHR0cDovL3BhdWxiYWthdXMuY29tL3R1dG9yaWFscy9odG1sNS93ZWItYXVkaW8tb24taW9zL1xuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfdW5sb2NrQXVkaW86IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gT25seSBydW4gdGhpcyBpZiBXZWIgQXVkaW8gaXMgc3VwcG9ydGVkIGFuZCBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHVubG9ja2VkLlxuICAgICAgaWYgKHNlbGYuX2F1ZGlvVW5sb2NrZWQgfHwgIXNlbGYuY3R4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fYXVkaW9VbmxvY2tlZCA9IGZhbHNlO1xuICAgICAgc2VsZi5hdXRvVW5sb2NrID0gZmFsc2U7XG5cbiAgICAgIC8vIFNvbWUgbW9iaWxlIGRldmljZXMvcGxhdGZvcm1zIGhhdmUgZGlzdG9ydGlvbiBpc3N1ZXMgd2hlbiBvcGVuaW5nL2Nsb3NpbmcgdGFicyBhbmQvb3Igd2ViIHZpZXdzLlxuICAgICAgLy8gQnVncyBpbiB0aGUgYnJvd3NlciAoZXNwZWNpYWxseSBNb2JpbGUgU2FmYXJpKSBjYW4gY2F1c2UgdGhlIHNhbXBsZVJhdGUgdG8gY2hhbmdlIGZyb20gNDQxMDAgdG8gNDgwMDAuXG4gICAgICAvLyBCeSBjYWxsaW5nIEhvd2xlci51bmxvYWQoKSwgd2UgY3JlYXRlIGEgbmV3IEF1ZGlvQ29udGV4dCB3aXRoIHRoZSBjb3JyZWN0IHNhbXBsZVJhdGUuXG4gICAgICBpZiAoIXNlbGYuX21vYmlsZVVubG9hZGVkICYmIHNlbGYuY3R4LnNhbXBsZVJhdGUgIT09IDQ0MTAwKSB7XG4gICAgICAgIHNlbGYuX21vYmlsZVVubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi51bmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2NyYXRjaCBidWZmZXIgZm9yIGVuYWJsaW5nIGlPUyB0byBkaXNwb3NlIG9mIHdlYiBhdWRpbyBidWZmZXJzIGNvcnJlY3RseSwgYXMgcGVyOlxuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDExOTY4NFxuICAgICAgc2VsZi5fc2NyYXRjaEJ1ZmZlciA9IHNlbGYuY3R4LmNyZWF0ZUJ1ZmZlcigxLCAxLCAyMjA1MCk7XG5cbiAgICAgIC8vIENhbGwgdGhpcyBtZXRob2Qgb24gdG91Y2ggc3RhcnQgdG8gY3JlYXRlIGFuZCBwbGF5IGEgYnVmZmVyLFxuICAgICAgLy8gdGhlbiBjaGVjayBpZiB0aGUgYXVkaW8gYWN0dWFsbHkgcGxheWVkIHRvIGRldGVybWluZSBpZlxuICAgICAgLy8gYXVkaW8gaGFzIG5vdyBiZWVuIHVubG9ja2VkIG9uIGlPUywgQW5kcm9pZCwgZXRjLlxuICAgICAgdmFyIHVubG9jayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcG9vbCBvZiB1bmxvY2tlZCBIVE1MNSBBdWRpbyBvYmplY3RzIHRoYXQgY2FuXG4gICAgICAgIC8vIGJlIHVzZWQgZm9yIHBsYXlpbmcgc291bmRzIHdpdGhvdXQgdXNlciBpbnRlcmFjdGlvbi4gSFRNTDVcbiAgICAgICAgLy8gQXVkaW8gb2JqZWN0cyBtdXN0IGJlIGluZGl2aWR1YWxseSB1bmxvY2tlZCwgYXMgb3Bwb3NlZFxuICAgICAgICAvLyB0byB0aGUgV2ViQXVkaW8gQVBJIHdoaWNoIG9ubHkgbmVlZHMgYSBzaW5nbGUgYWN0aXZhdGlvbi5cbiAgICAgICAgLy8gVGhpcyBtdXN0IG9jY3VyIGJlZm9yZSBXZWJBdWRpbyBzZXR1cCBvciB0aGUgc291cmNlLm9uZW5kZWRcbiAgICAgICAgLy8gZXZlbnQgd2lsbCBub3QgZmlyZS5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuaHRtbDVQb29sU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhdWRpb05vZGUgPSBuZXcgQXVkaW8oKTtcblxuICAgICAgICAgICAgLy8gTWFyayB0aGlzIEF1ZGlvIG9iamVjdCBhcyB1bmxvY2tlZCB0byBlbnN1cmUgaXQgY2FuIGdldCByZXR1cm5lZFxuICAgICAgICAgICAgLy8gdG8gdGhlIHVubG9ja2VkIHBvb2wgd2hlbiByZWxlYXNlZC5cbiAgICAgICAgICAgIGF1ZGlvTm9kZS5fdW5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGF1ZGlvIG5vZGUgdG8gdGhlIHBvb2wuXG4gICAgICAgICAgICBzZWxmLl9yZWxlYXNlSHRtbDVBdWRpbyhhdWRpb05vZGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFueSBhc3NpZ25lZCBhdWRpbyBub2RlcyBhbmQgdW5sb2NrIHRoZW0uXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgdW5sb2NrIHRoZSBhdWRpbyBub2Rlcy5cbiAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5faG93bHNbaV0uX3NvdW5kQnlJZChpZHNbal0pO1xuXG4gICAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSAmJiAhc291bmQuX25vZGUuX3VubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUuX3VubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5sb2FkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXggQW5kcm9pZCBjYW4gbm90IHBsYXkgaW4gc3VzcGVuZCBzdGF0ZS5cbiAgICAgICAgc2VsZi5fYXV0b1Jlc3VtZSgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBidWZmZXIuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWxmLmN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IHNlbGYuX3NjcmF0Y2hCdWZmZXI7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KHNlbGYuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvLyBQbGF5IHRoZSBlbXB0eSBidWZmZXIuXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlLnN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNvdXJjZS5ub3RlT24oMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGluZyByZXN1bWUoKSBvbiBhIHN0YWNrIGluaXRpYXRlZCBieSB1c2VyIGdlc3R1cmUgaXMgd2hhdCBhY3R1YWxseSB1bmxvY2tzIHRoZSBhdWRpbyBvbiBBbmRyb2lkIENocm9tZSA+PSA1NS5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzZWxmLmN0eC5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHVwIGEgdGltZW91dCB0byBjaGVjayB0aGF0IHdlIGFyZSB1bmxvY2tlZCBvbiB0aGUgbmV4dCBldmVudCBsb29wLlxuICAgICAgICBzb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNvdXJjZS5kaXNjb25uZWN0KDApO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSB1bmxvY2tlZCBzdGF0ZSBhbmQgcHJldmVudCB0aGlzIGNoZWNrIGZyb20gaGFwcGVuaW5nIGFnYWluLlxuICAgICAgICAgIHNlbGYuX2F1ZGlvVW5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b3VjaCBzdGFydCBsaXN0ZW5lci5cbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCB0cnVlKTtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmxvY2ssIHRydWUpO1xuXG4gICAgICAgICAgLy8gTGV0IGFsbCBzb3VuZHMga25vdyB0aGF0IGF1ZGlvIGhhcyBiZWVuIHVubG9ja2VkLlxuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VsZi5faG93bHNbaV0uX2VtaXQoJ3VubG9jaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGEgdG91Y2ggc3RhcnQgbGlzdGVuZXIgdG8gYXR0ZW1wdCBhbiB1bmxvY2sgaW4uXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdW5sb2NrLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdW5sb2NrLCB0cnVlKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBhbiB1bmxvY2tlZCBIVE1MNSBBdWRpbyBvYmplY3QgZnJvbSB0aGUgcG9vbC4gSWYgbm9uZSBhcmUgbGVmdCxcbiAgICAgKiByZXR1cm4gYSBuZXcgQXVkaW8gb2JqZWN0IGFuZCB0aHJvdyBhIHdhcm5pbmcuXG4gICAgICogQHJldHVybiB7QXVkaW99IEhUTUw1IEF1ZGlvIG9iamVjdC5cbiAgICAgKi9cbiAgICBfb2J0YWluSHRtbDVBdWRpbzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIG5leHQgb2JqZWN0IGZyb20gdGhlIHBvb2wgaWYgb25lIGV4aXN0cy5cbiAgICAgIGlmIChzZWxmLl9odG1sNUF1ZGlvUG9vbC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX2h0bWw1QXVkaW9Qb29sLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICAvLy5DaGVjayBpZiB0aGUgYXVkaW8gaXMgbG9ja2VkIGFuZCB0aHJvdyBhIHdhcm5pbmcuXG4gICAgICB2YXIgdGVzdFBsYXkgPSBuZXcgQXVkaW8oKS5wbGF5KCk7XG4gICAgICBpZiAodGVzdFBsYXkgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICh0ZXN0UGxheSBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIHRlc3RQbGF5LnRoZW4gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIHRlc3RQbGF5LmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSFRNTDUgQXVkaW8gcG9vbCBleGhhdXN0ZWQsIHJldHVybmluZyBwb3RlbnRpYWxseSBsb2NrZWQgYXVkaW8gb2JqZWN0LicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBBdWRpbygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gYWN0aXZhdGVkIEhUTUw1IEF1ZGlvIG9iamVjdCB0byB0aGUgcG9vbC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3JlbGVhc2VIdG1sNUF1ZGlvOiBmdW5jdGlvbihhdWRpbykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gRG9uJ3QgYWRkIGF1ZGlvIHRvIHRoZSBwb29sIGlmIHdlIGRvbid0IGtub3cgaWYgaXQgaGFzIGJlZW4gdW5sb2NrZWQuXG4gICAgICBpZiAoYXVkaW8uX3VubG9ja2VkKSB7XG4gICAgICAgIHNlbGYuX2h0bWw1QXVkaW9Qb29sLnB1c2goYXVkaW8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSBzdXNwZW5kIHRoZSBXZWIgQXVkaW8gQXVkaW9Db250ZXh0IGFmdGVyIG5vIHNvdW5kIGhhcyBwbGF5ZWQgZm9yIDMwIHNlY29uZHMuXG4gICAgICogVGhpcyBzYXZlcyBwcm9jZXNzaW5nL2VuZXJneSBhbmQgZml4ZXMgdmFyaW91cyBicm93c2VyLXNwZWNpZmljIGJ1Z3Mgd2l0aCBhdWRpbyBnZXR0aW5nIHN0dWNrLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfYXV0b1N1c3BlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXNlbGYuYXV0b1N1c3BlbmQgfHwgIXNlbGYuY3R4IHx8IHR5cGVvZiBzZWxmLmN0eC5zdXNwZW5kID09PSAndW5kZWZpbmVkJyB8fCAhSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBhbnkgc291bmRzIGFyZSBwbGF5aW5nLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8c2VsZi5faG93bHNbaV0uX3NvdW5kcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fc291bmRzW2pdLl9wYXVzZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIHNvdW5kIGhhcyBwbGF5ZWQgYWZ0ZXIgMzAgc2Vjb25kcywgc3VzcGVuZCB0aGUgY29udGV4dC5cbiAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghc2VsZi5hdXRvU3VzcGVuZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICAgIHNlbGYuc3RhdGUgPSAnc3VzcGVuZGluZyc7XG4gICAgICAgIHNlbGYuY3R4LnN1c3BlbmQoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RhdGUgPSAnc3VzcGVuZGVkJztcblxuICAgICAgICAgIGlmIChzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQ7XG4gICAgICAgICAgICBzZWxmLl9hdXRvUmVzdW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDMwMDAwKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgcmVzdW1lIHRoZSBXZWIgQXVkaW8gQXVkaW9Db250ZXh0IHdoZW4gYSBuZXcgc291bmQgaXMgcGxheWVkLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfYXV0b1Jlc3VtZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICghc2VsZi5jdHggfHwgdHlwZW9mIHNlbGYuY3R4LnJlc3VtZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4LnJlc3VtZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5zdGF0ZSA9ICdydW5uaW5nJztcblxuICAgICAgICAgIC8vIEVtaXQgdG8gYWxsIEhvd2xzIHRoYXQgdGhlIGF1ZGlvIGhhcyByZXN1bWVkLlxuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VsZi5faG93bHNbaV0uX2VtaXQoJ3Jlc3VtZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGYuX3N1c3BlbmRUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3N1c3BlbmRpbmcnKSB7XG4gICAgICAgIHNlbGYuX3Jlc3VtZUFmdGVyU3VzcGVuZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZXR1cCB0aGUgZ2xvYmFsIGF1ZGlvIGNvbnRyb2xsZXIuXG4gIHZhciBIb3dsZXIgPSBuZXcgSG93bGVyR2xvYmFsKCk7XG5cbiAgLyoqIEdyb3VwIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdWRpbyBncm91cCBjb250cm9sbGVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbyBQYXNzZWQgaW4gcHJvcGVydGllcyBmb3IgdGhpcyBncm91cC5cbiAgICovXG4gIHZhciBIb3dsID0gZnVuY3Rpb24obykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIG5vIHNvdXJjZSBpcyBwcm92aWRlZC5cbiAgICBpZiAoIW8uc3JjIHx8IG8uc3JjLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5lcnJvcignQW4gYXJyYXkgb2Ygc291cmNlIGZpbGVzIG11c3QgYmUgcGFzc2VkIHdpdGggYW55IG5ldyBIb3dsLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaW5pdChvKTtcbiAgfTtcbiAgSG93bC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBIb3dsIGdyb3VwIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG8gUGFzc2VkIGluIHByb3BlcnRpZXMgZm9yIHRoaXMgZ3JvdXAuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFIb3dsZXIuY3R4KSB7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9hdXRvcGxheSA9IG8uYXV0b3BsYXkgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9mb3JtYXQgPSAodHlwZW9mIG8uZm9ybWF0ICE9PSAnc3RyaW5nJykgPyBvLmZvcm1hdCA6IFtvLmZvcm1hdF07XG4gICAgICBzZWxmLl9odG1sNSA9IG8uaHRtbDUgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9tdXRlZCA9IG8ubXV0ZSB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX2xvb3AgPSBvLmxvb3AgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9wb29sID0gby5wb29sIHx8IDU7XG4gICAgICBzZWxmLl9wcmVsb2FkID0gKHR5cGVvZiBvLnByZWxvYWQgPT09ICdib29sZWFuJykgPyBvLnByZWxvYWQgOiB0cnVlO1xuICAgICAgc2VsZi5fcmF0ZSA9IG8ucmF0ZSB8fCAxO1xuICAgICAgc2VsZi5fc3ByaXRlID0gby5zcHJpdGUgfHwge307XG4gICAgICBzZWxmLl9zcmMgPSAodHlwZW9mIG8uc3JjICE9PSAnc3RyaW5nJykgPyBvLnNyYyA6IFtvLnNyY107XG4gICAgICBzZWxmLl92b2x1bWUgPSBvLnZvbHVtZSAhPT0gdW5kZWZpbmVkID8gby52b2x1bWUgOiAxO1xuICAgICAgc2VsZi5feGhyV2l0aENyZWRlbnRpYWxzID0gby54aHJXaXRoQ3JlZGVudGlhbHMgfHwgZmFsc2U7XG5cbiAgICAgIC8vIFNldHVwIGFsbCBvdGhlciBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IDA7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICd1bmxvYWRlZCc7XG4gICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgIHNlbGYuX2VuZFRpbWVycyA9IHt9O1xuICAgICAgc2VsZi5fcXVldWUgPSBbXTtcbiAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG5cbiAgICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIHNlbGYuX29uZW5kID0gby5vbmVuZCA/IFt7Zm46IG8ub25lbmR9XSA6IFtdO1xuICAgICAgc2VsZi5fb25mYWRlID0gby5vbmZhZGUgPyBbe2ZuOiBvLm9uZmFkZX1dIDogW107XG4gICAgICBzZWxmLl9vbmxvYWQgPSBvLm9ubG9hZCA/IFt7Zm46IG8ub25sb2FkfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ubG9hZGVycm9yID0gby5vbmxvYWRlcnJvciA/IFt7Zm46IG8ub25sb2FkZXJyb3J9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wbGF5ZXJyb3IgPSBvLm9ucGxheWVycm9yID8gW3tmbjogby5vbnBsYXllcnJvcn1dIDogW107XG4gICAgICBzZWxmLl9vbnBhdXNlID0gby5vbnBhdXNlID8gW3tmbjogby5vbnBhdXNlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGxheSA9IG8ub25wbGF5ID8gW3tmbjogby5vbnBsYXl9XSA6IFtdO1xuICAgICAgc2VsZi5fb25zdG9wID0gby5vbnN0b3AgPyBbe2ZuOiBvLm9uc3RvcH1dIDogW107XG4gICAgICBzZWxmLl9vbm11dGUgPSBvLm9ubXV0ZSA/IFt7Zm46IG8ub25tdXRlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29udm9sdW1lID0gby5vbnZvbHVtZSA/IFt7Zm46IG8ub252b2x1bWV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25yYXRlID0gby5vbnJhdGUgPyBbe2ZuOiBvLm9ucmF0ZX1dIDogW107XG4gICAgICBzZWxmLl9vbnNlZWsgPSBvLm9uc2VlayA/IFt7Zm46IG8ub25zZWVrfV0gOiBbXTtcbiAgICAgIHNlbGYuX29udW5sb2NrID0gby5vbnVubG9jayA/IFt7Zm46IG8ub251bmxvY2t9XSA6IFtdO1xuICAgICAgc2VsZi5fb25yZXN1bWUgPSBbXTtcblxuICAgICAgLy8gV2ViIEF1ZGlvIG9yIEhUTUw1IEF1ZGlvP1xuICAgICAgc2VsZi5fd2ViQXVkaW8gPSBIb3dsZXIudXNpbmdXZWJBdWRpbyAmJiAhc2VsZi5faHRtbDU7XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgdHJ5IHRvIGVuYWJsZSBhdWRpby5cbiAgICAgIGlmICh0eXBlb2YgSG93bGVyLmN0eCAhPT0gJ3VuZGVmaW5lZCcgJiYgSG93bGVyLmN0eCAmJiBIb3dsZXIuYXV0b1VubG9jaykge1xuICAgICAgICBIb3dsZXIuX3VubG9ja0F1ZGlvKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhpcyBIb3dsIGdyb3VwIGluIHRoZSBnbG9iYWwgY29udHJvbGxlci5cbiAgICAgIEhvd2xlci5faG93bHMucHVzaChzZWxmKTtcblxuICAgICAgLy8gSWYgdGhleSBzZWxlY3RlZCBhdXRvcGxheSwgYWRkIGEgcGxheSBldmVudCB0byB0aGUgbG9hZCBxdWV1ZS5cbiAgICAgIGlmIChzZWxmLl9hdXRvcGxheSkge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BsYXknLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIHRoZSBzb3VyY2UgZmlsZSB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAgICAgIGlmIChzZWxmLl9wcmVsb2FkKSB7XG4gICAgICAgIHNlbGYubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgYXVkaW8gZmlsZS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdXJsID0gbnVsbDtcblxuICAgICAgLy8gSWYgbm8gYXVkaW8gaXMgYXZhaWxhYmxlLCBxdWl0IGltbWVkaWF0ZWx5LlxuICAgICAgaWYgKEhvd2xlci5ub0F1ZGlvKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdObyBhdWRpbyBzdXBwb3J0LicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSBvdXIgc291cmNlIGlzIGluIGFuIGFycmF5LlxuICAgICAgaWYgKHR5cGVvZiBzZWxmLl9zcmMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNlbGYuX3NyYyA9IFtzZWxmLl9zcmNdO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNvdXJjZXMgYW5kIHBpY2sgdGhlIGZpcnN0IG9uZSB0aGF0IGlzIGNvbXBhdGlibGUuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBleHQsIHN0cjtcblxuICAgICAgICBpZiAoc2VsZi5fZm9ybWF0ICYmIHNlbGYuX2Zvcm1hdFtpXSkge1xuICAgICAgICAgIC8vIElmIGFuIGV4dGVuc2lvbiB3YXMgc3BlY2lmaWVkLCB1c2UgdGhhdCBpbnN0ZWFkLlxuICAgICAgICAgIGV4dCA9IHNlbGYuX2Zvcm1hdFtpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdXJjZSBpcyBhIHN0cmluZy5cbiAgICAgICAgICBzdHIgPSBzZWxmLl9zcmNbaV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm9uLXN0cmluZyBmb3VuZCBpbiBzZWxlY3RlZCBhdWRpbyBzb3VyY2VzIC0gaWdub3JpbmcuJyk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBmaWxlIGV4dGVuc2lvbiBmcm9tIHRoZSBVUkwgb3IgYmFzZTY0IGRhdGEgVVJJLlxuICAgICAgICAgIGV4dCA9IC9eZGF0YTphdWRpb1xcLyhbXjssXSspOy9pLmV4ZWMoc3RyKTtcbiAgICAgICAgICBpZiAoIWV4dCkge1xuICAgICAgICAgICAgZXh0ID0gL1xcLihbXi5dKykkLy5leGVjKHN0ci5zcGxpdCgnPycsIDEpWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICBleHQgPSBleHRbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2cgYSB3YXJuaW5nIGlmIG5vIGV4dGVuc2lvbiB3YXMgZm91bmQuXG4gICAgICAgIGlmICghZXh0KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdObyBmaWxlIGV4dGVuc2lvbiB3YXMgZm91bmQuIENvbnNpZGVyIHVzaW5nIHRoZSBcImZvcm1hdFwiIHByb3BlcnR5IG9yIHNwZWNpZnkgYW4gZXh0ZW5zaW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBleHRlbnNpb24gaXMgYXZhaWxhYmxlLlxuICAgICAgICBpZiAoZXh0ICYmIEhvd2xlci5jb2RlY3MoZXh0KSkge1xuICAgICAgICAgIHVybCA9IHNlbGYuX3NyY1tpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm8gY29kZWMgc3VwcG9ydCBmb3Igc2VsZWN0ZWQgYXVkaW8gc291cmNlcy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9zcmMgPSB1cmw7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICdsb2FkaW5nJztcblxuICAgICAgLy8gSWYgdGhlIGhvc3RpbmcgcGFnZSBpcyBIVFRQUyBhbmQgdGhlIHNvdXJjZSBpc24ndCxcbiAgICAgIC8vIGRyb3AgZG93biB0byBIVE1MNSBBdWRpbyB0byBhdm9pZCBNaXhlZCBDb250ZW50IGVycm9ycy5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonICYmIHVybC5zbGljZSgwLCA1KSA9PT0gJ2h0dHA6Jykge1xuICAgICAgICBzZWxmLl9odG1sNSA9IHRydWU7XG4gICAgICAgIHNlbGYuX3dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBzb3VuZCBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgcG9vbC5cbiAgICAgIG5ldyBTb3VuZChzZWxmKTtcblxuICAgICAgLy8gTG9hZCBhbmQgZGVjb2RlIHRoZSBhdWRpbyBkYXRhIGZvciBwbGF5YmFjay5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICBsb2FkQnVmZmVyKHNlbGYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGxheSBhIHNvdW5kIG9yIHJlc3VtZSBwcmV2aW91cyBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmcvTnVtYmVyfSBzcHJpdGUgICBTcHJpdGUgbmFtZSBmb3Igc3ByaXRlIHBsYXliYWNrIG9yIHNvdW5kIGlkIHRvIGNvbnRpbnVlIHByZXZpb3VzLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGludGVybmFsIEludGVybmFsIFVzZTogdHJ1ZSBwcmV2ZW50cyBldmVudCBmaXJpbmcuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICBTb3VuZCBJRC5cbiAgICAgKi9cbiAgICBwbGF5OiBmdW5jdGlvbihzcHJpdGUsIGludGVybmFsKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgaWQgPSBudWxsO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgYSBzcHJpdGUsIHNvdW5kIGlkIG9yIG5vdGhpbmcgd2FzIHBhc3NlZFxuICAgICAgaWYgKHR5cGVvZiBzcHJpdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlkID0gc3ByaXRlO1xuICAgICAgICBzcHJpdGUgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3ByaXRlID09PSAnc3RyaW5nJyAmJiBzZWxmLl9zdGF0ZSA9PT0gJ2xvYWRlZCcgJiYgIXNlbGYuX3Nwcml0ZVtzcHJpdGVdKSB7XG4gICAgICAgIC8vIElmIHRoZSBwYXNzZWQgc3ByaXRlIGRvZXNuJ3QgZXhpc3QsIGRvIG5vdGhpbmcuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3ByaXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgc291bmQgc3ByaXRlIChwbGF5cyB0aGUgZnVsbCBhdWRpbyBsZW5ndGgpLlxuICAgICAgICBzcHJpdGUgPSAnX19kZWZhdWx0JztcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNpbmdsZSBwYXVzZWQgc291bmQgdGhhdCBpc24ndCBlbmRlZC4gXG4gICAgICAgIC8vIElmIHRoZXJlIGlzLCBwbGF5IHRoYXQgc291bmQuIElmIG5vdCwgY29udGludWUgYXMgdXN1YWwuICBcbiAgICAgICAgaWYgKCFzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX3BhdXNlZCAmJiAhc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbaV0uX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICAgIHNwcml0ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBzZWxlY3RlZCBub2RlLCBvciBnZXQgb25lIGZyb20gdGhlIHBvb2wuXG4gICAgICB2YXIgc291bmQgPSBpZCA/IHNlbGYuX3NvdW5kQnlJZChpZCkgOiBzZWxmLl9pbmFjdGl2ZVNvdW5kKCk7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nLlxuICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0IHRoZSBzcHJpdGUgZGVmaW5pdGlvbi5cbiAgICAgIGlmIChpZCAmJiAhc3ByaXRlKSB7XG4gICAgICAgIHNwcml0ZSA9IHNvdW5kLl9zcHJpdGUgfHwgJ19fZGVmYXVsdCc7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCB3ZSBtdXN0IHdhaXQgdG8gZ2V0IHRoZSBhdWRpbydzIGR1cmF0aW9uLlxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHdhaXQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJ1biBpbnRvIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgICAvLyB0aGUgb3JkZXIgb2YgZnVuY3Rpb24gY2FsbHMuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIC8vIFNldCB0aGUgc3ByaXRlIHZhbHVlIG9uIHRoaXMgc291bmQuXG4gICAgICAgIHNvdW5kLl9zcHJpdGUgPSBzcHJpdGU7XG5cbiAgICAgICAgLy8gTWFyayB0aGlzIHNvdW5kIGFzIG5vdCBlbmRlZCBpbiBjYXNlIGFub3RoZXIgc291bmQgaXMgcGxheWVkIGJlZm9yZSB0aGlzIG9uZSBsb2Fkcy5cbiAgICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBzb3VuZCB0byB0aGUgcXVldWUgdG8gYmUgcGxheWVkIG9uIGxvYWQuXG4gICAgICAgIHZhciBzb3VuZElkID0gc291bmQuX2lkO1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BsYXknLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoc291bmRJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc291bmRJZDtcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgcGxheSB0aGUgc291bmQgaWYgYW4gaWQgd2FzIHBhc3NlZCBhbmQgaXQgaXMgYWxyZWFkeSBwbGF5aW5nLlxuICAgICAgaWYgKGlkICYmICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBsYXkgZXZlbnQsIGluIG9yZGVyIHRvIGtlZXAgaXRlcmF0aW5nIHRocm91Z2ggcXVldWUuXG4gICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoJ3BsYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VuZC5faWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgQXVkaW9Db250ZXh0IGlzbid0IHN1c3BlbmRlZCwgYW5kIHJlc3VtZSBpdCBpZiBpdCBpcy5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICBIb3dsZXIuX2F1dG9SZXN1bWUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBsb25nIHRvIHBsYXkgZm9yIGFuZCB3aGVyZSB0byBzdGFydCBwbGF5aW5nLlxuICAgICAgdmFyIHNlZWsgPSBNYXRoLm1heCgwLCBzb3VuZC5fc2VlayA+IDAgPyBzb3VuZC5fc2VlayA6IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdIC8gMTAwMCk7XG4gICAgICB2YXIgZHVyYXRpb24gPSBNYXRoLm1heCgwLCAoKHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMV0pIC8gMTAwMCkgLSBzZWVrKTtcbiAgICAgIHZhciB0aW1lb3V0ID0gKGR1cmF0aW9uICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG4gICAgICB2YXIgc3RhcnQgPSBzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSAvIDEwMDA7XG4gICAgICB2YXIgc3RvcCA9IChzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzFdKSAvIDEwMDA7XG4gICAgICB2YXIgbG9vcCA9ICEhKHNvdW5kLl9sb29wIHx8IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzJdKTtcbiAgICAgIHNvdW5kLl9zcHJpdGUgPSBzcHJpdGU7XG5cbiAgICAgIC8vIE1hcmsgdGhlIHNvdW5kIGFzIGVuZGVkIGluc3RhbnRseSBzbyB0aGF0IHRoaXMgYXN5bmMgcGxheWJhY2tcbiAgICAgIC8vIGRvZXNuJ3QgZ2V0IGdyYWJiZWQgYnkgYW5vdGhlciBjYWxsIHRvIHBsYXkgd2hpbGUgdGhpcyBvbmUgd2FpdHMgdG8gc3RhcnQuXG4gICAgICBzb3VuZC5fZW5kZWQgPSBmYWxzZTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBzb3VuZC5cbiAgICAgIHZhciBzZXRQYXJhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc291bmQuX3BhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNlZWs7XG4gICAgICAgIHNvdW5kLl9zdGFydCA9IHN0YXJ0O1xuICAgICAgICBzb3VuZC5fc3RvcCA9IHN0b3A7XG4gICAgICAgIHNvdW5kLl9sb29wID0gbG9vcDtcbiAgICAgIH07XG5cbiAgICAgIC8vIEVuZCB0aGUgc291bmQgaW5zdGFudGx5IGlmIHNlZWsgaXMgYXQgdGhlIGVuZC5cbiAgICAgIGlmIChzZWVrID49IHN0b3ApIHtcbiAgICAgICAgc2VsZi5fZW5kZWQoc291bmQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJlZ2luIHRoZSBhY3R1YWwgcGxheWJhY2suXG4gICAgICB2YXIgbm9kZSA9IHNvdW5kLl9ub2RlO1xuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIEZpcmUgdGhpcyB3aGVuIHRoZSBzb3VuZCBpcyByZWFkeSB0byBwbGF5IHRvIGJlZ2luIFdlYiBBdWRpbyBwbGF5YmFjay5cbiAgICAgICAgdmFyIHBsYXlXZWJBdWRpbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgc2V0UGFyYW1zKCk7XG4gICAgICAgICAgc2VsZi5fcmVmcmVzaEJ1ZmZlcihzb3VuZCk7XG5cbiAgICAgICAgICAvLyBTZXR1cCB0aGUgcGxheWJhY2sgcGFyYW1zLlxuICAgICAgICAgIHZhciB2b2wgPSAoc291bmQuX211dGVkIHx8IHNlbGYuX211dGVkKSA/IDAgOiBzb3VuZC5fdm9sdW1lO1xuICAgICAgICAgIG5vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgIHNvdW5kLl9wbGF5U3RhcnQgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgLy8gUGxheSB0aGUgc291bmQgdXNpbmcgdGhlIHN1cHBvcnRlZCBtZXRob2QuXG4gICAgICAgICAgaWYgKHR5cGVvZiBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHNvdW5kLl9sb29wID8gbm9kZS5idWZmZXJTb3VyY2Uubm90ZUdyYWluT24oMCwgc2VlaywgODY0MDApIDogbm9kZS5idWZmZXJTb3VyY2Uubm90ZUdyYWluT24oMCwgc2VlaywgZHVyYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzb3VuZC5fbG9vcCA/IG5vZGUuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHNlZWssIDg2NDAwKSA6IG5vZGUuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHNlZWssIGR1cmF0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGFydCBhIG5ldyB0aW1lciBpZiBub25lIGlzIHByZXNlbnQuXG4gICAgICAgICAgaWYgKHRpbWVvdXQgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoSG93bGVyLnN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgICAgICBwbGF5V2ViQXVkaW8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG5cbiAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgYXVkaW8gY29udGV4dCB0byByZXN1bWUgYmVmb3JlIHBsYXlpbmcuXG4gICAgICAgICAgc2VsZi5vbmNlKCdyZXN1bWUnLCBwbGF5V2ViQXVkaW8pO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIHRoZSBlbmQgdGltZXIuXG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJlIHRoaXMgd2hlbiB0aGUgc291bmQgaXMgcmVhZHkgdG8gcGxheSB0byBiZWdpbiBIVE1MNSBBdWRpbyBwbGF5YmFjay5cbiAgICAgICAgdmFyIHBsYXlIdG1sNSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG5vZGUuY3VycmVudFRpbWUgPSBzZWVrO1xuICAgICAgICAgIG5vZGUubXV0ZWQgPSBzb3VuZC5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQgfHwgSG93bGVyLl9tdXRlZCB8fCBub2RlLm11dGVkO1xuICAgICAgICAgIG5vZGUudm9sdW1lID0gc291bmQuX3ZvbHVtZSAqIEhvd2xlci52b2x1bWUoKTtcbiAgICAgICAgICBub2RlLnBsYXliYWNrUmF0ZSA9IHNvdW5kLl9yYXRlO1xuXG4gICAgICAgICAgLy8gU29tZSBicm93c2VycyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoaXMgaXMgY2FsbGVkIHdpdGhvdXQgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHBsYXkgPSBub2RlLnBsYXkoKTtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydCBvbGRlciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgcHJvbWlzZXMsIGFuZCB0aHVzIGRvbid0IGhhdmUgdGhpcyBpc3N1ZS5cbiAgICAgICAgICAgIGlmIChwbGF5ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAocGxheSBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIHBsYXkudGhlbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgLy8gSW1wbGVtZW50cyBhIGxvY2sgdG8gcHJldmVudCBET01FeGNlcHRpb246IFRoZSBwbGF5KCkgcmVxdWVzdCB3YXMgaW50ZXJydXB0ZWQgYnkgYSBjYWxsIHRvIHBhdXNlKCkuXG4gICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBTZXQgcGFyYW0gdmFsdWVzIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICBzZXRQYXJhbXMoKTtcblxuICAgICAgICAgICAgICAvLyBSZWxlYXNlcyB0aGUgbG9jayBhbmQgZXhlY3V0ZXMgcXVldWVkIGFjdGlvbnMuXG4gICAgICAgICAgICAgIHBsYXlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBub2RlLl91bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5ZXJyb3InLCBzb3VuZC5faWQsICdQbGF5YmFjayB3YXMgdW5hYmxlIHRvIHN0YXJ0LiBUaGlzIGlzIG1vc3QgY29tbW9ubHkgYW4gaXNzdWUgJyArXG4gICAgICAgICAgICAgICAgICAgICdvbiBtb2JpbGUgZGV2aWNlcyBhbmQgQ2hyb21lIHdoZXJlIHBsYXliYWNrIHdhcyBub3Qgd2l0aGluIGEgdXNlciBpbnRlcmFjdGlvbi4nKTtcblxuICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGVuZGVkIGFuZCBwYXVzZWQgdmFsdWVzLlxuICAgICAgICAgICAgICAgICAgc291bmQuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2V0UGFyYW1zKCk7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dGluZyByYXRlIGJlZm9yZSBwbGF5aW5nIHdvbid0IHdvcmsgaW4gSUUsIHNvIHdlIHNldCBpdCBhZ2FpbiBoZXJlLlxuICAgICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSBzb3VuZC5fcmF0ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIG5vZGUgaXMgc3RpbGwgcGF1c2VkLCB0aGVuIHdlIGNhbiBhc3N1bWUgdGhlcmUgd2FzIGEgcGxheWJhY2sgaXNzdWUuXG4gICAgICAgICAgICBpZiAobm9kZS5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheWVycm9yJywgc291bmQuX2lkLCAnUGxheWJhY2sgd2FzIHVuYWJsZSB0byBzdGFydC4gVGhpcyBpcyBtb3N0IGNvbW1vbmx5IGFuIGlzc3VlICcgK1xuICAgICAgICAgICAgICAgICdvbiBtb2JpbGUgZGV2aWNlcyBhbmQgQ2hyb21lIHdoZXJlIHBsYXliYWNrIHdhcyBub3Qgd2l0aGluIGEgdXNlciBpbnRlcmFjdGlvbi4nKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXR1cCB0aGUgZW5kIHRpbWVyIG9uIHNwcml0ZXMgb3IgbGlzdGVuIGZvciB0aGUgZW5kZWQgZXZlbnQuXG4gICAgICAgICAgICBpZiAoc3ByaXRlICE9PSAnX19kZWZhdWx0JyB8fCBzb3VuZC5fbG9vcCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIGVuZGVkIG9uIHRoaXMgYXVkaW8gbm9kZS5cbiAgICAgICAgICAgICAgICBzZWxmLl9lbmRlZChzb3VuZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBzdHJlYW1pbmcgYXVkaW8sIG1ha2Ugc3VyZSB0aGUgc3JjIGlzIHNldCBhbmQgbG9hZCBhZ2Fpbi5cbiAgICAgICAgaWYgKG5vZGUuc3JjID09PSAnZGF0YTphdWRpby93YXY7YmFzZTY0LFVrbEdSaWdBQUFCWFFWWkZabTEwSUJJQUFBQUJBQUVBUkt3QUFJaFlBUUFDQUJBQUFBQmtZWFJoQWdBQUFBRUEnKSB7XG4gICAgICAgICAgbm9kZS5zcmMgPSBzZWxmLl9zcmM7XG4gICAgICAgICAgbm9kZS5sb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGF5IGltbWVkaWF0ZWx5IGlmIHJlYWR5LCBvciB3YWl0IGZvciB0aGUgJ2NhbnBsYXl0aHJvdWdoJ2UgdmVudC5cbiAgICAgICAgdmFyIGxvYWRlZE5vUmVhZHlTdGF0ZSA9ICh3aW5kb3cgJiYgd2luZG93LmVqZWN0YSkgfHwgKCFub2RlLnJlYWR5U3RhdGUgJiYgSG93bGVyLl9uYXZpZ2F0b3IuaXNDb2Nvb25KUyk7XG4gICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPj0gMyB8fCBsb2FkZWROb1JlYWR5U3RhdGUpIHtcbiAgICAgICAgICBwbGF5SHRtbDUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHBsYXliYWNrLlxuICAgICAgICAgICAgcGxheUh0bWw1KCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICAgICAgICAvLyBDYW5jZWwgdGhlIGVuZCB0aW1lci5cbiAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvdW5kLl9pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgcGxheWJhY2sgYW5kIHNhdmUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRCAoZW1wdHkgdG8gcGF1c2UgYWxsIGluIGdyb3VwKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIHBhdXNlOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCBvciBhIHBsYXkoKSBwcm9taXNlIGlzIHBlbmRpbmcsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBwYXVzZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAncGF1c2UnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBhdXNlKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBwYXVzZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBlbmQgdGltZXIuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRzW2ldKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQgJiYgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNlbGYuc2VlayhpZHNbaV0pO1xuICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdW5kIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGlmICghc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5ub3RlT2ZmKDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHNvdW5kLl9ub2RlLmR1cmF0aW9uKSB8fCBzb3VuZC5fbm9kZS5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIHRoZSBwYXVzZSBldmVudCwgdW5sZXNzIGB0cnVlYCBpcyBwYXNzZWQgYXMgdGhlIDJuZCBhcmd1bWVudC5cbiAgICAgICAgaWYgKCFhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBzZWxmLl9lbWl0KCdwYXVzZScsIHNvdW5kID8gc291bmQuX2lkIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3AgcGxheWJhY2sgYW5kIHJlc2V0IHRvIHN0YXJ0LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIElEIChlbXB0eSB0byBzdG9wIGFsbCBpbiBncm91cCkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaW50ZXJuYWwgSW50ZXJuYWwgVXNlOiB0cnVlIHByZXZlbnRzIGV2ZW50IGZpcmluZy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uKGlkLCBpbnRlcm5hbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHN0b3Agd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3N0b3AnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnN0b3AoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIHN0b3BwZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBlbmQgdGltZXIuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRzW2ldKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgICAgc291bmQuX2VuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc291bmQncyBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uubm90ZU9mZigwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AoMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgICAgICAgICAgc2VsZi5fY2xlYW5CdWZmZXIoc291bmQuX25vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikgfHwgc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBhdXNlKCk7XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGxpdmUgc3RyZWFtLCBzdG9wIGRvd25sb2FkIG9uY2UgdGhlIGF1ZGlvIGlzIHN0b3BwZWQuXG4gICAgICAgICAgICAgIGlmIChzb3VuZC5fbm9kZS5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jbGVhclNvdW5kKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3N0b3AnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTXV0ZS91bm11dGUgYSBzaW5nbGUgc291bmQgb3IgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZWQgU2V0IHRvIHRydWUgdG8gbXV0ZSBhbmQgZmFsc2UgdG8gdW5tdXRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICAgVGhlIHNvdW5kIElEIHRvIHVwZGF0ZSAob21pdCB0byBtdXRlL3VubXV0ZSBhbGwpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgbXV0ZTogZnVuY3Rpb24obXV0ZWQsIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gbXV0ZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdtdXRlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5tdXRlKG11dGVkLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXBwbHlpbmcgbXV0ZS91bm11dGUgdG8gYWxsIHNvdW5kcywgdXBkYXRlIHRoZSBncm91cCdzIHZhbHVlLlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtdXRlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgc2VsZi5fbXV0ZWQgPSBtdXRlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fbXV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgbXV0ZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIHNvdW5kLl9tdXRlZCA9IG11dGVkO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIGFjdGl2ZSBmYWRlIGFuZCBzZXQgdGhlIHZvbHVtZSB0byB0aGUgZW5kIHZhbHVlLlxuICAgICAgICAgIGlmIChzb3VuZC5faW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKG11dGVkID8gMCA6IHNvdW5kLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLm11dGVkID0gSG93bGVyLl9tdXRlZCA/IHRydWUgOiBtdXRlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9lbWl0KCdtdXRlJywgc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgdm9sdW1lIG9mIHRoaXMgc291bmQgb3Igb2YgdGhlIEhvd2wgZ3JvdXAuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHZvbHVtZSgpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3Mgdm9sdW1lIHZhbHVlLlxuICAgICAqICAgdm9sdW1lKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgdm9sdW1lLlxuICAgICAqICAgdm9sdW1lKHZvbCkgLT4gU2V0cyB0aGUgdm9sdW1lIG9mIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgdm9sdW1lKHZvbCwgaWQpIC0+IFNldHMgdGhlIHZvbHVtZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciBjdXJyZW50IHZvbHVtZS5cbiAgICAgKi9cbiAgICB2b2x1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgdm9sLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGdyb3Vwcycgdm9sdW1lLlxuICAgICAgICByZXR1cm4gc2VsZi5fdm9sdW1lO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSB8fCBhcmdzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHZvbHVtZS5cbiAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGlkcy5pbmRleE9mKGFyZ3NbMF0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1swXSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZvbCA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPj0gMikge1xuICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgb3IgcmV0dXJuIHRoZSBjdXJyZW50IHZvbHVtZS5cbiAgICAgIHZhciBzb3VuZDtcbiAgICAgIGlmICh0eXBlb2Ygdm9sICE9PSAndW5kZWZpbmVkJyAmJiB2b2wgPj0gMCAmJiB2b2wgPD0gMSkge1xuICAgICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSB2b2x1bWUgd2hlbiBjYXBhYmxlLlxuICAgICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiAndm9sdW1lJyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYudm9sdW1lLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwIHZvbHVtZS5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb25lIG9yIGFsbCB2b2x1bWVzLlxuICAgICAgICBpZCA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZFtpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSB2b2w7XG5cbiAgICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgICBpZiAoIWFyZ3NbMl0pIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUudm9sdW1lID0gdm9sICogSG93bGVyLnZvbHVtZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCd2b2x1bWUnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQgPSBpZCA/IHNlbGYuX3NvdW5kQnlJZChpZCkgOiBzZWxmLl9zb3VuZHNbMF07XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl92b2x1bWUgOiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmFkZSBhIGN1cnJlbnRseSBwbGF5aW5nIHNvdW5kIGJldHdlZW4gdHdvIHZvbHVtZXMgKGlmIG5vIGlkIGlzIHBhc3NzZWQsIGFsbCBzb3VuZHMgd2lsbCBmYWRlKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGZyb20gVGhlIHZhbHVlIHRvIGZhZGUgZnJvbSAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0byAgIFRoZSB2b2x1bWUgdG8gZmFkZSB0byAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBsZW4gIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgIFRoZSBzb3VuZCBpZCAob21pdCB0byBmYWRlIGFsbCBzb3VuZHMpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgZmFkZTogZnVuY3Rpb24oZnJvbSwgdG8sIGxlbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBmYWRlIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdmYWRlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5mYWRlKGZyb20sIHRvLCBsZW4sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHRvL2Zyb20vbGVuIHZhbHVlcyBhcmUgbnVtYmVycy5cbiAgICAgIGZyb20gPSBwYXJzZUZsb2F0KGZyb20pO1xuICAgICAgdG8gPSBwYXJzZUZsb2F0KHRvKTtcbiAgICAgIGxlbiA9IHBhcnNlRmxvYXQobGVuKTtcblxuICAgICAgLy8gU2V0IHRoZSB2b2x1bWUgdG8gdGhlIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAgc2VsZi52b2x1bWUoZnJvbSwgaWQpO1xuXG4gICAgICAvLyBGYWRlIHRoZSB2b2x1bWUgb2Ygb25lIG9yIGFsbCBzb3VuZHMuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBsaW5lYXIgZmFkZSBvciBmYWxsIGJhY2sgdG8gdGltZW91dHMgd2l0aCBIVE1MNSBBdWRpby5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgLy8gU3RvcCB0aGUgcHJldmlvdXMgZmFkZSBpZiBubyBzcHJpdGUgaXMgYmVpbmcgdXNlZCAob3RoZXJ3aXNlLCB2b2x1bWUgaGFuZGxlcyB0aGlzKS5cbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHdlIGFyZSB1c2luZyBXZWIgQXVkaW8sIGxldCB0aGUgbmF0aXZlIG1ldGhvZHMgZG8gdGhlIGFjdHVhbCBmYWRlLlxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmFyIGVuZCA9IGN1cnJlbnRUaW1lICsgKGxlbiAvIDEwMDApO1xuICAgICAgICAgICAgc291bmQuX3ZvbHVtZSA9IGZyb207XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKGZyb20sIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodG8sIGVuZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fc3RhcnRGYWRlSW50ZXJ2YWwoc291bmQsIGZyb20sIHRvLCBsZW4sIGlkc1tpXSwgdHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgaW50ZXJuYWwgaW50ZXJ2YWwgdG8gZmFkZSBhIHNvdW5kLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gc291bmQgUmVmZXJlbmNlIHRvIHNvdW5kIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBmcm9tIFRoZSB2YWx1ZSB0byBmYWRlIGZyb20gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdG8gICBUaGUgdm9sdW1lIHRvIGZhZGUgdG8gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbGVuICBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICBUaGUgc291bmQgaWQgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0dyb3VwICAgSWYgdHJ1ZSwgc2V0IHRoZSB2b2x1bWUgb24gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIF9zdGFydEZhZGVJbnRlcnZhbDogZnVuY3Rpb24oc291bmQsIGZyb20sIHRvLCBsZW4sIGlkLCBpc0dyb3VwKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdm9sID0gZnJvbTtcbiAgICAgIHZhciBkaWZmID0gdG8gLSBmcm9tO1xuICAgICAgdmFyIHN0ZXBzID0gTWF0aC5hYnMoZGlmZiAvIDAuMDEpO1xuICAgICAgdmFyIHN0ZXBMZW4gPSBNYXRoLm1heCg0LCAoc3RlcHMgPiAwKSA/IGxlbiAvIHN0ZXBzIDogbGVuKTtcbiAgICAgIHZhciBsYXN0VGljayA9IERhdGUubm93KCk7XG5cbiAgICAgIC8vIFN0b3JlIHRoZSB2YWx1ZSBiZWluZyBmYWRlZCB0by5cbiAgICAgIHNvdW5kLl9mYWRlVG8gPSB0bztcblxuICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgdmFsdWUgb24gZWFjaCBpbnRlcnZhbCB0aWNrLlxuICAgICAgc291bmQuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIGJhc2VkIG9uIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IHRpY2suXG4gICAgICAgIHZhciB0aWNrID0gKERhdGUubm93KCkgLSBsYXN0VGljaykgLyBsZW47XG4gICAgICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdm9sICs9IGRpZmYgKiB0aWNrO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdm9sdW1lIGlzIGluIHRoZSByaWdodCBib3VuZHMuXG4gICAgICAgIHZvbCA9IE1hdGgubWF4KDAsIHZvbCk7XG4gICAgICAgIHZvbCA9IE1hdGgubWluKDEsIHZvbCk7XG5cbiAgICAgICAgLy8gUm91bmQgdG8gd2l0aGluIDIgZGVjaW1hbCBwb2ludHMuXG4gICAgICAgIHZvbCA9IE1hdGgucm91bmQodm9sICogMTAwKSAvIDEwMDtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHZvbHVtZS5cbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc291bmQuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnZvbHVtZSh2b2wsIHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwJ3Mgdm9sdW1lLlxuICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgIHNlbGYuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGhlIGZhZGUgaXMgY29tcGxldGUsIHN0b3AgaXQgYW5kIGZpcmUgZXZlbnQuXG4gICAgICAgIGlmICgodG8gPCBmcm9tICYmIHZvbCA8PSB0bykgfHwgKHRvID4gZnJvbSAmJiB2b2wgPj0gdG8pKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChzb3VuZC5faW50ZXJ2YWwpO1xuICAgICAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgc291bmQuX2ZhZGVUbyA9IG51bGw7XG4gICAgICAgICAgc2VsZi52b2x1bWUodG8sIHNvdW5kLl9pZCk7XG4gICAgICAgICAgc2VsZi5fZW1pdCgnZmFkZScsIHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHN0ZXBMZW4pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdGhhdCBzdG9wcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgZmFkZSB3aGVuXG4gICAgICogYSBuZXcgZmFkZSBzdGFydHMsIHZvbHVtZSBpcyBjaGFuZ2VkIG9yIHRoZSBzb3VuZCBpcyBzdG9wcGVkLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX3N0b3BGYWRlOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcblxuICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9pbnRlcnZhbCkge1xuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc291bmQuX2ludGVydmFsKTtcbiAgICAgICAgc291bmQuX2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgc2VsZi52b2x1bWUoc291bmQuX2ZhZGVUbywgaWQpO1xuICAgICAgICBzb3VuZC5fZmFkZVRvID0gbnVsbDtcbiAgICAgICAgc2VsZi5fZW1pdCgnZmFkZScsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIGxvb3AgcGFyYW1ldGVyIG9uIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIGxvb3AoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIGxvb3AgdmFsdWUuXG4gICAgICogICBsb29wKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGxvb3AgdmFsdWUuXG4gICAgICogICBsb29wKGxvb3ApIC0+IFNldHMgdGhlIGxvb3AgdmFsdWUgZm9yIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgbG9vcChsb29wLCBpZCkgLT4gU2V0cyB0aGUgbG9vcCB2YWx1ZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9Cb29sZWFufSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCBsb29wIHZhbHVlLlxuICAgICAqL1xuICAgIGxvb3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgbG9vcCwgaWQsIHNvdW5kO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBmb3IgbG9vcCBhbmQgaWQuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBncm91J3MgbG9vcCB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIHNlbGYuX2xvb3A7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgbG9vcCA9IGFyZ3NbMF07XG4gICAgICAgICAgc2VsZi5fbG9vcCA9IGxvb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJuIHRoaXMgc291bmQncyBsb29wIHZhbHVlLlxuICAgICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKHBhcnNlSW50KGFyZ3NbMF0sIDEwKSk7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX2xvb3AgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsb29wID0gYXJnc1swXTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIGxvb3BlZC5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgc291bmQuX2xvb3AgPSBsb29wO1xuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BFbmQgPSBzb3VuZC5fc3RvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHBsYXliYWNrIHJhdGUgb2YgYSBzb3VuZC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgcmF0ZSgpIC0+IFJldHVybnMgdGhlIGZpcnN0IHNvdW5kIG5vZGUncyBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICogICByYXRlKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKiAgIHJhdGUocmF0ZSkgLT4gU2V0cyB0aGUgcGxheWJhY2sgcmF0ZSBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIHJhdGUocmF0ZSwgaWQpIC0+IFNldHMgdGhlIHBsYXliYWNrIHJhdGUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKi9cbiAgICByYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHJhdGUsIGlkO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IHJhdGUgb2YgdGhlIGZpcnN0IG5vZGUuXG4gICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHJhdGUgdmFsdWUuXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByYXRlID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByYXRlID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGxheWJhY2sgcmF0ZSBvciByZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICB2YXIgc291bmQ7XG4gICAgICBpZiAodHlwZW9mIHJhdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHBsYXliYWNrIHJhdGUgd2hlbiBjYXBhYmxlLlxuICAgICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3JhdGUnLFxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5yYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwIHJhdGUuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fcmF0ZSA9IHJhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb25lIG9yIGFsbCB2b2x1bWVzLlxuICAgICAgICBpZCA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZFtpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2Ygb3VyIHBvc2l0aW9uIHdoZW4gdGhlIHJhdGUgY2hhbmdlZCBhbmQgdXBkYXRlIHRoZSBwbGF5YmFja1xuICAgICAgICAgICAgLy8gc3RhcnQgcG9zaXRpb24gc28gd2UgY2FuIHByb3Blcmx5IGFkanVzdCB0aGUgc2VlayBwb3NpdGlvbiBmb3IgdGltZSBlbGFwc2VkLlxuICAgICAgICAgICAgaWYgKHNlbGYucGxheWluZyhpZFtpXSkpIHtcbiAgICAgICAgICAgICAgc291bmQuX3JhdGVTZWVrID0gc2VsZi5zZWVrKGlkW2ldKTtcbiAgICAgICAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IHNlbGYuX3dlYkF1ZGlvID8gSG93bGVyLmN0eC5jdXJyZW50VGltZSA6IHNvdW5kLl9wbGF5U3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VuZC5fcmF0ZSA9IHJhdGU7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgcGxheWJhY2sgcmF0ZS5cbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS5zZXRWYWx1ZUF0VGltZShyYXRlLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVycy5cbiAgICAgICAgICAgIHZhciBzZWVrID0gc2VsZi5zZWVrKGlkW2ldKTtcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICgoc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzFdKSAvIDEwMDApIC0gc2VlaztcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gKGR1cmF0aW9uICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IGEgbmV3IGVuZCB0aW1lciBpZiBzb3VuZCBpcyBhbHJlYWR5IHBsYXlpbmcuXG4gICAgICAgICAgICBpZiAoc2VsZi5fZW5kVGltZXJzW2lkW2ldXSB8fCAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkW2ldKTtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW2lkW2ldXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdyYXRlJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX3JhdGUgOiBzZWxmLl9yYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgc2VlayBwb3NpdGlvbiBvZiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICBzZWVrKCkgLT4gUmV0dXJucyB0aGUgZmlyc3Qgc291bmQgbm9kZSdzIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKiAgIHNlZWsoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqICAgc2VlayhzZWVrKSAtPiBTZXRzIHRoZSBzZWVrIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBzb3VuZCBub2RlLlxuICAgICAqICAgc2VlayhzZWVrLCBpZCkgLT4gU2V0cyB0aGUgc2VlayBwb3NpdGlvbiBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIHNlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgc2VlaywgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBXZSB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG5vZGUuXG4gICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHNlZWsgcG9zaXRpb24uXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgICAgIHNlZWsgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNlZWsgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gSUQsIGJhaWwgb3V0LlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gc2VlayB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnc2VlaycsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuc2Vlay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VlayA9PT0gJ251bWJlcicgJiYgc2VlayA+PSAwKSB7XG4gICAgICAgICAgLy8gUGF1c2UgdGhlIHNvdW5kIGFuZCB1cGRhdGUgcG9zaXRpb24gZm9yIHJlc3RhcnRpbmcgcGxheWJhY2suXG4gICAgICAgICAgdmFyIHBsYXlpbmcgPSBzZWxmLnBsYXlpbmcoaWQpO1xuICAgICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBzZWxmLnBhdXNlKGlkLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBNb3ZlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJhY2sgYW5kIGNhbmNlbCB0aW1lci5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNlZWs7XG4gICAgICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNlZWsgcG9zaXRpb24gZm9yIEhUTUw1IEF1ZGlvLlxuICAgICAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIWlzTmFOKHNvdW5kLl9ub2RlLmR1cmF0aW9uKSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuY3VycmVudFRpbWUgPSBzZWVrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZWsgYW5kIGVtaXQgd2hlbiByZWFkeS5cbiAgICAgICAgICB2YXIgc2Vla0FuZEVtaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3NlZWsnLCBpZCk7XG5cbiAgICAgICAgICAgIC8vIFJlc3RhcnQgdGhlIHBsYXliYWNrIGlmIHRoZSBzb3VuZCB3YXMgcGxheWluZy5cbiAgICAgICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICAgIHNlbGYucGxheShpZCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBwbGF5IGxvY2sgdG8gYmUgdW5zZXQgYmVmb3JlIGVtaXR0aW5nIChIVE1MNSBBdWRpbykuXG4gICAgICAgICAgaWYgKHBsYXlpbmcgJiYgIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICB2YXIgZW1pdFNlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKCFzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICAgICAgICAgIHNlZWtBbmRFbWl0KCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChlbWl0U2VlaywgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVtaXRTZWVrLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vla0FuZEVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICB2YXIgcmVhbFRpbWUgPSBzZWxmLnBsYXlpbmcoaWQpID8gSG93bGVyLmN0eC5jdXJyZW50VGltZSAtIHNvdW5kLl9wbGF5U3RhcnQgOiAwO1xuICAgICAgICAgICAgdmFyIHJhdGVTZWVrID0gc291bmQuX3JhdGVTZWVrID8gc291bmQuX3JhdGVTZWVrIC0gc291bmQuX3NlZWsgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHNvdW5kLl9zZWVrICsgKHJhdGVTZWVrICsgcmVhbFRpbWUgKiBNYXRoLmFicyhzb3VuZC5fcmF0ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc291bmQuX25vZGUuY3VycmVudFRpbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHNwZWNpZmljIHNvdW5kIGlzIGN1cnJlbnRseSBwbGF5aW5nIG9yIG5vdCAoaWYgaWQgaXMgcHJvdmlkZWQpLCBvciBjaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIHNvdW5kcyBpbiB0aGUgZ3JvdXAgaXMgcGxheWluZyBvciBub3QuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgaWQgVGhlIHNvdW5kIGlkIHRvIGNoZWNrLiBJZiBub25lIGlzIHBhc3NlZCwgdGhlIHdob2xlIHNvdW5kIGdyb3VwIGlzIGNoZWNrZWQuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBwbGF5aW5nIGFuZCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgcGxheWluZzogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gQ2hlY2sgdGhlIHBhc3NlZCBzb3VuZCBJRCAoaWYgYW55KS5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/ICFzb3VuZC5fcGF1c2VkIDogZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgbG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGNoZWNrIGlmIGFueSBhcmUgcGxheWluZy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzZWxmLl9zb3VuZHNbaV0uX3BhdXNlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGlzIHNvdW5kLiBQYXNzaW5nIGEgc291bmQgaWQgd2lsbCByZXR1cm4gdGhlIHNwcml0ZSBkdXJhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBpZCB0byBjaGVjay4gSWYgbm9uZSBpcyBwYXNzZWQsIHJldHVybiBmdWxsIHNvdXJjZSBkdXJhdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEF1ZGlvIGR1cmF0aW9uIGluIHNlY29uZHMuXG4gICAgICovXG4gICAgZHVyYXRpb246IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZHVyYXRpb24gPSBzZWxmLl9kdXJhdGlvbjtcblxuICAgICAgLy8gSWYgd2UgcGFzcyBhbiBJRCwgZ2V0IHRoZSBzb3VuZCBhbmQgcmV0dXJuIHRoZSBzcHJpdGUgbGVuZ3RoLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBkdXJhdGlvbiA9IHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVsxXSAvIDEwMDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBsb2FkZWQgc3RhdGUgb2YgdGhpcyBIb3dsLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gJ3VubG9hZGVkJywgJ2xvYWRpbmcnLCAnbG9hZGVkJ1xuICAgICAqL1xuICAgIHN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2FkIGFuZCBkZXN0cm95IHRoZSBjdXJyZW50IEhvd2wgb2JqZWN0LlxuICAgICAqIFRoaXMgd2lsbCBpbW1lZGlhdGVseSBzdG9wIGFsbCBzb3VuZCBpbnN0YW5jZXMgYXR0YWNoZWQgdG8gdGhpcyBncm91cC5cbiAgICAgKi9cbiAgICB1bmxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTdG9wIHBsYXlpbmcgYW55IGFjdGl2ZSBzb3VuZHMuXG4gICAgICB2YXIgc291bmRzID0gc2VsZi5fc291bmRzO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPHNvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTdG9wIHRoZSBzb3VuZCBpZiBpdCBpcyBjdXJyZW50bHkgcGxheWluZy5cbiAgICAgICAgaWYgKCFzb3VuZHNbaV0uX3BhdXNlZCkge1xuICAgICAgICAgIHNlbGYuc3RvcChzb3VuZHNbaV0uX2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlIG9yIGRpc2Nvbm5lY3QuXG4gICAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAvLyBTZXQgdGhlIHNvdXJjZSB0byAwLXNlY29uZCBzaWxlbmNlIHRvIHN0b3AgYW55IGRvd25sb2FkaW5nIChleGNlcHQgaW4gSUUpLlxuICAgICAgICAgIHNlbGYuX2NsZWFyU291bmQoc291bmRzW2ldLl9ub2RlKTtcblxuICAgICAgICAgIC8vIFJlbW92ZSBhbnkgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNvdW5kc1tpXS5fZXJyb3JGbiwgZmFsc2UpO1xuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzb3VuZHNbaV0uX2xvYWRGbiwgZmFsc2UpO1xuXG4gICAgICAgICAgLy8gUmVsZWFzZSB0aGUgQXVkaW8gb2JqZWN0IGJhY2sgdG8gdGhlIHBvb2wuXG4gICAgICAgICAgSG93bGVyLl9yZWxlYXNlSHRtbDVBdWRpbyhzb3VuZHNbaV0uX25vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1wdHkgb3V0IGFsbCBvZiB0aGUgbm9kZXMuXG4gICAgICAgIGRlbGV0ZSBzb3VuZHNbaV0uX25vZGU7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCB0aW1lcnMgYXJlIGNsZWFyZWQgb3V0LlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kc1tpXS5faWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgdGhlIHJlZmVyZW5jZXMgaW4gdGhlIGdsb2JhbCBIb3dsZXIgb2JqZWN0LlxuICAgICAgdmFyIGluZGV4ID0gSG93bGVyLl9ob3dscy5pbmRleE9mKHNlbGYpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgSG93bGVyLl9ob3dscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgdGhpcyBzb3VuZCBmcm9tIHRoZSBjYWNoZSAoaWYgbm8gb3RoZXIgSG93bCBpcyB1c2luZyBpdCkuXG4gICAgICB2YXIgcmVtQ2FjaGUgPSB0cnVlO1xuICAgICAgZm9yIChpPTA7IGk8SG93bGVyLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoSG93bGVyLl9ob3dsc1tpXS5fc3JjID09PSBzZWxmLl9zcmMgfHwgc2VsZi5fc3JjLmluZGV4T2YoSG93bGVyLl9ob3dsc1tpXS5fc3JjKSA+PSAwKSB7XG4gICAgICAgICAgcmVtQ2FjaGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2FjaGUgJiYgcmVtQ2FjaGUpIHtcbiAgICAgICAgZGVsZXRlIGNhY2hlW3NlbGYuX3NyY107XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIGdsb2JhbCBlcnJvcnMuXG4gICAgICBIb3dsZXIubm9BdWRpbyA9IGZhbHNlO1xuXG4gICAgICAvLyBDbGVhciBvdXQgYHNlbGZgLlxuICAgICAgc2VsZi5fc3RhdGUgPSAndW5sb2FkZWQnO1xuICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICBzZWxmID0gbnVsbDtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIGN1c3RvbSBldmVudC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgTGlzdGVuZXIgdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaWQgICAgKG9wdGlvbmFsKSBPbmx5IGxpc3RlbiB0byBldmVudHMgZm9yIHRoaXMgc291bmQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIG9uY2UgIChJTlRFUk5BTCkgTWFya3MgZXZlbnQgdG8gZmlyZSBvbmx5IG9uY2UuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24oZXZlbnQsIGZuLCBpZCwgb25jZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHNlbGZbJ19vbicgKyBldmVudF07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnRzLnB1c2gob25jZSA/IHtpZDogaWQsIGZuOiBmbiwgb25jZTogb25jZX0gOiB7aWQ6IGlkLCBmbjogZm59KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGN1c3RvbSBldmVudC4gQ2FsbCB3aXRob3V0IHBhcmFtZXRlcnMgdG8gcmVtb3ZlIGFsbCBldmVudHMuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIHJlbW92ZS4gTGVhdmUgZW1wdHkgdG8gcmVtb3ZlIGFsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaWQgICAgKG9wdGlvbmFsKSBPbmx5IHJlbW92ZSBldmVudHMgZm9yIHRoaXMgc291bmQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAvLyBBbGxvdyBwYXNzaW5nIGp1c3QgYW4gZXZlbnQgYW5kIElELlxuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWQgPSBmbjtcbiAgICAgICAgZm4gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm4gfHwgaWQpIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZW50IHN0b3JlIGFuZCByZW1vdmUgdGhlIHBhc3NlZCBmdW5jdGlvbi5cbiAgICAgICAgZm9yIChpPTA7IGk8ZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlzSWQgPSAoaWQgPT09IGV2ZW50c1tpXS5pZCk7XG4gICAgICAgICAgaWYgKGZuID09PSBldmVudHNbaV0uZm4gJiYgaXNJZCB8fCAhZm4gJiYgaXNJZCkge1xuICAgICAgICAgICAgZXZlbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudCkge1xuICAgICAgICAvLyBDbGVhciBvdXQgYWxsIGV2ZW50cyBvZiB0aGlzIHR5cGUuXG4gICAgICAgIHNlbGZbJ19vbicgKyBldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbGwgZXZlbnRzIG9mIGV2ZXJ5IHR5cGUuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc2VsZik7XG4gICAgICAgIGZvciAoaT0wOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoKGtleXNbaV0uaW5kZXhPZignX29uJykgPT09IDApICYmIEFycmF5LmlzQXJyYXkoc2VsZltrZXlzW2ldXSkpIHtcbiAgICAgICAgICAgIHNlbGZba2V5c1tpXV0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIGN1c3RvbSBldmVudCBhbmQgcmVtb3ZlIGl0IG9uY2UgZmlyZWQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSBsaXN0ZW4gdG8gZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb25jZTogZnVuY3Rpb24oZXZlbnQsIGZuLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLm9uKGV2ZW50LCBmbiwgaWQsIDEpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW1pdCBhbGwgZXZlbnRzIG9mIGEgc3BlY2lmaWMgdHlwZSBhbmQgcGFzcyB0aGUgc291bmQgaWQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICAgU291bmQgSUQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBtc2cgICBNZXNzYWdlIHRvIGdvIHdpdGggZXZlbnQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfZW1pdDogZnVuY3Rpb24oZXZlbnQsIGlkLCBtc2cpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZXZlbnQgc3RvcmUgYW5kIGZpcmUgYWxsIGZ1bmN0aW9ucy5cbiAgICAgIGZvciAodmFyIGk9ZXZlbnRzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgLy8gT25seSBmaXJlIHRoZSBsaXN0ZW5lciBpZiB0aGUgY29ycmVjdCBJRCBpcyB1c2VkLlxuICAgICAgICBpZiAoIWV2ZW50c1tpXS5pZCB8fCBldmVudHNbaV0uaWQgPT09IGlkIHx8IGV2ZW50ID09PSAnbG9hZCcpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGlkLCBtc2cpO1xuICAgICAgICAgIH0uYmluZChzZWxmLCBldmVudHNbaV0uZm4pLCAwKTtcblxuICAgICAgICAgIC8vIElmIHRoaXMgZXZlbnQgd2FzIHNldHVwIHdpdGggYG9uY2VgLCByZW1vdmUgaXQuXG4gICAgICAgICAgaWYgKGV2ZW50c1tpXS5vbmNlKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihldmVudCwgZXZlbnRzW2ldLmZuLCBldmVudHNbaV0uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQYXNzIHRoZSBldmVudCB0eXBlIGludG8gbG9hZCBxdWV1ZSBzbyB0aGF0IGl0IGNhbiBjb250aW51ZSBzdGVwcGluZy5cbiAgICAgIHNlbGYuX2xvYWRRdWV1ZShldmVudCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBRdWV1ZSBvZiBhY3Rpb25zIGluaXRpYXRlZCBiZWZvcmUgdGhlIHNvdW5kIGhhcyBsb2FkZWQuXG4gICAgICogVGhlc2Ugd2lsbCBiZSBjYWxsZWQgaW4gc2VxdWVuY2UsIHdpdGggdGhlIG5leHQgb25seSBmaXJpbmdcbiAgICAgKiBhZnRlciB0aGUgcHJldmlvdXMgaGFzIGZpbmlzaGVkIGV4ZWN1dGluZyAoZXZlbiBpZiBhc3luYyBsaWtlIHBsYXkpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2xvYWRRdWV1ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHNlbGYuX3F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRhc2sgPSBzZWxmLl9xdWV1ZVswXTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhpcyB0YXNrIGlmIGEgbWF0Y2hpbmcgZXZlbnQgd2FzIHBhc3NlZC5cbiAgICAgICAgaWYgKHRhc2suZXZlbnQgPT09IGV2ZW50KSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biB0aGUgdGFzayBpZiBubyBldmVudCB0eXBlIGlzIHBhc3NlZC5cbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgIHRhc2suYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gcGxheWJhY2sgZW5kcyBhdCB0aGUgZW5kIG9mIHRoZSBkdXJhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgVGhlIHNvdW5kIG9iamVjdCB0byB3b3JrIHdpdGguXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfZW5kZWQ6IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgc3ByaXRlID0gc291bmQuX3Nwcml0ZTtcblxuICAgICAgLy8gSWYgd2UgYXJlIHVzaW5nIElFIGFuZCB0aGVyZSB3YXMgbmV0d29yayBsYXRlbmN5IHdlIG1heSBiZSBjbGlwcGluZ1xuICAgICAgLy8gYXVkaW8gYmVmb3JlIGl0IGNvbXBsZXRlcyBwbGF5aW5nLiBMZXRzIGNoZWNrIHRoZSBub2RlIHRvIG1ha2Ugc3VyZSBpdFxuICAgICAgLy8gYmVsaWV2ZXMgaXQgaGFzIGNvbXBsZXRlZCwgYmVmb3JlIGVuZGluZyB0aGUgcGxheWJhY2suXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbm9kZS5wYXVzZWQgJiYgIXNvdW5kLl9ub2RlLmVuZGVkICYmIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lIDwgc291bmQuX3N0b3ApIHtcbiAgICAgICAgc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgMTAwKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3VsZCB0aGlzIHNvdW5kIGxvb3A/XG4gICAgICB2YXIgbG9vcCA9ICEhKHNvdW5kLl9sb29wIHx8IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzJdKTtcblxuICAgICAgLy8gRmlyZSB0aGUgZW5kZWQgZXZlbnQuXG4gICAgICBzZWxmLl9lbWl0KCdlbmQnLCBzb3VuZC5faWQpO1xuXG4gICAgICAvLyBSZXN0YXJ0IHRoZSBwbGF5YmFjayBmb3IgSFRNTDUgQXVkaW8gbG9vcC5cbiAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgbG9vcCkge1xuICAgICAgICBzZWxmLnN0b3Aoc291bmQuX2lkLCB0cnVlKS5wbGF5KHNvdW5kLl9pZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlc3RhcnQgdGhpcyB0aW1lciBpZiBvbiBhIFdlYiBBdWRpbyBsb29wLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIGxvb3ApIHtcbiAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgIHNvdW5kLl9zZWVrID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgIHNvdW5kLl9wbGF5U3RhcnQgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIHZhciB0aW1lb3V0ID0gKChzb3VuZC5fc3RvcCAtIHNvdW5kLl9zdGFydCkgKiAxMDAwKSAvIE1hdGguYWJzKHNvdW5kLl9yYXRlKTtcbiAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFyayB0aGUgbm9kZSBhcyBwYXVzZWQuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgIWxvb3ApIHtcbiAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG4gICAgICAgIHNvdW5kLl9zZWVrID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmQuX2lkKTtcblxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgICAgc2VsZi5fY2xlYW5CdWZmZXIoc291bmQuX25vZGUpO1xuXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gYXV0by1zdXNwZW5kIEF1ZGlvQ29udGV4dCBpZiBubyBzb3VuZHMgYXJlIHN0aWxsIHBsYXlpbmcuXG4gICAgICAgIEhvd2xlci5fYXV0b1N1c3BlbmQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2hlbiB1c2luZyBhIHNwcml0ZSwgZW5kIHRoZSB0cmFjay5cbiAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgIWxvb3ApIHtcbiAgICAgICAgc2VsZi5zdG9wKHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZW5kIHRpbWVyIGZvciBhIHNvdW5kIHBsYXliYWNrLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIElELlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2NsZWFyVGltZXI6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9lbmRUaW1lcnNbaWRdKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSB0aW1lb3V0IG9yIHJlbW92ZSB0aGUgZW5kZWQgbGlzdGVuZXIuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZW5kVGltZXJzW2lkXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9lbmRUaW1lcnNbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzZWxmLl9lbmRUaW1lcnNbaWRdLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHNlbGYuX2VuZFRpbWVyc1tpZF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNvdW5kIGlkZW50aWZpZWQgYnkgdGhpcyBJRCwgb3IgcmV0dXJuIG51bGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBTb3VuZCBJRFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgU291bmQgb2JqZWN0IG9yIG51bGwuXG4gICAgICovXG4gICAgX3NvdW5kQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGZpbmQgdGhlIG9uZSB3aXRoIHRoaXMgSUQuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZCA9PT0gc2VsZi5fc291bmRzW2ldLl9pZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9zb3VuZHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBpbmFjdGl2ZSBzb3VuZCBmcm9tIHRoZSBwb29sIG9yIGNyZWF0ZSBhIG5ldyBvbmUuXG4gICAgICogQHJldHVybiB7U291bmR9IFNvdW5kIHBsYXliYWNrIG9iamVjdC5cbiAgICAgKi9cbiAgICBfaW5hY3RpdmVTb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHNlbGYuX2RyYWluKCk7XG5cbiAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGluYWN0aXZlIG5vZGUgdG8gcmVjeWNsZS5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fc291bmRzW2ldLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaW5hY3RpdmUgbm9kZSB3YXMgZm91bmQsIGNyZWF0ZSBhIG5ldyBvbmUuXG4gICAgICByZXR1cm4gbmV3IFNvdW5kKHNlbGYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEcmFpbiBleGNlc3MgaW5hY3RpdmUgc291bmRzIGZyb20gdGhlIHBvb2wuXG4gICAgICovXG4gICAgX2RyYWluOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBsaW1pdCA9IHNlbGYuX3Bvb2w7XG4gICAgICB2YXIgY250ID0gMDtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGxlc3Mgc291bmRzIHRoYW4gdGhlIG1heCBwb29sIHNpemUsIHdlIGFyZSBkb25lLlxuICAgICAgaWYgKHNlbGYuX3NvdW5kcy5sZW5ndGggPCBsaW1pdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgaW5hY3RpdmUgc291bmRzLlxuICAgICAgZm9yIChpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgY250Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGV4Y2VzcyBpbmFjdGl2ZSBzb3VuZHMsIGdvaW5nIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICBmb3IgKGk9c2VsZi5fc291bmRzLmxlbmd0aCAtIDE7IGk+PTA7IGktLSkge1xuICAgICAgICBpZiAoY250IDw9IGxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICAvLyBEaXNjb25uZWN0IHRoZSBhdWRpbyBzb3VyY2Ugd2hlbiB1c2luZyBXZWIgQXVkaW8uXG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNlbGYuX3NvdW5kc1tpXS5fbm9kZSkge1xuICAgICAgICAgICAgc2VsZi5fc291bmRzW2ldLl9ub2RlLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHNvdW5kcyB1bnRpbCB3ZSBoYXZlIHRoZSBwb29sIHNpemUuXG4gICAgICAgICAgc2VsZi5fc291bmRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBjbnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIElEJ3MgZnJvbSB0aGUgc291bmRzIHBvb2wuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBPbmx5IHJldHVybiBvbmUgSUQgaWYgb25lIGlzIHBhc3NlZC5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgQXJyYXkgb2YgSURzLlxuICAgICAqL1xuICAgIF9nZXRTb3VuZElkczogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGlkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWRzLnB1c2goc2VsZi5fc291bmRzW2ldLl9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtpZF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIHNvdW5kIGJhY2sgaW50byB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgVGhlIHNvdW5kIG9iamVjdCB0byB3b3JrIHdpdGguXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfcmVmcmVzaEJ1ZmZlcjogZnVuY3Rpb24oc291bmQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU2V0dXAgdGhlIGJ1ZmZlciBzb3VyY2UgZm9yIHBsYXliYWNrLlxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlID0gSG93bGVyLmN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSBjYWNoZVtzZWxmLl9zcmNdO1xuXG4gICAgICAvLyBDb25uZWN0IHRvIHRoZSBjb3JyZWN0IG5vZGUuXG4gICAgICBpZiAoc291bmQuX3Bhbm5lcikge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuY29ubmVjdChzb3VuZC5fcGFubmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5jb25uZWN0KHNvdW5kLl9ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgbG9vcGluZyBhbmQgcGxheWJhY2sgcmF0ZS5cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wID0gc291bmQuX2xvb3A7XG4gICAgICBpZiAoc291bmQuX2xvb3ApIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BTdGFydCA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcEVuZCA9IHNvdW5kLl9zdG9wIHx8IDA7XG4gICAgICB9XG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UucGxheWJhY2tSYXRlLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9yYXRlLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByZXZlbnQgbWVtb3J5IGxlYWtzIGJ5IGNsZWFuaW5nIHVwIHRoZSBidWZmZXIgc291cmNlIGFmdGVyIHBsYXliYWNrLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gbm9kZSBTb3VuZCdzIGF1ZGlvIG5vZGUgY29udGFpbmluZyB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9jbGVhbkJ1ZmZlcjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGlzSU9TID0gSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudmVuZG9yLmluZGV4T2YoJ0FwcGxlJykgPj0gMDtcblxuICAgICAgaWYgKEhvd2xlci5fc2NyYXRjaEJ1ZmZlciAmJiBub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICBub2RlLmJ1ZmZlclNvdXJjZS5vbmVuZGVkID0gbnVsbDtcbiAgICAgICAgbm9kZS5idWZmZXJTb3VyY2UuZGlzY29ubmVjdCgwKTtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgdHJ5IHsgbm9kZS5idWZmZXJTb3VyY2UuYnVmZmVyID0gSG93bGVyLl9zY3JhdGNoQnVmZmVyOyB9IGNhdGNoKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vZGUuYnVmZmVyU291cmNlID0gbnVsbDtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc291cmNlIHRvIGEgMC1zZWNvbmQgc2lsZW5jZSB0byBzdG9wIGFueSBkb3dubG9hZGluZyAoZXhjZXB0IGluIElFKS5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG5vZGUgQXVkaW8gbm9kZSB0byBjbGVhci5cbiAgICAgKi9cbiAgICBfY2xlYXJTb3VuZDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIGNoZWNrSUUgPSAvTVNJRSB8VHJpZGVudFxcLy8udGVzdChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgaWYgKCFjaGVja0lFKSB7XG4gICAgICAgIG5vZGUuc3JjID0gJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCxVa2xHUmlnQUFBQlhRVlpGWm0xMElCSUFBQUFCQUFFQVJLd0FBSWhZQVFBQ0FCQUFBQUJrWVhSaEFnQUFBQUVBJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqIFNpbmdsZSBTb3VuZCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgc291bmQgb2JqZWN0LCB3aGljaCBlYWNoIG5vZGUgYXR0YWNoZWQgdG8gYSBIb3dsIGdyb3VwIGlzIGNvbnRhaW5lZCBpbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGhvd2wgVGhlIEhvd2wgcGFyZW50IGdyb3VwLlxuICAgKi9cbiAgdmFyIFNvdW5kID0gZnVuY3Rpb24oaG93bCkge1xuICAgIHRoaXMuX3BhcmVudCA9IGhvd2w7XG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG4gIFNvdW5kLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGEgbmV3IFNvdW5kIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBkZWZhdWx0IHBhcmFtZXRlcnMuXG4gICAgICBzZWxmLl9tdXRlZCA9IHBhcmVudC5fbXV0ZWQ7XG4gICAgICBzZWxmLl9sb29wID0gcGFyZW50Ll9sb29wO1xuICAgICAgc2VsZi5fdm9sdW1lID0gcGFyZW50Ll92b2x1bWU7XG4gICAgICBzZWxmLl9yYXRlID0gcGFyZW50Ll9yYXRlO1xuICAgICAgc2VsZi5fc2VlayA9IDA7XG4gICAgICBzZWxmLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5faWQgPSArK0hvd2xlci5fY291bnRlcjtcblxuICAgICAgLy8gQWRkIGl0c2VsZiB0byB0aGUgcGFyZW50J3MgcG9vbC5cbiAgICAgIHBhcmVudC5fc291bmRzLnB1c2goc2VsZik7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IG5vZGUuXG4gICAgICBzZWxmLmNyZWF0ZSgpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBzZXR1cCBhIG5ldyBzb3VuZCBvYmplY3QsIHdoZXRoZXIgSFRNTDUgQXVkaW8gb3IgV2ViIEF1ZGlvLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuICAgICAgdmFyIHZvbHVtZSA9IChIb3dsZXIuX211dGVkIHx8IHNlbGYuX211dGVkIHx8IHNlbGYuX3BhcmVudC5fbXV0ZWQpID8gMCA6IHNlbGYuX3ZvbHVtZTtcblxuICAgICAgaWYgKHBhcmVudC5fd2ViQXVkaW8pIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBnYWluIG5vZGUgZm9yIGNvbnRyb2xsaW5nIHZvbHVtZSAodGhlIHNvdXJjZSB3aWxsIGNvbm5lY3QgdG8gdGhpcykuXG4gICAgICAgIHNlbGYuX25vZGUgPSAodHlwZW9mIEhvd2xlci5jdHguY3JlYXRlR2FpbiA9PT0gJ3VuZGVmaW5lZCcpID8gSG93bGVyLmN0eC5jcmVhdGVHYWluTm9kZSgpIDogSG93bGVyLmN0eC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHNlbGYuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzZWxmLl9ub2RlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHNlbGYuX25vZGUuY29ubmVjdChIb3dsZXIubWFzdGVyR2Fpbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBHZXQgYW4gdW5sb2NrZWQgQXVkaW8gb2JqZWN0IGZyb20gdGhlIHBvb2wuXG4gICAgICAgIHNlbGYuX25vZGUgPSBIb3dsZXIuX29idGFpbkh0bWw1QXVkaW8oKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGVycm9ycyAoaHR0cDovL2Rldi53My5vcmcvaHRtbDUvc3BlYy1hdXRob3Itdmlldy9zcGVjLmh0bWwjbWVkaWFlcnJvcikuXG4gICAgICAgIHNlbGYuX2Vycm9yRm4gPSBzZWxmLl9lcnJvckxpc3RlbmVyLmJpbmQoc2VsZik7XG4gICAgICAgIHNlbGYuX25vZGUuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzZWxmLl9lcnJvckZuLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciAnY2FucGxheXRocm91Z2gnIGV2ZW50IHRvIGxldCB1cyBrbm93IHRoZSBzb3VuZCBpcyByZWFkeS5cbiAgICAgICAgc2VsZi5fbG9hZEZuID0gc2VsZi5fbG9hZExpc3RlbmVyLmJpbmQoc2VsZik7XG4gICAgICAgIHNlbGYuX25vZGUuYWRkRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc2VsZi5fbG9hZEZuLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gU2V0dXAgdGhlIG5ldyBhdWRpbyBub2RlLlxuICAgICAgICBzZWxmLl9ub2RlLnNyYyA9IHBhcmVudC5fc3JjO1xuICAgICAgICBzZWxmLl9ub2RlLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgIHNlbGYuX25vZGUudm9sdW1lID0gdm9sdW1lICogSG93bGVyLnZvbHVtZSgpO1xuXG4gICAgICAgIC8vIEJlZ2luIGxvYWRpbmcgdGhlIHNvdXJjZS5cbiAgICAgICAgc2VsZi5fbm9kZS5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHNvdW5kIHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSAoZm9yIHJlY3ljbGUpLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBvZiB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5fbXV0ZWQgPSBwYXJlbnQuX211dGVkO1xuICAgICAgc2VsZi5fbG9vcCA9IHBhcmVudC5fbG9vcDtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IHBhcmVudC5fdm9sdW1lO1xuICAgICAgc2VsZi5fcmF0ZSA9IHBhcmVudC5fcmF0ZTtcbiAgICAgIHNlbGYuX3NlZWsgPSAwO1xuICAgICAgc2VsZi5fcmF0ZVNlZWsgPSAwO1xuICAgICAgc2VsZi5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBzbyB0aGF0IGl0IGlzbid0IGNvbmZ1c2VkIHdpdGggdGhlIHByZXZpb3VzIHNvdW5kLlxuICAgICAgc2VsZi5faWQgPSArK0hvd2xlci5fY291bnRlcjtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhUTUw1IEF1ZGlvIGVycm9yIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9lcnJvckxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gRmlyZSBhbiBlcnJvciBldmVudCBhbmQgcGFzcyBiYWNrIHRoZSBjb2RlLlxuICAgICAgc2VsZi5fcGFyZW50Ll9lbWl0KCdsb2FkZXJyb3InLCBzZWxmLl9pZCwgc2VsZi5fbm9kZS5lcnJvciA/IHNlbGYuX25vZGUuZXJyb3IuY29kZSA6IDApO1xuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc2VsZi5fZXJyb3JGbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVE1MNSBBdWRpbyBjYW5wbGF5dGhyb3VnaCBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfbG9hZExpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJvdW5kIHVwIHRoZSBkdXJhdGlvbiB0byBhY2NvdW50IGZvciB0aGUgbG93ZXIgcHJlY2lzaW9uIGluIEhUTUw1IEF1ZGlvLlxuICAgICAgcGFyZW50Ll9kdXJhdGlvbiA9IE1hdGguY2VpbChzZWxmLl9ub2RlLmR1cmF0aW9uICogMTApIC8gMTA7XG5cbiAgICAgIC8vIFNldHVwIGEgc3ByaXRlIGlmIG5vbmUgaXMgZGVmaW5lZC5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJlbnQuX3Nwcml0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHBhcmVudC5fc3ByaXRlID0ge19fZGVmYXVsdDogWzAsIHBhcmVudC5fZHVyYXRpb24gKiAxMDAwXX07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBwYXJlbnQuX3N0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgIHBhcmVudC5fZW1pdCgnbG9hZCcpO1xuICAgICAgICBwYXJlbnQuX2xvYWRRdWV1ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNlbGYuX2xvYWRGbiwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKiogSGVscGVyIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgdmFyIGNhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIEJ1ZmZlciBhIHNvdW5kIGZyb20gVVJMLCBEYXRhIFVSSSBvciBjYWNoZSBhbmQgZGVjb2RlIHRvIGF1ZGlvIHNvdXJjZSAoV2ViIEF1ZGlvIEFQSSkuXG4gICAqIEBwYXJhbSAge0hvd2x9IHNlbGZcbiAgICovXG4gIHZhciBsb2FkQnVmZmVyID0gZnVuY3Rpb24oc2VsZikge1xuICAgIHZhciB1cmwgPSBzZWxmLl9zcmM7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgYnVmZmVyIGhhcyBhbHJlYWR5IGJlZW4gY2FjaGVkIGFuZCB1c2UgaXQgaW5zdGVhZC5cbiAgICBpZiAoY2FjaGVbdXJsXSkge1xuICAgICAgLy8gU2V0IHRoZSBkdXJhdGlvbiBmcm9tIHRoZSBjYWNoZS5cbiAgICAgIHNlbGYuX2R1cmF0aW9uID0gY2FjaGVbdXJsXS5kdXJhdGlvbjtcblxuICAgICAgLy8gTG9hZCB0aGUgc291bmQgaW50byB0aGlzIEhvd2wuXG4gICAgICBsb2FkU291bmQoc2VsZik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoL15kYXRhOlteO10rO2Jhc2U2NCwvLnRlc3QodXJsKSkge1xuICAgICAgLy8gRGVjb2RlIHRoZSBiYXNlNjQgZGF0YSBVUkkgd2l0aG91dCBYSFIsIHNpbmNlIHNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBpdC5cbiAgICAgIHZhciBkYXRhID0gYXRvYih1cmwuc3BsaXQoJywnKVsxXSk7XG4gICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBkYXRhVmlld1tpXSA9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIH1cblxuICAgICAgZGVjb2RlQXVkaW9EYXRhKGRhdGFWaWV3LmJ1ZmZlciwgc2VsZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvYWQgdGhlIGJ1ZmZlciBmcm9tIHRoZSBVUkwuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBzZWxmLl94aHJXaXRoQ3JlZGVudGlhbHM7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgYmFjay5cbiAgICAgICAgdmFyIGNvZGUgPSAoeGhyLnN0YXR1cyArICcnKVswXTtcbiAgICAgICAgaWYgKGNvZGUgIT09ICcwJyAmJiBjb2RlICE9PSAnMicgJiYgY29kZSAhPT0gJzMnKSB7XG4gICAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ0ZhaWxlZCBsb2FkaW5nIGF1ZGlvIGZpbGUgd2l0aCBzdGF0dXM6ICcgKyB4aHIuc3RhdHVzICsgJy4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCBzZWxmKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciwgc3dpdGNoIHRvIEhUTUw1IEF1ZGlvLlxuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzZWxmLl9odG1sNSA9IHRydWU7XG4gICAgICAgICAgc2VsZi5fd2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgICAgICBkZWxldGUgY2FjaGVbdXJsXTtcbiAgICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHNhZmVYaHJTZW5kKHhocik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBYSFIgcmVxdWVzdCB3cmFwcGVkIGluIGEgdHJ5L2NhdGNoLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHhociBYSFIgdG8gc2VuZC5cbiAgICovXG4gIHZhciBzYWZlWGhyU2VuZCA9IGZ1bmN0aW9uKHhocikge1xuICAgIHRyeSB7XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHhoci5vbmVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWNvZGUgYXVkaW8gZGF0YSBmcm9tIGFuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtICB7QXJyYXlCdWZmZXJ9IGFycmF5YnVmZmVyIFRoZSBhdWRpbyBkYXRhLlxuICAgKiBAcGFyYW0gIHtIb3dsfSAgICAgICAgc2VsZlxuICAgKi9cbiAgdmFyIGRlY29kZUF1ZGlvRGF0YSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyLCBzZWxmKSB7XG4gICAgLy8gRmlyZSBhIGxvYWQgZXJyb3IgaWYgc29tZXRoaW5nIGJyb2tlLlxuICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ0RlY29kaW5nIGF1ZGlvIGRhdGEgZmFpbGVkLicpO1xuICAgIH07XG5cbiAgICAvLyBMb2FkIHRoZSBzb3VuZCBvbiBzdWNjZXNzLlxuICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICBpZiAoYnVmZmVyICYmIHNlbGYuX3NvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNhY2hlW3NlbGYuX3NyY10gPSBidWZmZXI7XG4gICAgICAgIGxvYWRTb3VuZChzZWxmLCBidWZmZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRGVjb2RlIHRoZSBidWZmZXIgaW50byBhbiBhdWRpbyBzb3VyY2UuXG4gICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBIb3dsZXIuY3R4LmRlY29kZUF1ZGlvRGF0YS5sZW5ndGggPT09IDEpIHtcbiAgICAgIEhvd2xlci5jdHguZGVjb2RlQXVkaW9EYXRhKGFycmF5YnVmZmVyKS50aGVuKHN1Y2Nlc3MpLmNhdGNoKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSG93bGVyLmN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlidWZmZXIsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU291bmQgaXMgbm93IGxvYWRlZCwgc28gZmluaXNoIHNldHRpbmcgZXZlcnl0aGluZyB1cCBhbmQgZmlyZSB0aGUgbG9hZGVkIGV2ZW50LlxuICAgKiBAcGFyYW0gIHtIb3dsfSBzZWxmXG4gICAqIEBwYXJhbSAge09iamVjdH0gYnVmZmVyIFRoZSBkZWNvZGVkIGJ1ZmZlciBzb3VuZCBzb3VyY2UuXG4gICAqL1xuICB2YXIgbG9hZFNvdW5kID0gZnVuY3Rpb24oc2VsZiwgYnVmZmVyKSB7XG4gICAgLy8gU2V0IHRoZSBkdXJhdGlvbi5cbiAgICBpZiAoYnVmZmVyICYmICFzZWxmLl9kdXJhdGlvbikge1xuICAgICAgc2VsZi5fZHVyYXRpb24gPSBidWZmZXIuZHVyYXRpb247XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgYSBzcHJpdGUgaWYgbm9uZSBpcyBkZWZpbmVkLlxuICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLl9zcHJpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VsZi5fc3ByaXRlID0ge19fZGVmYXVsdDogWzAsIHNlbGYuX2R1cmF0aW9uICogMTAwMF19O1xuICAgIH1cblxuICAgIC8vIEZpcmUgdGhlIGxvYWRlZCBldmVudC5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgc2VsZi5fZW1pdCgnbG9hZCcpO1xuICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgYXVkaW8gY29udGV4dCB3aGVuIGF2YWlsYWJsZSwgb3Igc3dpdGNoIHRvIEhUTUw1IEF1ZGlvIG1vZGUuXG4gICAqL1xuICB2YXIgc2V0dXBBdWRpb0NvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgZGV0ZWN0ZWQgdGhhdCBXZWIgQXVkaW8gaXNuJ3Qgc3VwcG9ydGVkLCBkb24ndCBydW4gdGhpcyBzdGVwIGFnYWluLlxuICAgIGlmICghSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBhcmUgdXNpbmcgV2ViIEF1ZGlvIGFuZCBzZXR1cCB0aGUgQXVkaW9Db250ZXh0IGlmIHdlIGFyZS5cbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhvd2xlci5jdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhvd2xlci5jdHggPSBuZXcgd2Via2l0QXVkaW9Db250ZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYXVkaW8gY29udGV4dCBjcmVhdGlvbiBzdGlsbCBmYWlsZWQsIHNldCB1c2luZyB3ZWIgYXVkaW8gdG8gZmFsc2UuXG4gICAgaWYgKCFIb3dsZXIuY3R4KSB7XG4gICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGEgd2VidmlldyBpcyBiZWluZyB1c2VkIG9uIGlPUzggb3IgZWFybGllciAocmF0aGVyIHRoYW4gdGhlIGJyb3dzZXIpLlxuICAgIC8vIElmIGl0IGlzLCBkaXNhYmxlIFdlYiBBdWRpbyBhcyBpdCBjYXVzZXMgY3Jhc2hpbmcuXG4gICAgdmFyIGlPUyA9ICgvaVAoaG9uZXxvZHxhZCkvLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IucGxhdGZvcm0pKTtcbiAgICB2YXIgYXBwVmVyc2lvbiA9IEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcbiAgICB2YXIgdmVyc2lvbiA9IGFwcFZlcnNpb24gPyBwYXJzZUludChhcHBWZXJzaW9uWzFdLCAxMCkgOiBudWxsO1xuICAgIGlmIChpT1MgJiYgdmVyc2lvbiAmJiB2ZXJzaW9uIDwgOSkge1xuICAgICAgdmFyIHNhZmFyaSA9IC9zYWZhcmkvLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnN0YW5kYWxvbmUgJiYgIXNhZmFyaSB8fCBIb3dsZXIuX25hdmlnYXRvciAmJiAhSG93bGVyLl9uYXZpZ2F0b3Iuc3RhbmRhbG9uZSAmJiAhc2FmYXJpKSB7XG4gICAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuZCBleHBvc2UgdGhlIG1hc3RlciBHYWluTm9kZSB3aGVuIHVzaW5nIFdlYiBBdWRpbyAodXNlZnVsIGZvciBwbHVnaW5zIG9yIGFkdmFuY2VkIHVzYWdlKS5cbiAgICBpZiAoSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4gPT09ICd1bmRlZmluZWQnKSA/IEhvd2xlci5jdHguY3JlYXRlR2Fpbk5vZGUoKSA6IEhvd2xlci5jdHguY3JlYXRlR2FpbigpO1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShIb3dsZXIuX211dGVkID8gMCA6IDEsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4uY29ubmVjdChIb3dsZXIuY3R4LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZS1ydW4gdGhlIHNldHVwIG9uIEhvd2xlci5cbiAgICBIb3dsZXIuX3NldHVwKCk7XG4gIH07XG5cbiAgLy8gQWRkIHN1cHBvcnQgZm9yIEFNRCAoQXN5bmNocm9ub3VzIE1vZHVsZSBEZWZpbml0aW9uKSBsaWJyYXJpZXMgc3VjaCBhcyByZXF1aXJlLmpzLlxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEhvd2xlcjogSG93bGVyLFxuICAgICAgICBIb3dsOiBIb3dsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQWRkIHN1cHBvcnQgZm9yIENvbW1vbkpTIGxpYnJhcmllcyBzdWNoIGFzIGJyb3dzZXJpZnkuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBvcnRzLkhvd2xlciA9IEhvd2xlcjtcbiAgICBleHBvcnRzLkhvd2wgPSBIb3dsO1xuICB9XG5cbiAgLy8gRGVmaW5lIGdsb2JhbGx5IGluIGNhc2UgQU1EIGlzIG5vdCBhdmFpbGFibGUgb3IgdW51c2VkLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuSG93bGVyR2xvYmFsID0gSG93bGVyR2xvYmFsO1xuICAgIHdpbmRvdy5Ib3dsZXIgPSBIb3dsZXI7XG4gICAgd2luZG93Lkhvd2wgPSBIb3dsO1xuICAgIHdpbmRvdy5Tb3VuZCA9IFNvdW5kO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IC8vIEFkZCB0byBnbG9iYWwgaW4gTm9kZS5qcyAoZm9yIHRlc3RpbmcsIGV0YykuXG4gICAgZ2xvYmFsLkhvd2xlckdsb2JhbCA9IEhvd2xlckdsb2JhbDtcbiAgICBnbG9iYWwuSG93bGVyID0gSG93bGVyO1xuICAgIGdsb2JhbC5Ib3dsID0gSG93bDtcbiAgICBnbG9iYWwuU291bmQgPSBTb3VuZDtcbiAgfVxufSkoKTtcblxuXG4vKiFcbiAqICBTcGF0aWFsIFBsdWdpbiAtIEFkZHMgc3VwcG9ydCBmb3Igc3RlcmVvIGFuZCAzRCBhdWRpbyB3aGVyZSBXZWIgQXVkaW8gaXMgc3VwcG9ydGVkLlxuICogIFxuICogIGhvd2xlci5qcyB2Mi4xLjJcbiAqICBob3dsZXJqcy5jb21cbiAqXG4gKiAgKGMpIDIwMTMtMjAxOSwgSmFtZXMgU2ltcHNvbiBvZiBHb2xkRmlyZSBTdHVkaW9zXG4gKiAgZ29sZGZpcmVzdHVkaW9zLmNvbVxuICpcbiAqICBNSVQgTGljZW5zZVxuICovXG5cbihmdW5jdGlvbigpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gU2V0dXAgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLl9wb3MgPSBbMCwgMCwgMF07XG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUuX29yaWVudGF0aW9uID0gWzAsIDAsIC0xLCAwLCAxLCAwXTtcblxuICAvKiogR2xvYmFsIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBzdGVyZW8gcGFubmluZyBwb3NpdGlvbiBvZiBhbGwgY3VycmVudCBIb3dscy5cbiAgICogRnV0dXJlIEhvd2xzIHdpbGwgbm90IHVzZSB0aGlzIHZhbHVlIHVubGVzcyBleHBsaWNpdGx5IHNldC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBwYW4gQSB2YWx1ZSBvZiAtMS4wIGlzIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDEuMCBpcyBhbGwgdGhlIHdheSByaWdodC5cbiAgICogQHJldHVybiB7SG93bGVyL051bWJlcn0gICAgIFNlbGYgb3IgY3VycmVudCBzdGVyZW8gcGFubmluZyB2YWx1ZS5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUuc3RlcmVvID0gZnVuY3Rpb24ocGFuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLmN0eCB8fCAhc2VsZi5jdHgubGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgSG93bHMgYW5kIHVwZGF0ZSB0aGVpciBzdGVyZW8gcGFubmluZy5cbiAgICBmb3IgKHZhciBpPXNlbGYuX2hvd2xzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIHNlbGYuX2hvd2xzW2ldLnN0ZXJlbyhwYW4pO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIgaW4gM0QgY2FydGVzaWFuIHNwYWNlLiBTb3VuZHMgdXNpbmdcbiAgICogM0QgcG9zaXRpb24gd2lsbCBiZSByZWxhdGl2ZSB0byB0aGUgbGlzdGVuZXIncyBwb3NpdGlvbi5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4IFRoZSB4LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5IFRoZSB5LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6IFRoZSB6LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHJldHVybiB7SG93bGVyL0FycmF5fSAgIFNlbGYgb3IgY3VycmVudCBsaXN0ZW5lciBwb3NpdGlvbi5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBzZWxmLl9wb3NbMl0gOiB6O1xuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgc2VsZi5fcG9zID0gW3gsIHksIHpdO1xuXG4gICAgICBpZiAodHlwZW9mIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIucG9zaXRpb25YLnNldFRhcmdldEF0VGltZShzZWxmLl9wb3NbMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWS5zZXRUYXJnZXRBdFRpbWUoc2VsZi5fcG9zWzFdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblouc2V0VGFyZ2V0QXRUaW1lKHNlbGYuX3Bvc1syXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VsZi5fcG9zO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBkaXJlY3Rpb24gdGhlIGxpc3RlbmVyIGlzIHBvaW50aW5nIGluIHRoZSAzRCBjYXJ0ZXNpYW4gc3BhY2UuXG4gICAqIEEgZnJvbnQgYW5kIHVwIHZlY3RvciBtdXN0IGJlIHByb3ZpZGVkLiBUaGUgZnJvbnQgaXMgdGhlIGRpcmVjdGlvbiB0aGVcbiAgICogZmFjZSBvZiB0aGUgbGlzdGVuZXIgaXMgcG9pbnRpbmcsIGFuZCB1cCBpcyB0aGUgZGlyZWN0aW9uIHRoZSB0b3Agb2YgdGhlXG4gICAqIGxpc3RlbmVyIGlzIHBvaW50aW5nLiBUaHVzLCB0aGVzZSB2YWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGF0IHJpZ2h0IGFuZ2xlc1xuICAgKiBmcm9tIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogICBUaGUgei1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geFVwIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlVcCBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6VXAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBvcmllbnRhdGlvbiB2ZWN0b3JzLlxuICAgKi9cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5vcmllbnRhdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHosIHhVcCwgeVVwLCB6VXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHZhciBvciA9IHNlbGYuX29yaWVudGF0aW9uO1xuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IG9yWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBvclsyXSA6IHo7XG4gICAgeFVwID0gKHR5cGVvZiB4VXAgIT09ICdudW1iZXInKSA/IG9yWzNdIDogeFVwO1xuICAgIHlVcCA9ICh0eXBlb2YgeVVwICE9PSAnbnVtYmVyJykgPyBvcls0XSA6IHlVcDtcbiAgICB6VXAgPSAodHlwZW9mIHpVcCAhPT0gJ251bWJlcicpID8gb3JbNV0gOiB6VXA7XG5cbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IFt4LCB5LCB6LCB4VXAsIHlVcCwgelVwXTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFguc2V0VGFyZ2V0QXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLmZvcndhcmRZLnNldFRhcmdldEF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWi5zZXRUYXJnZXRBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIudXBYLnNldFRhcmdldEF0VGltZSh4LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci51cFkuc2V0VGFyZ2V0QXRUaW1lKHksIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnVwWi5zZXRUYXJnZXRBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHosIHhVcCwgeVVwLCB6VXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqIEdyb3VwIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgcHJvcGVydGllcyB0byB0aGUgY29yZSBpbml0LlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIENvcmUgaW5pdCBtZXRob2QuXG4gICAqIEByZXR1cm4ge0hvd2x9XG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5pbml0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IG8ub3JpZW50YXRpb24gfHwgWzEsIDAsIDBdO1xuICAgICAgc2VsZi5fc3RlcmVvID0gby5zdGVyZW8gfHwgbnVsbDtcbiAgICAgIHNlbGYuX3BvcyA9IG8ucG9zIHx8IG51bGw7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0ge1xuICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8uY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lSW5uZXJBbmdsZSA6IDM2MCxcbiAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyQW5nbGUgOiAzNjAsXG4gICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJHYWluIDogMCxcbiAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8uZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLmRpc3RhbmNlTW9kZWwgOiAnaW52ZXJzZScsXG4gICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLm1heERpc3RhbmNlIDogMTAwMDAsXG4gICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmluZ01vZGVsIDogJ0hSVEYnLFxuICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5yZWZEaXN0YW5jZSA6IDEsXG4gICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5yb2xsb2ZmRmFjdG9yIDogMVxuICAgICAgfTtcblxuICAgICAgLy8gU2V0dXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgc2VsZi5fb25zdGVyZW8gPSBvLm9uc3RlcmVvID8gW3tmbjogby5vbnN0ZXJlb31dIDogW107XG4gICAgICBzZWxmLl9vbnBvcyA9IG8ub25wb3MgPyBbe2ZuOiBvLm9ucG9zfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ub3JpZW50YXRpb24gPSBvLm9ub3JpZW50YXRpb24gPyBbe2ZuOiBvLm9ub3JpZW50YXRpb259XSA6IFtdO1xuXG4gICAgICAvLyBDb21wbGV0ZSBpbml0aWxpemF0aW9uIHdpdGggaG93bGVyLmpzIGNvcmUncyBpbml0IGZ1bmN0aW9uLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG8pO1xuICAgIH07XG4gIH0pKEhvd2wucHJvdG90eXBlLmluaXQpO1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBzdGVyZW8gcGFubmluZyBvZiB0aGUgYXVkaW8gc291cmNlIGZvciB0aGlzIHNvdW5kIG9yIGFsbCBpbiB0aGUgZ3JvdXAuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuICBBIHZhbHVlIG9mIC0xLjAgaXMgYWxsIHRoZSB3YXkgbGVmdCBhbmQgMS4wIGlzIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIChvcHRpb25hbCkgVGhlIHNvdW5kIElELiBJZiBub25lIGlzIHBhc3NlZCwgYWxsIGluIGdyb3VwIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBzdGVyZW8gcGFubmluZyB2YWx1ZS5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBzdGVyZW8gcGFuIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdzdGVyZW8nLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RlcmVvKHBhbiwgaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIFBhbm5lclN0ZXJlb05vZGUgc3VwcG9ydCBhbmQgZmFsbGJhY2sgdG8gUGFubmVyTm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIHZhciBwYW5uZXJUeXBlID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZVN0ZXJlb1Bhbm5lciA9PT0gJ3VuZGVmaW5lZCcpID8gJ3NwYXRpYWwnIDogJ3N0ZXJlbyc7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzdGVyZW8gcGFubmluZyBpZiBubyBJRCBpcyBwYXNzZWQuXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBzdGVyZW8gcGFubmluZyBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHBhbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2VsZi5fc3RlcmVvID0gcGFuO1xuICAgICAgICBzZWxmLl9wb3MgPSBbcGFuLCAwLCAwXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9zdGVyZW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzdHJlbyBwYW5uaW5nIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc291bmQuX3N0ZXJlbyA9IHBhbjtcbiAgICAgICAgICBzb3VuZC5fcG9zID0gW3BhbiwgMCwgMF07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBmYWxsaW5nIGJhY2ssIG1ha2Ugc3VyZSB0aGUgcGFubmluZ01vZGVsIGlzIGVxdWFscG93ZXIuXG4gICAgICAgICAgICBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgPSAnZXF1YWxwb3dlcic7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lciB8fCAhc291bmQuX3Bhbm5lci5wYW4pIHtcbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsIHBhbm5lclR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFubmVyVHlwZSA9PT0gJ3NwYXRpYWwnKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblguc2V0VmFsdWVBdFRpbWUocGFuLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZSgwLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWi5zZXRWYWx1ZUF0VGltZSgwLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHBhbiwgMCwgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucGFuLnNldFZhbHVlQXRUaW1lKHBhbiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnc3RlcmVvJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX3N0ZXJlbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSAzRCBzcGF0aWFsIHBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UgZm9yIHRoaXMgc291bmQgb3IgZ3JvdXAgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgIFRoZSB5LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiAgVGhlIHotcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvQXJyYXl9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCAzRCBzcGF0aWFsIHBvc2l0aW9uOiBbeCwgeSwgel0uXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5wb3MgPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHBvc2l0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdwb3MnLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYucG9zKHgsIHksIHosIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyAwIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyAtMC41IDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgcG9zaXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBwb3NpdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9wb3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzcGF0aWFsIHBvc2l0aW9uIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9wb3MgPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lciB8fCBzb3VuZC5fcGFubmVyLnBhbikge1xuICAgICAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblguc2V0VmFsdWVBdFRpbWUoeCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25ZLnNldFZhbHVlQXRUaW1lKHksIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWi5zZXRWYWx1ZUF0VGltZSh6LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgncG9zJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX3BvcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBkaXJlY3Rpb24gdGhlIGF1ZGlvIHNvdXJjZSBpcyBwb2ludGluZyBpbiB0aGUgM0QgY2FydGVzaWFuIGNvb3JkaW5hdGVcbiAgICogc3BhY2UuIERlcGVuZGluZyBvbiBob3cgZGlyZWN0aW9uIHRoZSBzb3VuZCBpcywgYmFzZWQgb24gdGhlIGBjb25lYCBhdHRyaWJ1dGVzLFxuICAgKiBhIHNvdW5kIHBvaW50aW5nIGF3YXkgZnJvbSB0aGUgbGlzdGVuZXIgY2FuIGJlIHF1aWV0IG9yIHNpbGVudC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgIFRoZSB5LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvQXJyYXl9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCAzRCBzcGF0aWFsIG9yaWVudGF0aW9uOiBbeCwgeSwgel0uXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5vcmllbnRhdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHosIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugb3JpZW50YXRpb24gd2hlbiBjYXBhYmxlLlxuICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICBldmVudDogJ29yaWVudGF0aW9uJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLm9yaWVudGF0aW9uKHgsIHksIHosIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyBzZWxmLl9vcmllbnRhdGlvblsxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gc2VsZi5fb3JpZW50YXRpb25bMl0gOiB6O1xuXG4gICAgLy8gU2V0dXAgdGhlIGdyb3VwJ3Mgc3BhdGlhbCBvcmllbnRhdGlvbiBpZiBubyBJRCBpcyBwYXNzZWQuXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBzcGF0aWFsIG9yaWVudGF0aW9uIGlmIG5vIHBhcmFtZXRlcnMgYXJlIHBhc3NlZC5cbiAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBbeCwgeSwgel07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fb3JpZW50YXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzcGF0aWFsIG9yaWVudGF0aW9uIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9vcmllbnRhdGlvbiA9IFt4LCB5LCB6XTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwYW5uZXIgc2V0dXAgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgaWYgbm90LlxuICAgICAgICAgICAgaWYgKCFzb3VuZC5fcGFubmVyKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcG9zaXRpb24gdG8gc2V0dXAgdGhlIG5vZGUgd2l0aC5cbiAgICAgICAgICAgICAgaWYgKCFzb3VuZC5fcG9zKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3BvcyA9IHNlbGYuX3BvcyB8fCBbMCwgMCwgLTAuNV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblguc2V0VmFsdWVBdFRpbWUoeCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25ZLnNldFZhbHVlQXRUaW1lKHksIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWi5zZXRWYWx1ZUF0VGltZSh6LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0T3JpZW50YXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnb3JpZW50YXRpb24nLCBzb3VuZC5faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzb3VuZC5fb3JpZW50YXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcGFubmVyIG5vZGUncyBhdHRyaWJ1dGVzIGZvciBhIHNvdW5kIG9yIGdyb3VwIG9mIHNvdW5kcy5cbiAgICogVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbCB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAqICAgcGFubmVyQXR0cigpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3MgdmFsdWVzLlxuICAgKiAgIHBhbm5lckF0dHIoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgdmFsdWVzLlxuICAgKiAgIHBhbm5lckF0dHIobykgLT4gU2V0J3MgdGhlIHZhbHVlcyBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICogICBwYW5uZXJBdHRyKG8sIGlkKSAtPiBTZXQncyB0aGUgdmFsdWVzIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICpcbiAgICogICBBdHRyaWJ1dGVzOlxuICAgKiAgICAgY29uZUlubmVyQW5nbGUgLSAoMzYwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIGFuIGFuZ2xlLCBpbiBkZWdyZWVzLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgb2Ygd2hpY2ggdGhlcmUgd2lsbCBiZSBubyB2b2x1bWUgcmVkdWN0aW9uLlxuICAgKiAgICAgY29uZU91dGVyQW5nbGUgLSAoMzYwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIGFuIGFuZ2xlLCBpbiBkZWdyZWVzLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBvdXRzaWRlIG9mIHdoaWNoIHRoZSB2b2x1bWUgd2lsbCBiZSByZWR1Y2VkIHRvIGEgY29uc3RhbnQgdmFsdWUgb2YgYGNvbmVPdXRlckdhaW5gLlxuICAgKiAgICAgY29uZU91dGVyR2FpbiAtICgwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIHRoZSBnYWluIG91dHNpZGUgb2YgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgYGNvbmVPdXRlckFuZ2xlYC4gSXQgaXMgYSBsaW5lYXIgdmFsdWUgaW4gdGhlIHJhbmdlIGBbMCwgMV1gLlxuICAgKiAgICAgZGlzdGFuY2VNb2RlbCAtICgnaW52ZXJzZScgYnkgZGVmYXVsdCkgRGV0ZXJtaW5lcyBhbGdvcml0aG0gdXNlZCB0byByZWR1Y2Ugdm9sdW1lIGFzIGF1ZGlvIG1vdmVzIGF3YXkgZnJvbVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLiBDYW4gYmUgYGxpbmVhcmAsIGBpbnZlcnNlYCBvciBgZXhwb25lbnRpYWwuXG4gICAqICAgICBtYXhEaXN0YW5jZSAtICgxMDAwMCBieSBkZWZhdWx0KSBUaGUgbWF4aW11bSBkaXN0YW5jZSBiZXR3ZWVuIHNvdXJjZSBhbmQgbGlzdGVuZXIsIGFmdGVyIHdoaWNoIHRoZSB2b2x1bWVcbiAgICogICAgICAgICAgICAgICAgICAgd2lsbCBub3QgYmUgcmVkdWNlZCBhbnkgZnVydGhlci5cbiAgICogICAgIHJlZkRpc3RhbmNlIC0gKDEgYnkgZGVmYXVsdCkgQSByZWZlcmVuY2UgZGlzdGFuY2UgZm9yIHJlZHVjaW5nIHZvbHVtZSBhcyBzb3VyY2UgbW92ZXMgZnVydGhlciBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICogICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzaW1wbHkgYSB2YXJpYWJsZSBvZiB0aGUgZGlzdGFuY2UgbW9kZWwgYW5kIGhhcyBhIGRpZmZlcmVudCBlZmZlY3QgZGVwZW5kaW5nIG9uIHdoaWNoIG1vZGVsXG4gICAqICAgICAgICAgICAgICAgICAgIGlzIHVzZWQgYW5kIHRoZSBzY2FsZSBvZiB5b3VyIGNvb3JkaW5hdGVzLiBHZW5lcmFsbHksIHZvbHVtZSB3aWxsIGJlIGVxdWFsIHRvIDEgYXQgdGhpcyBkaXN0YW5jZS5cbiAgICogICAgIHJvbGxvZmZGYWN0b3IgLSAoMSBieSBkZWZhdWx0KSBIb3cgcXVpY2tseSB0aGUgdm9sdW1lIHJlZHVjZXMgYXMgc291cmNlIG1vdmVzIGZyb20gbGlzdGVuZXIuIFRoaXMgaXMgc2ltcGx5IGFcbiAgICogICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSBvZiB0aGUgZGlzdGFuY2UgbW9kZWwgYW5kIGNhbiBiZSBpbiB0aGUgcmFuZ2Ugb2YgYFswLCAxXWAgd2l0aCBgbGluZWFyYCBhbmQgYFswLCDiiJ5dYFxuICAgKiAgICAgICAgICAgICAgICAgICAgIHdpdGggYGludmVyc2VgIGFuZCBgZXhwb25lbnRpYWxgLlxuICAgKiAgICAgcGFubmluZ01vZGVsIC0gKCdIUlRGJyBieSBkZWZhdWx0KSBEZXRlcm1pbmVzIHdoaWNoIHNwYXRpYWxpemF0aW9uIGFsZ29yaXRobSBpcyB1c2VkIHRvIHBvc2l0aW9uIGF1ZGlvLlxuICAgKiAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBgSFJURmAgb3IgYGVxdWFscG93ZXJgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtIb3dsL09iamVjdH0gUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgcGFubmVyIGF0dHJpYnV0ZXMuXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5wYW5uZXJBdHRyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBvLCBpZCwgc291bmQ7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3MgcGFubmVyIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICByZXR1cm4gc2VsZi5fcGFubmVyQXR0cjtcbiAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG8gPSBhcmdzWzBdO1xuXG4gICAgICAgIC8vIFNldCB0aGUgZ3JvdSdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmICghby5wYW5uZXJBdHRyKSB7XG4gICAgICAgICAgICBvLnBhbm5lckF0dHIgPSB7XG4gICAgICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiBvLmNvbmVJbm5lckFuZ2xlLFxuICAgICAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogby5jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICAgICAgY29uZU91dGVyR2Fpbjogby5jb25lT3V0ZXJHYWluLFxuICAgICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiBvLmRpc3RhbmNlTW9kZWwsXG4gICAgICAgICAgICAgIG1heERpc3RhbmNlOiBvLm1heERpc3RhbmNlLFxuICAgICAgICAgICAgICByZWZEaXN0YW5jZTogby5yZWZEaXN0YW5jZSxcbiAgICAgICAgICAgICAgcm9sbG9mZkZhY3Rvcjogby5yb2xsb2ZmRmFjdG9yLFxuICAgICAgICAgICAgICBwYW5uaW5nTW9kZWw6IG8ucGFubmluZ01vZGVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSB7XG4gICAgICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lSW5uZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZUlubmVyQW5nbGUgOiBzZWxmLl9jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5jb25lT3V0ZXJBbmdsZSA6IHNlbGYuX2NvbmVPdXRlckFuZ2xlLFxuICAgICAgICAgICAgY29uZU91dGVyR2FpbjogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5jb25lT3V0ZXJHYWluIDogc2VsZi5fY29uZU91dGVyR2FpbixcbiAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLnBhbm5lckF0dHIuZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuZGlzdGFuY2VNb2RlbCA6IHNlbGYuX2Rpc3RhbmNlTW9kZWwsXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ucGFubmVyQXR0ci5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIubWF4RGlzdGFuY2UgOiBzZWxmLl9tYXhEaXN0YW5jZSxcbiAgICAgICAgICAgIHJlZkRpc3RhbmNlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5yZWZEaXN0YW5jZSA6IHNlbGYuX3JlZkRpc3RhbmNlLFxuICAgICAgICAgICAgcm9sbG9mZkZhY3RvcjogdHlwZW9mIG8ucGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yIDogc2VsZi5fcm9sbG9mZkZhY3RvcixcbiAgICAgICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbCA6IHNlbGYuX3Bhbm5pbmdNb2RlbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiB0aGlzIHNvdW5kJ3MgcGFubmVyIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKHBhcnNlSW50KGFyZ3NbMF0sIDEwKSk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9wYW5uZXJBdHRyIDogc2VsZi5fcGFubmVyQXR0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICBvID0gYXJnc1swXTtcbiAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWVzIG9mIHRoZSBzcGVjaWZpZWQgc291bmRzLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIC8vIE1lcmdlIHRoZSBuZXcgdmFsdWVzIGludG8gdGhlIHNvdW5kLlxuICAgICAgICB2YXIgcGEgPSBzb3VuZC5fcGFubmVyQXR0cjtcbiAgICAgICAgcGEgPSB7XG4gICAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZUlubmVyQW5nbGUgOiBwYS5jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogdHlwZW9mIG8uY29uZU91dGVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJBbmdsZSA6IHBhLmNvbmVPdXRlckFuZ2xlLFxuICAgICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJHYWluIDogcGEuY29uZU91dGVyR2FpbixcbiAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0eXBlb2Ygby5kaXN0YW5jZU1vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8uZGlzdGFuY2VNb2RlbCA6IHBhLmRpc3RhbmNlTW9kZWwsXG4gICAgICAgICAgbWF4RGlzdGFuY2U6IHR5cGVvZiBvLm1heERpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ubWF4RGlzdGFuY2UgOiBwYS5tYXhEaXN0YW5jZSxcbiAgICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5yZWZEaXN0YW5jZSA6IHBhLnJlZkRpc3RhbmNlLFxuICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5yb2xsb2ZmRmFjdG9yIDogcGEucm9sbG9mZkZhY3RvcixcbiAgICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5pbmdNb2RlbCA6IHBhLnBhbm5pbmdNb2RlbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgcGFubmVyIHZhbHVlcyBvciBjcmVhdGUgYSBuZXcgcGFubmVyIGlmIG5vbmUgZXhpc3RzLlxuICAgICAgICB2YXIgcGFubmVyID0gc291bmQuX3Bhbm5lcjtcbiAgICAgICAgaWYgKHBhbm5lcikge1xuICAgICAgICAgIHBhbm5lci5jb25lSW5uZXJBbmdsZSA9IHBhLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgICAgIHBhbm5lci5jb25lT3V0ZXJBbmdsZSA9IHBhLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgICAgIHBhbm5lci5jb25lT3V0ZXJHYWluID0gcGEuY29uZU91dGVyR2FpbjtcbiAgICAgICAgICBwYW5uZXIuZGlzdGFuY2VNb2RlbCA9IHBhLmRpc3RhbmNlTW9kZWw7XG4gICAgICAgICAgcGFubmVyLm1heERpc3RhbmNlID0gcGEubWF4RGlzdGFuY2U7XG4gICAgICAgICAgcGFubmVyLnJlZkRpc3RhbmNlID0gcGEucmVmRGlzdGFuY2U7XG4gICAgICAgICAgcGFubmVyLnJvbGxvZmZGYWN0b3IgPSBwYS5yb2xsb2ZmRmFjdG9yO1xuICAgICAgICAgIHBhbm5lci5wYW5uaW5nTW9kZWwgPSBwYS5wYW5uaW5nTW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBwb3NpdGlvbiB0byBzZXR1cCB0aGUgbm9kZSB3aXRoLlxuICAgICAgICAgIGlmICghc291bmQuX3Bvcykge1xuICAgICAgICAgICAgc291bmQuX3BvcyA9IHNlbGYuX3BvcyB8fCBbMCwgMCwgLTAuNV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhbm5lciBub2RlLlxuICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCAnc3BhdGlhbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqIFNpbmdsZSBTb3VuZCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlIGNvcmUgU291bmQgaW5pdC5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBDb3JlIFNvdW5kIGluaXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICovXG4gIFNvdW5kLnByb3RvdHlwZS5pbml0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IHBhcmVudC5fb3JpZW50YXRpb247XG4gICAgICBzZWxmLl9zdGVyZW8gPSBwYXJlbnQuX3N0ZXJlbztcbiAgICAgIHNlbGYuX3BvcyA9IHBhcmVudC5fcG9zO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHBhcmVudC5fcGFubmVyQXR0cjtcblxuICAgICAgLy8gQ29tcGxldGUgaW5pdGlsaXphdGlvbiB3aXRoIGhvd2xlci5qcyBjb3JlIFNvdW5kJ3MgaW5pdCBmdW5jdGlvbi5cbiAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgICAvLyBJZiBhIHN0ZXJlbyBvciBwb3NpdGlvbiB3YXMgc3BlY2lmaWVkLCBzZXQgaXQgdXAuXG4gICAgICBpZiAoc2VsZi5fc3RlcmVvKSB7XG4gICAgICAgIHBhcmVudC5zdGVyZW8oc2VsZi5fc3RlcmVvKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5fcG9zKSB7XG4gICAgICAgIHBhcmVudC5wb3Moc2VsZi5fcG9zWzBdLCBzZWxmLl9wb3NbMV0sIHNlbGYuX3Bvc1syXSwgc2VsZi5faWQpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKFNvdW5kLnByb3RvdHlwZS5pbml0KTtcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIFNvdW5kLnJlc2V0IG1ldGhvZCB0byBjbGVhbiB1cCBwcm9wZXJ0aWVzIGZyb20gdGhlIHNwYXRpYWwgcGx1Z2luLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIFNvdW5kIHJlc2V0IG1ldGhvZC5cbiAgICogQHJldHVybiB7U291bmR9XG4gICAqL1xuICBTb3VuZC5wcm90b3R5cGUucmVzZXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gUmVzZXQgYWxsIHNwYXRpYWwgcGx1Z2luIHByb3BlcnRpZXMgb24gdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gcGFyZW50Ll9vcmllbnRhdGlvbjtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhcmVudC5fc3RlcmVvO1xuICAgICAgc2VsZi5fcG9zID0gcGFyZW50Ll9wb3M7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0gcGFyZW50Ll9wYW5uZXJBdHRyO1xuXG4gICAgICAvLyBJZiBhIHN0ZXJlbyBvciBwb3NpdGlvbiB3YXMgc3BlY2lmaWVkLCBzZXQgaXQgdXAuXG4gICAgICBpZiAoc2VsZi5fc3RlcmVvKSB7XG4gICAgICAgIHBhcmVudC5zdGVyZW8oc2VsZi5fc3RlcmVvKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5fcG9zKSB7XG4gICAgICAgIHBhcmVudC5wb3Moc2VsZi5fcG9zWzBdLCBzZWxmLl9wb3NbMV0sIHNlbGYuX3Bvc1syXSwgc2VsZi5faWQpO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLl9wYW5uZXIpIHtcbiAgICAgICAgLy8gRGlzY29ubmVjdCB0aGUgcGFubmVyLlxuICAgICAgICBzZWxmLl9wYW5uZXIuZGlzY29ubmVjdCgwKTtcbiAgICAgICAgc2VsZi5fcGFubmVyID0gdW5kZWZpbmVkO1xuICAgICAgICBwYXJlbnQuX3JlZnJlc2hCdWZmZXIoc2VsZik7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbXBsZXRlIHJlc2V0dGluZyBvZiB0aGUgc291bmQuXG4gICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgfSkoU291bmQucHJvdG90eXBlLnJlc2V0KTtcblxuICAvKiogSGVscGVyIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBwYW5uZXIgbm9kZSBhbmQgc2F2ZSBpdCBvbiB0aGUgc291bmQuXG4gICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBTcGVjaWZpYyBzb3VuZCB0byBzZXR1cCBwYW5uaW5nIG9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUeXBlIG9mIHBhbm5lciB0byBjcmVhdGU6ICdzdGVyZW8nIG9yICdzcGF0aWFsJy5cbiAgICovXG4gIHZhciBzZXR1cFBhbm5lciA9IGZ1bmN0aW9uKHNvdW5kLCB0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUgfHwgJ3NwYXRpYWwnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcGFubmVyIG5vZGUuXG4gICAgaWYgKHR5cGUgPT09ICdzcGF0aWFsJykge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVJbm5lckFuZ2xlID0gc291bmQuX3Bhbm5lckF0dHIuY29uZUlubmVyQW5nbGU7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVPdXRlckFuZ2xlID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyQW5nbGU7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVPdXRlckdhaW4gPSBzb3VuZC5fcGFubmVyQXR0ci5jb25lT3V0ZXJHYWluO1xuICAgICAgc291bmQuX3Bhbm5lci5kaXN0YW5jZU1vZGVsID0gc291bmQuX3Bhbm5lckF0dHIuZGlzdGFuY2VNb2RlbDtcbiAgICAgIHNvdW5kLl9wYW5uZXIubWF4RGlzdGFuY2UgPSBzb3VuZC5fcGFubmVyQXR0ci5tYXhEaXN0YW5jZTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucmVmRGlzdGFuY2UgPSBzb3VuZC5fcGFubmVyQXR0ci5yZWZEaXN0YW5jZTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucm9sbG9mZkZhY3RvciA9IHNvdW5kLl9wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3I7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbm5pbmdNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbDtcblxuICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblguc2V0VmFsdWVBdFRpbWUoc291bmQuX3Bvc1swXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25ZLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9wb3NbMV0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcG9zWzJdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0UG9zaXRpb24oc291bmQuX3Bvc1swXSwgc291bmQuX3Bvc1sxXSwgc291bmQuX3Bvc1syXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9vcmllbnRhdGlvblswXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25ZLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9vcmllbnRhdGlvblsxXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25aLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9vcmllbnRhdGlvblsyXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHNvdW5kLl9vcmllbnRhdGlvblswXSwgc291bmQuX29yaWVudGF0aW9uWzFdLCBzb3VuZC5fb3JpZW50YXRpb25bMl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3VuZC5fcGFubmVyID0gSG93bGVyLmN0eC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucGFuLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9zdGVyZW8sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHNvdW5kLl9wYW5uZXIuY29ubmVjdChzb3VuZC5fbm9kZSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNvbm5lY3Rpb25zLlxuICAgIGlmICghc291bmQuX3BhdXNlZCkge1xuICAgICAgc291bmQuX3BhcmVudC5wYXVzZShzb3VuZC5faWQsIHRydWUpLnBsYXkoc291bmQuX2lkLCB0cnVlKTtcbiAgICB9XG4gIH07XG59KSgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==