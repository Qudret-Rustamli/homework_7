
//DOM elementlerinin tutulmasi

document.getElementsByClassName('container')[0].style.display = "block";
var dcs = document.querySelector('#duzCavabSay')
var basSehife = document.querySelector('#baslangic')
var mesaj = document.querySelector('#message')
var btnstart = document.querySelector('#restart')
var progressBar = document.querySelector('#progressbar')
var btnsubmit1=document.querySelector('#submit1')
var btnsubmit2=document.querySelector('#submit2')
var btnsubmit3=document.querySelector('#submit3')
var btnsubmit4=document.querySelector('#submit4')
var btnsubmit5=document.querySelector('#submit5')

btnsubmit1.addEventListener("click",function () {
    progressBar.style.display='block'
    progressBar.style.backgrounColor="red"
    
    progressBar.style.width='200px'
})
btnsubmit2.addEventListener("click",function () {
    progressBar.style.display='block'
    progressBar.style.backgrounColor="red"
    progressBar.style.width='400px'
})
btnsubmit3.addEventListener("click",function () {
    progressBar.style.display='block'
    progressBar.style.backgrounColor="red"
    progressBar.style.width='600px'
})
btnsubmit4.addEventListener("click",function () {
    progressBar.style.display='block'
    progressBar.style.backgrounColor="red"
    progressBar.style.width='800px'
})
btnsubmit5.addEventListener("click",function () {
    progressBar.style.display='block'
    progressBar.style.backgrounColor="red"
    progressBar.style.width='1000px'
})




btnstart.addEventListener('click', function () {
    basSehife.style.display = 'none'

})


function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block"; 
    progressBar.style.display ='block'
   

    console.log(id)

    console.log(progressBar)

}


function result() {
    var score = 0;
    if (document.getElementById('duzCavab1').checked) {
        score++;
        progressBar.style.width ='160px'
    }
    if (document.getElementById('duzCavab2').checked) {
        score++;
      
    }
    if (document.getElementById('duzCavab3').checked) {
        score++;
    }
    if (document.getElementById('duzCavab4').checked) {
        score++;
    }
    if (document.getElementById('duzCavab5').checked) {
        score++;
    }
    next(5)
    dcs.innerHTML = score
    mesaj.style.display = "block"
}




function goster() {
    progressBar.style.display='block'
}




