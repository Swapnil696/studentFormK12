var Form1 = document.getElementById('form1');
var Form2 = document.getElementById('form2');
var Form3 = document.getElementById('form3');
var Form4 = document.getElementById('form4');

var Next1 = document.getElementById('Next1');
var Next2 = document.getElementById('Next2');
var Next3 = document.getElementById('Next3');
var Back1 = document.getElementById('Back1');
var Back2 = document.getElementById('Back2');
var Back3 = document.getElementById('Back3');

var progress = document.getElementById('progress');

var container = document.getElementById('container');



Next1.onclick = function(){
    Form1.style.left = "-550px"
    Form2.style.left = "40px"
    progress.style.width = "290px"
    container.style.height = "1100px"
}

Back1.onclick = function(){
    Form1.style.left = "40px"
    Form2.style.left = "550px"
    progress.style.width = "145px"
    container.style.height = "500px"
}

Next2.onclick = function(){
    Form3.style.left = "40px"
    Form2.style.left = "-550px"
    progress.style.width = "420px"
    container.style.height = "500px"
    
}

Back2.onclick = function(){
    Form2.style.left = "40px"
    Form3.style.left = "550px"
    progress.style.width = "145px"
    container.style.height = "1100px"

}

Next3.onclick = function(){
    Form4.style.left = "40px"
    Form3.style.left = "-550px"
    progress.style.width = "550px"
    container.style.height = "700px"

    
}

Back3.onclick = function(){
    Form3.style.left = "40px"
    Form4.style.left = "550px"
    progress.style.width = "420px"
    container.style.height = "500px"

}



