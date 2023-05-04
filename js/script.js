/*Hero Section*/ 
var clock = document.getElementById('clock');
function time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    clock.innerHTML = time;
}
setInterval(time, 1000);

var timeSpentMaking = document.getElementById('timeSpentMaking');
function time2() {
    var now = new Date();
    var then = new Date(2023, (4-1), 14);
    var difference = now.getTime() - then.getTime();
    var days = Math.floor(difference/(1000*60*60*24));
    var hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60))
    timeSpentMaking.innerHTML = days +' days '+ hours +' hours since beginning project';
}
setInterval(time2, 1000);


function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}

/*Contacts Section*/

window.addEventListener('DOMContentLoaded', () => {
    var name = document.getElementById('#name');
    var email = document.getElementById('#email');
    var message = document.getElementById('#message');
    var submit = document.getElementById('#submitbutton');
    var contactSection = document.querySelector('#contacts');
    var emailsel = document.querySelector('#selectemail');
    var radios = document.querySelectorAll('input[type="radio"]');
    
    var hero_m = document.querySelector('#hero > p:nth-child(2)');
    var hero_main_m = document.querySelector('#hero > p:nth-child(1)');
    
    var typeHeroM = ()=>{
        let text = 'I try, just to try again.';
        var textArr = text.split('');
        console.log('%O',textArr);
        for(var i =0; i<textArr.length; i++){
            (function(j) {
                setTimeout(()=>{
                    hero_m.textContent += textArr[j];
                }, 200 * j);
            })(i);
        }
    };
    typeHeroM();

    
    var becomeWhite = ()=>{
        hero_main_m.style.color = 'white';
        hero_main_m.style.transition = 'color 2s ease-in-out';
    }
    becomeWhite();



    /*submit.onclick=()=>{
      //clicking will make the form information to be submitted to a database
        //and the form will be cleared
        name.value = '';
        email.value = '';
        message.value = '';
        radios.forEach((radio) => {
            radio.checked = false;
        });

      
      
    };*/
});