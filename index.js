class Stack {
    constructor(limit = 10) {
        if (!this.isValidNumber(limit)) {
            throw new Error('Invalid limit value');
        }
        this.limit = limit;
        this.data = {};
        this.dataLength = 0;
    }

    isValidNumber(num) {
        return typeof num === 'number' && isFinite(num) && num > 0 && num % 1 === 0;
    }

    push(elem) {
        if (this.dataLength === this.limit) {
            throw new Error('Limit exceeded');
        }
        this.data[this.dataLength] = elem;
        this.dataLength++;
    }

    pop() {
        if (this.dataLength === 0) {
            throw new Error('Empty stack');
        }
        const removedElement = this.data[this.dataLength - 1];
        delete this.data[this.dataLength - 1];
        this.dataLength--;
        return removedElement;
    }

    peek() {
        if (this.dataLength === 0) {
            return null;
        }
        return this.data[this.dataLength - 1];
    }

    isEmpty() {
        return this.dataLength === 0;
    }

    toArray() {
        const arr = [];
        let arrLength = 0;
        for (const argumentsKey in this.data) {
            arr[arrLength] = this.data[argumentsKey];
            arrLength++;
        }
        return arr;
    }

    static fromIterable(iterable) {
        if (typeof iterable !== 'object' || iterable === null) {
            throw new Error('Not iterable');
        }

        if (Array.isArray(iterable)) {
            if (iterable.length === 0) {
                throw new Error('Not iterable');
            }
            const stack = new Stack(iterable.length);
            for (const elem of iterable) {
                stack.push(elem);
            }
            return stack;
        } else if (iterable instanceof Set) {
            if (iterable.size === 0) {
                throw new Error('Not iterable');
            }
            const stack = new Stack(iterable.size);
            for (const elem of iterable) {
                stack.push(elem);
            }
            return stack;
        } else if (iterable instanceof Map) {
            if (iterable.size === 0) {
                throw new Error('Not iterable');
            }
            const stack = new Stack(iterable.size);
            for (const [_, value] of iterable) {
                stack.push(value);
            }
            return stack;
        } else {
            if (Object.keys(iterable).length === 0) {
                throw new Error('Not iterable');
            }
            const stack = new Stack(Object.keys(iterable).length);
            for (const key in iterable) {
                stack.push(iterable[key]);
            }
            return stack;
        }
    }
}

class ListNode  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(elem) {
        const node = new ListNode(elem);
        if (this.tail) {
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.tail = node;
    }

    prepend(elem) {
        const node = new ListNode(elem);
        if (this.head) {
            node.next = this.head;
        }
        if (!this.tail) {
            this.tail = node;
        }
        this.head = node;
    }

