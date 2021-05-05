let red = 255;
let green = 0;
let blue = 255;

let c = 10

function change() {
    red -= c;
    blue -= c;
    green += c;
    if (red <= 14) {
        red = 255;
        green = 0;
        blue = 255;
    }
    let color = "rgb(" + red + ", " + green + "," + blue + ")";
    document.documentElement.style.setProperty('--color', color);
    console.log(color)
    console.log(red)
}




setInterval(function(){ 
	change();
},100);