var text = 'It is Friday'



function getDay() {
    var now = new Date()
    var day = now.getDay();

    if (day == 5) {
        return 'YES'
    } else {
        return 'NO'
    }

}

console.log(document.getElementsByTagName('h1'))

document.querySelector('h1').innerHTML = 'NO'