    find(elem) {
        let current = this.head;
        while (current) {
            if (current.value === elem) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    toArray() {
        const array = [];
        let arrayLength = 0;
        if (!this.head){
            return array;
        }

        const recursive = (currentNode) => {
            array[arrayLength] = currentNode.value;
            arrayLength ++;
            if (currentNode.next){
                recursive(currentNode.next);
            }
        }
        recursive(this.head);
        return array;
    }
    static fromIterable(iterable) {
        if (typeof iterable !== 'object' || iterable === null) {
            throw new Error('Not iterable');
        }

        if (Array.isArray(iterable)) {
            if (iterable.length === 0) {
                throw new Error('Not iterable');
            }
            const list = new LinkedList();
            for (const elem of iterable) {
                list.append(elem);
            }
            return list;
        } else if (iterable instanceof Set) {
            if (iterable.size === 0) {
                throw new Error('Not iterable');
            }
            const list = new LinkedList();
            for (const elem of iterable) {
                list.append(elem);
            }
            return list;
        } else if (iterable instanceof Map) {
            if (iterable.size === 0) {
                throw new Error('Not iterable');
            }
            const list = new LinkedList();
            for (const [_, value] of iterable) {
                list.append(value);
            }
            return list;
        } else {
            if (Object.keys(iterable).length === 0) {
                throw new Error('Not iterable');
            }
            const list = new LinkedList();
            for (const key in iterable) {
                list.append(iterable[key]);
            }
            return list;
        }
    }
}

class Car {
    constructor() {
    }

    #brand = '';
    #model = '';
    #yearOfManufacturing = 1950;
    #maxSpeed = 100;
    #maxFuelVolume = 20;
    #fuelConsumption = 1;
    #damage = 1;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;
    #health = 100;

    isNotValidName(value) {
        return typeof value !== 'string' || value.length < 1 || value.length > 50;
    }

    isNotValidNumber(value, number1, number2){
        return typeof value !== 'number' || value < number1 || value > number2 || !isFinite(value);
    }

    isNotNumberCorrect(value){
        return typeof value !== 'number' || value <= 0 || !isFinite(value);
    }

    get brand(){
        return this.#brand;
    }


    set brand(value){
        if (this.isNotValidName(value)) {
            throw new Error('Invalid brand name');
        }
        this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if (this.isNotValidName(value)) {
            throw new Error('Invalid model name');
        }
        this.#model = value;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        const currentYear = new Date().getFullYear();
        if (this.isNotValidNumber(value, 1950, currentYear)) {
            throw new Error('Invalid year of manufacturing');
        }
        this.#yearOfManufacturing = value;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if (this.isNotValidNumber(value, 100, 330)) {
            throw new Error('Invalid max speed');
        }
        this.#maxSpeed = value;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if (this.isNotValidNumber(value, 20, 100)) {
            throw new Error('Invalid max fuel volume');
        }
        this.#maxFuelVolume = value;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if (this.isNotNumberCorrect(value)) {
            throw new Error('Invalid fuel consumption');
        }
        this.#fuelConsumption = value;
    }

    get damage() {
        return this.#damage;
    }

    set damage(value) {
        if (this.isNotValidNumber(value, 1, 5)) {
            throw new Error('Invalid damage');
        }
        this.#damage = value;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    get health() {
        return this.#health;
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Car has already started');
        }
        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error(`Car hasn't started yet`);
        }
        this.#isStarted = false;
    }

    fillUpGasTank(amount) {
        if (this.isNotNumberCorrect(amount)) {
            throw new Error('Invalid fuel amount');
        }
        if (this.#currentFuelVolume + amount > this.#maxFuelVolume) {
            throw new Error('Too much fuel');
        }
        if (this.#isStarted) {
            throw new Error('You have to shut down your car first');
        }
        this.#currentFuelVolume += amount;
    }

    drive(speed, hours) {
        if (this.isNotNumberCorrect(speed)) {
            throw new Error('Invalid speed');
        }
        if (this.isNotNumberCorrect(hours)) {
            throw new Error('Invalid duration');
        }
        if (speed > this.#maxSpeed) {
            throw new Error(`Car can't go this fast`);
        }
        if (!this.#isStarted) {
            throw new Error('You have to start your car first');
        }
        const distance = speed * hours;
        const fuelNeed = distance * this.#fuelConsumption / 100;

        if (fuelNeed > this.#currentFuelVolume) {
            throw new Error(`You don't have enough fuel`);
        }

        const healthNeed = distance * this.damage / 100;

        if ((this.#health - healthNeed) <= 0) {
            throw new Error(`Your car won't make it`);
        }
        this.#mileage += distance;
        this.#currentFuelVolume -= fuelNeed;
        this.#health -= healthNeed;
    }

    repair(){
        if (this.#isStarted) {
            throw new Error('You have to shut down your car first');
        }
        if (this.#currentFuelVolume !== this.maxFuelVolume){
            throw new Error('You have to fill up your gas tank first');
        }
        this.#health = 100;
    }

    getFullAmount(){
        if (this.maxFuelVolume === this.currentFuelVolume){
            return 0;
        }
        return this.maxFuelVolume - this.currentFuelVolume;
    }
}



