const { customAlphabet } = require('nanoid')

function randomId (length) {
    const orderNumber = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz', length)
    return orderNumber()
}

exports.randomId = randomId