const nilai = 80
let nilaiHuruf, Keterangan
//logika bercabangan
if (nilai >=85 ) {
    nilaiHuruf = 'A'
    Keterangan = 'Sangat Baik'
} else if (nilai >=75){
    nilaiHuruf = 'B'
    Keterangan = 'Baik'
} else if (nilai >= 65) {
    nilaiHuruf = 'C'
    Keterangan = 'Cukup'
} else if (nilai >=55) {
    nilaiHuruf = 'D'
    Keterangan ='Buruk'
}else {
    nilaiHuruf = 'E'
    Keterangan ='Sangat Buruk'
}
console.log(' Nilai Anda ' + nilaiHuruf + ' (' + Keterangan + ')')