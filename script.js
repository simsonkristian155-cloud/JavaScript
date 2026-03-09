let pilihanArray = [];

function buatPilihan(){

let jumlah = document.getElementById("jumlah").value;
let container = document.getElementById("container");

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