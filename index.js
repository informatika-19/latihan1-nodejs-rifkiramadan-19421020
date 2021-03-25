//function
function hitungnilai (nilai1,nilai2){
    return(nilai1 + nilai2)
}

const hasil = hitungnilai(14,8)

//console.log(hasil)
//arraw function
const buatberas = (beras,air) => {
if (beras) {
    console.log('Beras Ok')
} else {
    console.log('Mohon Masukan Beras')
}
if (air) {
    console.log('Air Ok')
} else {
    console.log('Mohon Masukan Air')
}
}
buatberas('beras','air')