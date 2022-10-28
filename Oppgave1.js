var randomNumber = Math.round(Math.random()*100);
var counter = 0;
const button1 = document.getElementById("checknumber").addEventListener("click", function() {
    console.log(randomNumber);
    const mittTall = document.getElementById("input").value;
     if ( mittTall > randomNumber) {
        alert("Tallet er større enn random number. Skriv et mindre tall")
     } else if ( mittTall < randomNumber) {
        alert("Tallet er mindre enn random number. Skriv et større tall")
     } else {
        alert("Gratulerer. Du har funnet nummeret")
     }
})


const button2 = document.getElementById("randomnumberr").addEventListener("click", function() {
    
    var number = Math.round(Math.random()*100);
    console.log("Er jeg heldig?",number);
    console.log(randomNumber);
 
    if ( number > randomNumber) {
        document.querySelector("#result").innerHTML = "Du er uheldig. Prøv igjen"
        counter++;
        console.log("Counter:", counter);
     } else if ( number < randomNumber) {
        document.querySelector("#result").innerHTML = "Du er uheldig. Prøv igjen"
        counter++;
        console.log("Counter:", counter);
     } else {
        alert("Gratulerer. Du har funnet nummeret")
     }

})

