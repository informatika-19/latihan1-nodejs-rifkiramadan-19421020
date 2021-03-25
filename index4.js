//array
//const listnilai =  ['A','B','C']
//console.log(listnilai[2])

const datamahasiswa = [
    {
    nama: 'Rifki Ramadan',
    npm: '19421020',
    prodi: 'Informatika'
    },
    {
    nama: 'gk tau siapa',
    npm: '19421000',
    prodi: 'Informatika'
    },
    {
    nama: 'Person Anderson',
    npm: '194211001',
    prodi: 'Informatika'
}
]
//console.log(datamahasiswa[0].nama)
for (let i in datamahasiswa) {
    console.log(datamahasiswa[i].nama + ' - ' + datamahasiswa[i].npm +' - ' + datamahasiswa[i].prodi)
}