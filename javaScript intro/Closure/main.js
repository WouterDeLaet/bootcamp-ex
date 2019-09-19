//1
let x = process.argv[2];
let y = process.argv[3];

function identify (x) {
    return x;
}

//2

function add (x, y) {
    return (+x) + (+y);
}

function mul (x, y) {
    return (+x) * (+y);
}

//3
function identityf (arg) {
    return function() {
        return arg;
    }
}

//4
function addf (arg) {
    return function(arg2) {
        return (+arg) + (+arg2);
    }
}

//5
function applyf (fn) {
    return function(x) {
        return function (y) {
            return fn(x, y);
        };
    }
}

//6
function curry(fn, arg1) {
    return function(arg2) {
        return fn(arg1, arg2);
    }
}


console.log(identify(x));
console.log(add(x, y));
console.log(mul(x, y));
idf = identityf(y);
console.log(idf());
console.log(addf(x)(y));
addf1 = applyf(add);
console.log(addf1(x)(y));
console.log(applyf(mul)(x)(y));
add3 = curry(add, x);
console.log(add3(4));
console.log(curry(mul, x)(y));
let inc = addf(1);

console.log(inc(x))
// console.log(inc2 = curry(add, x)(1));