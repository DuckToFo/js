const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
console.log("Most liked sports: ");
let mostLiked = sports.filter(sports => sports.like > 5);
function getLikes(sports) {
    return sports.filter(sports => sports.like > 5)
}
console.log(mostLiked);
console.log(getLikes(sports));