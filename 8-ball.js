//https://en.wikipedia.org/wiki/Magic_8-Ball
//tmuweh @ Khanacademy.org

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 8));
//text(answer, 170, 200);
textSize(15);
if (answer === 1) {
    text(" Yes", 176, 200);
    text(" definitely", 159, 230); 
}
else if (answer === 2) {
    text(" Better", 176, 200);
    text("not tell you", 159, 230); 
}
else if (answer === 3) {
    text("Yes", 176, 200);
    text("Absolutely", 159, 230); 
}
else if (answer === 4) {
    text("Cannot", 176, 200);
    text("predict now", 159, 229); 
}
else if (answer === 5) {
    text("Not", 176, 200);
    text("Good Chance", 159, 229); 
}
else if (answer === 6) {
    text("Chances", 176, 200);
    text("ain't good", 159, 229); 
}
else if (answer === 7) {
    text("Yes", 176, 200);
    text("I see yes", 159, 229); 
}
else if (answer === 8) {
    text("Try", 176, 200);
    text("Your Luck", 159, 229); 
}
