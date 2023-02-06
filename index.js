function makeDeepCopy(obj){
    if (typeof obj !== "object" || obj === null) {
        throw new Error();
    }

    function deepCopy(obj) {
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }
        if (Array.isArray(obj)) {
            let result = [];
            for (let i = 0; i < obj.length; i++) {
                result[i] = deepCopy(obj[i]);
            }
            return result;
        } else if (obj instanceof Set) {
            let result = new Set();
            for (let value of obj) {
                result.add(deepCopy(value));
            }
            return result;
        } else if (obj instanceof Map) {
            let result = new Map();
            for (let [key, value] of obj) {
                result.set(deepCopy(key), deepCopy(value));
            }
            return result;
        } else {
            let result = {};
            for (let key in obj) {
                result[key] = deepCopy(obj[key]);
            }
            return result;
        }
    }

    return deepCopy(obj);
}

function selectFromInterval(arr, start, end) {
    if (!Array.isArray(arr) || arr.some(el => typeof el !== 'number') || arr.length === 0 || arr.some(el => !isFinite(el))) {
        throw new Error();
    }
    if (isNaN(start) || isNaN(end) || [start,end].some(el => !isFinite(el))) {
        throw new Error();
    }
    let min = Math.min(start, end);
    let max = Math.max(start, end);
    return arr.filter(el => el >= min && el <= max);
}


function createIterable(from, to) {
    if (typeof from !== "number" || typeof to !== "number" || from >= to || [from, to].some(el => !isFinite(el))) {
        throw new Error();
    }

    return {
        [Symbol.iterator]: function() {
            let current = from;
            return {
                next: function() {
                    if (current <= to) {
                        return { value: current++, done: false };
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };
}




