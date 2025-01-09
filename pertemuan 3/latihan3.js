class SensorPasut {
    constructor(nama, lokasi){
        this.nama = nama
        this.lokasi = lokasi
        this._status = "Mati";
    }

aktifkan(){
    this._status = "Aktif";
    return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan`;
    }

nonaktifkan(){
    this._status = "Mati";
    return `Sensor ${this.nama} di ${this.lokasi} telah dimatikan / dinonaktifkan`;
    }

getStatus(){
    return `Status sensor  ${this.nama} adalah ${this_status}`;
    }

}

class UsiaSensor extends SensorPasut{
    
}



let SesnsorPasutMerak = new SensorPasut("Sensor Selat Sunda", "Merak")
console.log(SensorPasutMerak.aktifkan())
