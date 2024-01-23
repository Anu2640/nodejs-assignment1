const string = " node.Js "

const Trim = function() {
    const val = string.trim()
    console.log(val)
}

const changetoLowerCase = () => {
    const lowerCase = string.toLowerCase()
    console.log(lowerCase)
}

const changetoUpperCase = () => {
    const upperCase = string.toUpperCase()
    console.log(upperCase)
}

module.exports.Trim = Trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase