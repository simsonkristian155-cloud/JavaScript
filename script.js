function buatRadio(){

let jumlah = document.getElementById("jumlah").value;
let container = document.getElementById("container");

pilihanArray = [];

let html = "<h3>Pilih Salah Satu</h3>";

for(let i = 1; i <= jumlah; i++){

let teks = document.getElementById("pilihan"+i).value;

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