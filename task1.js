// const palindromCheck = (string) => {
//     if(typeof(string) === 'string'){
//         let newString = string.toLowerCase().replace(/\W/g,'')
//         let length = newString.length
//         for(let index = 0; index < length; index++){
//             if(newString[index] === newString[length - 1 - index]){
//                 return console.log(`${string} adalah palindrom`)
//             }else{
//                 return console.log(`${string} adalah non-palinfrom`)
//             }
//         }
//     }else{
//         console.log(`Please use parameter function with string data`)
        
//     }
    
// }
// palindromCheck('isiasdasd')

const palindrom = (data) => {
    if(typeof(data) === 'string'){
        let newArr = data.split().reverse().join('')
        if(data === newArr){
            return console.log(`${data} adalah palindrom`)
        }else{
            return console.log(`${data} adalah non-palindrom`)
        }
    }else{
        return `Please use parameter function with string data`
    }
}

palindrom('makam')
// const num =789869
// console.log(num.toString().split(''))
// const palindrom = 'makas'
// console.log(palindrom.split('').reverse())
// const paragraph = 'Pada suatu hari, saya pergi ke kantor. Ternyata kantor saya hari ini tutup.'
// const newParagraph = paragraph.split(' ')
// const length = newParagraph.length

// const checkParagraph = (sentence) => {
//     const data = sentence.split(' ')
//     const dataLength = data.length
//     let result = null 
//     if (typeof sentence === 'string' && dataLength > 2) {
//        for(let i = 0; i < dataLength; i++){
//            for(let j = 0; j < length; j++ ){
//                if(data[i]===newParagraph[j]){
//                    result= data[i]
//                }
//            }
//        }
//        return result
//     } else {
//         return console.log('Please input string data and have at least 3 words')
//     }
// }

// checkParagraph('saya pergi kantor')
