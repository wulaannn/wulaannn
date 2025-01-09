const sik = {
    kelas : "B",
    angkatan : "2023",
    walidosen : "Wildan"

}

console.log(sik.kelas);
console.log(sik.angkatan);
console.log(sik.walidosen);

const siKel = {}

siKel.atribut1 = "contoh atribut 1"
siKel.atribut2 = "contoh atribut 2"
siKel.atribut3 = "contoh atribut 3"

console.log(siKel.atribut3)

delete siKel.atribut2;

let orang = {
    nama : "Bintang",
    kendaraan : {
        mobil : "Fortuner",
        motor : "Kawasaki Ninja",
        pesawat : "Boeing",
    }
}

console.log(orang.kendaraan.mobil)

let tampil = "Nama saya" + orang.nama +", Saya bekerja sebagai" + orang.pekerjaan + "Sehari-hari saya terbiasa menggunakan pesawat pribadi dengan jenis"
+ orang.kendaraan.pesawat

document.getElementById("object").innerHTML = "tes"

let Mahasiswa ={
    namaDepan : "Bintang",
    namaBelakang : "Hikmatulloh",
    namaLengkap : function(){
        return this.namaDepan+ " "+this.namaBelakang
    }
}

let tampilMHS="nama saya" + Mahasiswa.namaDepan+ ", nama lengkap saya adalah "+ Mahasiswa.namaLengkap()

document.getElementById("object").innerHTML = tampil

function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const mhs1 = new mahasiswaSIK("Bintang", "B", 2023);
const mhs2 = new mahasiswaSIK("Kaila", "B", 2023);
const mhs3 = new mahasiswaSIK("Wulan", "B", 2023);

console.log("nama mahasiswa pertama adalah "+ mhs1.nama)
console.log("nama mahasiswa kedua adalah "+ mhs2.nama)
console.log("nama mahasiswa ketiga adalah "+ mhs3.nama)

