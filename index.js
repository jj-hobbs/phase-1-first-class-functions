function receivesAFunction (callback) {
callback();
}

function returnsANamedFunction () {
    return function namedFunction () {
        console.log('this is a named function')
    }
}
returnsANamedFunction

function returnsAnAnonymousFunction () {
    return function () {
        console.log('this is an anonymous function')
    }
}