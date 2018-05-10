'use strict';

exports.__esModule = true;
exports.default = createCanvas;
function createCanvas() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

  var canvas = void 0;
  if (typeof document !== 'undefined') {
    canvas = document.createElement('canvas');
  } else {
    try {
      var _require = require('canvas'),
          Canvas = _require.Canvas;

      canvas = new Canvas(width, height);
    } catch (e) {
      console.log(e);
    }
  }
  return canvas;
}
//# sourceMappingURL=createCanvas.js.map