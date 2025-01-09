class Kapal {
    constructor(nama, panjang, lebar) {
      this.nama = nama;
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    info() {
      return `Nama Kapal: ${this.nama}, Panjang: ${this.panjang} meter, Lebar: ${this.lebar} meter.`;
    }
  
    fungsi() {
      return "Fungsi kapal ini umum, tergantung jenis kapal.";
    }
  }

  class KapalNelayan extends Kapal {
    constructor(nama, panjang, lebar, kapasitasTangkap) {
      super(nama, panjang, lebar);
      this.kapasitasTangkap = kapasitasTangkap; 
    }
  
    info() {
      return `${super.info()} Kapasitas Tangkap: ${this.kapasitasTangkap} ton.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk menangkap ikan.";
    }
  }
  
  class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMuatan) {
      super(nama, panjang, lebar);
      this.kapasitasMuatan = kapasitasMuatan; 
    }
  
    info() {
      return `${super.info()} Kapasitas Muatan: ${this.kapasitasMuatan} ton.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk mengangkut barang.";
    }
  }
  
  class KapalPesiar extends Kapal {
    constructor(nama, panjang, lebar, jumlahPenumpang) {
      super(nama, panjang, lebar);
      this.jumlahPenumpang = jumlahPenumpang; 
    }
  
    info() {
      return `${super.info()} Kapasitas Penumpang: ${this.jumlahPenumpang} orang.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk rekreasi dan perjalanan laut.";
    }
  }
  
  class KapalPatroli extends Kapal {
    constructor(nama, panjang, lebar, kecepatanMaks) {
      super(nama, panjang, lebar);
      this.kecepatanMaks = kecepatanMaks; 
    }
  
    info() {
      return `${super.info()} Kecepatan Maksimum: ${this.kecepatanMaks} knot.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk menjaga keamanan di perairan.";
    }
  }
  
  class KapalFeri extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKendaraan) {
      super(nama, panjang, lebar);
      this.kapasitasKendaraan = kapasitasKendaraan; 
    }
  
    info() {
      return `${super.info()} Kapasitas Kendaraan: ${this.kapasitasKendaraan} kendaraan.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk mengangkut kendaraan dan penumpang.";
    }
  }
  
  class KapalSelam extends Kapal {
    constructor(nama, panjang, lebar, kedalamanMaks) {
      super(nama, panjang, lebar);
      this.kedalamanMaks = kedalamanMaks;
    }
  
    info() {
      return `${super.info()} Kedalaman Maksimum: ${this.kedalamanMaks} meter.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk eksplorasi bawah laut dan misi militer.";
    }
  }
  
  class KapalPenyelamat extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenyelamatan) {
      super(nama, panjang, lebar);
      this.kapasitasPenyelamatan = kapasitasPenyelamatan; 
    }
  
    info() {
      return `${super.info()} Kapasitas Penyelamatan: ${this.kapasitasPenyelamatan} orang.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk menyelamatkan orang dalam situasi darurat di laut.";
    }
  }
  
  class KapalTunda extends Kapal {
    constructor(nama, panjang, lebar, dayaTarik) {
      super(nama, panjang, lebar);
      this.dayaTarik = dayaTarik; 
    }
  
    info() {
      return `${super.info()} Daya Tarik: ${this.dayaTarik} ton.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk menarik atau mendorong kapal lain di pelabuhan.";
    }
  }
  
  class KapalPenelitian extends Kapal {
    constructor(nama, panjang, lebar, peralatanPenelitian) {
      super(nama, panjang, lebar);
      this.peralatanPenelitian = peralatanPenelitian; 
    }
  
    info() {
      return `${super.info()} Peralatan Penelitian: ${this.peralatanPenelitian.join(", ")}.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk melakukan penelitian ilmiah di laut.";
    }
  }
  
  class KapalTank extends Kapal {
    constructor(nama, panjang, lebar, kapasitasBBM) {
      super(nama, panjang, lebar);
      this.kapasitasBBM = kapasitasBBM;
    }
  
    info() {
      return `${super.info()} Kapasitas BBM: ${this.kapasitasBBM} liter.`;
    }
  
    fungsi() {
      return "Kapal ini digunakan untuk mengangkut bahan bakar minyak.";
    }
  }
  
  const daftarKapal = [
    new KapalNelayan("Kapal Laut Jaya", 20, 5, 10),
    new KapalKargo("Kapal Kargo Merdeka", 50, 15, 200),
    new KapalPesiar("Kapal Pesiar Bahagia", 100, 25, 500),
    new KapalPatroli("Kapal Patroli Samudera", 30, 7, 40),
    new KapalFeri("Kapal Feri Nusantara", 70, 20, 100),
    new KapalSelam("Kapal Selam Deep Explorer", 60, 8, 300),
    new KapalPenyelamat("Kapal Penyelamat Hope", 35, 10, 150),
    new KapalTunda("Kapal Tunda Power Tug", 25, 10, 50),
    new KapalPenelitian("Kapal Penelitian Discovery", 45, 12, ["Sonar", "CTD", "Microscope"]),
    new KapalTank("Kapal Tank Energy", 80, 20, 50000),
  ];
  
  daftarKapal.forEach((kapal) => {
    console.log(kapal.info());
    console.log(kapal.fungsi());
    console.log('-------------------');
  });
  