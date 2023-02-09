Array.prototype.customFilter = function (callback, obj) {
    if (typeof callback !== "function") {
        throw new Error();
    }

    let linkToArray = this;
    const result = [];

    for (let i = 0; i < linkToArray.length; i++) {
        if (callback.call(obj, linkToArray[i], i, linkToArray)) {
            result.push(linkToArray[i]);
        }
    }

    return result;
};

function createDebounceFunction(callback, pause) {
    let myTime;
    return function debounced() {
        clearTimeout(myTime);
        myTime = setTimeout(() => {
            callback();
        }, pause);
    };
}

