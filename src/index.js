module.exports = function reverse (n) {
      return  n.toString().match(/[0-9]/g).reverse().join('')
}
