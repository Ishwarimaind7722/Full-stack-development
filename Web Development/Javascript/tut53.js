function* myGenerator() {
    yield 1;
    yield 2;
}
let iterator = myGenerator();
let result;
do { 
result = iterator.next();
console.log(result);
} while (!result.done);
//Output:-
//{value: 1, done: false}
//{value: 2, done: false}
//{value: undefined, done: true}