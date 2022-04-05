//Permitir Localizaão
if ('geolocation' in navigator) {
    var map;
    function success(position) {
        if (map === undefined) {
            map = L.map('map').setView([-8.819521, 13.266546], 13);
        } else {
            map.remove();
            map = L.map('map').setView([-8.819521, 13.266546], 13);
        }

        map.on('click', () => { console.log(e.lng); });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-8.819521, 13.266546]).addTo(map)
            .bindPopup('Ed. Digital.ao | KUDIKA')
            .openPopup();
    }
    const watcher = navigator.geolocation.watchPosition(success, function (error) {
        console.log(error)
    },{
        enableHighAccuracy: true, maximumAge: 30000, timeout: 30000 });
        // navigator.geolocation.clearWatch(watcher)
} else {
    alert('Ops, não foi possível pegar localização')
}

//
function bgChanger() {
    if (this.scrollY > this.innerHeight / 1.1) {
        document.getElementById('asdfg').style.background = 'white';
        document.getElementById('qwert').classList.add('md:justify-between');
        // document.getElementById('asdfg').classList.add('md:flex');
        document.getElementById('check-i').style.color = "#202020";
        // document.getElementById('asdfg').classList.add('transition');
    } else {

        document.getElementById('asdfg').style.background = 'transparent';
        // document.getElementById('asdfg').classList.add('transition');

        document.getElementById('check-i').style.color = "#fff";
        document.getElementById('qwert').classList.remove('md:justify-between');

    }


    if (this.scrollY > this.innerHeight / 100) {
        document.getElementById('menuuu').classList.add('z-50');

    } else {
        document.getElementById('menuuu').classList.remove('z-10');

    }

}

window.addEventListener("scroll", bgChanger);


var btnContainer = document.querySelector(".listamnu")
var btns = btnContainer.getElementsByTagName("li")

for (var i =0; i<btns.length; i++) {
 
 btns[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("actived");
    current[0].className = current[0].className.replace(" actived")
    this.className += " actived"
})
}

document.addEventListener("DOMContentLoaded", function(event) {
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");


btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});



});





var typeText = document.querySelector(".typeText")


var textToBeTyped = "kudikadigital.com"
var index = 0, isAdding = true

function playAnim() {
setTimeout(function () {
// set the text of typeText to a substring of
// the textToBeTyped using index.
typeText.innerText = textToBeTyped.slice(0, index)
if (isAdding) {
// adding text

if (index > textToBeTyped.length) {
// no more text to add

isAdding = false
//break: wait 2s before playing again
setTimeout( function () {
  playAnim()
}, 2000)
return
} else {
// increment index by 1
index++
} 
if(index == textToBeTyped.length){
 document.querySelector('.jhj').style.display = "block";
 document.querySelector('.jhjj').style.display = "block";
 document.getElementById('qwsda1').style.display = "none";
}
} else {
// removing text
if (index === 0) {
// no more text to remove
isAdding = true
document.querySelector('.jhj').style.display = "none";
document.querySelector('.jhjj').style.display = "none";
} else {
// decrement index by 1
document.getElementById('qwsda1').style.display = "block";
document.querySelector('.jhj').style.display = "none";
document.querySelector('.jhjj').style.display = "none";
index--
}
}
// call itself
playAnim()
}, 120)
}
// start animation
playAnim()

