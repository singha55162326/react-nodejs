var base64 = require('base-64');
var utf8 = require('utf8')


export function encodeBase64(input) {
    var bytes = utf8.encode(input)
    return base64.encode(bytes)
}