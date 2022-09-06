let btn_add = document.querySelector('.btn_add');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let user_form = document.getElementById('user_form');
let dataBelanja = [];
let root = document.getElementById('root');
let btn_submit = document.getElementById('btn_submit');

btn_add.addEventListener('click', () => {
  modal.style.display = 'flex';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

btn_submit.addEventListener('click', () => {
  modal.style.display = 'none';
});

// olah form
user_form.addEventListener('submit', (e) => {
  e.preventDefault();

  let barang = e.target.barang.value;
  let harga = e.target.harga.value;

  // reset buyItems
  user_form.reset();

  // push data ke dataBelanja
  dataBelanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(dataBelanja);

  renderHTML();
});

// render ke HTML
const renderHTML = () => {
  // clear element HTML
  root.innerHTML = '';

  // perulangan dengan forEach
  dataBelanja.forEach((element, index) => {
    root.innerHTML += `
    <div class="card">
    <small>${element.tanggal}</small>

    <div>
    ${element.nama_barang} <span>Rp. ${element.harga_barang}</span>
    </div>
    
    <button onclick="deleteItems()">Selesai</button>
    </div>
    `;
  });
};

const deleteItems = (i) => {
  dataBelanja.splice(i, 1);
  renderHTML();
};
