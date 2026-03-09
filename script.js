let pilihanArray = [];

function buatPilihan(){

let nama = document.getElementById("nama").value;
let jumlah = document.getElementById("jumlah").value;
let container = document.getElementById("container");

if(nama == ""){
alert("Nama tidak boleh kosong!");
return;
}

if(jumlah == "" || jumlah <= 0){
alert("Jumlah pilihan harus lebih dari 0!");
return;
}

container.innerHTML = "";

for(let i = 1; i <= jumlah; i++){

container.innerHTML += `
<label>Pilihan ${i} :</label>
<input type="text" id="pilihan${i}">
<br><br>
`;

}

container.innerHTML += `<button onclick="buatRadio()">OK</button>`;

}



function buatRadio(){

let jumlah = document.getElementById("jumlah").value;
let container = document.getElementById("container");

pilihanArray = [];

let html = "<h3>Pilih Salah Satu</h3>";

for(let i = 1; i <= jumlah; i++){

let teks = document.getElementById("pilihan"+i).value;

if(teks == ""){
alert("Semua pilihan harus diisi!");
return;
}

pilihanArray.push(teks);

html += `
<input type="radio" name="pilih" value="${teks}">
${teks}
<br>
`;

}

html += `<br><button onclick="inputEmail()">OK</button>`;

container.innerHTML += html;

}



function inputEmail(){

let pilih = document.querySelector('input[name="pilih"]:checked');

if(!pilih){
alert("Silakan pilih salah satu pilihan terlebih dahulu!");
return;
}

let container = document.getElementById("container");

container.innerHTML += `
<br><br>
<label>Email :</label>
<input type="text" id="email">
<br><br>
<button onclick="cekEmail()">OK</button>
`;

}



function cekEmail(){

let email = document.getElementById("email").value;

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(pattern)){
alert("Email tidak valid!");
return;
}

tampilkanHasil();

}



function tampilkanHasil(){

let nama = document.getElementById("nama").value;
let jumlah = document.getElementById("jumlah").value;
let email = document.getElementById("email").value;

let pilih = document.querySelector('input[name="pilih"]:checked');

let pilihanDipilih = pilih.value;

document.body.innerHTML = `
<h2>
Hallo, nama saya ${nama}, email ${email}. <br><br>
Saya mempunyai sejumlah ${jumlah} pilihan yaitu ${pilihanArray.join(", ")} <br><br>
dan saya memilih ${pilihanDipilih}.
</h2>
`;

}