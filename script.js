let pilihanArray = [];

function buatPilihan() {
  let jumlah = document.getElementById("jumlah").value;
  let container = document.getElementById("container");

  container.innerHTML = "";

  for (let i = 1; i <= jumlah; i++) {
    container.innerHTML += `
<label>Pilihan ${i} :</label>
<input type="text" id="pilihan${i}">
<br><br>
`;
  }

  container.innerHTML += `<button onclick="buatRadio()">OK</button>`;
}

function buatRadio() {
  let jumlah = document.getElementById("jumlah").value;
  let container = document.getElementById("container");

  pilihanArray = [];

  let html = "<h3>Pilih Salah Satu</h3>";

  for (let i = 1; i <= jumlah; i++) {
    let teks = document.getElementById("pilihan" + i).value;

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

function inputEmail() {
  let container = document.getElementById("container");

  container.innerHTML += `
<br><br>
<label>Email :</label>
<input type="text" id="email">
<br><br>
<button onclick="cekEmail()">OK</button>
`;
}

function cekEmail() {
  let email = document.getElementById("email").value;

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(pattern)) {
    alert("Email tidak valid, masukkan ulang!");
    return;
  }

  tampilkanHasil();
}

function tampilkanHasil() {
  let nama = document.getElementById("nama").value;
  let jumlah = document.getElementById("jumlah").value;
  let email = document.getElementById("email").value;

  let pilihanDipilih = document.querySelector('input[name="pilih"]:checked',).value;

  document.body.innerHTML = `
<h2>
Hallo, nama saya ${nama}, email ${email}. <br>
Saya mempunyai sejumlah ${jumlah} pilihan yaitu ${pilihanArray.join(", ")} <br>
dan saya memilih ${pilihanDipilih}.
</h2>
`;
}
