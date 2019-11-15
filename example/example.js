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

/***/ "./classes/GameStage.ts":
/*!******************************!*\
  !*** ./classes/GameStage.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameStage = /** @class */ (function () {
    function GameStage(config) {
        this.logicQueue = [];
        this.renderQueue = [];
        this.onClickQueue = [];
        this.entities = [];
        this.onClickQueue = config.onClickQueue ? config.onClickQueue : [];
        this.onTouchQueue = config.onTouchQueue ? config.onTouchQueue : [];
        this.collisionQueue = [];
        this.interactors = [];
        this.populateEntities(config.entities);
    }
    GameStage.prototype.populateEntities = function (entities) {
        var _this = this;
        entities.forEach(function (entity) {
            var interactable = entity;
            if (interactable.interactive) {
                _this.interactors.push(interactable);
            }
            var logical = entity;
            if (logical.logical) {
                _this.logicQueue.push(logical);
            }
            var renderable = entity;
            if (renderable.renderable) {
                _this.renderQueue.push(renderable);
            }
            var collidable = entity;
            if (collidable.collidable) {
                _this.collisionQueue.push(collidable);
            }
        });
    };
    return GameStage;
}());
exports.default = GameStage;


/***/ }),

/***/ "./example/example.ts":
/*!****************************!*\
  !*** ./example/example.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! .. */ "./index.ts");
