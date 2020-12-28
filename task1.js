const palindromCheck = (string) => {
    if(typeof(string) === 'string'){
        let newString = string.toLowerCase().replace(/\W/g,'')
        let length = newString.length
        for(let index = 0; index < length; index++){
            if(newString[index] === newString[length - 1 - index]){
                return console.log(`${string} adalah palindrom`)
            }else{
                return console.log(`${string} adalah non-palinfrom`)
            }
        }
    }else{
        console.log(`Please use parameter function with string data`)
        
    }
    
}
palindromCheck('isiasdasd')

const palindrom = (data) => {
    if(typeof(data) === 'string'){
        let newData = data.toLowerCase().replace(/\W/g,'')
        let array = newData.split('')
        let newArr = array.reverse().join('')
        if(newData === newArr){
            return console.log(`${data} adalah palindrom`)
        }else{
            return console.log(`${data} adalah non-palindrom`)
        }
    }else{
        return `Please use parameter function with string data`
    }
}

palindrom('maling')
