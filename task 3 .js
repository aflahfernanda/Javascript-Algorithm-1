function seleksiNilai(a,b,arr){
var arr1=arr.map(function(e){
    return e;
})
let arrLength=arr1.length
let arr2=arr1.filter(function(x){
    return x>a && x<b;
})
let arrLengthhasil=arr2.length

if(typeof a!=='number' || typeof b!=='number'){
    console.log('input wajib angka')
}
else if(arrLength<5){
    console.log('data array harus lebih dari lima')
}else if(a>b){
    console.log('nilai awal harus lebih kecil dari nilai akhir')
}
else if(arrLengthhasil<=0){
    console.log('nilai tidak ditemukan')
}else if(a<b){
    arr2.sort(function(i,e){
        return i-e
    })
    console.log(arr2)
}
}

seleksiNilai(5,20,[2,25,4,14,17,30,8])

