// Your code goes here


//Buttons
const btnOne = document.querySelector('.btn');
btnOne.addEventListener('mouseover' ,  function(e){
    e.target.style.color = "green";
    setTimeout(function(){
        e.target.style.color = " ";
    }, 1000);
}, false);

const btnTwo = document.querySelectorAll('.btn')[1];
btnTwo.addEventListener('click', function(e){
    alert ('I am the second button');
});

const btnThree = document.querySelectorAll('.btn')[2];
btnThree.addEventListener('mouseover', function(e){
    e.target.style.fontSize = "3rem";
    setTimeout(function(){
        e.target.style.fontSize = "";
    }, 500);
}, true);
// Nav Items
const homeAtag = document.querySelectorAll('a')[0];
homeAtag.addEventListener('mouseover', function(e){
    e.target.style.fontSize = "5rem";
});

const aboutAtag = document.querySelectorAll('a')[1];
aboutAtag.addEventListener('mouseover', function(e){
    e.target.style.color = "yellow";
});
const blogAtag = document.querySelectorAll('a')[2];
blogAtag.addEventListener('mouseover', function(e){
    e.target.style.color = "blue";
});
const contactAtag = document.querySelectorAll('a')[3];
contactAtag.addEventListener('mouseover', function(e){
    e.target.style.color = "red";
});

const navItems = document.querySelector('nav');
navItems.addEventListener('click', function(e){
    e.preventDefault();
});


const green = document.querySelector('.text-content');
green.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = "green";
});

const blue = document.querySelector('.destination');
blue.addEventListener('click', function(e){
    e.target.style.backgroundColor = "blue";
});

const home = document.querySelector('.home');
console.log(home);
home.addEventListener('click', function(e){
    alert ('This is awesome!');
});

window.addEventListener('load', (e) =>{
    alert ('Do you want to Sign In?');
});

window.addEventListener('scroll', function(e){
    console.log('Scroll carefully');
});

