import {log} from "util";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01 OK
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    let currentSum = a;

    function f(b: number) {
        currentSum += b;
        return currentSum
    }
    return f
}
console.log("Task 01: " + sum(1)(6))

// Task 02 OK
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let counter = 1;
    return function() {
        return counter++
    };
}

console.log("Task 02:")
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3


// Task 03 OK
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;


console.log("Task 03:")
function makeCounterPlus(num: any, method: string) {
    if (method === "increase") {
        num++;
    } else if (method === "decrease") {
        num--;
    } else if (method === "reset") {
        num = 0;
    } else {
        return counter
    }
    return num;
}

console.log(makeCounterPlus(2, "reset"))



// Task 04* Не заработала.
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

console.log("Task 04:")

function superSum(n:number) {
    if (n === 0) return 0;
    if (n === 1) return (num: number) => num;

    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if(_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }
    return helper;
}


superSum(0) //0
// @ts-ignore
superSum(3)(2)(5)(3) //10
// @ts-ignore
superSum(3)(2)(5,3) //10
// @ts-ignore
superSum(3)(2,5,3) //10
// @ts-ignore
superSum(3)(2,5)(3) //10
// @ts-ignore
superSum(3)(2,5)(3,9) //10


// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};