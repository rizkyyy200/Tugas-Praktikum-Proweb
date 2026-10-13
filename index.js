// BATU, GUNTING, KERTAS
function suit1() {
    let hasil = "seri";

    while (hasil === "seri") {
        let pilihanSuit = prompt("Pilih batu, gunting, atau kertas").toLowerCase();

        let suitKomputer = Math.floor(Math.random() * 3 + 1);
        let pilihanKomputer;

        if (suitKomputer === 1) {
            pilihanKomputer = "batu";
        } else if (suitKomputer === 2) {
            pilihanKomputer = "gunting";
        } else {
            pilihanKomputer = "kertas";
        }

        alert("Si Sutin memilih " + pilihanKomputer + "!");

        if (pilihanSuit === pilihanKomputer) {
            hasil = "seri";
            alert("Kamu seri dengan Si Sutin!\nJangan kalah. Ayo ulang lagi.");
        } else if (
            pilihanSuit === "batu" && pilihanKomputer === "gunting" ||
            pilihanSuit === "gunting" && pilihanKomputer === "kertas" ||
            pilihanSuit === "kertas" && pilihanKomputer === "batu" 
        ) {
            hasil = "menang";
            alert("Wow kamu menang dari Si Sutin, Kongres!\nKlik OK untuk mendapatkan pantun keren.");
            alert("===============\nIkan lele ikan hiu\nIkan hiu ikan lele\nLele ikan hiu pun ikan\n===============");
            alert("thanks");
        } else {
            hasil = "kalah";
            alert("Yahh kamu kalah dari Si Sutin!\nNice Try");
        }

        if (hasil != "seri") {
            alert("Permainan suit selesai");
        }
    }
}


// GAJAH, ORANG, SEMUT
function suit2() {
    let hasil = "seri";

    while (hasil === "seri") {
        let pilihanSuit = prompt("Pilih gajah, orang, atau semut").toLowerCase();

        let suitKomputer = Math.floor(Math.random() * 3 + 1);
        let pilihanKomputer;

        if (suitKomputer === 1) {
            pilihanKomputer = "gajah";
        } else if (suitKomputer === 2) {
            pilihanKomputer = "orang";
        } else {
            pilihanKomputer = "semut";
        }

        alert("Si Sutin memilih " + pilihanKomputer + "!");

        if (pilihanSuit === pilihanKomputer) {
            hasil = "seri";
            alert("Kamu seri dengan Si Sutin!\nJangan kalah. Ayo ulang lagi.");
        } else if (
            pilihanSuit === "gajah" && pilihanKomputer === "orang" ||
            pilihanSuit === "orang" && pilihanKomputer === "semut" ||
            pilihanSuit === "semut" && pilihanKomputer === "gajah" 
        ) {
            hasil = "menang";
            alert("Wow kamu menang dari Si Sutin, Kongres!\nKlik OK untuk mendapatkan pantun keren.");
            alert("===================\nIkan teri ikan mujair\nIkan pari baunya menyengat\nSelamat siang para sahabat\nJalani hari dengan semangat\n===================\n– Windah Basudara");
        } else {
            hasil = "kalah";
            alert("Yahh kamu kalah dari Si Sutin!\nNice Try");
        }

        if (hasil != "seri") {
            alert("Permainan suit selesai");
        }
    }
}


// JEMPOL, TELUNJUK, KELINGKING
function suit3() {
    let hasil = "seri";

    while (hasil === "seri") {
        let pilihanSuit = prompt("Pilih jempol, telunjuk, atau kelingking").toLowerCase();

        let suitKomputer = Math.floor(Math.random() * 3 + 1);
        let pilihanKomputer;

        if (suitKomputer === 1) {
            pilihanKomputer = "jempol";
        } else if (suitKomputer === 2) {
            pilihanKomputer = "telunjuk";
        } else {
            pilihanKomputer = "kelingking";
        }

        alert("Si Sutin memilih " + pilihanKomputer + "!");

        if (pilihanSuit === pilihanKomputer) {
            hasil = "seri";
            alert("Kamu seri dengan Si Sutin!\nJangan kalah. Ayo ulang lagi.");
        } else if (
            pilihanSuit === "jempol" && pilihanKomputer === "telunjuk" ||
            pilihanSuit === "telunjuk" && pilihanKomputer === "kelingking" ||
            pilihanSuit === "kelingking" && pilihanKomputer === "jempol" 
        ) {
            hasil = "menang";
            alert("Wow kamu menang dari Si Sutin, Kongres!\nKlik OK untuk mendapatkan pantun keren.");
            alert("===================\nAyu ting ting makan kepiting\nThank you for playing\n===================");
        } else {
            hasil = "kalah";
            alert("Yahh kamu kalah dari Si Sutin!\nNice Try");
        }

        if (hasil != "seri") {
            alert("Permainan suit selesai");
        }
    }
}