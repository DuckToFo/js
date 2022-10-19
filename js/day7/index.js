console.log('JScript')
let a = 6;
let b = 9;
let name = 'Tran Trung Duc';
let tong = a + b;
let hieu = a - b;
let tic = a * b;
let thuong = a / b;
if (a < 100) {
    console.log('a is smaller than 100, 200 and 300')
} else {
    console.log('a is greater than 100')
    if (a < 200) {
        console.log('a is smaller than 200 and 300')
    } else {
        console.log('a is greater than 200')
        if (a < 300) {
            console.log('a is smaller than 300')            
        } else {
            console.log('a is greater than 300')
        }
    }
}
if (b < 1) {
    console.log('b is smaller than 1, 10 and 40')
} else {
    console.log('b is greater than 1')
    if (b < 10) {
        console.log('b is smaller than 10 and 40')
    } else {
        console.log('b is greater than 10')
        if (b < 40) {
            console.log('b is smaller than 40')            
        } else {
            console.log('b is greater than 40')
        }
    }
}
