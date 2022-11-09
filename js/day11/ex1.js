var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    },
    {
        name: 'Khóa học Expressjs tutorial',
        price: 540000
    },
    {
        name: 'Khóa học Database relationship Pro',
        price: 1200000
    }
]
let sum = 0;
for(let i = 0; i < orders.length; i++){
    const them = orders[i].price;
    console.log("Course: " + orders[i].name);
    console.log("Price: " + orders[i].price);
    sum += them;
}
console.log("Total price: ");
console.log(sum);