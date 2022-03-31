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