var GameStage_1 = __webpack_require__(/*! ../classes/GameStage */ "./classes/GameStage.ts");
function startGame() {
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
    var myStage = new GameStage_1.default({ entities: [myPlayer] });
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
                _this.setupKeyboardBinding();
            });
        });
    }
    FiskGame.prototype.setupKeyboardBinding = function () {
        var _this = this;
        this.currentKeys = [];
        document.addEventListener('keydown', function (event) {
            var index = _this.currentKeys.indexOf(event.key);
            if (index < 0) {
                _this.currentKeys.push(event.key);
            }
        }, false);
        document.addEventListener('keyup', function (event) {
            var index = _this.currentKeys.indexOf(event.key);
            if (index >= 0) {
                _this.currentKeys.splice(index, 1);
            }
        }, false);
    };
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
                func(event, _this);
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
            this.currentStage.onTouchQueue.forEach(function (func) {
                func(event, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xhc3Nlcy9HYW1lU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9leGFtcGxlLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob3dsZXIvZGlzdC9ob3dsZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7SUFTQyxtQkFBWSxNQUF1QjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BsR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGUvZXhhbXBsZS50c1wiKTtcbiIsImltcG9ydCBpR2FtZVN0YWdlIGZyb20gXCIuLi9pbnRlcmZhY2VzL0dhbWVTdGFnZVwiO1xuXG5pbXBvcnQgTG9naWNhbCBmcm9tIFwiLi4vaW50ZXJmYWNlcy9Mb2dpY2FsXCI7XG5cbmltcG9ydCBSZW5kZXJhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL1JlbmRlcmFibGVcIjtcblxuaW1wb3J0IEludGVyYWN0YWJsZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JbnRlcmFjdGFibGVcIjtcblxuaW1wb3J0IEZpc2tHYW1lIGZyb20gXCIuLlwiO1xuXG5pbXBvcnQgR2FtZUVudGl0eSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9HYW1lRW50aXR5XCI7XG5pbXBvcnQgR2FtZVN0YWdlQ29uZmlnIGZyb20gXCIuLi9jb25maWdzL0dhbWVTdGFnZS5jb25maWdcIjtcbmltcG9ydCBDb2xsaWRhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL0NvbGxpZGFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YWdlIGltcGxlbWVudHMgaUdhbWVTdGFnZSB7XG5cdGxvZ2ljUXVldWU6IExvZ2ljYWxbXTtcblx0cmVuZGVyUXVldWU6IFJlbmRlcmFibGVbXTtcbiAgICBvbkNsaWNrUXVldWU6ICgoZXZlbnQ6IE1vdXNlRXZlbnQsIGdhbWU6IEZpc2tHYW1lKSA9PiB2b2lkKVtdO1xuICAgIG9uVG91Y2hRdWV1ZTogKChldmVudDogVG91Y2hFdmVudCwgZ2FtZTogRmlza0dhbWUpID0+IHZvaWQpW107XG4gICAgZW50aXRpZXM6IEdhbWVFbnRpdHlbXTtcbiAgICBjb2xsaXNpb25RdWV1ZTogQ29sbGlkYWJsZVtdO1xuICAgIGludGVyYWN0b3JzOiBJbnRlcmFjdGFibGVbXTtcbiAgICBcblx0Y29uc3RydWN0b3IoY29uZmlnOiBHYW1lU3RhZ2VDb25maWcpIHtcblx0XHR0aGlzLmxvZ2ljUXVldWUgPSBbXTtcblx0XHR0aGlzLnJlbmRlclF1ZXVlID0gW107XG5cdFx0dGhpcy5vbkNsaWNrUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuICAgICAgICB0aGlzLm9uQ2xpY2tRdWV1ZSA9IGNvbmZpZy5vbkNsaWNrUXVldWUgPyBjb25maWcub25DbGlja1F1ZXVlIDogW107XG4gICAgICAgIHRoaXMub25Ub3VjaFF1ZXVlID0gY29uZmlnLm9uVG91Y2hRdWV1ZSA/IGNvbmZpZy5vblRvdWNoUXVldWUgOiBbXTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25RdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmludGVyYWN0b3JzID0gW107XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZUVudGl0aWVzKGNvbmZpZy5lbnRpdGllcyk7XG4gICAgfVxuICAgIFxuICAgIHBvcHVsYXRlRW50aXRpZXMoZW50aXRpZXM6IEdhbWVFbnRpdHlbXSkge1xuICAgICAgICBlbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGFibGUgPSBlbnRpdHkgYXMgSW50ZXJhY3RhYmxlO1xuICAgICAgICAgICAgaWYoaW50ZXJhY3RhYmxlLmludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdG9ycy5wdXNoKGludGVyYWN0YWJsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ2ljYWwgPSBlbnRpdHkgYXMgTG9naWNhbDtcbiAgICAgICAgICAgIGlmKGxvZ2ljYWwubG9naWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naWNRdWV1ZS5wdXNoKGxvZ2ljYWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJhYmxlID0gZW50aXR5IGFzIFJlbmRlcmFibGU7XG4gICAgICAgICAgICBpZihyZW5kZXJhYmxlLnJlbmRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclF1ZXVlLnB1c2gocmVuZGVyYWJsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbGxpZGFibGUgPSBlbnRpdHkgYXMgQ29sbGlkYWJsZTtcbiAgICAgICAgICAgIGlmKGNvbGxpZGFibGUuY29sbGlkYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uUXVldWUucHVzaChjb2xsaWRhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBMb2dpY2FsIGZyb20gXCIuLi9pbnRlcmZhY2VzL0xvZ2ljYWxcIjtcbmltcG9ydCBSZW5kZXJhYmxlIGZyb20gXCIuLi9pbnRlcmZhY2VzL1JlbmRlcmFibGVcIjtcbmltcG9ydCBGaXNrR2FtZSBmcm9tIFwiLi5cIjtcbmltcG9ydCBHYW1lU3RhZ2UgZnJvbSBcIi4uL2NsYXNzZXMvR2FtZVN0YWdlXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjbGFzcyBQbGF5ZXIgaW1wbGVtZW50cyBMb2dpY2FsLCBSZW5kZXJhYmxlIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7fVxuICAgICAgICB4ID0gMjAwO1xuICAgICAgICB5ID0gNTAwO1xuICAgICAgICB3aWR0aCA9IDIwMDtcbiAgICAgICAgaGVpZ2h0ID0gMzUwO1xuICAgICAgICBsb2dpY2FsID0gdHJ1ZTtcbiAgICAgICAgbG9naWMgPSAoKSA9PiB7fVxuICAgICAgICByZW5kZXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgcmVuZGVyID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG15UGxheWVyID0gbmV3IFBsYXllcigpO1xuXG4gICAgY29uc3QgbXlTdGFnZSA9IG5ldyBHYW1lU3RhZ2Uoe2VudGl0aWVzOiBbbXlQbGF5ZXJdfSk7XG5cbiAgICBjb25zdCBteUdhbWUgPSBuZXcgRmlza0dhbWUoe1xuICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICAgIHNlbGVjdG9yOiAnLmNvbnRhaW5lcicsXG4gICAgICAgIGluaXRpYWxTdGFnZTogbXlTdGFnZVxuICAgIH0pO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gd2luZG93IGFzIGFueVxuX2dsb2JhbC5zdGFydEdhbWUgPSBzdGFydEdhbWUiLCJpbXBvcnQgR2FtZUVudGl0eSBmcm9tIFwiLi9pbnRlcmZhY2VzL0dhbWVFbnRpdHlcIjtcbmltcG9ydCBpR2FtZVN0YWdlIGZyb20gXCIuL2ludGVyZmFjZXMvR2FtZVN0YWdlXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9jb25maWdzL0dhbWVDb25maWdcIjtcbmltcG9ydCBJbnRlcmFjdGFibGUgZnJvbSBcIi4vaW50ZXJmYWNlcy9JbnRlcmFjdGFibGVcIjtcbmltcG9ydCBTb3VuZENvbmZpZyBmcm9tIFwiLi9pbnRlcmZhY2VzL1NvdW5kQ29uZmlnXCI7XG5pbXBvcnQgSW1hZ2VNYXAgZnJvbSBcIi4vaW50ZXJmYWNlcy9JbWFnZU1hcFwiO1xuaW1wb3J0IFNvdW5kTWFwIGZyb20gXCIuL2ludGVyZmFjZXMvU291bmRNYXBcIjtcbmltcG9ydCB7SG93bH0gZnJvbSBcImhvd2xlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXNrR2FtZSB7XG5cdGhlaWdodDogbnVtYmVyO1xuXHR3aWR0aDogbnVtYmVyO1xuXHRjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXHRjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXHRwbGF5ZXI6IGFueTtcblx0Y3VzdG9tQ29sbGlzaW9uOiAoYTogR2FtZUVudGl0eSwgYjogR2FtZUVudGl0eSkgPT4gYW55IHwgbnVsbDtcblx0Y3VycmVudFN0YWdlOiBpR2FtZVN0YWdlO1xuICAgIGxvZ2ljTG9vcDogbnVtYmVyO1xuXHRpbWFnZXNMb2FkZWQ6IG51bWJlciA9IDA7XG5cdHRvdGFsSW1hZ2VzOiBudW1iZXIgPSAwO1xuXHRpbWFnZXM6IEltYWdlTWFwO1xuXHRzb3VuZHNMb2FkZWQ6IG51bWJlciA9IDA7XG5cdHRvdGFsU291bmRzOiBudW1iZXIgPSAwO1xuXHRzb3VuZHM6IFNvdW5kTWFwO1xuXHRzb3VuZE5hbWVzOiBzdHJpbmdbXTtcblx0Y3VycmVudEtleXM6IHN0cmluZ1tdO1xuXG5cdGNvbnN0cnVjdG9yKHsgXG5cdFx0aGVpZ2h0LCBcblx0XHR3aWR0aCwgXG5cdFx0aW1hZ2VzID0gW10sIFxuXHRcdHNvdW5kcyA9IFtdLCBcblx0XHRzZWxlY3RvciwgXG5cdFx0aW1hZ2VTbW9vdGhpbmcgPSBmYWxzZSxcblx0XHRjdXN0b21Db2xsaXNpb24gPSBudWxsLFxuXHRcdGluaXRpYWxTdGFnZVxuXHR9OiBHYW1lQ29uZmlnKSB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVNYWluQ2FudmFzKHNlbGVjdG9yKTtcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdHRoaXMuY3R4ID0gdGhpcy5jb250ZXh0IGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblx0XHR0aGlzLnVwZGF0ZVNjYWxlKCk7XG5cdFx0dGhpcy5iaW5kU2NyZWVuUmVzaXplKCk7XG5cdFx0dGhpcy5zZXRJbWFnZVNtb290aGluZyhpbWFnZVNtb290aGluZyk7XG5cdFx0dGhpcy5jdXN0b21Db2xsaXNpb24gPSBjdXN0b21Db2xsaXNpb247XG5cdFx0dGhpcy50b3RhbEltYWdlcyA9IGltYWdlcy5sZW5ndGg7XG5cdFx0dGhpcy5jdXJyZW50U3RhZ2UgPSBpbml0aWFsU3RhZ2U7XG5cblx0XHR0aGlzLnByZWxvYWRJbWFnZXMoaW1hZ2VzLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRTb3VuZHMoc291bmRzLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9naWNMb29wID0gd2luZG93LnNldEludGVydmFsKHRoaXMubG9naWMuYmluZCh0aGlzKSwgMzMpO1xuXHRcdFx0XHR0aGlzLmJpbmRDbGljaygpO1xuXHRcdFx0XHR0aGlzLnNldHVwS2V5Ym9hcmRCaW5kaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cdH1cblxuXHRzZXR1cEtleWJvYXJkQmluZGluZygpIHtcblx0XHR0aGlzLmN1cnJlbnRLZXlzID0gW107XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jdXJyZW50S2V5cy5pbmRleE9mKGV2ZW50LmtleSk7XG4gICAgICAgICAgICBpZihpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRLZXlzLnB1c2goZXZlbnQua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmN1cnJlbnRLZXlzLmluZGV4T2YoZXZlbnQua2V5KTtcbiAgICAgICAgICAgIGlmKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRLZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cblx0c3RvcEFsbFNvdW5kcygpIHtcbiAgICAgICAgdGhpcy5zb3VuZE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kc1tuYW1lXS5zdG9wKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblx0XG5cdHByZWxvYWRJbWFnZXMoYXJyOiBzdHJpbmdbXSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgZnVuY3Rpb24gbGFzdChnYW1lOiBGaXNrR2FtZSwgcGFzc2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIGdhbWUuaW1hZ2VzTG9hZGVkICs9IDE7XG4gICAgICAgICAgICBpZihnYW1lLmltYWdlc0xvYWRlZCA9PT0gZ2FtZS50b3RhbEltYWdlcykge1xuICAgICAgICAgICAgICAgIHBhc3NlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGFyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRhcnIuZm9yRWFjaCh1cmwgPT4ge1xuXHRcdFx0XHRsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzW3VybF0gPSBpbWFnZTtcblx0XHRcdFx0XHRsYXN0KHRoaXMsIGNhbGxiYWNrKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9XG5cdFxuXHRwcmVsb2FkU291bmRzKGFycjogU291bmRDb25maWdbXSwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgZnVuY3Rpb24gbGFzdChnYW1lOiBGaXNrR2FtZSwgcGFzc2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIGdhbWUuc291bmRzTG9hZGVkICs9IDE7XG4gICAgICAgICAgICBpZihnYW1lLnNvdW5kc0xvYWRlZCA9PT0gZ2FtZS50b3RhbFNvdW5kcykge1xuICAgICAgICAgICAgICAgIHBhc3NlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGFyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRhcnIuZm9yRWFjaChvcHRpb25zID0+IHtcblx0XHRcdFx0b3B0aW9ucy5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0bGFzdCh0aGlzLCBjYWxsYmFjayk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuc291bmRzW29wdGlvbnMubmFtZV0gPSBuZXcgSG93bChvcHRpb25zKTtcblx0XHRcdFx0dGhpcy5zb3VuZE5hbWVzLnB1c2gob3B0aW9ucy5uYW1lKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IHNjYWxlKCkge1xuICAgICAgICBjb25zdCBzY2FsZVggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBzY2FsZVkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjYWxlVG9GaXQgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgIHJldHVybiBzY2FsZVRvRml0O1xuICAgIH1cblxuICAgIHVwZGF0ZVNjYWxlKCkge1xuXHRcdGNvbnN0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgY29uc3QgY2FudmFzU2l6ZSA9IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoICogc2NhbGU7XG4gICAgICAgIGNvbnN0IGRpZmYgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNhbnZhc1NpemU7XG4gICAgICAgIGNvbnN0IGluaXRUcmFuc2xhdGVYID0gKCh3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuY2FudmFzLm9mZnNldFdpZHRoKSAvIDIpO1xuICAgICAgICBjb25zdCBpbml0VHJhbnNsYXRlWSA9ICgod2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0KSAvIDIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnNTAlIDUwJSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aW5pdFRyYW5zbGF0ZVh9cHgpIHRyYW5zbGF0ZVkoJHtpbml0VHJhbnNsYXRlWX1weCkgc2NhbGUoJHtzY2FsZX0pYDtcblx0fVxuXHRcblx0YmluZFNjcmVlblJlc2l6ZSgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTY2FsZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cdH1cblx0XG5cdGdldENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IGV2ZW50Lm9mZnNldFggLSA1LFxuXHRcdFx0eTogZXZlbnQub2Zmc2V0WSAtIDUsXG5cdFx0XHR3aWR0aDogMTAsXG5cdFx0XHRoZWlnaHQ6IDEwXG5cdFx0fVxuXHR9XG5cdFxuXHRnZXRUb3VjaChldmVudDogVG91Y2hFdmVudCwgZ2FtZTogRmlza0dhbWUpIHtcblx0XHRjb25zdCBjYW52YXNCb3VuZHMgPSBnYW1lLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBjYW52YXNCb3VuZHMubGVmdDtcblx0XHRjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBjYW52YXNCb3VuZHMudG9wO1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiAoeCAvIGdhbWUuc2NhbGUpIC0gNSxcblx0XHRcdHk6ICh5IC8gZ2FtZS5zY2FsZSkgLSA1LFxuXHRcdFx0d2lkdGg6IDEwLFxuXHRcdFx0aGVpZ2h0OiAxMFxuXHRcdH1cblx0fVxuXHRcblx0b25DbGljayhldmVudDogTW91c2VFdmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgY2xpY2sgPSAgdGhpcy5nZXRDbGljayhldmVudCk7XG5cblx0XHRsZXQgY2xpY2tlZDpJbnRlcmFjdGFibGU7XG5cdFx0dGhpcy5jdXJyZW50U3RhZ2UuaW50ZXJhY3RvcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdGlmKHRoaXMuc2ltcGxlQ29sbGlzaW9uQ2hlY2soY2xpY2sgYXMgR2FtZUVudGl0eSwgZWxlbWVudCBhcyBJbnRlcmFjdGFibGUpKSB7XG5cdFx0XHRcdGNsaWNrZWQgPSBlbGVtZW50O1xuXHRcdFx0fVxuXHRcdH0pO1xuICAgICAgICBcbiAgICAgICAgaWYoIWNsaWNrZWQpe1xuXHRcdFx0dGhpcy5jdXJyZW50U3RhZ2Uub25DbGlja1F1ZXVlLmZvckVhY2goZnVuYyA9PiB7XG5cdFx0XHRcdGZ1bmMoZXZlbnQsIHRoaXMpO1xuXHRcdFx0fSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2xpY2tlZC5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfVxuXHR9XG5cdFxuXHRvblRvdWNoKGV2ZW50OiBUb3VjaEV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goZXZlbnQsIHRoaXMpO1xuXG5cdFx0bGV0IHRvdWNoZWQ6IEludGVyYWN0YWJsZTtcblx0XHR0aGlzLmN1cnJlbnRTdGFnZS5pbnRlcmFjdG9ycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0aWYodGhpcy5zaW1wbGVDb2xsaXNpb25DaGVjayh0b3VjaCBhcyBHYW1lRW50aXR5LCBlbGVtZW50KSkge1xuXHRcdFx0XHR0b3VjaGVkID0gZWxlbWVudDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmKCF0b3VjaGVkKXtcblx0XHRcdHRoaXMuY3VycmVudFN0YWdlLm9uVG91Y2hRdWV1ZS5mb3JFYWNoKGZ1bmMgPT4ge1xuXHRcdFx0XHRmdW5jKGV2ZW50LCB0aGlzKTtcblx0XHRcdH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRvdWNoZWQub25Ub3VjaChldmVudCwgdGhpcyk7XG4gICAgICAgIH1cblx0fVxuXHRcblx0YmluZENsaWNrKCkge1xuXHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0Y3JlYXRlTWFpbkNhbnZhcyhzZWxlY3Rvcjogc3RyaW5nKSA6IEhUTUxDYW52YXNFbGVtZW50IHtcblx0XHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0Y29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRcdGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0Y2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuXHRcdHJldHVybiBjYW52YXM7XG5cdH1cblx0XG5cdHNldEltYWdlU21vb3RoaW5nKHNtb290aGluZzogYm9vbGVhbikge1xuXHRcdC8vIHRoaXMuY3R4Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHNtb290aGluZztcblx0XHQvLyB0aGlzLmN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzbW9vdGhpbmc7XG5cdFx0dGhpcy5jdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc21vb3RoaW5nO1xuXHR9XG5cdFxuXHRyZW5kZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblx0XHR0aGlzLmN1cnJlbnRTdGFnZS5yZW5kZXJRdWV1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0ZWxlbWVudC5yZW5kZXIodGhpcy5jdHgpO1xuXHRcdH0pO1xuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG5cdH1cblx0XG5cdGNvbGxpc2lvbkNoZWNrKGE6IEdhbWVFbnRpdHksIGI6IEdhbWVFbnRpdHkpOiBib29sZWFuIHwgYW55IHtcblx0XHRpZih0aGlzLmN1c3RvbUNvbGxpc2lvbiAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VzdG9tQ29sbGlzaW9uKGEsIGIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVDb2xsaXNpb25DaGVjayhhLCBiKTtcblx0XHR9XG5cdH1cblx0XG5cdHNpbXBsZUNvbGxpc2lvbkNoZWNrKGE6IEdhbWVFbnRpdHksIGI6IEdhbWVFbnRpdHkpOiBib29sZWFuIHtcblx0XHRpZiAoKGEueCA+PSBiLnggJiYgYS54IDw9IGIueCArIGIud2lkdGgpIHx8XG5cdFx0XHQoYS54ICsgYS53aWR0aCA+PSBiLnggJiYgYS54ICsgYS53aWR0aCA8PSBiLnggKyBiLndpZHRoKSkge1xuXHRcdFx0XHRpZiAoKGEueSA+PSBiLnkgJiYgYS55IDw9IGIueSArIGIuaGVpZ2h0KSB8fCBcblx0XHRcdFx0XHRcdChhLnkgKyBhLmhlaWdodCA+PSBiLnkgJiYgYS55ICsgYS5oZWlnaHQgPD0gYi55ICsgYi5oZWlnaHQpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0bG9naWMoKSB7XG5cdFx0dGhpcy5jdXJyZW50U3RhZ2UubG9naWNRdWV1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0ZWxlbWVudC5sb2dpYyh0aGlzKTtcblx0XHR9KTtcblx0fVxuXHRcbn0iLCIvKiFcbiAqICBob3dsZXIuanMgdjIuMS4yXG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMTksIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKiBHbG9iYWwgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBnbG9iYWwgY29udHJvbGxlci4gQWxsIGNvbnRhaW5lZCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFwcGx5XG4gICAqIHRvIGFsbCBzb3VuZHMgdGhhdCBhcmUgY3VycmVudGx5IHBsYXlpbmcgb3Igd2lsbCBiZSBpbiB0aGUgZnV0dXJlLlxuICAgKi9cbiAgdmFyIEhvd2xlckdsb2JhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIGdsb2JhbCBIb3dsZXIgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIENyZWF0ZSBhIGdsb2JhbCBJRCBjb3VudGVyLlxuICAgICAgc2VsZi5fY291bnRlciA9IDEwMDA7XG5cbiAgICAgIC8vIFBvb2wgb2YgdW5sb2NrZWQgSFRNTDUgQXVkaW8gb2JqZWN0cy5cbiAgICAgIHNlbGYuX2h0bWw1QXVkaW9Qb29sID0gW107XG4gICAgICBzZWxmLmh0bWw1UG9vbFNpemUgPSAxMDtcblxuICAgICAgLy8gSW50ZXJuYWwgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX2NvZGVjcyA9IHt9O1xuICAgICAgc2VsZi5faG93bHMgPSBbXTtcbiAgICAgIHNlbGYuX211dGVkID0gZmFsc2U7XG4gICAgICBzZWxmLl92b2x1bWUgPSAxO1xuICAgICAgc2VsZi5fY2FuUGxheUV2ZW50ID0gJ2NhbnBsYXl0aHJvdWdoJztcbiAgICAgIHNlbGYuX25hdmlnYXRvciA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yKSA/IHdpbmRvdy5uYXZpZ2F0b3IgOiBudWxsO1xuXG4gICAgICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgICAgIHNlbGYubWFzdGVyR2FpbiA9IG51bGw7XG4gICAgICBzZWxmLm5vQXVkaW8gPSBmYWxzZTtcbiAgICAgIHNlbGYudXNpbmdXZWJBdWRpbyA9IHRydWU7XG4gICAgICBzZWxmLmF1dG9TdXNwZW5kID0gdHJ1ZTtcbiAgICAgIHNlbGYuY3R4ID0gbnVsbDtcblxuICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGF1dG8gYXVkaW8gdW5sb2NrZXIuXG4gICAgICBzZWxmLmF1dG9VbmxvY2sgPSB0cnVlO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgdmFyaW91cyBzdGF0ZSB2YWx1ZXMgZm9yIGdsb2JhbCB0cmFja2luZy5cbiAgICAgIHNlbGYuX3NldHVwKCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBnbG9iYWwgdm9sdW1lIGZvciBhbGwgc291bmRzLlxuICAgICAqIEBwYXJhbSAge0Zsb2F0fSB2b2wgVm9sdW1lIGZyb20gMC4wIHRvIDEuMC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXIvRmxvYXR9ICAgICBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCB2b2x1bWUuXG4gICAgICovXG4gICAgdm9sdW1lOiBmdW5jdGlvbih2b2wpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG4gICAgICB2b2wgPSBwYXJzZUZsb2F0KHZvbCk7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFzZWxmLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdm9sID49IDAgJiYgdm9sIDw9IDEpIHtcbiAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuXG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBhbnkgb2YgdGhlIG5vZGVzIGlmIHdlIGFyZSBtdXRlZC5cbiAgICAgICAgaWYgKHNlbGYuX211dGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHVzaW5nIFdlYiBBdWRpbywgd2UganVzdCBuZWVkIHRvIGFkanVzdCB0aGUgbWFzdGVyIGdhaW4uXG4gICAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgICBzZWxmLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFuZCBjaGFuZ2Ugdm9sdW1lIGZvciBhbGwgSFRNTDUgYXVkaW8gbm9kZXMuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgY2hhbmdlIHRoZSB2b2x1bWVzLlxuICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUudm9sdW1lID0gc291bmQuX3ZvbHVtZSAqIHZvbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5fdm9sdW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbXV0aW5nIGFuZCB1bm11dGluZyBnbG9iYWxseS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBtdXRlZCBJcyBtdXRlZCBvciBub3QuXG4gICAgICovXG4gICAgbXV0ZTogZnVuY3Rpb24obXV0ZWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFzZWxmLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tdXRlZCA9IG11dGVkO1xuXG4gICAgICAvLyBXaXRoIFdlYiBBdWRpbywgd2UganVzdCBuZWVkIHRvIG11dGUgdGhlIG1hc3RlciBnYWluLlxuICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICBzZWxmLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShtdXRlZCA/IDAgOiBzZWxmLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYW5kIG11dGUgYWxsIEhUTUw1IEF1ZGlvIG5vZGVzLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgICAgICB2YXIgaWRzID0gc2VsZi5faG93bHNbaV0uX2dldFNvdW5kSWRzKCk7XG5cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgbWFyayB0aGUgYXVkaW8gbm9kZSBhcyBtdXRlZC5cbiAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8aWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5tdXRlZCA9IChtdXRlZCkgPyB0cnVlIDogc291bmQuX211dGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2FkIGFuZCBkZXN0cm95IGFsbCBjdXJyZW50bHkgbG9hZGVkIEhvd2wgb2JqZWN0cy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgdW5sb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIGZvciAodmFyIGk9c2VsZi5faG93bHMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICBzZWxmLl9ob3dsc1tpXS51bmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IEF1ZGlvQ29udGV4dCB0byBtYWtlIHN1cmUgaXQgaXMgZnVsbHkgcmVzZXQuXG4gICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvICYmIHNlbGYuY3R4ICYmIHR5cGVvZiBzZWxmLmN0eC5jbG9zZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHguY2xvc2UoKTtcbiAgICAgICAgc2VsZi5jdHggPSBudWxsO1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGNvZGVjIHN1cHBvcnQgb2Ygc3BlY2lmaWMgZXh0ZW5zaW9uLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXh0IEF1ZGlvIGZpbGUgZXh0ZW50aW9uLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgY29kZWNzOiBmdW5jdGlvbihleHQpIHtcbiAgICAgIHJldHVybiAodGhpcyB8fCBIb3dsZXIpLl9jb2RlY3NbZXh0LnJlcGxhY2UoL154LS8sICcnKV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHVwIHZhcmlvdXMgc3RhdGUgdmFsdWVzIGZvciBnbG9iYWwgdHJhY2tpbmcuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9zZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgc3VzcGVuZC9yZXN1bWUgc3RhdGUgb2YgdGhlIEF1ZGlvQ29udGV4dC5cbiAgICAgIHNlbGYuc3RhdGUgPSBzZWxmLmN0eCA/IHNlbGYuY3R4LnN0YXRlIHx8ICdzdXNwZW5kZWQnIDogJ3N1c3BlbmRlZCc7XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgYmVnaW4gdGhlIDMwLXNlY29uZCBzdXNwZW5kIHByb2Nlc3NcbiAgICAgIHNlbGYuX2F1dG9TdXNwZW5kKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGF1ZGlvIGlzIGF2YWlsYWJsZS5cbiAgICAgIGlmICghc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIE5vIGF1ZGlvIGlzIGF2YWlsYWJsZSBvbiB0aGlzIHN5c3RlbSBpZiBub0F1ZGlvIGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodHlwZW9mIEF1ZGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdGVzdCA9IG5ldyBBdWRpbygpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FucGxheXRocm91Z2ggZXZlbnQgaXMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Lm9uY2FucGxheXRocm91Z2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2NhblBsYXlFdmVudCA9ICdjYW5wbGF5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGVzdCB0byBtYWtlIHN1cmUgYXVkaW8gaXNuJ3QgZGlzYWJsZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdGVzdCA9IG5ldyBBdWRpbygpO1xuICAgICAgICBpZiAodGVzdC5tdXRlZCkge1xuICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIC8vIENoZWNrIGZvciBzdXBwb3J0ZWQgY29kZWNzLlxuICAgICAgaWYgKCFzZWxmLm5vQXVkaW8pIHtcbiAgICAgICAgc2VsZi5fc2V0dXBDb2RlY3MoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBicm93c2VyIHN1cHBvcnQgZm9yIHZhcmlvdXMgY29kZWNzIGFuZCBjYWNoZSB0aGUgcmVzdWx0cy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3NldHVwQ29kZWNzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG4gICAgICB2YXIgYXVkaW9UZXN0ID0gbnVsbDtcblxuICAgICAgLy8gTXVzdCB3cmFwIGluIGEgdHJ5L2NhdGNoIGJlY2F1c2UgSUUxMSBpbiBzZXJ2ZXIgbW9kZSB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICB0cnkge1xuICAgICAgICBhdWRpb1Rlc3QgPSAodHlwZW9mIEF1ZGlvICE9PSAndW5kZWZpbmVkJykgPyBuZXcgQXVkaW8oKSA6IG51bGw7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXVkaW9UZXN0IHx8IHR5cGVvZiBhdWRpb1Rlc3QuY2FuUGxheVR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHZhciBtcGVnVGVzdCA9IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywgJycpO1xuXG4gICAgICAvLyBPcGVyYSB2ZXJzaW9uIDwzMyBoYXMgbWl4ZWQgTVAzIHN1cHBvcnQsIHNvIHdlIG5lZWQgdG8gY2hlY2sgZm9yIGFuZCBibG9jayBpdC5cbiAgICAgIHZhciBjaGVja09wZXJhID0gc2VsZi5fbmF2aWdhdG9yICYmIHNlbGYuX25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09QUlxcLyhbMC02XS4pL2cpO1xuICAgICAgdmFyIGlzT2xkT3BlcmEgPSAoY2hlY2tPcGVyYSAmJiBwYXJzZUludChjaGVja09wZXJhWzBdLnNwbGl0KCcvJylbMV0sIDEwKSA8IDMzKTtcblxuICAgICAgc2VsZi5fY29kZWNzID0ge1xuICAgICAgICBtcDM6ICEhKCFpc09sZE9wZXJhICYmIChtcGVnVGVzdCB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wMzsnKS5yZXBsYWNlKC9ebm8kLywgJycpKSksXG4gICAgICAgIG1wZWc6ICEhbXBlZ1Rlc3QsXG4gICAgICAgIG9wdXM6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cIm9wdXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG9nZzogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBvZ2E6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2F2OiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBhYWM6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgY2FmOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1jYWY7JykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgbTRhOiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbTRhOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBtcDQ6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tcDQ7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIHdlYmE6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIHdlYm06ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGRvbGJ5OiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0OyBjb2RlY3M9XCJlYy0zXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBmbGFjOiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtZmxhYzsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2ZsYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJylcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTb21lIGJyb3dzZXJzL2RldmljZXMgd2lsbCBvbmx5IGFsbG93IGF1ZGlvIHRvIGJlIHBsYXllZCBhZnRlciBhIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICogQXR0ZW1wdCB0byBhdXRvbWF0aWNhbGx5IHVubG9jayBhdWRpbyBvbiB0aGUgZmlyc3QgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKiBDb25jZXB0IGZyb206IGh0dHA6Ly9wYXVsYmFrYXVzLmNvbS90dXRvcmlhbHMvaHRtbDUvd2ViLWF1ZGlvLW9uLWlvcy9cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3VubG9ja0F1ZGlvOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIE9ubHkgcnVuIHRoaXMgaWYgV2ViIEF1ZGlvIGlzIHN1cHBvcnRlZCBhbmQgaXQgaGFzbid0IGFscmVhZHkgYmVlbiB1bmxvY2tlZC5cbiAgICAgIGlmIChzZWxmLl9hdWRpb1VubG9ja2VkIHx8ICFzZWxmLmN0eCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX2F1ZGlvVW5sb2NrZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuYXV0b1VubG9jayA9IGZhbHNlO1xuXG4gICAgICAvLyBTb21lIG1vYmlsZSBkZXZpY2VzL3BsYXRmb3JtcyBoYXZlIGRpc3RvcnRpb24gaXNzdWVzIHdoZW4gb3BlbmluZy9jbG9zaW5nIHRhYnMgYW5kL29yIHdlYiB2aWV3cy5cbiAgICAgIC8vIEJ1Z3MgaW4gdGhlIGJyb3dzZXIgKGVzcGVjaWFsbHkgTW9iaWxlIFNhZmFyaSkgY2FuIGNhdXNlIHRoZSBzYW1wbGVSYXRlIHRvIGNoYW5nZSBmcm9tIDQ0MTAwIHRvIDQ4MDAwLlxuICAgICAgLy8gQnkgY2FsbGluZyBIb3dsZXIudW5sb2FkKCksIHdlIGNyZWF0ZSBhIG5ldyBBdWRpb0NvbnRleHQgd2l0aCB0aGUgY29ycmVjdCBzYW1wbGVSYXRlLlxuICAgICAgaWYgKCFzZWxmLl9tb2JpbGVVbmxvYWRlZCAmJiBzZWxmLmN0eC5zYW1wbGVSYXRlICE9PSA0NDEwMCkge1xuICAgICAgICBzZWxmLl9tb2JpbGVVbmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHNlbGYudW5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNjcmF0Y2ggYnVmZmVyIGZvciBlbmFibGluZyBpT1MgdG8gZGlzcG9zZSBvZiB3ZWIgYXVkaW8gYnVmZmVycyBjb3JyZWN0bHksIGFzIHBlcjpcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQxMTk2ODRcbiAgICAgIHNlbGYuX3NjcmF0Y2hCdWZmZXIgPSBzZWxmLmN0eC5jcmVhdGVCdWZmZXIoMSwgMSwgMjIwNTApO1xuXG4gICAgICAvLyBDYWxsIHRoaXMgbWV0aG9kIG9uIHRvdWNoIHN0YXJ0IHRvIGNyZWF0ZSBhbmQgcGxheSBhIGJ1ZmZlcixcbiAgICAgIC8vIHRoZW4gY2hlY2sgaWYgdGhlIGF1ZGlvIGFjdHVhbGx5IHBsYXllZCB0byBkZXRlcm1pbmUgaWZcbiAgICAgIC8vIGF1ZGlvIGhhcyBub3cgYmVlbiB1bmxvY2tlZCBvbiBpT1MsIEFuZHJvaWQsIGV0Yy5cbiAgICAgIHZhciB1bmxvY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHBvb2wgb2YgdW5sb2NrZWQgSFRNTDUgQXVkaW8gb2JqZWN0cyB0aGF0IGNhblxuICAgICAgICAvLyBiZSB1c2VkIGZvciBwbGF5aW5nIHNvdW5kcyB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24uIEhUTUw1XG4gICAgICAgIC8vIEF1ZGlvIG9iamVjdHMgbXVzdCBiZSBpbmRpdmlkdWFsbHkgdW5sb2NrZWQsIGFzIG9wcG9zZWRcbiAgICAgICAgLy8gdG8gdGhlIFdlYkF1ZGlvIEFQSSB3aGljaCBvbmx5IG5lZWRzIGEgc2luZ2xlIGFjdGl2YXRpb24uXG4gICAgICAgIC8vIFRoaXMgbXVzdCBvY2N1ciBiZWZvcmUgV2ViQXVkaW8gc2V0dXAgb3IgdGhlIHNvdXJjZS5vbmVuZGVkXG4gICAgICAgIC8vIGV2ZW50IHdpbGwgbm90IGZpcmUuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLmh0bWw1UG9vbFNpemU7IGkrKykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYXVkaW9Ob2RlID0gbmV3IEF1ZGlvKCk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgdGhpcyBBdWRpbyBvYmplY3QgYXMgdW5sb2NrZWQgdG8gZW5zdXJlIGl0IGNhbiBnZXQgcmV0dXJuZWRcbiAgICAgICAgICAgIC8vIHRvIHRoZSB1bmxvY2tlZCBwb29sIHdoZW4gcmVsZWFzZWQuXG4gICAgICAgICAgICBhdWRpb05vZGUuX3VubG9ja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQWRkIHRoZSBhdWRpbyBub2RlIHRvIHRoZSBwb29sLlxuICAgICAgICAgICAgc2VsZi5fcmVsZWFzZUh0bWw1QXVkaW8oYXVkaW9Ob2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbnkgYXNzaWduZWQgYXVkaW8gbm9kZXMgYW5kIHVubG9jayB0aGVtLlxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgICAgICAgIHZhciBpZHMgPSBzZWxmLl9ob3dsc1tpXS5fZ2V0U291bmRJZHMoKTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIHVubG9jayB0aGUgYXVkaW8gbm9kZXMuXG4gICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8aWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX2hvd2xzW2ldLl9zb3VuZEJ5SWQoaWRzW2pdKTtcblxuICAgICAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUgJiYgIXNvdW5kLl9ub2RlLl91bmxvY2tlZCkge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLl91bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUubG9hZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRml4IEFuZHJvaWQgY2FuIG5vdCBwbGF5IGluIHN1c3BlbmQgc3RhdGUuXG4gICAgICAgIHNlbGYuX2F1dG9SZXN1bWUoKTtcblxuICAgICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgYnVmZmVyLlxuICAgICAgICB2YXIgc291cmNlID0gc2VsZi5jdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5idWZmZXIgPSBzZWxmLl9zY3JhdGNoQnVmZmVyO1xuICAgICAgICBzb3VyY2UuY29ubmVjdChzZWxmLmN0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgLy8gUGxheSB0aGUgZW1wdHkgYnVmZmVyLlxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZS5zdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzb3VyY2Uubm90ZU9uKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGxpbmcgcmVzdW1lKCkgb24gYSBzdGFjayBpbml0aWF0ZWQgYnkgdXNlciBnZXN0dXJlIGlzIHdoYXQgYWN0dWFsbHkgdW5sb2NrcyB0aGUgYXVkaW8gb24gQW5kcm9pZCBDaHJvbWUgPj0gNTUuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jdHgucmVzdW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgc2VsZi5jdHgucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXR1cCBhIHRpbWVvdXQgdG8gY2hlY2sgdGhhdCB3ZSBhcmUgdW5sb2NrZWQgb24gdGhlIG5leHQgZXZlbnQgbG9vcC5cbiAgICAgICAgc291cmNlLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzb3VyY2UuZGlzY29ubmVjdCgwKTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdW5sb2NrZWQgc3RhdGUgYW5kIHByZXZlbnQgdGhpcyBjaGVjayBmcm9tIGhhcHBlbmluZyBhZ2Fpbi5cbiAgICAgICAgICBzZWxmLl9hdWRpb1VubG9ja2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG91Y2ggc3RhcnQgbGlzdGVuZXIuXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdW5sb2NrLCB0cnVlKTtcblxuICAgICAgICAgIC8vIExldCBhbGwgc291bmRzIGtub3cgdGhhdCBhdWRpbyBoYXMgYmVlbiB1bmxvY2tlZC5cbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlbGYuX2hvd2xzW2ldLl9lbWl0KCd1bmxvY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBTZXR1cCBhIHRvdWNoIHN0YXJ0IGxpc3RlbmVyIHRvIGF0dGVtcHQgYW4gdW5sb2NrIGluLlxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVubG9jaywgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gdW5sb2NrZWQgSFRNTDUgQXVkaW8gb2JqZWN0IGZyb20gdGhlIHBvb2wuIElmIG5vbmUgYXJlIGxlZnQsXG4gICAgICogcmV0dXJuIGEgbmV3IEF1ZGlvIG9iamVjdCBhbmQgdGhyb3cgYSB3YXJuaW5nLlxuICAgICAqIEByZXR1cm4ge0F1ZGlvfSBIVE1MNSBBdWRpbyBvYmplY3QuXG4gICAgICovXG4gICAgX29idGFpbkh0bWw1QXVkaW86IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gUmV0dXJuIHRoZSBuZXh0IG9iamVjdCBmcm9tIHRoZSBwb29sIGlmIG9uZSBleGlzdHMuXG4gICAgICBpZiAoc2VsZi5faHRtbDVBdWRpb1Bvb2wubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9odG1sNUF1ZGlvUG9vbC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgLy8uQ2hlY2sgaWYgdGhlIGF1ZGlvIGlzIGxvY2tlZCBhbmQgdGhyb3cgYSB3YXJuaW5nLlxuICAgICAgdmFyIHRlc3RQbGF5ID0gbmV3IEF1ZGlvKCkucGxheSgpO1xuICAgICAgaWYgKHRlc3RQbGF5ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAodGVzdFBsYXkgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiB0ZXN0UGxheS50aGVuID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICB0ZXN0UGxheS5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0hUTUw1IEF1ZGlvIHBvb2wgZXhoYXVzdGVkLCByZXR1cm5pbmcgcG90ZW50aWFsbHkgbG9ja2VkIGF1ZGlvIG9iamVjdC4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQXVkaW8oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGFjdGl2YXRlZCBIVE1MNSBBdWRpbyBvYmplY3QgdG8gdGhlIHBvb2wuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9yZWxlYXNlSHRtbDVBdWRpbzogZnVuY3Rpb24oYXVkaW8pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIERvbid0IGFkZCBhdWRpbyB0byB0aGUgcG9vbCBpZiB3ZSBkb24ndCBrbm93IGlmIGl0IGhhcyBiZWVuIHVubG9ja2VkLlxuICAgICAgaWYgKGF1ZGlvLl91bmxvY2tlZCkge1xuICAgICAgICBzZWxmLl9odG1sNUF1ZGlvUG9vbC5wdXNoKGF1ZGlvKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgc3VzcGVuZCB0aGUgV2ViIEF1ZGlvIEF1ZGlvQ29udGV4dCBhZnRlciBubyBzb3VuZCBoYXMgcGxheWVkIGZvciAzMCBzZWNvbmRzLlxuICAgICAqIFRoaXMgc2F2ZXMgcHJvY2Vzc2luZy9lbmVyZ3kgYW5kIGZpeGVzIHZhcmlvdXMgYnJvd3Nlci1zcGVjaWZpYyBidWdzIHdpdGggYXVkaW8gZ2V0dGluZyBzdHVjay5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2F1dG9TdXNwZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCFzZWxmLmF1dG9TdXNwZW5kIHx8ICFzZWxmLmN0eCB8fCB0eXBlb2Ygc2VsZi5jdHguc3VzcGVuZCA9PT0gJ3VuZGVmaW5lZCcgfHwgIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgYW55IHNvdW5kcyBhcmUgcGxheWluZy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHNlbGYuX2hvd2xzW2ldLl9zb3VuZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3NvdW5kc1tqXS5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBzb3VuZCBoYXMgcGxheWVkIGFmdGVyIDMwIHNlY29uZHMsIHN1c3BlbmQgdGhlIGNvbnRleHQuXG4gICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXNlbGYuYXV0b1N1c3BlbmQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgICBzZWxmLnN0YXRlID0gJ3N1c3BlbmRpbmcnO1xuICAgICAgICBzZWxmLmN0eC5zdXNwZW5kKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0YXRlID0gJ3N1c3BlbmRlZCc7XG5cbiAgICAgICAgICBpZiAoc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kKSB7XG4gICAgICAgICAgICBkZWxldGUgc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kO1xuICAgICAgICAgICAgc2VsZi5fYXV0b1Jlc3VtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDAwMCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHJlc3VtZSB0aGUgV2ViIEF1ZGlvIEF1ZGlvQ29udGV4dCB3aGVuIGEgbmV3IHNvdW5kIGlzIHBsYXllZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2F1dG9SZXN1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXNlbGYuY3R4IHx8IHR5cGVvZiBzZWxmLmN0eC5yZXN1bWUgPT09ICd1bmRlZmluZWQnIHx8ICFIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnN0YXRlID09PSAncnVubmluZycgJiYgc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgICAgICBzZWxmLmN0eC5yZXN1bWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RhdGUgPSAncnVubmluZyc7XG5cbiAgICAgICAgICAvLyBFbWl0IHRvIGFsbCBIb3dscyB0aGF0IHRoZSBhdWRpbyBoYXMgcmVzdW1lZC5cbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlbGYuX2hvd2xzW2ldLl9lbWl0KCdyZXN1bWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fc3VzcGVuZFRpbWVyKTtcbiAgICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUgPT09ICdzdXNwZW5kaW5nJykge1xuICAgICAgICBzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0dXAgdGhlIGdsb2JhbCBhdWRpbyBjb250cm9sbGVyLlxuICB2YXIgSG93bGVyID0gbmV3IEhvd2xlckdsb2JhbCgpO1xuXG4gIC8qKiBHcm91cCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXVkaW8gZ3JvdXAgY29udHJvbGxlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG8gUGFzc2VkIGluIHByb3BlcnRpZXMgZm9yIHRoaXMgZ3JvdXAuXG4gICAqL1xuICB2YXIgSG93bCA9IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiBubyBzb3VyY2UgaXMgcHJvdmlkZWQuXG4gICAgaWYgKCFvLnNyYyB8fCBvLnNyYy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGFycmF5IG9mIHNvdXJjZSBmaWxlcyBtdXN0IGJlIHBhc3NlZCB3aXRoIGFueSBuZXcgSG93bC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmluaXQobyk7XG4gIH07XG4gIEhvd2wucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgSG93bCBncm91cCBvYmplY3QuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvIFBhc3NlZCBpbiBwcm9wZXJ0aWVzIGZvciB0aGlzIGdyb3VwLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghSG93bGVyLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fYXV0b3BsYXkgPSBvLmF1dG9wbGF5IHx8IGZhbHNlO1xuICAgICAgc2VsZi5fZm9ybWF0ID0gKHR5cGVvZiBvLmZvcm1hdCAhPT0gJ3N0cmluZycpID8gby5mb3JtYXQgOiBbby5mb3JtYXRdO1xuICAgICAgc2VsZi5faHRtbDUgPSBvLmh0bWw1IHx8IGZhbHNlO1xuICAgICAgc2VsZi5fbXV0ZWQgPSBvLm11dGUgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9sb29wID0gby5sb29wIHx8IGZhbHNlO1xuICAgICAgc2VsZi5fcG9vbCA9IG8ucG9vbCB8fCA1O1xuICAgICAgc2VsZi5fcHJlbG9hZCA9ICh0eXBlb2Ygby5wcmVsb2FkID09PSAnYm9vbGVhbicpID8gby5wcmVsb2FkIDogdHJ1ZTtcbiAgICAgIHNlbGYuX3JhdGUgPSBvLnJhdGUgfHwgMTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9IG8uc3ByaXRlIHx8IHt9O1xuICAgICAgc2VsZi5fc3JjID0gKHR5cGVvZiBvLnNyYyAhPT0gJ3N0cmluZycpID8gby5zcmMgOiBbby5zcmNdO1xuICAgICAgc2VsZi5fdm9sdW1lID0gby52b2x1bWUgIT09IHVuZGVmaW5lZCA/IG8udm9sdW1lIDogMTtcbiAgICAgIHNlbGYuX3hocldpdGhDcmVkZW50aWFscyA9IG8ueGhyV2l0aENyZWRlbnRpYWxzIHx8IGZhbHNlO1xuXG4gICAgICAvLyBTZXR1cCBhbGwgb3RoZXIgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fZHVyYXRpb24gPSAwO1xuICAgICAgc2VsZi5fc3RhdGUgPSAndW5sb2FkZWQnO1xuICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICBzZWxmLl9lbmRUaW1lcnMgPSB7fTtcbiAgICAgIHNlbGYuX3F1ZXVlID0gW107XG4gICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuXG4gICAgICAvLyBTZXR1cCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICBzZWxmLl9vbmVuZCA9IG8ub25lbmQgPyBbe2ZuOiBvLm9uZW5kfV0gOiBbXTtcbiAgICAgIHNlbGYuX29uZmFkZSA9IG8ub25mYWRlID8gW3tmbjogby5vbmZhZGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25sb2FkID0gby5vbmxvYWQgPyBbe2ZuOiBvLm9ubG9hZH1dIDogW107XG4gICAgICBzZWxmLl9vbmxvYWRlcnJvciA9IG8ub25sb2FkZXJyb3IgPyBbe2ZuOiBvLm9ubG9hZGVycm9yfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGxheWVycm9yID0gby5vbnBsYXllcnJvciA/IFt7Zm46IG8ub25wbGF5ZXJyb3J9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wYXVzZSA9IG8ub25wYXVzZSA/IFt7Zm46IG8ub25wYXVzZX1dIDogW107XG4gICAgICBzZWxmLl9vbnBsYXkgPSBvLm9ucGxheSA/IFt7Zm46IG8ub25wbGF5fV0gOiBbXTtcbiAgICAgIHNlbGYuX29uc3RvcCA9IG8ub25zdG9wID8gW3tmbjogby5vbnN0b3B9XSA6IFtdO1xuICAgICAgc2VsZi5fb25tdXRlID0gby5vbm11dGUgPyBbe2ZuOiBvLm9ubXV0ZX1dIDogW107XG4gICAgICBzZWxmLl9vbnZvbHVtZSA9IG8ub252b2x1bWUgPyBbe2ZuOiBvLm9udm9sdW1lfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucmF0ZSA9IG8ub25yYXRlID8gW3tmbjogby5vbnJhdGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25zZWVrID0gby5vbnNlZWsgPyBbe2ZuOiBvLm9uc2Vla31dIDogW107XG4gICAgICBzZWxmLl9vbnVubG9jayA9IG8ub251bmxvY2sgPyBbe2ZuOiBvLm9udW5sb2NrfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucmVzdW1lID0gW107XG5cbiAgICAgIC8vIFdlYiBBdWRpbyBvciBIVE1MNSBBdWRpbz9cbiAgICAgIHNlbGYuX3dlYkF1ZGlvID0gSG93bGVyLnVzaW5nV2ViQXVkaW8gJiYgIXNlbGYuX2h0bWw1O1xuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IHRyeSB0byBlbmFibGUgYXVkaW8uXG4gICAgICBpZiAodHlwZW9mIEhvd2xlci5jdHggIT09ICd1bmRlZmluZWQnICYmIEhvd2xlci5jdHggJiYgSG93bGVyLmF1dG9VbmxvY2spIHtcbiAgICAgICAgSG93bGVyLl91bmxvY2tBdWRpbygpO1xuICAgICAgfVxuXG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoaXMgSG93bCBncm91cCBpbiB0aGUgZ2xvYmFsIGNvbnRyb2xsZXIuXG4gICAgICBIb3dsZXIuX2hvd2xzLnB1c2goc2VsZik7XG5cbiAgICAgIC8vIElmIHRoZXkgc2VsZWN0ZWQgYXV0b3BsYXksIGFkZCBhIHBsYXkgZXZlbnQgdG8gdGhlIGxvYWQgcXVldWUuXG4gICAgICBpZiAoc2VsZi5fYXV0b3BsYXkpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwbGF5JyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9hZCB0aGUgc291cmNlIGZpbGUgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gICAgICBpZiAoc2VsZi5fcHJlbG9hZCkge1xuICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIGF1ZGlvIGZpbGUuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHVybCA9IG51bGw7XG5cbiAgICAgIC8vIElmIG5vIGF1ZGlvIGlzIGF2YWlsYWJsZSwgcXVpdCBpbW1lZGlhdGVseS5cbiAgICAgIGlmIChIb3dsZXIubm9BdWRpbykge1xuICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm8gYXVkaW8gc3VwcG9ydC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgb3VyIHNvdXJjZSBpcyBpbiBhbiBhcnJheS5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZWxmLl9zcmMgPSBbc2VsZi5fc3JjXTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzb3VyY2VzIGFuZCBwaWNrIHRoZSBmaXJzdCBvbmUgdGhhdCBpcyBjb21wYXRpYmxlLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXh0LCBzdHI7XG5cbiAgICAgICAgaWYgKHNlbGYuX2Zvcm1hdCAmJiBzZWxmLl9mb3JtYXRbaV0pIHtcbiAgICAgICAgICAvLyBJZiBhbiBleHRlbnNpb24gd2FzIHNwZWNpZmllZCwgdXNlIHRoYXQgaW5zdGVhZC5cbiAgICAgICAgICBleHQgPSBzZWxmLl9mb3JtYXRbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VyY2UgaXMgYSBzdHJpbmcuXG4gICAgICAgICAgc3RyID0gc2VsZi5fc3JjW2ldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vbi1zdHJpbmcgZm91bmQgaW4gc2VsZWN0ZWQgYXVkaW8gc291cmNlcyAtIGlnbm9yaW5nLicpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZmlsZSBleHRlbnNpb24gZnJvbSB0aGUgVVJMIG9yIGJhc2U2NCBkYXRhIFVSSS5cbiAgICAgICAgICBleHQgPSAvXmRhdGE6YXVkaW9cXC8oW147LF0rKTsvaS5leGVjKHN0cik7XG4gICAgICAgICAgaWYgKCFleHQpIHtcbiAgICAgICAgICAgIGV4dCA9IC9cXC4oW14uXSspJC8uZXhlYyhzdHIuc3BsaXQoJz8nLCAxKVswXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV4dCkge1xuICAgICAgICAgICAgZXh0ID0gZXh0WzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9nIGEgd2FybmluZyBpZiBubyBleHRlbnNpb24gd2FzIGZvdW5kLlxuICAgICAgICBpZiAoIWV4dCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignTm8gZmlsZSBleHRlbnNpb24gd2FzIGZvdW5kLiBDb25zaWRlciB1c2luZyB0aGUgXCJmb3JtYXRcIiBwcm9wZXJ0eSBvciBzcGVjaWZ5IGFuIGV4dGVuc2lvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZXh0ZW5zaW9uIGlzIGF2YWlsYWJsZS5cbiAgICAgICAgaWYgKGV4dCAmJiBIb3dsZXIuY29kZWNzKGV4dCkpIHtcbiAgICAgICAgICB1cmwgPSBzZWxmLl9zcmNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vIGNvZGVjIHN1cHBvcnQgZm9yIHNlbGVjdGVkIGF1ZGlvIHNvdXJjZXMuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fc3JjID0gdXJsO1xuICAgICAgc2VsZi5fc3RhdGUgPSAnbG9hZGluZyc7XG5cbiAgICAgIC8vIElmIHRoZSBob3N0aW5nIHBhZ2UgaXMgSFRUUFMgYW5kIHRoZSBzb3VyY2UgaXNuJ3QsXG4gICAgICAvLyBkcm9wIGRvd24gdG8gSFRNTDUgQXVkaW8gdG8gYXZvaWQgTWl4ZWQgQ29udGVudCBlcnJvcnMuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyAmJiB1cmwuc2xpY2UoMCwgNSkgPT09ICdodHRwOicpIHtcbiAgICAgICAgc2VsZi5faHRtbDUgPSB0cnVlO1xuICAgICAgICBzZWxmLl93ZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgc291bmQgb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIHBvb2wuXG4gICAgICBuZXcgU291bmQoc2VsZik7XG5cbiAgICAgIC8vIExvYWQgYW5kIGRlY29kZSB0aGUgYXVkaW8gZGF0YSBmb3IgcGxheWJhY2suXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgbG9hZEJ1ZmZlcihzZWxmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBsYXkgYSBzb3VuZCBvciByZXN1bWUgcHJldmlvdXMgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7U3RyaW5nL051bWJlcn0gc3ByaXRlICAgU3ByaXRlIG5hbWUgZm9yIHNwcml0ZSBwbGF5YmFjayBvciBzb3VuZCBpZCB0byBjb250aW51ZSBwcmV2aW91cy5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpbnRlcm5hbCBJbnRlcm5hbCBVc2U6IHRydWUgcHJldmVudHMgZXZlbnQgZmlyaW5nLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgU291bmQgSUQuXG4gICAgICovXG4gICAgcGxheTogZnVuY3Rpb24oc3ByaXRlLCBpbnRlcm5hbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGlkID0gbnVsbDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIGEgc3ByaXRlLCBzb3VuZCBpZCBvciBub3RoaW5nIHdhcyBwYXNzZWRcbiAgICAgIGlmICh0eXBlb2Ygc3ByaXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZCA9IHNwcml0ZTtcbiAgICAgICAgc3ByaXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ3N0cmluZycgJiYgc2VsZi5fc3RhdGUgPT09ICdsb2FkZWQnICYmICFzZWxmLl9zcHJpdGVbc3ByaXRlXSkge1xuICAgICAgICAvLyBJZiB0aGUgcGFzc2VkIHNwcml0ZSBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0IHNvdW5kIHNwcml0ZSAocGxheXMgdGhlIGZ1bGwgYXVkaW8gbGVuZ3RoKS5cbiAgICAgICAgc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzaW5nbGUgcGF1c2VkIHNvdW5kIHRoYXQgaXNuJ3QgZW5kZWQuIFxuICAgICAgICAvLyBJZiB0aGVyZSBpcywgcGxheSB0aGF0IHNvdW5kLiBJZiBub3QsIGNvbnRpbnVlIGFzIHVzdWFsLiAgXG4gICAgICAgIGlmICghc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9wYXVzZWQgJiYgIXNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICAgIGlkID0gc2VsZi5fc291bmRzW2ldLl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobnVtID09PSAxKSB7XG4gICAgICAgICAgICBzcHJpdGUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgc2VsZWN0ZWQgbm9kZSwgb3IgZ2V0IG9uZSBmcm9tIHRoZSBwb29sLlxuICAgICAgdmFyIHNvdW5kID0gaWQgPyBzZWxmLl9zb3VuZEJ5SWQoaWQpIDogc2VsZi5faW5hY3RpdmVTb3VuZCgpO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgZG9lc24ndCBleGlzdCwgZG8gbm90aGluZy5cbiAgICAgIGlmICghc291bmQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgc3ByaXRlIGRlZmluaXRpb24uXG4gICAgICBpZiAoaWQgJiYgIXNwcml0ZSkge1xuICAgICAgICBzcHJpdGUgPSBzb3VuZC5fc3ByaXRlIHx8ICdfX2RlZmF1bHQnO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgd2UgbXVzdCB3YWl0IHRvIGdldCB0aGUgYXVkaW8ncyBkdXJhdGlvbi5cbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byB3YWl0IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBydW4gaW50byByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgICAgLy8gdGhlIG9yZGVyIG9mIGZ1bmN0aW9uIGNhbGxzLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICAvLyBTZXQgdGhlIHNwcml0ZSB2YWx1ZSBvbiB0aGlzIHNvdW5kLlxuICAgICAgICBzb3VuZC5fc3ByaXRlID0gc3ByaXRlO1xuXG4gICAgICAgIC8vIE1hcmsgdGhpcyBzb3VuZCBhcyBub3QgZW5kZWQgaW4gY2FzZSBhbm90aGVyIHNvdW5kIGlzIHBsYXllZCBiZWZvcmUgdGhpcyBvbmUgbG9hZHMuXG4gICAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgc291bmQgdG8gdGhlIHF1ZXVlIHRvIGJlIHBsYXllZCBvbiBsb2FkLlxuICAgICAgICB2YXIgc291bmRJZCA9IHNvdW5kLl9pZDtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwbGF5JyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KHNvdW5kSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kSWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIERvbid0IHBsYXkgdGhlIHNvdW5kIGlmIGFuIGlkIHdhcyBwYXNzZWQgYW5kIGl0IGlzIGFscmVhZHkgcGxheWluZy5cbiAgICAgIGlmIChpZCAmJiAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwbGF5IGV2ZW50LCBpbiBvcmRlciB0byBrZWVwIGl0ZXJhdGluZyB0aHJvdWdoIHF1ZXVlLlxuICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCdwbGF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291bmQuX2lkO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIEF1ZGlvQ29udGV4dCBpc24ndCBzdXNwZW5kZWQsIGFuZCByZXN1bWUgaXQgaWYgaXQgaXMuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgSG93bGVyLl9hdXRvUmVzdW1lKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBob3cgbG9uZyB0byBwbGF5IGZvciBhbmQgd2hlcmUgdG8gc3RhcnQgcGxheWluZy5cbiAgICAgIHZhciBzZWVrID0gTWF0aC5tYXgoMCwgc291bmQuX3NlZWsgPiAwID8gc291bmQuX3NlZWsgOiBzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSAvIDEwMDApO1xuICAgICAgdmFyIGR1cmF0aW9uID0gTWF0aC5tYXgoMCwgKChzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzFdKSAvIDEwMDApIC0gc2Vlayk7XG4gICAgICB2YXIgdGltZW91dCA9IChkdXJhdGlvbiAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuICAgICAgdmFyIHN0YXJ0ID0gc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gLyAxMDAwO1xuICAgICAgdmFyIHN0b3AgPSAoc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc3ByaXRlXVsxXSkgLyAxMDAwO1xuICAgICAgdmFyIGxvb3AgPSAhIShzb3VuZC5fbG9vcCB8fCBzZWxmLl9zcHJpdGVbc3ByaXRlXVsyXSk7XG4gICAgICBzb3VuZC5fc3ByaXRlID0gc3ByaXRlO1xuXG4gICAgICAvLyBNYXJrIHRoZSBzb3VuZCBhcyBlbmRlZCBpbnN0YW50bHkgc28gdGhhdCB0aGlzIGFzeW5jIHBsYXliYWNrXG4gICAgICAvLyBkb2Vzbid0IGdldCBncmFiYmVkIGJ5IGFub3RoZXIgY2FsbCB0byBwbGF5IHdoaWxlIHRoaXMgb25lIHdhaXRzIHRvIHN0YXJ0LlxuICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGFyYW1ldGVycyBvZiB0aGUgc291bmQuXG4gICAgICB2YXIgc2V0UGFyYW1zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNvdW5kLl9wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgc291bmQuX3NlZWsgPSBzZWVrO1xuICAgICAgICBzb3VuZC5fc3RhcnQgPSBzdGFydDtcbiAgICAgICAgc291bmQuX3N0b3AgPSBzdG9wO1xuICAgICAgICBzb3VuZC5fbG9vcCA9IGxvb3A7XG4gICAgICB9O1xuXG4gICAgICAvLyBFbmQgdGhlIHNvdW5kIGluc3RhbnRseSBpZiBzZWVrIGlzIGF0IHRoZSBlbmQuXG4gICAgICBpZiAoc2VlayA+PSBzdG9wKSB7XG4gICAgICAgIHNlbGYuX2VuZGVkKHNvdW5kKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCZWdpbiB0aGUgYWN0dWFsIHBsYXliYWNrLlxuICAgICAgdmFyIG5vZGUgPSBzb3VuZC5fbm9kZTtcbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAvLyBGaXJlIHRoaXMgd2hlbiB0aGUgc291bmQgaXMgcmVhZHkgdG8gcGxheSB0byBiZWdpbiBXZWIgQXVkaW8gcGxheWJhY2suXG4gICAgICAgIHZhciBwbGF5V2ViQXVkaW8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgIHNldFBhcmFtcygpO1xuICAgICAgICAgIHNlbGYuX3JlZnJlc2hCdWZmZXIoc291bmQpO1xuXG4gICAgICAgICAgLy8gU2V0dXAgdGhlIHBsYXliYWNrIHBhcmFtcy5cbiAgICAgICAgICB2YXIgdm9sID0gKHNvdW5kLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCkgPyAwIDogc291bmQuX3ZvbHVtZTtcbiAgICAgICAgICBub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcblxuICAgICAgICAgIC8vIFBsYXkgdGhlIHNvdW5kIHVzaW5nIHRoZSBzdXBwb3J0ZWQgbWV0aG9kLlxuICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBzb3VuZC5fbG9vcCA/IG5vZGUuYnVmZmVyU291cmNlLm5vdGVHcmFpbk9uKDAsIHNlZWssIDg2NDAwKSA6IG5vZGUuYnVmZmVyU291cmNlLm5vdGVHcmFpbk9uKDAsIHNlZWssIGR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291bmQuX2xvb3AgPyBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzZWVrLCA4NjQwMCkgOiBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzZWVrLCBkdXJhdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RhcnQgYSBuZXcgdGltZXIgaWYgbm9uZSBpcyBwcmVzZW50LlxuICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKEhvd2xlci5zdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgICAgcGxheVdlYkF1ZGlvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGF1ZGlvIGNvbnRleHQgdG8gcmVzdW1lIGJlZm9yZSBwbGF5aW5nLlxuICAgICAgICAgIHNlbGYub25jZSgncmVzdW1lJywgcGxheVdlYkF1ZGlvKTtcblxuICAgICAgICAgIC8vIENhbmNlbCB0aGUgZW5kIHRpbWVyLlxuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSB0aGlzIHdoZW4gdGhlIHNvdW5kIGlzIHJlYWR5IHRvIHBsYXkgdG8gYmVnaW4gSFRNTDUgQXVkaW8gcGxheWJhY2suXG4gICAgICAgIHZhciBwbGF5SHRtbDUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBub2RlLmN1cnJlbnRUaW1lID0gc2VlaztcbiAgICAgICAgICBub2RlLm11dGVkID0gc291bmQuX211dGVkIHx8IHNlbGYuX211dGVkIHx8IEhvd2xlci5fbXV0ZWQgfHwgbm9kZS5tdXRlZDtcbiAgICAgICAgICBub2RlLnZvbHVtZSA9IHNvdW5kLl92b2x1bWUgKiBIb3dsZXIudm9sdW1lKCk7XG4gICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSBzb3VuZC5fcmF0ZTtcblxuICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGlzIGlzIGNhbGxlZCB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwbGF5ID0gbm9kZS5wbGF5KCk7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQgb2xkZXIgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHByb21pc2VzLCBhbmQgdGh1cyBkb24ndCBoYXZlIHRoaXMgaXNzdWUuXG4gICAgICAgICAgICBpZiAocGxheSAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBsYXkgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiBwbGF5LnRoZW4gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgIC8vIEltcGxlbWVudHMgYSBsb2NrIHRvIHByZXZlbnQgRE9NRXhjZXB0aW9uOiBUaGUgcGxheSgpIHJlcXVlc3Qgd2FzIGludGVycnVwdGVkIGJ5IGEgY2FsbCB0byBwYXVzZSgpLlxuICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgLy8gU2V0IHBhcmFtIHZhbHVlcyBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAgc2V0UGFyYW1zKCk7XG5cbiAgICAgICAgICAgICAgLy8gUmVsZWFzZXMgdGhlIGxvY2sgYW5kIGV4ZWN1dGVzIHF1ZXVlZCBhY3Rpb25zLlxuICAgICAgICAgICAgICBwbGF5XG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgbm9kZS5fdW5sb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheWVycm9yJywgc291bmQuX2lkLCAnUGxheWJhY2sgd2FzIHVuYWJsZSB0byBzdGFydC4gVGhpcyBpcyBtb3N0IGNvbW1vbmx5IGFuIGlzc3VlICcgK1xuICAgICAgICAgICAgICAgICAgICAnb24gbW9iaWxlIGRldmljZXMgYW5kIENocm9tZSB3aGVyZSBwbGF5YmFjayB3YXMgbm90IHdpdGhpbiBhIHVzZXIgaW50ZXJhY3Rpb24uJyk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBlbmRlZCBhbmQgcGF1c2VkIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzb3VuZC5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNldFBhcmFtcygpO1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgcmF0ZSBiZWZvcmUgcGxheWluZyB3b24ndCB3b3JrIGluIElFLCBzbyB3ZSBzZXQgaXQgYWdhaW4gaGVyZS5cbiAgICAgICAgICAgIG5vZGUucGxheWJhY2tSYXRlID0gc291bmQuX3JhdGU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIGlzIHN0aWxsIHBhdXNlZCwgdGhlbiB3ZSBjYW4gYXNzdW1lIHRoZXJlIHdhcyBhIHBsYXliYWNrIGlzc3VlLlxuICAgICAgICAgICAgaWYgKG5vZGUucGF1c2VkKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgJ1BsYXliYWNrIHdhcyB1bmFibGUgdG8gc3RhcnQuIFRoaXMgaXMgbW9zdCBjb21tb25seSBhbiBpc3N1ZSAnICtcbiAgICAgICAgICAgICAgICAnb24gbW9iaWxlIGRldmljZXMgYW5kIENocm9tZSB3aGVyZSBwbGF5YmFjayB3YXMgbm90IHdpdGhpbiBhIHVzZXIgaW50ZXJhY3Rpb24uJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dXAgdGhlIGVuZCB0aW1lciBvbiBzcHJpdGVzIG9yIGxpc3RlbiBmb3IgdGhlIGVuZGVkIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHNwcml0ZSAhPT0gJ19fZGVmYXVsdCcgfHwgc291bmQuX2xvb3ApIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSBlbmRlZCBvbiB0aGlzIGF1ZGlvIG5vZGUuXG4gICAgICAgICAgICAgICAgc2VsZi5fZW5kZWQoc291bmQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5ZXJyb3InLCBzb3VuZC5faWQsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgc3RyZWFtaW5nIGF1ZGlvLCBtYWtlIHN1cmUgdGhlIHNyYyBpcyBzZXQgYW5kIGxvYWQgYWdhaW4uXG4gICAgICAgIGlmIChub2RlLnNyYyA9PT0gJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCxVa2xHUmlnQUFBQlhRVlpGWm0xMElCSUFBQUFCQUFFQVJLd0FBSWhZQVFBQ0FCQUFBQUJrWVhSaEFnQUFBQUVBJykge1xuICAgICAgICAgIG5vZGUuc3JjID0gc2VsZi5fc3JjO1xuICAgICAgICAgIG5vZGUubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGxheSBpbW1lZGlhdGVseSBpZiByZWFkeSwgb3Igd2FpdCBmb3IgdGhlICdjYW5wbGF5dGhyb3VnaCdlIHZlbnQuXG4gICAgICAgIHZhciBsb2FkZWROb1JlYWR5U3RhdGUgPSAod2luZG93ICYmIHdpbmRvdy5lamVjdGEpIHx8ICghbm9kZS5yZWFkeVN0YXRlICYmIEhvd2xlci5fbmF2aWdhdG9yLmlzQ29jb29uSlMpO1xuICAgICAgICBpZiAobm9kZS5yZWFkeVN0YXRlID49IDMgfHwgbG9hZGVkTm9SZWFkeVN0YXRlKSB7XG4gICAgICAgICAgcGxheUh0bWw1KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiBwbGF5YmFjay5cbiAgICAgICAgICAgIHBsYXlIdG1sNSgpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIHRoZSBlbmQgdGltZXIuXG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzb3VuZC5faWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIHBsYXliYWNrIGFuZCBzYXZlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgSUQgKGVtcHR5IHRvIHBhdXNlIGFsbCBpbiBncm91cCkuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQgb3IgYSBwbGF5KCkgcHJvbWlzZSBpcyBwZW5kaW5nLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gcGF1c2Ugd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BhdXNlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wYXVzZShpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgcGF1c2VkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZW5kIHRpbWVyLlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kICYmICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHNlZWsgcG9zaXRpb24uXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzZWxmLnNlZWsoaWRzW2ldKTtcbiAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gU3RvcCBjdXJyZW50bHkgcnVubmluZyBmYWRlcy5cbiAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VuZCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAgICAgICAgICBpZiAoIXNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uubm90ZU9mZigwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICAgICAgICBzZWxmLl9jbGVhbkJ1ZmZlcihzb3VuZC5fbm9kZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikgfHwgc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSB0aGUgcGF1c2UgZXZlbnQsIHVubGVzcyBgdHJ1ZWAgaXMgcGFzc2VkIGFzIHRoZSAybmQgYXJndW1lbnQuXG4gICAgICAgIGlmICghYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgc2VsZi5fZW1pdCgncGF1c2UnLCBzb3VuZCA/IHNvdW5kLl9pZCA6IG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHBsYXliYWNrIGFuZCByZXNldCB0byBzdGFydC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRCAoZW1wdHkgdG8gc3RvcCBhbGwgaW4gZ3JvdXApLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGludGVybmFsIEludGVybmFsIFVzZTogdHJ1ZSBwcmV2ZW50cyBldmVudCBmaXJpbmcuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbihpZCwgaW50ZXJuYWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBzdG9wIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdG9wJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5zdG9wKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBzdG9wcGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZW5kIHRpbWVyLlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHNlZWsgcG9zaXRpb24uXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdW5kJ3MgQXVkaW9CdWZmZXJTb3VyY2VOb2RlIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGlmIChzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLm5vdGVPZmYoMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICAgICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oc291bmQuX25vZGUuZHVyYXRpb24pIHx8IHNvdW5kLl9ub2RlLmR1cmF0aW9uID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5wYXVzZSgpO1xuXG4gICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBsaXZlIHN0cmVhbSwgc3RvcCBkb3dubG9hZCBvbmNlIHRoZSBhdWRpbyBpcyBzdG9wcGVkLlxuICAgICAgICAgICAgICBpZiAoc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fY2xlYXJTb3VuZChzb3VuZC5fbm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdzdG9wJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE11dGUvdW5tdXRlIGEgc2luZ2xlIHNvdW5kIG9yIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IG11dGVkIFNldCB0byB0cnVlIHRvIG11dGUgYW5kIGZhbHNlIHRvIHVubXV0ZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgIFRoZSBzb3VuZCBJRCB0byB1cGRhdGUgKG9taXQgdG8gbXV0ZS91bm11dGUgYWxsKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG11dGU6IGZ1bmN0aW9uKG11dGVkLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIG11dGUgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJ3x8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnbXV0ZScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYubXV0ZShtdXRlZCwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFwcGx5aW5nIG11dGUvdW5tdXRlIHRvIGFsbCBzb3VuZHMsIHVwZGF0ZSB0aGUgZ3JvdXAncyB2YWx1ZS5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbXV0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHNlbGYuX211dGVkID0gbXV0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX211dGVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIG11dGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICBzb3VuZC5fbXV0ZWQgPSBtdXRlZDtcblxuICAgICAgICAgIC8vIENhbmNlbCBhY3RpdmUgZmFkZSBhbmQgc2V0IHRoZSB2b2x1bWUgdG8gdGhlIGVuZCB2YWx1ZS5cbiAgICAgICAgICBpZiAoc291bmQuX2ludGVydmFsKSB7XG4gICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShzb3VuZC5faWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZShtdXRlZCA/IDAgOiBzb3VuZC5fdm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5tdXRlZCA9IEhvd2xlci5fbXV0ZWQgPyB0cnVlIDogbXV0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnbXV0ZScsIHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHZvbHVtZSBvZiB0aGlzIHNvdW5kIG9yIG9mIHRoZSBIb3dsIGdyb3VwLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICB2b2x1bWUoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIHZvbHVtZSB2YWx1ZS5cbiAgICAgKiAgIHZvbHVtZShpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHZvbHVtZS5cbiAgICAgKiAgIHZvbHVtZSh2b2wpIC0+IFNldHMgdGhlIHZvbHVtZSBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIHZvbHVtZSh2b2wsIGlkKSAtPiBTZXRzIHRoZSB2b2x1bWUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCB2b2x1bWUuXG4gICAgICovXG4gICAgdm9sdW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHZvbCwgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBncm91cHMnIHZvbHVtZS5cbiAgICAgICAgcmV0dXJuIHNlbGYuX3ZvbHVtZTtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEgfHwgYXJncy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyB2b2x1bWUuXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdm9sID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIG9yIHJldHVybiB0aGUgY3VycmVudCB2b2x1bWUuXG4gICAgICB2YXIgc291bmQ7XG4gICAgICBpZiAodHlwZW9mIHZvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdm9sID49IDAgJiYgdm9sIDw9IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugdm9sdW1lIHdoZW4gY2FwYWJsZS5cbiAgICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJ3x8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3ZvbHVtZScsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnZvbHVtZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCB2b2x1bWUuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG9uZSBvciBhbGwgdm9sdW1lcy5cbiAgICAgICAgaWQgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgICBzb3VuZC5fdm9sdW1lID0gdm9sO1xuXG4gICAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgICAgaWYgKCFhcmdzWzJdKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fbm9kZSAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnZvbHVtZSA9IHZvbCAqIEhvd2xlci52b2x1bWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5fZW1pdCgndm9sdW1lJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gaWQgPyBzZWxmLl9zb3VuZEJ5SWQoaWQpIDogc2VsZi5fc291bmRzWzBdO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fdm9sdW1lIDogMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZhZGUgYSBjdXJyZW50bHkgcGxheWluZyBzb3VuZCBiZXR3ZWVuIHR3byB2b2x1bWVzIChpZiBubyBpZCBpcyBwYXNzc2VkLCBhbGwgc291bmRzIHdpbGwgZmFkZSkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBmcm9tIFRoZSB2YWx1ZSB0byBmYWRlIGZyb20gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdG8gICBUaGUgdm9sdW1lIHRvIGZhZGUgdG8gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbGVuICBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICBUaGUgc291bmQgaWQgKG9taXQgdG8gZmFkZSBhbGwgc291bmRzKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIGZhZGU6IGZ1bmN0aW9uKGZyb20sIHRvLCBsZW4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gZmFkZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnZmFkZScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZmFkZShmcm9tLCB0bywgbGVuLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB0by9mcm9tL2xlbiB2YWx1ZXMgYXJlIG51bWJlcnMuXG4gICAgICBmcm9tID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgICAgIHRvID0gcGFyc2VGbG9hdCh0byk7XG4gICAgICBsZW4gPSBwYXJzZUZsb2F0KGxlbik7XG5cbiAgICAgIC8vIFNldCB0aGUgdm9sdW1lIHRvIHRoZSBzdGFydCBwb3NpdGlvbi5cbiAgICAgIHNlbGYudm9sdW1lKGZyb20sIGlkKTtcblxuICAgICAgLy8gRmFkZSB0aGUgdm9sdW1lIG9mIG9uZSBvciBhbGwgc291bmRzLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZWFyIGZhZGUgb3IgZmFsbCBiYWNrIHRvIHRpbWVvdXRzIHdpdGggSFRNTDUgQXVkaW8uXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIC8vIFN0b3AgdGhlIHByZXZpb3VzIGZhZGUgaWYgbm8gc3ByaXRlIGlzIGJlaW5nIHVzZWQgKG90aGVyd2lzZSwgdm9sdW1lIGhhbmRsZXMgdGhpcykuXG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgV2ViIEF1ZGlvLCBsZXQgdGhlIG5hdGl2ZSBtZXRob2RzIGRvIHRoZSBhY3R1YWwgZmFkZS5cbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBjdXJyZW50VGltZSArIChsZW4gLyAxMDAwKTtcbiAgICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSBmcm9tO1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZShmcm9tLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHRvLCBlbmQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX3N0YXJ0RmFkZUludGVydmFsKHNvdW5kLCBmcm9tLCB0bywgbGVuLCBpZHNbaV0sIHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGludGVybmFsIGludGVydmFsIHRvIGZhZGUgYSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHNvdW5kIFJlZmVyZW5jZSB0byBzb3VuZCB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZnJvbSBUaGUgdmFsdWUgdG8gZmFkZSBmcm9tICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRvICAgVGhlIHZvbHVtZSB0byBmYWRlIHRvICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbiAgVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgVGhlIHNvdW5kIGlkIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaXNHcm91cCAgIElmIHRydWUsIHNldCB0aGUgdm9sdW1lIG9uIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBfc3RhcnRGYWRlSW50ZXJ2YWw6IGZ1bmN0aW9uKHNvdW5kLCBmcm9tLCB0bywgbGVuLCBpZCwgaXNHcm91cCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHZvbCA9IGZyb207XG4gICAgICB2YXIgZGlmZiA9IHRvIC0gZnJvbTtcbiAgICAgIHZhciBzdGVwcyA9IE1hdGguYWJzKGRpZmYgLyAwLjAxKTtcbiAgICAgIHZhciBzdGVwTGVuID0gTWF0aC5tYXgoNCwgKHN0ZXBzID4gMCkgPyBsZW4gLyBzdGVwcyA6IGxlbik7XG4gICAgICB2YXIgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgdmFsdWUgYmVpbmcgZmFkZWQgdG8uXG4gICAgICBzb3VuZC5fZmFkZVRvID0gdG87XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIHZhbHVlIG9uIGVhY2ggaW50ZXJ2YWwgdGljay5cbiAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHZvbHVtZSBiYXNlZCBvbiB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCB0aWNrLlxuICAgICAgICB2YXIgdGljayA9IChEYXRlLm5vdygpIC0gbGFzdFRpY2spIC8gbGVuO1xuICAgICAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG4gICAgICAgIHZvbCArPSBkaWZmICogdGljaztcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHZvbHVtZSBpcyBpbiB0aGUgcmlnaHQgYm91bmRzLlxuICAgICAgICB2b2wgPSBNYXRoLm1heCgwLCB2b2wpO1xuICAgICAgICB2b2wgPSBNYXRoLm1pbigxLCB2b2wpO1xuXG4gICAgICAgIC8vIFJvdW5kIHRvIHdpdGhpbiAyIGRlY2ltYWwgcG9pbnRzLlxuICAgICAgICB2b2wgPSBNYXRoLnJvdW5kKHZvbCAqIDEwMCkgLyAxMDA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSB2b2x1bWUuXG4gICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi52b2x1bWUodm9sLCBzb3VuZC5faWQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCdzIHZvbHVtZS5cbiAgICAgICAgaWYgKGlzR3JvdXApIHtcbiAgICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHRoZSBmYWRlIGlzIGNvbXBsZXRlLCBzdG9wIGl0IGFuZCBmaXJlIGV2ZW50LlxuICAgICAgICBpZiAoKHRvIDwgZnJvbSAmJiB2b2wgPD0gdG8pIHx8ICh0byA+IGZyb20gJiYgdm9sID49IHRvKSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc291bmQuX2ludGVydmFsKTtcbiAgICAgICAgICBzb3VuZC5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgIHNvdW5kLl9mYWRlVG8gPSBudWxsO1xuICAgICAgICAgIHNlbGYudm9sdW1lKHRvLCBzb3VuZC5faWQpO1xuICAgICAgICAgIHNlbGYuX2VtaXQoJ2ZhZGUnLCBzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9LCBzdGVwTGVuKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgc3RvcHMgdGhlIGN1cnJlbnRseSBwbGF5aW5nIGZhZGUgd2hlblxuICAgICAqIGEgbmV3IGZhZGUgc3RhcnRzLCB2b2x1bWUgaXMgY2hhbmdlZCBvciB0aGUgc291bmQgaXMgc3RvcHBlZC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9zdG9wRmFkZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG5cbiAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5faW50ZXJ2YWwpIHtcbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhckludGVydmFsKHNvdW5kLl9pbnRlcnZhbCk7XG4gICAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHNlbGYudm9sdW1lKHNvdW5kLl9mYWRlVG8sIGlkKTtcbiAgICAgICAgc291bmQuX2ZhZGVUbyA9IG51bGw7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2ZhZGUnLCBpZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBsb29wIHBhcmFtZXRlciBvbiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICBsb29wKCkgLT4gUmV0dXJucyB0aGUgZ3JvdXAncyBsb29wIHZhbHVlLlxuICAgICAqICAgbG9vcChpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBsb29wIHZhbHVlLlxuICAgICAqICAgbG9vcChsb29wKSAtPiBTZXRzIHRoZSBsb29wIHZhbHVlIGZvciBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIGxvb3AobG9vcCwgaWQpIC0+IFNldHMgdGhlIGxvb3AgdmFsdWUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvQm9vbGVhbn0gUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgbG9vcCB2YWx1ZS5cbiAgICAgKi9cbiAgICBsb29wOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIGxvb3AsIGlkLCBzb3VuZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgZm9yIGxvb3AgYW5kIGlkLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgZ3JvdSdzIGxvb3AgdmFsdWUuXG4gICAgICAgIHJldHVybiBzZWxmLl9sb29wO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGxvb3AgPSBhcmdzWzBdO1xuICAgICAgICAgIHNlbGYuX2xvb3AgPSBsb29wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybiB0aGlzIHNvdW5kJ3MgbG9vcCB2YWx1ZS5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChwYXJzZUludChhcmdzWzBdLCAxMCkpO1xuICAgICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9sb29wIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbG9vcCA9IGFyZ3NbMF07XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBsb29wZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIHNvdW5kLl9sb29wID0gbG9vcDtcbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgICBpZiAobG9vcCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcFN0YXJ0ID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wRW5kID0gc291bmQuX3N0b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBwbGF5YmFjayByYXRlIG9mIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHJhdGUoKSAtPiBSZXR1cm5zIHRoZSBmaXJzdCBzb3VuZCBub2RlJ3MgY3VycmVudCBwbGF5YmFjayByYXRlLlxuICAgICAqICAgcmF0ZShpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICogICByYXRlKHJhdGUpIC0+IFNldHMgdGhlIHBsYXliYWNrIHJhdGUgb2YgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogICByYXRlKHJhdGUsIGlkKSAtPiBTZXRzIHRoZSBwbGF5YmFjayByYXRlIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsL051bWJlcn0gUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICovXG4gICAgcmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciByYXRlLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFdlIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCByYXRlIG9mIHRoZSBmaXJzdCBub2RlLlxuICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1swXS5faWQ7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyByYXRlIHZhbHVlLlxuICAgICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gaWRzLmluZGV4T2YoYXJnc1swXSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzBdLCAxMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmF0ZSA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmF0ZSA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBsYXliYWNrIHJhdGUgb3IgcmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgdmFyIHNvdW5kO1xuICAgICAgaWYgKHR5cGVvZiByYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBwbGF5YmFjayByYXRlIHdoZW4gY2FwYWJsZS5cbiAgICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6ICdyYXRlJyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYucmF0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCByYXRlLlxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNlbGYuX3JhdGUgPSByYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG9uZSBvciBhbGwgdm9sdW1lcy5cbiAgICAgICAgaWQgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIG91ciBwb3NpdGlvbiB3aGVuIHRoZSByYXRlIGNoYW5nZWQgYW5kIHVwZGF0ZSB0aGUgcGxheWJhY2tcbiAgICAgICAgICAgIC8vIHN0YXJ0IHBvc2l0aW9uIHNvIHdlIGNhbiBwcm9wZXJseSBhZGp1c3QgdGhlIHNlZWsgcG9zaXRpb24gZm9yIHRpbWUgZWxhcHNlZC5cbiAgICAgICAgICAgIGlmIChzZWxmLnBsYXlpbmcoaWRbaV0pKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IHNlbGYuc2VlayhpZFtpXSk7XG4gICAgICAgICAgICAgIHNvdW5kLl9wbGF5U3RhcnQgPSBzZWxmLl93ZWJBdWRpbyA/IEhvd2xlci5jdHguY3VycmVudFRpbWUgOiBzb3VuZC5fcGxheVN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc291bmQuX3JhdGUgPSByYXRlO1xuXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIHBsYXliYWNrIHJhdGUuXG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5wbGF5YmFja1JhdGUuc2V0VmFsdWVBdFRpbWUocmF0ZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lcnMuXG4gICAgICAgICAgICB2YXIgc2VlayA9IHNlbGYuc2VlayhpZFtpXSk7XG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSAoKHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVsxXSkgLyAxMDAwKSAtIHNlZWs7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IChkdXJhdGlvbiAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuXG4gICAgICAgICAgICAvLyBTdGFydCBhIG5ldyBlbmQgdGltZXIgaWYgc291bmQgaXMgYWxyZWFkeSBwbGF5aW5nLlxuICAgICAgICAgICAgaWYgKHNlbGYuX2VuZFRpbWVyc1tpZFtpXV0gfHwgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZFtpXSk7XG4gICAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tpZFtpXV0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5fZW1pdCgncmF0ZScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9yYXRlIDogc2VsZi5fcmF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHNlZWsgcG9zaXRpb24gb2YgYSBzb3VuZC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgc2VlaygpIC0+IFJldHVybnMgdGhlIGZpcnN0IHNvdW5kIG5vZGUncyBjdXJyZW50IHNlZWsgcG9zaXRpb24uXG4gICAgICogICBzZWVrKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKiAgIHNlZWsoc2VlaykgLT4gU2V0cyB0aGUgc2VlayBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgc291bmQgbm9kZS5cbiAgICAgKiAgIHNlZWsoc2VlaywgaWQpIC0+IFNldHMgdGhlIHNlZWsgcG9zaXRpb24gb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBzZWVrOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHNlZWssIGlkO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBub2RlLlxuICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1swXS5faWQ7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyBzZWVrIHBvc2l0aW9uLlxuICAgICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gaWRzLmluZGV4T2YoYXJnc1swXSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzBdLCAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5fc291bmRzLmxlbmd0aCkge1xuICAgICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgICAgICBzZWVrID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBzZWVrID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIElELCBiYWlsIG91dC5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHNlZWsgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3NlZWsnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnNlZWsuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNlZWsgPT09ICdudW1iZXInICYmIHNlZWsgPj0gMCkge1xuICAgICAgICAgIC8vIFBhdXNlIHRoZSBzb3VuZCBhbmQgdXBkYXRlIHBvc2l0aW9uIGZvciByZXN0YXJ0aW5nIHBsYXliYWNrLlxuICAgICAgICAgIHZhciBwbGF5aW5nID0gc2VsZi5wbGF5aW5nKGlkKTtcbiAgICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgc2VsZi5wYXVzZShpZCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTW92ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyYWNrIGFuZCBjYW5jZWwgdGltZXIuXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzZWVrO1xuICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWQpO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWVrIHBvc2l0aW9uIGZvciBIVE1MNSBBdWRpby5cbiAgICAgICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lID0gc2VlaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWVrIGFuZCBlbWl0IHdoZW4gcmVhZHkuXG4gICAgICAgICAgdmFyIHNlZWtBbmRFbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdzZWVrJywgaWQpO1xuXG4gICAgICAgICAgICAvLyBSZXN0YXJ0IHRoZSBwbGF5YmFjayBpZiB0aGUgc291bmQgd2FzIHBsYXlpbmcuXG4gICAgICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgICBzZWxmLnBsYXkoaWQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgcGxheSBsb2NrIHRvIGJlIHVuc2V0IGJlZm9yZSBlbWl0dGluZyAoSFRNTDUgQXVkaW8pLlxuICAgICAgICAgIGlmIChwbGF5aW5nICYmICFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgdmFyIGVtaXRTZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICghc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICAgICAgICBzZWVrQW5kRW1pdCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZW1pdFNlZWssIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGltZW91dChlbWl0U2VlaywgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlZWtBbmRFbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgdmFyIHJlYWxUaW1lID0gc2VsZi5wbGF5aW5nKGlkKSA/IEhvd2xlci5jdHguY3VycmVudFRpbWUgLSBzb3VuZC5fcGxheVN0YXJ0IDogMDtcbiAgICAgICAgICAgIHZhciByYXRlU2VlayA9IHNvdW5kLl9yYXRlU2VlayA/IHNvdW5kLl9yYXRlU2VlayAtIHNvdW5kLl9zZWVrIDogMDtcbiAgICAgICAgICAgIHJldHVybiBzb3VuZC5fc2VlayArIChyYXRlU2VlayArIHJlYWxUaW1lICogTWF0aC5hYnMoc291bmQuX3JhdGUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzcGVjaWZpYyBzb3VuZCBpcyBjdXJyZW50bHkgcGxheWluZyBvciBub3QgKGlmIGlkIGlzIHByb3ZpZGVkKSwgb3IgY2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBzb3VuZHMgaW4gdGhlIGdyb3VwIGlzIHBsYXlpbmcgb3Igbm90LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gIGlkIFRoZSBzb3VuZCBpZCB0byBjaGVjay4gSWYgbm9uZSBpcyBwYXNzZWQsIHRoZSB3aG9sZSBzb3VuZCBncm91cCBpcyBjaGVja2VkLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgcGxheWluZyBhbmQgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIHBsYXlpbmc6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIENoZWNrIHRoZSBwYXNzZWQgc291bmQgSUQgKGlmIGFueSkuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gc291bmQgPyAhc291bmQuX3BhdXNlZCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGxvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBjaGVjayBpZiBhbnkgYXJlIHBsYXlpbmcuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc2VsZi5fc291bmRzW2ldLl9wYXVzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gb2YgdGhpcyBzb3VuZC4gUGFzc2luZyBhIHNvdW5kIGlkIHdpbGwgcmV0dXJuIHRoZSBzcHJpdGUgZHVyYXRpb24uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgaWQgdG8gY2hlY2suIElmIG5vbmUgaXMgcGFzc2VkLCByZXR1cm4gZnVsbCBzb3VyY2UgZHVyYXRpb24uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBdWRpbyBkdXJhdGlvbiBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIGR1cmF0aW9uOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGR1cmF0aW9uID0gc2VsZi5fZHVyYXRpb247XG5cbiAgICAgIC8vIElmIHdlIHBhc3MgYW4gSUQsIGdldCB0aGUgc291bmQgYW5kIHJldHVybiB0aGUgc3ByaXRlIGxlbmd0aC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgZHVyYXRpb24gPSBzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMV0gLyAxMDAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9hZGVkIHN0YXRlIG9mIHRoaXMgSG93bC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICd1bmxvYWRlZCcsICdsb2FkaW5nJywgJ2xvYWRlZCdcbiAgICAgKi9cbiAgICBzdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubG9hZCBhbmQgZGVzdHJveSB0aGUgY3VycmVudCBIb3dsIG9iamVjdC5cbiAgICAgKiBUaGlzIHdpbGwgaW1tZWRpYXRlbHkgc3RvcCBhbGwgc291bmQgaW5zdGFuY2VzIGF0dGFjaGVkIHRvIHRoaXMgZ3JvdXAuXG4gICAgICovXG4gICAgdW5sb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU3RvcCBwbGF5aW5nIGFueSBhY3RpdmUgc291bmRzLlxuICAgICAgdmFyIHNvdW5kcyA9IHNlbGYuX3NvdW5kcztcbiAgICAgIGZvciAodmFyIGk9MDsgaTxzb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3RvcCB0aGUgc291bmQgaWYgaXQgaXMgY3VycmVudGx5IHBsYXlpbmcuXG4gICAgICAgIGlmICghc291bmRzW2ldLl9wYXVzZWQpIHtcbiAgICAgICAgICBzZWxmLnN0b3Aoc291bmRzW2ldLl9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNvdXJjZSBvciBkaXNjb25uZWN0LlxuICAgICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBzb3VyY2UgdG8gMC1zZWNvbmQgc2lsZW5jZSB0byBzdG9wIGFueSBkb3dubG9hZGluZyAoZXhjZXB0IGluIElFKS5cbiAgICAgICAgICBzZWxmLl9jbGVhclNvdW5kKHNvdW5kc1tpXS5fbm9kZSk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VuZHNbaV0uX2Vycm9yRm4sIGZhbHNlKTtcbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc291bmRzW2ldLl9sb2FkRm4sIGZhbHNlKTtcblxuICAgICAgICAgIC8vIFJlbGVhc2UgdGhlIEF1ZGlvIG9iamVjdCBiYWNrIHRvIHRoZSBwb29sLlxuICAgICAgICAgIEhvd2xlci5fcmVsZWFzZUh0bWw1QXVkaW8oc291bmRzW2ldLl9ub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVtcHR5IG91dCBhbGwgb2YgdGhlIG5vZGVzLlxuICAgICAgICBkZWxldGUgc291bmRzW2ldLl9ub2RlO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGltZXJzIGFyZSBjbGVhcmVkIG91dC5cbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZHNbaV0uX2lkKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSByZWZlcmVuY2VzIGluIHRoZSBnbG9iYWwgSG93bGVyIG9iamVjdC5cbiAgICAgIHZhciBpbmRleCA9IEhvd2xlci5faG93bHMuaW5kZXhPZihzZWxmKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIEhvd2xlci5faG93bHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRoaXMgc291bmQgZnJvbSB0aGUgY2FjaGUgKGlmIG5vIG90aGVyIEhvd2wgaXMgdXNpbmcgaXQpLlxuICAgICAgdmFyIHJlbUNhY2hlID0gdHJ1ZTtcbiAgICAgIGZvciAoaT0wOyBpPEhvd2xlci5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKEhvd2xlci5faG93bHNbaV0uX3NyYyA9PT0gc2VsZi5fc3JjIHx8IHNlbGYuX3NyYy5pbmRleE9mKEhvd2xlci5faG93bHNbaV0uX3NyYykgPj0gMCkge1xuICAgICAgICAgIHJlbUNhY2hlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhY2hlICYmIHJlbUNhY2hlKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtzZWxmLl9zcmNdO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBnbG9iYWwgZXJyb3JzLlxuICAgICAgSG93bGVyLm5vQXVkaW8gPSBmYWxzZTtcblxuICAgICAgLy8gQ2xlYXIgb3V0IGBzZWxmYC5cbiAgICAgIHNlbGYuX3N0YXRlID0gJ3VubG9hZGVkJztcbiAgICAgIHNlbGYuX3NvdW5kcyA9IFtdO1xuICAgICAgc2VsZiA9IG51bGw7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBjdXN0b20gZXZlbnQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSBsaXN0ZW4gdG8gZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBvbmNlICAoSU5URVJOQUwpIE1hcmtzIGV2ZW50IHRvIGZpcmUgb25seSBvbmNlLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQsIG9uY2UpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKG9uY2UgPyB7aWQ6IGlkLCBmbjogZm4sIG9uY2U6IG9uY2V9IDoge2lkOiBpZCwgZm46IGZufSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBjdXN0b20gZXZlbnQuIENhbGwgd2l0aG91dCBwYXJhbWV0ZXJzIHRvIHJlbW92ZSBhbGwgZXZlbnRzLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byByZW1vdmUuIExlYXZlIGVtcHR5IHRvIHJlbW92ZSBhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSByZW1vdmUgZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudCwgZm4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgLy8gQWxsb3cgcGFzc2luZyBqdXN0IGFuIGV2ZW50IGFuZCBJRC5cbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlkID0gZm47XG4gICAgICAgIGZuID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZuIHx8IGlkKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVudCBzdG9yZSBhbmQgcmVtb3ZlIHRoZSBwYXNzZWQgZnVuY3Rpb24uXG4gICAgICAgIGZvciAoaT0wOyBpPGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpc0lkID0gKGlkID09PSBldmVudHNbaV0uaWQpO1xuICAgICAgICAgIGlmIChmbiA9PT0gZXZlbnRzW2ldLmZuICYmIGlzSWQgfHwgIWZuICYmIGlzSWQpIHtcbiAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFsbCBldmVudHMgb2YgdGhpcyB0eXBlLlxuICAgICAgICBzZWxmWydfb24nICsgZXZlbnRdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGVhciBvdXQgYWxsIGV2ZW50cyBvZiBldmVyeSB0eXBlLlxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNlbGYpO1xuICAgICAgICBmb3IgKGk9MDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKChrZXlzW2ldLmluZGV4T2YoJ19vbicpID09PSAwKSAmJiBBcnJheS5pc0FycmF5KHNlbGZba2V5c1tpXV0pKSB7XG4gICAgICAgICAgICBzZWxmW2tleXNbaV1dID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBjdXN0b20gZXZlbnQgYW5kIHJlbW92ZSBpdCBvbmNlIGZpcmVkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgbGlzdGVuIHRvIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9uY2U6IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU2V0dXAgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5vbihldmVudCwgZm4sIGlkLCAxKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVtaXQgYWxsIGV2ZW50cyBvZiBhIHNwZWNpZmljIHR5cGUgYW5kIHBhc3MgdGhlIHNvdW5kIGlkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgIFNvdW5kIElELlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbXNnICAgTWVzc2FnZSB0byBnbyB3aXRoIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2VtaXQ6IGZ1bmN0aW9uKGV2ZW50LCBpZCwgbXNnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZW50IHN0b3JlIGFuZCBmaXJlIGFsbCBmdW5jdGlvbnMuXG4gICAgICBmb3IgKHZhciBpPWV2ZW50cy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIC8vIE9ubHkgZmlyZSB0aGUgbGlzdGVuZXIgaWYgdGhlIGNvcnJlY3QgSUQgaXMgdXNlZC5cbiAgICAgICAgaWYgKCFldmVudHNbaV0uaWQgfHwgZXZlbnRzW2ldLmlkID09PSBpZCB8fCBldmVudCA9PT0gJ2xvYWQnKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbihmbikge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBpZCwgbXNnKTtcbiAgICAgICAgICB9LmJpbmQoc2VsZiwgZXZlbnRzW2ldLmZuKSwgMCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IHdhcyBzZXR1cCB3aXRoIGBvbmNlYCwgcmVtb3ZlIGl0LlxuICAgICAgICAgIGlmIChldmVudHNbaV0ub25jZSkge1xuICAgICAgICAgICAgc2VsZi5vZmYoZXZlbnQsIGV2ZW50c1tpXS5mbiwgZXZlbnRzW2ldLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUGFzcyB0aGUgZXZlbnQgdHlwZSBpbnRvIGxvYWQgcXVldWUgc28gdGhhdCBpdCBjYW4gY29udGludWUgc3RlcHBpbmcuXG4gICAgICBzZWxmLl9sb2FkUXVldWUoZXZlbnQpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVldWUgb2YgYWN0aW9ucyBpbml0aWF0ZWQgYmVmb3JlIHRoZSBzb3VuZCBoYXMgbG9hZGVkLlxuICAgICAqIFRoZXNlIHdpbGwgYmUgY2FsbGVkIGluIHNlcXVlbmNlLCB3aXRoIHRoZSBuZXh0IG9ubHkgZmlyaW5nXG4gICAgICogYWZ0ZXIgdGhlIHByZXZpb3VzIGhhcyBmaW5pc2hlZCBleGVjdXRpbmcgKGV2ZW4gaWYgYXN5bmMgbGlrZSBwbGF5KS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9sb2FkUXVldWU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0YXNrID0gc2VsZi5fcXVldWVbMF07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgdGFzayBpZiBhIG1hdGNoaW5nIGV2ZW50IHdhcyBwYXNzZWQuXG4gICAgICAgIGlmICh0YXNrLmV2ZW50ID09PSBldmVudCkge1xuICAgICAgICAgIHNlbGYuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gdGhlIHRhc2sgaWYgbm8gZXZlbnQgdHlwZSBpcyBwYXNzZWQuXG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICB0YXNrLmFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHBsYXliYWNrIGVuZHMgYXQgdGhlIGVuZCBvZiB0aGUgZHVyYXRpb24uXG4gICAgICogQHBhcmFtICB7U291bmR9IHNvdW5kIFRoZSBzb3VuZCBvYmplY3QgdG8gd29yayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2VuZGVkOiBmdW5jdGlvbihzb3VuZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNwcml0ZSA9IHNvdW5kLl9zcHJpdGU7XG5cbiAgICAgIC8vIElmIHdlIGFyZSB1c2luZyBJRSBhbmQgdGhlcmUgd2FzIG5ldHdvcmsgbGF0ZW5jeSB3ZSBtYXkgYmUgY2xpcHBpbmdcbiAgICAgIC8vIGF1ZGlvIGJlZm9yZSBpdCBjb21wbGV0ZXMgcGxheWluZy4gTGV0cyBjaGVjayB0aGUgbm9kZSB0byBtYWtlIHN1cmUgaXRcbiAgICAgIC8vIGJlbGlldmVzIGl0IGhhcyBjb21wbGV0ZWQsIGJlZm9yZSBlbmRpbmcgdGhlIHBsYXliYWNrLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiAhc291bmQuX25vZGUucGF1c2VkICYmICFzb3VuZC5fbm9kZS5lbmRlZCAmJiBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA8IHNvdW5kLl9zdG9wKSB7XG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIDEwMCk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG91bGQgdGhpcyBzb3VuZCBsb29wP1xuICAgICAgdmFyIGxvb3AgPSAhIShzb3VuZC5fbG9vcCB8fCBzZWxmLl9zcHJpdGVbc3ByaXRlXVsyXSk7XG5cbiAgICAgIC8vIEZpcmUgdGhlIGVuZGVkIGV2ZW50LlxuICAgICAgc2VsZi5fZW1pdCgnZW5kJywgc291bmQuX2lkKTtcblxuICAgICAgLy8gUmVzdGFydCB0aGUgcGxheWJhY2sgZm9yIEhUTUw1IEF1ZGlvIGxvb3AuXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIGxvb3ApIHtcbiAgICAgICAgc2VsZi5zdG9wKHNvdW5kLl9pZCwgdHJ1ZSkucGxheShzb3VuZC5faWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXN0YXJ0IHRoaXMgdGltZXIgaWYgb24gYSBXZWIgQXVkaW8gbG9vcC5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBsb29wKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcblxuICAgICAgICB2YXIgdGltZW91dCA9ICgoc291bmQuX3N0b3AgLSBzb3VuZC5fc3RhcnQpICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG4gICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmsgdGhlIG5vZGUgYXMgcGF1c2VkLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmICFsb29wKSB7XG4gICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICBzb3VuZC5fZW5kZWQgPSB0cnVlO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIGF1dG8tc3VzcGVuZCBBdWRpb0NvbnRleHQgaWYgbm8gc291bmRzIGFyZSBzdGlsbCBwbGF5aW5nLlxuICAgICAgICBIb3dsZXIuX2F1dG9TdXNwZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gdXNpbmcgYSBzcHJpdGUsIGVuZCB0aGUgdHJhY2suXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmICFsb29wKSB7XG4gICAgICAgIHNlbGYuc3RvcChzb3VuZC5faWQsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGVuZCB0aW1lciBmb3IgYSBzb3VuZCBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9jbGVhclRpbWVyOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fZW5kVGltZXJzW2lkXSkge1xuICAgICAgICAvLyBDbGVhciB0aGUgdGltZW91dCBvciByZW1vdmUgdGhlIGVuZGVkIGxpc3RlbmVyLlxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuX2VuZFRpbWVyc1tpZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fZW5kVGltZXJzW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW2lkXSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzZWxmLl9lbmRUaW1lcnNbaWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzb3VuZCBpZGVudGlmaWVkIGJ5IHRoaXMgSUQsIG9yIHJldHVybiBudWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgU291bmQgSURcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgIFNvdW5kIG9iamVjdCBvciBudWxsLlxuICAgICAqL1xuICAgIF9zb3VuZEJ5SWQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBmaW5kIHRoZSBvbmUgd2l0aCB0aGlzIElELlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT09IHNlbGYuX3NvdW5kc1tpXS5faWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fc291bmRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gaW5hY3RpdmUgc291bmQgZnJvbSB0aGUgcG9vbCBvciBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfSBTb3VuZCBwbGF5YmFjayBvYmplY3QuXG4gICAgICovXG4gICAgX2luYWN0aXZlU291bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzZWxmLl9kcmFpbigpO1xuXG4gICAgICAvLyBGaW5kIHRoZSBmaXJzdCBpbmFjdGl2ZSBub2RlIHRvIHJlY3ljbGUuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX3NvdW5kc1tpXS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGluYWN0aXZlIG5vZGUgd2FzIGZvdW5kLCBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAgcmV0dXJuIG5ldyBTb3VuZChzZWxmKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRHJhaW4gZXhjZXNzIGluYWN0aXZlIHNvdW5kcyBmcm9tIHRoZSBwb29sLlxuICAgICAqL1xuICAgIF9kcmFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbGltaXQgPSBzZWxmLl9wb29sO1xuICAgICAgdmFyIGNudCA9IDA7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBsZXNzIHNvdW5kcyB0aGFuIHRoZSBtYXggcG9vbCBzaXplLCB3ZSBhcmUgZG9uZS5cbiAgICAgIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGluYWN0aXZlIHNvdW5kcy5cbiAgICAgIGZvciAoaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBleGNlc3MgaW5hY3RpdmUgc291bmRzLCBnb2luZyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgZm9yIChpPXNlbGYuX3NvdW5kcy5sZW5ndGggLSAxOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgaWYgKGNudCA8PSBsaW1pdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgLy8gRGlzY29ubmVjdCB0aGUgYXVkaW8gc291cmNlIHdoZW4gdXNpbmcgV2ViIEF1ZGlvLlxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzZWxmLl9zb3VuZHNbaV0uX25vZGUpIHtcbiAgICAgICAgICAgIHNlbGYuX3NvdW5kc1tpXS5fbm9kZS5kaXNjb25uZWN0KDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSBzb3VuZHMgdW50aWwgd2UgaGF2ZSB0aGUgcG9vbCBzaXplLlxuICAgICAgICAgIHNlbGYuX3NvdW5kcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgY250LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBJRCdzIGZyb20gdGhlIHNvdW5kcyBwb29sLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgT25seSByZXR1cm4gb25lIElEIGlmIG9uZSBpcyBwYXNzZWQuXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgIEFycmF5IG9mIElEcy5cbiAgICAgKi9cbiAgICBfZ2V0U291bmRJZHM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlkcy5wdXNoKHNlbGYuX3NvdW5kc1tpXS5faWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbaWRdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBzb3VuZCBiYWNrIGludG8gdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICogQHBhcmFtICB7U291bmR9IHNvdW5kIFRoZSBzb3VuZCBvYmplY3QgdG8gd29yayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX3JlZnJlc2hCdWZmZXI6IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBidWZmZXIgc291cmNlIGZvciBwbGF5YmFjay5cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSA9IEhvd2xlci5jdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuYnVmZmVyID0gY2FjaGVbc2VsZi5fc3JjXTtcblxuICAgICAgLy8gQ29ubmVjdCB0byB0aGUgY29ycmVjdCBub2RlLlxuICAgICAgaWYgKHNvdW5kLl9wYW5uZXIpIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmNvbm5lY3Qoc291bmQuX3Bhbm5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuY29ubmVjdChzb3VuZC5fbm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIGxvb3BpbmcgYW5kIHBsYXliYWNrIHJhdGUuXG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcCA9IHNvdW5kLl9sb29wO1xuICAgICAgaWYgKHNvdW5kLl9sb29wKSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BFbmQgPSBzb3VuZC5fc3RvcCB8fCAwO1xuICAgICAgfVxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcmF0ZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50IG1lbW9yeSBsZWFrcyBieSBjbGVhbmluZyB1cCB0aGUgYnVmZmVyIHNvdXJjZSBhZnRlciBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG5vZGUgU291bmQncyBhdWRpbyBub2RlIGNvbnRhaW5pbmcgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfY2xlYW5CdWZmZXI6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBpc0lPUyA9IEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnZlbmRvci5pbmRleE9mKCdBcHBsZScpID49IDA7XG5cbiAgICAgIGlmIChIb3dsZXIuX3NjcmF0Y2hCdWZmZXIgJiYgbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgbm9kZS5idWZmZXJTb3VyY2Uub25lbmRlZCA9IG51bGw7XG4gICAgICAgIG5vZGUuYnVmZmVyU291cmNlLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgIHRyeSB7IG5vZGUuYnVmZmVyU291cmNlLmJ1ZmZlciA9IEhvd2xlci5fc2NyYXRjaEJ1ZmZlcjsgfSBjYXRjaChlKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2RlLmJ1ZmZlclNvdXJjZSA9IG51bGw7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNvdXJjZSB0byBhIDAtc2Vjb25kIHNpbGVuY2UgdG8gc3RvcCBhbnkgZG93bmxvYWRpbmcgKGV4Y2VwdCBpbiBJRSkuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBub2RlIEF1ZGlvIG5vZGUgdG8gY2xlYXIuXG4gICAgICovXG4gICAgX2NsZWFyU291bmQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBjaGVja0lFID0gL01TSUUgfFRyaWRlbnRcXC8vLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIGlmICghY2hlY2tJRSkge1xuICAgICAgICBub2RlLnNyYyA9ICdkYXRhOmF1ZGlvL3dhdjtiYXNlNjQsVWtsR1JpZ0FBQUJYUVZaRlptMTBJQklBQUFBQkFBRUFSS3dBQUloWUFRQUNBQkFBQUFCa1lYUmhBZ0FBQUFFQSc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKiBTaW5nbGUgU291bmQgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogU2V0dXAgdGhlIHNvdW5kIG9iamVjdCwgd2hpY2ggZWFjaCBub2RlIGF0dGFjaGVkIHRvIGEgSG93bCBncm91cCBpcyBjb250YWluZWQgaW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBob3dsIFRoZSBIb3dsIHBhcmVudCBncm91cC5cbiAgICovXG4gIHZhciBTb3VuZCA9IGZ1bmN0aW9uKGhvd2wpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBob3dsO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuICBTb3VuZC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBTb3VuZCBvYmplY3QuXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBTZXR1cCB0aGUgZGVmYXVsdCBwYXJhbWV0ZXJzLlxuICAgICAgc2VsZi5fbXV0ZWQgPSBwYXJlbnQuX211dGVkO1xuICAgICAgc2VsZi5fbG9vcCA9IHBhcmVudC5fbG9vcDtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IHBhcmVudC5fdm9sdW1lO1xuICAgICAgc2VsZi5fcmF0ZSA9IHBhcmVudC5fcmF0ZTtcbiAgICAgIHNlbGYuX3NlZWsgPSAwO1xuICAgICAgc2VsZi5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX2lkID0gKytIb3dsZXIuX2NvdW50ZXI7XG5cbiAgICAgIC8vIEFkZCBpdHNlbGYgdG8gdGhlIHBhcmVudCdzIHBvb2wuXG4gICAgICBwYXJlbnQuX3NvdW5kcy5wdXNoKHNlbGYpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIG5ldyBub2RlLlxuICAgICAgc2VsZi5jcmVhdGUoKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgc2V0dXAgYSBuZXcgc291bmQgb2JqZWN0LCB3aGV0aGVyIEhUTUw1IEF1ZGlvIG9yIFdlYiBBdWRpby5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcbiAgICAgIHZhciB2b2x1bWUgPSAoSG93bGVyLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCB8fCBzZWxmLl9wYXJlbnQuX211dGVkKSA/IDAgOiBzZWxmLl92b2x1bWU7XG5cbiAgICAgIGlmIChwYXJlbnQuX3dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZ2FpbiBub2RlIGZvciBjb250cm9sbGluZyB2b2x1bWUgKHRoZSBzb3VyY2Ugd2lsbCBjb25uZWN0IHRvIHRoaXMpLlxuICAgICAgICBzZWxmLl9ub2RlID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4gPT09ICd1bmRlZmluZWQnKSA/IEhvd2xlci5jdHguY3JlYXRlR2Fpbk5vZGUoKSA6IEhvd2xlci5jdHguY3JlYXRlR2FpbigpO1xuICAgICAgICBzZWxmLl9ub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc2VsZi5fbm9kZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLl9ub2RlLmNvbm5lY3QoSG93bGVyLm1hc3RlckdhaW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gR2V0IGFuIHVubG9ja2VkIEF1ZGlvIG9iamVjdCBmcm9tIHRoZSBwb29sLlxuICAgICAgICBzZWxmLl9ub2RlID0gSG93bGVyLl9vYnRhaW5IdG1sNUF1ZGlvKCk7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciBlcnJvcnMgKGh0dHA6Ly9kZXYudzMub3JnL2h0bWw1L3NwZWMtYXV0aG9yLXZpZXcvc3BlYy5odG1sI21lZGlhZXJyb3IpLlxuICAgICAgICBzZWxmLl9lcnJvckZuID0gc2VsZi5fZXJyb3JMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc2VsZi5fZXJyb3JGbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgJ2NhbnBsYXl0aHJvdWdoJyBldmVudCB0byBsZXQgdXMga25vdyB0aGUgc291bmQgaXMgcmVhZHkuXG4gICAgICAgIHNlbGYuX2xvYWRGbiA9IHNlbGYuX2xvYWRMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNlbGYuX2xvYWRGbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIFNldHVwIHRoZSBuZXcgYXVkaW8gbm9kZS5cbiAgICAgICAgc2VsZi5fbm9kZS5zcmMgPSBwYXJlbnQuX3NyYztcbiAgICAgICAgc2VsZi5fbm9kZS5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICBzZWxmLl9ub2RlLnZvbHVtZSA9IHZvbHVtZSAqIEhvd2xlci52b2x1bWUoKTtcblxuICAgICAgICAvLyBCZWdpbiBsb2FkaW5nIHRoZSBzb3VyY2UuXG4gICAgICAgIHNlbGYuX25vZGUubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHBhcmFtZXRlcnMgb2YgdGhpcyBzb3VuZCB0byB0aGUgb3JpZ2luYWwgc3RhdGUgKGZvciByZWN5Y2xlKS5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBSZXNldCBhbGwgb2YgdGhlIHBhcmFtZXRlcnMgb2YgdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX211dGVkID0gcGFyZW50Ll9tdXRlZDtcbiAgICAgIHNlbGYuX2xvb3AgPSBwYXJlbnQuX2xvb3A7XG4gICAgICBzZWxmLl92b2x1bWUgPSBwYXJlbnQuX3ZvbHVtZTtcbiAgICAgIHNlbGYuX3JhdGUgPSBwYXJlbnQuX3JhdGU7XG4gICAgICBzZWxmLl9zZWVrID0gMDtcbiAgICAgIHNlbGYuX3JhdGVTZWVrID0gMDtcbiAgICAgIHNlbGYuX3BhdXNlZCA9IHRydWU7XG4gICAgICBzZWxmLl9lbmRlZCA9IHRydWU7XG4gICAgICBzZWxmLl9zcHJpdGUgPSAnX19kZWZhdWx0JztcblxuICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgc28gdGhhdCBpdCBpc24ndCBjb25mdXNlZCB3aXRoIHRoZSBwcmV2aW91cyBzb3VuZC5cbiAgICAgIHNlbGYuX2lkID0gKytIb3dsZXIuX2NvdW50ZXI7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVE1MNSBBdWRpbyBlcnJvciBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfZXJyb3JMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQgYW5kIHBhc3MgYmFjayB0aGUgY29kZS5cbiAgICAgIHNlbGYuX3BhcmVudC5fZW1pdCgnbG9hZGVycm9yJywgc2VsZi5faWQsIHNlbGYuX25vZGUuZXJyb3IgPyBzZWxmLl9ub2RlLmVycm9yLmNvZGUgOiAwKTtcblxuICAgICAgLy8gQ2xlYXIgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNlbGYuX2Vycm9yRm4sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSFRNTDUgQXVkaW8gY2FucGxheXRocm91Z2ggbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICovXG4gICAgX2xvYWRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBSb3VuZCB1cCB0aGUgZHVyYXRpb24gdG8gYWNjb3VudCBmb3IgdGhlIGxvd2VyIHByZWNpc2lvbiBpbiBIVE1MNSBBdWRpby5cbiAgICAgIHBhcmVudC5fZHVyYXRpb24gPSBNYXRoLmNlaWwoc2VsZi5fbm9kZS5kdXJhdGlvbiAqIDEwKSAvIDEwO1xuXG4gICAgICAvLyBTZXR1cCBhIHNwcml0ZSBpZiBub25lIGlzIGRlZmluZWQuXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFyZW50Ll9zcHJpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJlbnQuX3Nwcml0ZSA9IHtfX2RlZmF1bHQ6IFswLCBwYXJlbnQuX2R1cmF0aW9uICogMTAwMF19O1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50Ll9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgcGFyZW50Ll9zdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgICBwYXJlbnQuX2VtaXQoJ2xvYWQnKTtcbiAgICAgICAgcGFyZW50Ll9sb2FkUXVldWUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzZWxmLl9sb2FkRm4sIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBCdWZmZXIgYSBzb3VuZCBmcm9tIFVSTCwgRGF0YSBVUkkgb3IgY2FjaGUgYW5kIGRlY29kZSB0byBhdWRpbyBzb3VyY2UgKFdlYiBBdWRpbyBBUEkpLlxuICAgKiBAcGFyYW0gIHtIb3dsfSBzZWxmXG4gICAqL1xuICB2YXIgbG9hZEJ1ZmZlciA9IGZ1bmN0aW9uKHNlbGYpIHtcbiAgICB2YXIgdXJsID0gc2VsZi5fc3JjO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGJ1ZmZlciBoYXMgYWxyZWFkeSBiZWVuIGNhY2hlZCBhbmQgdXNlIGl0IGluc3RlYWQuXG4gICAgaWYgKGNhY2hlW3VybF0pIHtcbiAgICAgIC8vIFNldCB0aGUgZHVyYXRpb24gZnJvbSB0aGUgY2FjaGUuXG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IGNhY2hlW3VybF0uZHVyYXRpb247XG5cbiAgICAgIC8vIExvYWQgdGhlIHNvdW5kIGludG8gdGhpcyBIb3dsLlxuICAgICAgbG9hZFNvdW5kKHNlbGYpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKC9eZGF0YTpbXjtdKztiYXNlNjQsLy50ZXN0KHVybCkpIHtcbiAgICAgIC8vIERlY29kZSB0aGUgYmFzZTY0IGRhdGEgVVJJIHdpdGhvdXQgWEhSLCBzaW5jZSBzb21lIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgaXQuXG4gICAgICB2YXIgZGF0YSA9IGF0b2IodXJsLnNwbGl0KCcsJylbMV0pO1xuICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZGF0YVZpZXdbaV0gPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG5cbiAgICAgIGRlY29kZUF1ZGlvRGF0YShkYXRhVmlldy5idWZmZXIsIHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb2FkIHRoZSBidWZmZXIgZnJvbSB0aGUgVVJMLlxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gc2VsZi5feGhyV2l0aENyZWRlbnRpYWxzO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBnZXQgYSBzdWNjZXNzZnVsIHJlc3BvbnNlIGJhY2suXG4gICAgICAgIHZhciBjb2RlID0gKHhoci5zdGF0dXMgKyAnJylbMF07XG4gICAgICAgIGlmIChjb2RlICE9PSAnMCcgJiYgY29kZSAhPT0gJzInICYmIGNvZGUgIT09ICczJykge1xuICAgICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdGYWlsZWQgbG9hZGluZyBhdWRpbyBmaWxlIHdpdGggc3RhdHVzOiAnICsgeGhyLnN0YXR1cyArICcuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlQXVkaW9EYXRhKHhoci5yZXNwb25zZSwgc2VsZik7XG4gICAgICB9O1xuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIHN3aXRjaCB0byBIVE1MNSBBdWRpby5cbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc2VsZi5faHRtbDUgPSB0cnVlO1xuICAgICAgICAgIHNlbGYuX3dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICAgICAgZGVsZXRlIGNhY2hlW3VybF07XG4gICAgICAgICAgc2VsZi5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBzYWZlWGhyU2VuZCh4aHIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2VuZCB0aGUgWEhSIHJlcXVlc3Qgd3JhcHBlZCBpbiBhIHRyeS9jYXRjaC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSB4aHIgWEhSIHRvIHNlbmQuXG4gICAqL1xuICB2YXIgc2FmZVhoclNlbmQgPSBmdW5jdGlvbih4aHIpIHtcbiAgICB0cnkge1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB4aHIub25lcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVjb2RlIGF1ZGlvIGRhdGEgZnJvbSBhbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSAge0FycmF5QnVmZmVyfSBhcnJheWJ1ZmZlciBUaGUgYXVkaW8gZGF0YS5cbiAgICogQHBhcmFtICB7SG93bH0gICAgICAgIHNlbGZcbiAgICovXG4gIHZhciBkZWNvZGVBdWRpb0RhdGEgPSBmdW5jdGlvbihhcnJheWJ1ZmZlciwgc2VsZikge1xuICAgIC8vIEZpcmUgYSBsb2FkIGVycm9yIGlmIHNvbWV0aGluZyBicm9rZS5cbiAgICB2YXIgZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdEZWNvZGluZyBhdWRpbyBkYXRhIGZhaWxlZC4nKTtcbiAgICB9O1xuXG4gICAgLy8gTG9hZCB0aGUgc291bmQgb24gc3VjY2Vzcy5cbiAgICB2YXIgc3VjY2VzcyA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgaWYgKGJ1ZmZlciAmJiBzZWxmLl9zb3VuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjYWNoZVtzZWxmLl9zcmNdID0gYnVmZmVyO1xuICAgICAgICBsb2FkU291bmQoc2VsZiwgYnVmZmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERlY29kZSB0aGUgYnVmZmVyIGludG8gYW4gYXVkaW8gc291cmNlLlxuICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgSG93bGVyLmN0eC5kZWNvZGVBdWRpb0RhdGEubGVuZ3RoID09PSAxKSB7XG4gICAgICBIb3dsZXIuY3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheWJ1ZmZlcikudGhlbihzdWNjZXNzKS5jYXRjaChlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIEhvd2xlci5jdHguZGVjb2RlQXVkaW9EYXRhKGFycmF5YnVmZmVyLCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNvdW5kIGlzIG5vdyBsb2FkZWQsIHNvIGZpbmlzaCBzZXR0aW5nIGV2ZXJ5dGhpbmcgdXAgYW5kIGZpcmUgdGhlIGxvYWRlZCBldmVudC5cbiAgICogQHBhcmFtICB7SG93bH0gc2VsZlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGJ1ZmZlciBUaGUgZGVjb2RlZCBidWZmZXIgc291bmQgc291cmNlLlxuICAgKi9cbiAgdmFyIGxvYWRTb3VuZCA9IGZ1bmN0aW9uKHNlbGYsIGJ1ZmZlcikge1xuICAgIC8vIFNldCB0aGUgZHVyYXRpb24uXG4gICAgaWYgKGJ1ZmZlciAmJiAhc2VsZi5fZHVyYXRpb24pIHtcbiAgICAgIHNlbGYuX2R1cmF0aW9uID0gYnVmZmVyLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8vIFNldHVwIGEgc3ByaXRlIGlmIG5vbmUgaXMgZGVmaW5lZC5cbiAgICBpZiAoT2JqZWN0LmtleXMoc2VsZi5fc3ByaXRlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9IHtfX2RlZmF1bHQ6IFswLCBzZWxmLl9kdXJhdGlvbiAqIDEwMDBdfTtcbiAgICB9XG5cbiAgICAvLyBGaXJlIHRoZSBsb2FkZWQgZXZlbnQuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fc3RhdGUgPSAnbG9hZGVkJztcbiAgICAgIHNlbGYuX2VtaXQoJ2xvYWQnKTtcbiAgICAgIHNlbGYuX2xvYWRRdWV1ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgdGhlIGF1ZGlvIGNvbnRleHQgd2hlbiBhdmFpbGFibGUsIG9yIHN3aXRjaCB0byBIVE1MNSBBdWRpbyBtb2RlLlxuICAgKi9cbiAgdmFyIHNldHVwQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IGRldGVjdGVkIHRoYXQgV2ViIEF1ZGlvIGlzbid0IHN1cHBvcnRlZCwgZG9uJ3QgcnVuIHRoaXMgc3RlcCBhZ2Fpbi5cbiAgICBpZiAoIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgYXJlIHVzaW5nIFdlYiBBdWRpbyBhbmQgc2V0dXAgdGhlIEF1ZGlvQ29udGV4dCBpZiB3ZSBhcmUuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgQXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBIb3dsZXIuY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBIb3dsZXIuY3R4ID0gbmV3IHdlYmtpdEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGF1ZGlvIGNvbnRleHQgY3JlYXRpb24gc3RpbGwgZmFpbGVkLCBzZXQgdXNpbmcgd2ViIGF1ZGlvIHRvIGZhbHNlLlxuICAgIGlmICghSG93bGVyLmN0eCkge1xuICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhIHdlYnZpZXcgaXMgYmVpbmcgdXNlZCBvbiBpT1M4IG9yIGVhcmxpZXIgKHJhdGhlciB0aGFuIHRoZSBicm93c2VyKS5cbiAgICAvLyBJZiBpdCBpcywgZGlzYWJsZSBXZWIgQXVkaW8gYXMgaXQgY2F1c2VzIGNyYXNoaW5nLlxuICAgIHZhciBpT1MgPSAoL2lQKGhvbmV8b2R8YWQpLy50ZXN0KEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnBsYXRmb3JtKSk7XG4gICAgdmFyIGFwcFZlcnNpb24gPSBIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XG4gICAgdmFyIHZlcnNpb24gPSBhcHBWZXJzaW9uID8gcGFyc2VJbnQoYXBwVmVyc2lvblsxXSwgMTApIDogbnVsbDtcbiAgICBpZiAoaU9TICYmIHZlcnNpb24gJiYgdmVyc2lvbiA8IDkpIHtcbiAgICAgIHZhciBzYWZhcmkgPSAvc2FmYXJpLy50ZXN0KEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci5zdGFuZGFsb25lICYmICFzYWZhcmkgfHwgSG93bGVyLl9uYXZpZ2F0b3IgJiYgIUhvd2xlci5fbmF2aWdhdG9yLnN0YW5kYWxvbmUgJiYgIXNhZmFyaSkge1xuICAgICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbmQgZXhwb3NlIHRoZSBtYXN0ZXIgR2Fpbk5vZGUgd2hlbiB1c2luZyBXZWIgQXVkaW8gKHVzZWZ1bCBmb3IgcGx1Z2lucyBvciBhZHZhbmNlZCB1c2FnZSkuXG4gICAgaWYgKEhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICBIb3dsZXIubWFzdGVyR2FpbiA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVHYWluID09PSAndW5kZWZpbmVkJykgPyBIb3dsZXIuY3R4LmNyZWF0ZUdhaW5Ob2RlKCkgOiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoSG93bGVyLl9tdXRlZCA/IDAgOiAxLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluLmNvbm5lY3QoSG93bGVyLmN0eC5kZXN0aW5hdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmUtcnVuIHRoZSBzZXR1cCBvbiBIb3dsZXIuXG4gICAgSG93bGVyLl9zZXR1cCgpO1xuICB9O1xuXG4gIC8vIEFkZCBzdXBwb3J0IGZvciBBTUQgKEFzeW5jaHJvbm91cyBNb2R1bGUgRGVmaW5pdGlvbikgbGlicmFyaWVzIHN1Y2ggYXMgcmVxdWlyZS5qcy5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBIb3dsZXI6IEhvd2xlcixcbiAgICAgICAgSG93bDogSG93bFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFkZCBzdXBwb3J0IGZvciBDb21tb25KUyBsaWJyYXJpZXMgc3VjaCBhcyBicm93c2VyaWZ5LlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXhwb3J0cy5Ib3dsZXIgPSBIb3dsZXI7XG4gICAgZXhwb3J0cy5Ib3dsID0gSG93bDtcbiAgfVxuXG4gIC8vIERlZmluZSBnbG9iYWxseSBpbiBjYXNlIEFNRCBpcyBub3QgYXZhaWxhYmxlIG9yIHVudXNlZC5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lkhvd2xlckdsb2JhbCA9IEhvd2xlckdsb2JhbDtcbiAgICB3aW5kb3cuSG93bGVyID0gSG93bGVyO1xuICAgIHdpbmRvdy5Ib3dsID0gSG93bDtcbiAgICB3aW5kb3cuU291bmQgPSBTb3VuZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyAvLyBBZGQgdG8gZ2xvYmFsIGluIE5vZGUuanMgKGZvciB0ZXN0aW5nLCBldGMpLlxuICAgIGdsb2JhbC5Ib3dsZXJHbG9iYWwgPSBIb3dsZXJHbG9iYWw7XG4gICAgZ2xvYmFsLkhvd2xlciA9IEhvd2xlcjtcbiAgICBnbG9iYWwuSG93bCA9IEhvd2w7XG4gICAgZ2xvYmFsLlNvdW5kID0gU291bmQ7XG4gIH1cbn0pKCk7XG5cblxuLyohXG4gKiAgU3BhdGlhbCBQbHVnaW4gLSBBZGRzIHN1cHBvcnQgZm9yIHN0ZXJlbyBhbmQgM0QgYXVkaW8gd2hlcmUgV2ViIEF1ZGlvIGlzIHN1cHBvcnRlZC5cbiAqICBcbiAqICBob3dsZXIuanMgdjIuMS4yXG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMTksIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNldHVwIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5fcG9zID0gWzAsIDAsIDBdO1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLl9vcmllbnRhdGlvbiA9IFswLCAwLCAtMSwgMCwgMSwgMF07XG5cbiAgLyoqIEdsb2JhbCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgc3RlcmVvIHBhbm5pbmcgcG9zaXRpb24gb2YgYWxsIGN1cnJlbnQgSG93bHMuXG4gICAqIEZ1dHVyZSBIb3dscyB3aWxsIG5vdCB1c2UgdGhpcyB2YWx1ZSB1bmxlc3MgZXhwbGljaXRseSBzZXQuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuIEEgdmFsdWUgb2YgLTEuMCBpcyBhbGwgdGhlIHdheSBsZWZ0IGFuZCAxLjAgaXMgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAqIEByZXR1cm4ge0hvd2xlci9OdW1iZXJ9ICAgICBTZWxmIG9yIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIEhvd2xzIGFuZCB1cGRhdGUgdGhlaXIgc3RlcmVvIHBhbm5pbmcuXG4gICAgZm9yICh2YXIgaT1zZWxmLl9ob3dscy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICBzZWxmLl9ob3dsc1tpXS5zdGVyZW8ocGFuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcG9zaXRpb24gb2YgdGhlIGxpc3RlbmVyIGluIDNEIGNhcnRlc2lhbiBzcGFjZS4gU291bmRzIHVzaW5nXG4gICAqIDNEIHBvc2l0aW9uIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhlIGxpc3RlbmVyJ3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSAge051bWJlcn0geCBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiBUaGUgei1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICBTZWxmIG9yIGN1cnJlbnQgbGlzdGVuZXIgcG9zaXRpb24uXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnBvcyA9IGZ1bmN0aW9uKHgsIHksIHopIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IHNlbGYuX3Bvc1sxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzJdIDogejtcblxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWC5zZXRUYXJnZXRBdFRpbWUoc2VsZi5fcG9zWzBdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblkuc2V0VGFyZ2V0QXRUaW1lKHNlbGYuX3Bvc1sxXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIucG9zaXRpb25aLnNldFRhcmdldEF0VGltZShzZWxmLl9wb3NbMl0sIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5zZXRQb3NpdGlvbihzZWxmLl9wb3NbMF0sIHNlbGYuX3Bvc1sxXSwgc2VsZi5fcG9zWzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlbGYuX3BvcztcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBsaXN0ZW5lciBpcyBwb2ludGluZyBpbiB0aGUgM0QgY2FydGVzaWFuIHNwYWNlLlxuICAgKiBBIGZyb250IGFuZCB1cCB2ZWN0b3IgbXVzdCBiZSBwcm92aWRlZC4gVGhlIGZyb250IGlzIHRoZSBkaXJlY3Rpb24gdGhlXG4gICAqIGZhY2Ugb2YgdGhlIGxpc3RlbmVyIGlzIHBvaW50aW5nLCBhbmQgdXAgaXMgdGhlIGRpcmVjdGlvbiB0aGUgdG9wIG9mIHRoZVxuICAgKiBsaXN0ZW5lciBpcyBwb2ludGluZy4gVGh1cywgdGhlc2UgdmFsdWVzIGFyZSBleHBlY3RlZCB0byBiZSBhdCByaWdodCBhbmdsZXNcbiAgICogZnJvbSBlYWNoIG90aGVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgIFRoZSB5LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6ICAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhVcCBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5VXAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0gelVwIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtIb3dsZXIvQXJyYXl9ICAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gdmVjdG9ycy5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCB4VXAsIHlVcCwgelVwKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLmN0eCB8fCAhc2VsZi5jdHgubGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB2YXIgb3IgPSBzZWxmLl9vcmllbnRhdGlvbjtcbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyBvclsxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gb3JbMl0gOiB6O1xuICAgIHhVcCA9ICh0eXBlb2YgeFVwICE9PSAnbnVtYmVyJykgPyBvclszXSA6IHhVcDtcbiAgICB5VXAgPSAodHlwZW9mIHlVcCAhPT0gJ251bWJlcicpID8gb3JbNF0gOiB5VXA7XG4gICAgelVwID0gKHR5cGVvZiB6VXAgIT09ICdudW1iZXInKSA/IG9yWzVdIDogelVwO1xuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBbeCwgeSwgeiwgeFVwLCB5VXAsIHpVcF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLmZvcndhcmRYLnNldFRhcmdldEF0VGltZSh4LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWS5zZXRUYXJnZXRBdFRpbWUoeSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFouc2V0VGFyZ2V0QXRUaW1lKHosIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnVwWC5zZXRUYXJnZXRBdFRpbWUoeCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIudXBZLnNldFRhcmdldEF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci51cFouc2V0VGFyZ2V0QXRUaW1lKHosIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih4LCB5LCB6LCB4VXAsIHlVcCwgelVwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9yO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKiBHcm91cCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlIGNvcmUgaW5pdC5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBDb3JlIGluaXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUuaW5pdCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBvLm9yaWVudGF0aW9uIHx8IFsxLCAwLCAwXTtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IG8uc3RlcmVvIHx8IG51bGw7XG4gICAgICBzZWxmLl9wb3MgPSBvLnBvcyB8fCBudWxsO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHtcbiAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZUlubmVyQW5nbGUgOiAzNjAsXG4gICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckFuZ2xlIDogMzYwLFxuICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyR2FpbiA6IDAsXG4gICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5kaXN0YW5jZU1vZGVsIDogJ2ludmVyc2UnLFxuICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5tYXhEaXN0YW5jZSA6IDEwMDAwLFxuICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5pbmdNb2RlbCA6ICdIUlRGJyxcbiAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucmVmRGlzdGFuY2UgOiAxLFxuICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucm9sbG9mZkZhY3RvciA6IDFcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIHNlbGYuX29uc3RlcmVvID0gby5vbnN0ZXJlbyA/IFt7Zm46IG8ub25zdGVyZW99XSA6IFtdO1xuICAgICAgc2VsZi5fb25wb3MgPSBvLm9ucG9zID8gW3tmbjogby5vbnBvc31dIDogW107XG4gICAgICBzZWxmLl9vbm9yaWVudGF0aW9uID0gby5vbm9yaWVudGF0aW9uID8gW3tmbjogby5vbm9yaWVudGF0aW9ufV0gOiBbXTtcblxuICAgICAgLy8gQ29tcGxldGUgaW5pdGlsaXphdGlvbiB3aXRoIGhvd2xlci5qcyBjb3JlJ3MgaW5pdCBmdW5jdGlvbi5cbiAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvKTtcbiAgICB9O1xuICB9KShIb3dsLnByb3RvdHlwZS5pbml0KTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgc3RlcmVvIHBhbm5pbmcgb2YgdGhlIGF1ZGlvIHNvdXJjZSBmb3IgdGhpcyBzb3VuZCBvciBhbGwgaW4gdGhlIGdyb3VwLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHBhbiAgQSB2YWx1ZSBvZiAtMS4wIGlzIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDEuMCBpcyBhbGwgdGhlIHdheSByaWdodC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5zdGVyZW8gPSBmdW5jdGlvbihwYW4sIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugc3RlcmVvIHBhbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAnc3RlcmVvJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0ZXJlbyhwYW4sIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBQYW5uZXJTdGVyZW9Ob2RlIHN1cHBvcnQgYW5kIGZhbGxiYWNrIHRvIFBhbm5lck5vZGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICB2YXIgcGFubmVyVHlwZSA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVTdGVyZW9QYW5uZXIgPT09ICd1bmRlZmluZWQnKSA/ICdzcGF0aWFsJyA6ICdzdGVyZW8nO1xuXG4gICAgLy8gU2V0dXAgdGhlIGdyb3VwJ3Mgc3RlcmVvIHBhbm5pbmcgaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3RlcmVvIHBhbm5pbmcgaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiBwYW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhbjtcbiAgICAgICAgc2VsZi5fcG9zID0gW3BhbiwgMCwgMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fc3RlcmVvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3RyZW8gcGFubmluZyBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9zdGVyZW8gPSBwYW47XG4gICAgICAgICAgc291bmQuX3BvcyA9IFtwYW4sIDAsIDBdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgZmFsbGluZyBiYWNrLCBtYWtlIHN1cmUgdGhlIHBhbm5pbmdNb2RlbCBpcyBlcXVhbHBvd2VyLlxuICAgICAgICAgICAgc291bmQuX3Bhbm5lckF0dHIucGFubmluZ01vZGVsID0gJ2VxdWFscG93ZXInO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIgfHwgIXNvdW5kLl9wYW5uZXIucGFuKSB7XG4gICAgICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCBwYW5uZXJUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhbm5lclR5cGUgPT09ICdzcGF0aWFsJykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHBhbiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblkuc2V0VmFsdWVBdFRpbWUoMCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoMCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5zZXRQb3NpdGlvbihwYW4sIDAsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShwYW4sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3N0ZXJlbycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9zdGVyZW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgM0Qgc3BhdGlhbCBwb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlIGZvciB0aGlzIHNvdW5kIG9yIGdyb3VwIHJlbGF0aXZlIHRvIHRoZSBnbG9iYWwgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBwb3NpdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24oeCwgeSwgeiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBwb3NpdGlvbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAncG9zJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnBvcyh4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gMCA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gLTAuNSA6IHo7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzcGF0aWFsIHBvc2l0aW9uIGlmIG5vIElEIGlzIHBhc3NlZC5cbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHNwYXRpYWwgcG9zaXRpb24gaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZWxmLl9wb3MgPSBbeCwgeSwgel07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fcG9zO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBwb3NpdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fcG9zID0gW3gsIHksIHpdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIgfHwgc291bmQuX3Bhbm5lci5wYW4pIHtcbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3BvcycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9wb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBhdWRpbyBzb3VyY2UgaXMgcG9pbnRpbmcgaW4gdGhlIDNEIGNhcnRlc2lhbiBjb29yZGluYXRlXG4gICAqIHNwYWNlLiBEZXBlbmRpbmcgb24gaG93IGRpcmVjdGlvbiB0aGUgc291bmQgaXMsIGJhc2VkIG9uIHRoZSBgY29uZWAgYXR0cmlidXRlcyxcbiAgICogYSBzb3VuZCBwb2ludGluZyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyIGNhbiBiZSBxdWlldCBvciBzaWxlbnQuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBvcmllbnRhdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIG9yaWVudGF0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdvcmllbnRhdGlvbicsXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5vcmllbnRhdGlvbih4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fb3JpZW50YXRpb25bMV0gOiB5O1xuICAgIHogPSAodHlwZW9mIHogIT09ICdudW1iZXInKSA/IHNlbGYuX29yaWVudGF0aW9uWzJdIDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgb3JpZW50YXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBvcmllbnRhdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gW3gsIHksIHpdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBvcmllbnRhdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fb3JpZW50YXRpb24gPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHBvc2l0aW9uIHRvIHNldHVwIHRoZSBub2RlIHdpdGguXG4gICAgICAgICAgICAgIGlmICghc291bmQuX3Bvcykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YLnNldFZhbHVlQXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWS5zZXRWYWx1ZUF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblouc2V0VmFsdWVBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ29yaWVudGF0aW9uJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX29yaWVudGF0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIHBhbm5lciBub2RlJ3MgYXR0cmlidXRlcyBmb3IgYSBzb3VuZCBvciBncm91cCBvZiBzb3VuZHMuXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGwgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgKiAgIHBhbm5lckF0dHIoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIHZhbHVlcy5cbiAgICogICBwYW5uZXJBdHRyKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIHZhbHVlcy5cbiAgICogICBwYW5uZXJBdHRyKG8pIC0+IFNldCdzIHRoZSB2YWx1ZXMgb2YgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAqICAgcGFubmVyQXR0cihvLCBpZCkgLT4gU2V0J3MgdGhlIHZhbHVlcyBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAqXG4gICAqICAgQXR0cmlidXRlczpcbiAgICogICAgIGNvbmVJbm5lckFuZ2xlIC0gKDM2MCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyBhbiBhbmdsZSwgaW4gZGVncmVlcyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgaW5zaWRlIG9mIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gdm9sdW1lIHJlZHVjdGlvbi5cbiAgICogICAgIGNvbmVPdXRlckFuZ2xlIC0gKDM2MCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyBhbiBhbmdsZSwgaW4gZGVncmVlcyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgb3V0c2lkZSBvZiB3aGljaCB0aGUgdm9sdW1lIHdpbGwgYmUgcmVkdWNlZCB0byBhIGNvbnN0YW50IHZhbHVlIG9mIGBjb25lT3V0ZXJHYWluYC5cbiAgICogICAgIGNvbmVPdXRlckdhaW4gLSAoMCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyB0aGUgZ2FpbiBvdXRzaWRlIG9mIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGBjb25lT3V0ZXJBbmdsZWAuIEl0IGlzIGEgbGluZWFyIHZhbHVlIGluIHRoZSByYW5nZSBgWzAsIDFdYC5cbiAgICogICAgIGRpc3RhbmNlTW9kZWwgLSAoJ2ludmVyc2UnIGJ5IGRlZmF1bHQpIERldGVybWluZXMgYWxnb3JpdGhtIHVzZWQgdG8gcmVkdWNlIHZvbHVtZSBhcyBhdWRpbyBtb3ZlcyBhd2F5IGZyb21cbiAgICogICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci4gQ2FuIGJlIGBsaW5lYXJgLCBgaW52ZXJzZWAgb3IgYGV4cG9uZW50aWFsLlxuICAgKiAgICAgbWF4RGlzdGFuY2UgLSAoMTAwMDAgYnkgZGVmYXVsdCkgVGhlIG1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiBzb3VyY2UgYW5kIGxpc3RlbmVyLCBhZnRlciB3aGljaCB0aGUgdm9sdW1lXG4gICAqICAgICAgICAgICAgICAgICAgIHdpbGwgbm90IGJlIHJlZHVjZWQgYW55IGZ1cnRoZXIuXG4gICAqICAgICByZWZEaXN0YW5jZSAtICgxIGJ5IGRlZmF1bHQpIEEgcmVmZXJlbmNlIGRpc3RhbmNlIGZvciByZWR1Y2luZyB2b2x1bWUgYXMgc291cmNlIG1vdmVzIGZ1cnRoZXIgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAqICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc2ltcGx5IGEgdmFyaWFibGUgb2YgdGhlIGRpc3RhbmNlIG1vZGVsIGFuZCBoYXMgYSBkaWZmZXJlbnQgZWZmZWN0IGRlcGVuZGluZyBvbiB3aGljaCBtb2RlbFxuICAgKiAgICAgICAgICAgICAgICAgICBpcyB1c2VkIGFuZCB0aGUgc2NhbGUgb2YgeW91ciBjb29yZGluYXRlcy4gR2VuZXJhbGx5LCB2b2x1bWUgd2lsbCBiZSBlcXVhbCB0byAxIGF0IHRoaXMgZGlzdGFuY2UuXG4gICAqICAgICByb2xsb2ZmRmFjdG9yIC0gKDEgYnkgZGVmYXVsdCkgSG93IHF1aWNrbHkgdGhlIHZvbHVtZSByZWR1Y2VzIGFzIHNvdXJjZSBtb3ZlcyBmcm9tIGxpc3RlbmVyLiBUaGlzIGlzIHNpbXBseSBhXG4gICAqICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgb2YgdGhlIGRpc3RhbmNlIG1vZGVsIGFuZCBjYW4gYmUgaW4gdGhlIHJhbmdlIG9mIGBbMCwgMV1gIHdpdGggYGxpbmVhcmAgYW5kIGBbMCwg4oieXWBcbiAgICogICAgICAgICAgICAgICAgICAgICB3aXRoIGBpbnZlcnNlYCBhbmQgYGV4cG9uZW50aWFsYC5cbiAgICogICAgIHBhbm5pbmdNb2RlbCAtICgnSFJURicgYnkgZGVmYXVsdCkgRGV0ZXJtaW5lcyB3aGljaCBzcGF0aWFsaXphdGlvbiBhbGdvcml0aG0gaXMgdXNlZCB0byBwb3NpdGlvbiBhdWRpby5cbiAgICogICAgICAgICAgICAgICAgICAgICBDYW4gYmUgYEhSVEZgIG9yIGBlcXVhbHBvd2VyYC5cbiAgICpcbiAgICogQHJldHVybiB7SG93bC9PYmplY3R9IFJldHVybnMgc2VsZiBvciBjdXJyZW50IHBhbm5lciBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUucGFubmVyQXR0ciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgbywgaWQsIHNvdW5kO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgcmV0dXJuIHNlbGYuX3Bhbm5lckF0dHI7XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvID0gYXJnc1swXTtcblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3UncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoIW8ucGFubmVyQXR0cikge1xuICAgICAgICAgICAgby5wYW5uZXJBdHRyID0ge1xuICAgICAgICAgICAgICBjb25lSW5uZXJBbmdsZTogby5jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICAgICAgY29uZU91dGVyQW5nbGU6IG8uY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgICAgIGNvbmVPdXRlckdhaW46IG8uY29uZU91dGVyR2FpbixcbiAgICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogby5kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgICAgICBtYXhEaXN0YW5jZTogby5tYXhEaXN0YW5jZSxcbiAgICAgICAgICAgICAgcmVmRGlzdGFuY2U6IG8ucmVmRGlzdGFuY2UsXG4gICAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IG8ucm9sbG9mZkZhY3RvcixcbiAgICAgICAgICAgICAgcGFubmluZ01vZGVsOiBvLnBhbm5pbmdNb2RlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9wYW5uZXJBdHRyID0ge1xuICAgICAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlIDogc2VsZi5fY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZU91dGVyQW5nbGUgOiBzZWxmLl9jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZU91dGVyR2FpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZU91dGVyR2FpbiA6IHNlbGYuX2NvbmVPdXRlckdhaW4sXG4gICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWwgOiBzZWxmLl9kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IHR5cGVvZiBvLnBhbm5lckF0dHIubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLm1heERpc3RhbmNlIDogc2VsZi5fbWF4RGlzdGFuY2UsXG4gICAgICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucGFubmVyQXR0ci5yZWZEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucmVmRGlzdGFuY2UgOiBzZWxmLl9yZWZEaXN0YW5jZSxcbiAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnBhbm5lckF0dHIucm9sbG9mZkZhY3RvciAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucm9sbG9mZkZhY3RvciA6IHNlbGYuX3JvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5lckF0dHIucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgOiBzZWxmLl9wYW5uaW5nTW9kZWxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhpcyBzb3VuZCdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChwYXJzZUludChhcmdzWzBdLCAxMCkpO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fcGFubmVyQXR0ciA6IHNlbGYuX3Bhbm5lckF0dHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgbyA9IGFyZ3NbMF07XG4gICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHZhbHVlcyBvZiB0aGUgc3BlY2lmaWVkIHNvdW5kcy5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAvLyBNZXJnZSB0aGUgbmV3IHZhbHVlcyBpbnRvIHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHBhID0gc291bmQuX3Bhbm5lckF0dHI7XG4gICAgICAgIHBhID0ge1xuICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiB0eXBlb2Ygby5jb25lSW5uZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVJbm5lckFuZ2xlIDogcGEuY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyQW5nbGUgOiBwYS5jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyR2FpbiA6IHBhLmNvbmVPdXRlckdhaW4sXG4gICAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8uZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLmRpc3RhbmNlTW9kZWwgOiBwYS5kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLm1heERpc3RhbmNlIDogcGEubWF4RGlzdGFuY2UsXG4gICAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucmVmRGlzdGFuY2UgOiBwYS5yZWZEaXN0YW5jZSxcbiAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucm9sbG9mZkZhY3RvciA6IHBhLnJvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgcGFubmluZ01vZGVsOiB0eXBlb2Ygby5wYW5uaW5nTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uaW5nTW9kZWwgOiBwYS5wYW5uaW5nTW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBhbm5lciB2YWx1ZXMgb3IgY3JlYXRlIGEgbmV3IHBhbm5lciBpZiBub25lIGV4aXN0cy5cbiAgICAgICAgdmFyIHBhbm5lciA9IHNvdW5kLl9wYW5uZXI7XG4gICAgICAgIGlmIChwYW5uZXIpIHtcbiAgICAgICAgICBwYW5uZXIuY29uZUlubmVyQW5nbGUgPSBwYS5jb25lSW5uZXJBbmdsZTtcbiAgICAgICAgICBwYW5uZXIuY29uZU91dGVyQW5nbGUgPSBwYS5jb25lT3V0ZXJBbmdsZTtcbiAgICAgICAgICBwYW5uZXIuY29uZU91dGVyR2FpbiA9IHBhLmNvbmVPdXRlckdhaW47XG4gICAgICAgICAgcGFubmVyLmRpc3RhbmNlTW9kZWwgPSBwYS5kaXN0YW5jZU1vZGVsO1xuICAgICAgICAgIHBhbm5lci5tYXhEaXN0YW5jZSA9IHBhLm1heERpc3RhbmNlO1xuICAgICAgICAgIHBhbm5lci5yZWZEaXN0YW5jZSA9IHBhLnJlZkRpc3RhbmNlO1xuICAgICAgICAgIHBhbm5lci5yb2xsb2ZmRmFjdG9yID0gcGEucm9sbG9mZkZhY3RvcjtcbiAgICAgICAgICBwYW5uZXIucGFubmluZ01vZGVsID0gcGEucGFubmluZ01vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcG9zaXRpb24gdG8gc2V0dXAgdGhlIG5vZGUgd2l0aC5cbiAgICAgICAgICBpZiAoIXNvdW5kLl9wb3MpIHtcbiAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYW5uZXIgbm9kZS5cbiAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKiBTaW5nbGUgU291bmQgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZSBjb3JlIFNvdW5kIGluaXQuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBfc3VwZXIgQ29yZSBTb3VuZCBpbml0IG1ldGhvZC5cbiAgICogQHJldHVybiB7U291bmR9XG4gICAqL1xuICBTb3VuZC5wcm90b3R5cGUuaW5pdCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBwYXJlbnQuX29yaWVudGF0aW9uO1xuICAgICAgc2VsZi5fc3RlcmVvID0gcGFyZW50Ll9zdGVyZW87XG4gICAgICBzZWxmLl9wb3MgPSBwYXJlbnQuX3BvcztcbiAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSBwYXJlbnQuX3Bhbm5lckF0dHI7XG5cbiAgICAgIC8vIENvbXBsZXRlIGluaXRpbGl6YXRpb24gd2l0aCBob3dsZXIuanMgY29yZSBTb3VuZCdzIGluaXQgZnVuY3Rpb24uXG4gICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgICAgLy8gSWYgYSBzdGVyZW8gb3IgcG9zaXRpb24gd2FzIHNwZWNpZmllZCwgc2V0IGl0IHVwLlxuICAgICAgaWYgKHNlbGYuX3N0ZXJlbykge1xuICAgICAgICBwYXJlbnQuc3RlcmVvKHNlbGYuX3N0ZXJlbyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuX3Bvcykge1xuICAgICAgICBwYXJlbnQucG9zKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0sIHNlbGYuX2lkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KShTb3VuZC5wcm90b3R5cGUuaW5pdCk7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBTb3VuZC5yZXNldCBtZXRob2QgdG8gY2xlYW4gdXAgcHJvcGVydGllcyBmcm9tIHRoZSBzcGF0aWFsIHBsdWdpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBTb3VuZCByZXNldCBtZXRob2QuXG4gICAqIEByZXR1cm4ge1NvdW5kfVxuICAgKi9cbiAgU291bmQucHJvdG90eXBlLnJlc2V0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBzcGF0aWFsIHBsdWdpbiBwcm9wZXJ0aWVzIG9uIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IHBhcmVudC5fb3JpZW50YXRpb247XG4gICAgICBzZWxmLl9zdGVyZW8gPSBwYXJlbnQuX3N0ZXJlbztcbiAgICAgIHNlbGYuX3BvcyA9IHBhcmVudC5fcG9zO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHBhcmVudC5fcGFubmVyQXR0cjtcblxuICAgICAgLy8gSWYgYSBzdGVyZW8gb3IgcG9zaXRpb24gd2FzIHNwZWNpZmllZCwgc2V0IGl0IHVwLlxuICAgICAgaWYgKHNlbGYuX3N0ZXJlbykge1xuICAgICAgICBwYXJlbnQuc3RlcmVvKHNlbGYuX3N0ZXJlbyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuX3Bvcykge1xuICAgICAgICBwYXJlbnQucG9zKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0sIHNlbGYuX2lkKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5fcGFubmVyKSB7XG4gICAgICAgIC8vIERpc2Nvbm5lY3QgdGhlIHBhbm5lci5cbiAgICAgICAgc2VsZi5fcGFubmVyLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgIHNlbGYuX3Bhbm5lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgcGFyZW50Ll9yZWZyZXNoQnVmZmVyKHNlbGYpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb21wbGV0ZSByZXNldHRpbmcgb2YgdGhlIHNvdW5kLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH0pKFNvdW5kLnByb3RvdHlwZS5yZXNldCk7XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcGFubmVyIG5vZGUgYW5kIHNhdmUgaXQgb24gdGhlIHNvdW5kLlxuICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgU3BlY2lmaWMgc291bmQgdG8gc2V0dXAgcGFubmluZyBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiBwYW5uZXIgdG8gY3JlYXRlOiAnc3RlcmVvJyBvciAnc3BhdGlhbCcuXG4gICAqL1xuICB2YXIgc2V0dXBQYW5uZXIgPSBmdW5jdGlvbihzb3VuZCwgdHlwZSkge1xuICAgIHR5cGUgPSB0eXBlIHx8ICdzcGF0aWFsJztcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHBhbm5lciBub2RlLlxuICAgIGlmICh0eXBlID09PSAnc3BhdGlhbCcpIHtcbiAgICAgIHNvdW5kLl9wYW5uZXIgPSBIb3dsZXIuY3R4LmNyZWF0ZVBhbm5lcigpO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lSW5uZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJHYWluID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyR2FpbjtcbiAgICAgIHNvdW5kLl9wYW5uZXIuZGlzdGFuY2VNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWw7XG4gICAgICBzb3VuZC5fcGFubmVyLm1heERpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIubWF4RGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJlZkRpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIucmVmRGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJvbGxvZmZGYWN0b3IgPSBzb3VuZC5fcGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yO1xuICAgICAgc291bmQuX3Bhbm5lci5wYW5uaW5nTW9kZWwgPSBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWw7XG5cbiAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9wb3NbMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcG9zWzFdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoc291bmQuX3Bvc1syXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHNvdW5kLl9wb3NbMF0sIHNvdW5kLl9wb3NbMV0sIHNvdW5kLl9wb3NbMl0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWC5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMV0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMl0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQuX3Bhbm5lci5zZXRPcmllbnRhdGlvbihzb3VuZC5fb3JpZW50YXRpb25bMF0sIHNvdW5kLl9vcmllbnRhdGlvblsxXSwgc291bmQuX29yaWVudGF0aW9uWzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlU3RlcmVvUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fc3RlcmVvLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICBzb3VuZC5fcGFubmVyLmNvbm5lY3Qoc291bmQuX25vZGUpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjb25uZWN0aW9ucy5cbiAgICBpZiAoIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgIHNvdW5kLl9wYXJlbnQucGF1c2Uoc291bmQuX2lkLCB0cnVlKS5wbGF5KHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=