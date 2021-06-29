var hari;
switch (new Date().getDay()) {
  case 0:
    hari = "Minggu";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jumat";
    break;
  case 6:
    hari = "Sabtu";
}
document.getElementById("tanggal").innerHTML =
  hari + ", " + new Date().getDate();

var bulan;
switch (new Date().getMonth()) {
  case 0:
    bulan = "Januari";
    break;
  case 1:
    bulan = "Februari";
    break;
  case 2:
    bulan = "Maret";
    break;
  case 3:
    bulan = "April";
    break;
  case 4:
    bulan = "Mei";
    break;
  case 5:
    bulan = "Juni";
    break;
  case 6:
    bulan = "Juli";
  case 7:
    bulan = "Agustus";
    break;
  case 8:
    bulan = "September";
    break;
  case 9:
    bulan = "Oktober";
    break;
  case 10:
    bulan = "November";
    break;
  case 11:
    bulan = "Desember";
    break;
}
document.getElementById("bulan").innerHTML = bulan;
document.getElementById("tahun").innerHTML = new Date().getFullYear();
window.setTimeout("waktu()", 1000);
function waktu() {
  var waktu = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("Jam").innerHTML = "Jam " + "| " + waktu.getHours();
  document.getElementById("Menit").innerHTML = ": " + waktu.getMinutes();
  document.getElementById("Detik").innerHTML = ": " + waktu.getSeconds() + " |";
}
getPrice = function () {
  var numVal1 = Number(document.getElementById("price").value);
  var numVal2 = Number(document.getElementById("discount").value) / 100;
  var totalValue = numVal1 - numVal1 * numVal2;
  document.getElementById("total").value = totalValue;
  var totalValue1 = numVal1 - totalValue;
  document.getElementById("total1").value = totalValue1;
};
getComputedStyle = function () {
  var panjang = Number(document.getElementById("p").value);
  var lebar = Number(document.getElementById("l").value);
  var sisi = Number(document.getElementById("s").value);
  var tinggi = Number(document.getElementById("t").value);
  var alas = Number(document.getElementById("a").value);
  var diagonal1 = Number(document.getElementById("d1").value);
  var diagonal2 = Number(document.getElementById("d2").value);
  var luasPersegi = sisi * sisi;
  var kelilingPersegi = 4 * sisi;
  var luasPersegiPanjang = panjang * lebar;
  var kelilingPersegiPanjang = 2 * (panjang + lebar);
  var luasSegitiga = (alas * tinggi) / 2;
  var kelilingSegitiga = diagonal1 + diagonal2 + alas;
  document.getElementById("luasp").value = luasPersegi;
  document.getElementById("luaspp").value = luasPersegiPanjang;
  document.getElementById("kelilingp").value = kelilingPersegi;
  document.getElementById("kelilingpp").value = kelilingPersegiPanjang;
  document.getElementById("luass").value = luasSegitiga;
  document.getElementById("kelilings").value = kelilingSegitiga;
};
