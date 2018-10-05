
/**
 * Rotation degree mapping.
 * @type {Object}
 */

var rotation = {
  1: 0,
  3: 180,
  6: 90,
  8: 270
}

/**
 * Get EXIF orientation of a file in a readable format.
 *
 * This module supports all mainstream browsers as well as IE10+.
 *
 * @param {File} file
 * @param {Function} cb
 * @api public
 */

module.exports = function (file, cb) {
  var reader = new FileReader()
  reader.onloadend = function (e) {
    var exif = reader.result
    var result = read(exif)
    cb(rotation[result], exif)
  }
  reader.readAsArrayBuffer(file)
}


/**
 * Read EXIF orientation from file.
 *
 * @see https://gist.github.com/runeb/c11f864cd7ead969a5f0
 * @param {ArrayBuffer} exif
 * @return {Number}
 * @api private
 */

function read (exif) {
  var scanner = new DataView(exif)
  var idx = 0
  var value = 1
  if(exif.length < 2 || scanner.getUint16(idx) != 0xFFD8) return value
  idx += 2
  var maxBytes = scanner.byteLength
  var little = false
  while (idx < maxBytes - 2) {
    var uint16 = scanner.getUint16(idx, little)
    idx += 2
    switch(uint16) {
      case 0xFFE1:
        if (scanner.getUint16(idx + 8) === 0x4949) little = true
        var exifLength = scanner.getUint16(idx, little)
        maxBytes = exifLength - idx
        idx += 2
        break
      case 0x0112:
        value = scanner.getUint16(idx + 6, little)
        maxBytes = 0
        break
    }
  }
  return value
}
