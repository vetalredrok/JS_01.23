const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function curry(f){
    return function curried(...args){
        if (args.length >= f.length){
            return f.apply(this, args);
        } else {
            return function iter(...argsNew){
                return curried.apply(this, args.concat(argsNew));
            }
        }
    };
}

class Calculator {
    constructor(x, y) {
        if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
            throw new Error('');
        }
        this.x = x;
        this.y = y;
    }

    isValidNumber(num) {
        return typeof num === 'number' && !isNaN(num) && isFinite(num);
    }

    setX = (num) => {
        if (!this.isValidNumber(num)) {
            throw new Error('');
        }
        this.x = num;
    }

    setY = (num) => {
        if (!this.isValidNumber(num)) {
            throw new Error('');
        }
        this.y = num;
    }

    getSum = () => {
        return this.x + this.y;
    }

    getMul = () => {
        return this.x * this.y;
    }

    getSub = () => {
        return this.x - this.y;
    }

    getDiv = () => {
        if (this.y === 0) {
            throw new Error('');
        }
        return this.x / this.y;
    }
}


class RickAndMorty {
    constructor() {
    }

    getCharacter(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error('');
        }

        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                return null;
            })
            .catch(e => {
                return null;
            });
    }

    async getEpisode(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error('');
        }

        try {
            const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
            if (res.status === 200) {
                return await res.json();
            }
            return null;
        } catch (e) {
            return null;
        }
    }
}