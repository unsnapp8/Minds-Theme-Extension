// Var block
var blue = 0;
var orange = 0;
var dark = 0;

// Activation block
function activeBlue() {
blue = 1;
}
function activeOrange() {
orange = 1;
}
function activeDark() {
dark = 1;
}

// Resets var block
function reset() {
blue = 0;
orange = 0;
dark = 0;
}

//Changes Minds css (Runs theme)
function run() {
if (blue == 1) {
    // Runs code that will change minds to blue. 
document.getElementById("mdl-color--white").className = "mdl-color--blue";
} 
if (orange == 1) {
    // Runs code that will change minds to orange
document.getElementById("mdl-color--white").className = "mdl-color--orange";
} 
if (dark == 1) {
    // Runs code that will change minds to dark
document.getElementById("mdl-color--white").className = "mdl-color--grey";

} 
}
