// // Flowgorithm Palindrom
// const palindrom = (data) => {
//   if(typeof(data) === 'string'){
//       let newArr = data.split().reverse().join('')
//       if(data === newArr){
//           return console.log(`${data} adalah palindrom`)
//       }else{
//           return console.log(`${data} adalah non-palindrom`)
//       }
//   }else{
//       return `Please use parameter function with string data`
//   }
// }

// palindrom('makam')

// Flowgorithm Reverse Word

// const reverseStr = (string) => {
//   let result=null
//   if(typeof string === 'string'){
//     result=string.split('').reverse().join('')
//   } else {
//     result='Please input string data'
//   }
//   return console.log(result)
// }

// reverseStr('Saya belajar Javascript di arkademy')

// // Flowgorithm Create sentence from paragraph

// const checkParagraph = (sentence) => {
//     const data = sentence.split(' ')
//     const paragraph = ['saya', 'pergi', 'ke', 'kantor', 'hari', 'kamis']
//     let result =[]
//     if (typeof sentence === 'string' && data.length >= 2) {
//        for(let i = 0; i < data.length; i++){
//            for(let j = 0; j < paragraph.length; j++ ){
//                if(data[i]===paragraph[j]){
//                    result.push(data[i] + ' ')
//                }
//            }
//        }
//        if (data.length === result.length){
//         return console.log('true')
//       } else {
//         return console.log('false')
//       }
//     } else {
//         return console.log('Please input string data and have at least 3 words')
//     }
// }

// console.log(checkParagraph('jalan kantor'))

// // // Flowgorithm Mencari angka terbesar

// const maxData = (num) => {
//   const data = num
//   if (Array.isArray(data) === Array.isArray([])){
//     const results = data.sort(function(a,b){return a-b})
//     return console.log(results[-1])
//   }else {
//     return console.log('Wrong input')
//   }

// }

// maxData([1,5,2])

// // Flowgorithm Ascendents number

// const maxData = (num) => {
//   const data = num
//   if (Array.isArray(data) === Array.isArray([])){
//     const results = data.sort(function(a,b){return a-b})
//     return console.log(results)
//   }else {
//     return console.log('Wrong input')
//   }

// }

// maxData([1,5,2])

// // Flowgorithm Deret Angka Yang Sama Antara 2 Array

const checkParagraph = (arr1, arr2) => {
    const array1 = arr1
    const array2 = arr2
    let result = [] 
    if (Array.isArray(array1) === Array.isArray([]) && Array.isArray(array2) === Array.isArray([])) {
       for(let i = 0; i < array1.length; i++){
           for(let j = 0; j < array2.length; j++ ){
               if(array1[i]===array2[j]){
                   result.push(array1[i])
               }
           }
       }
       return console.log(result)
    } else {
        return console.log('Please input array data')
    }
}

checkParagraph([1,4,5], [2,3,4,5])