

const devideAndSort = (number) => {
    if(typeof(number) === 'number') {
        const array = number.toString().split('')
        array.sort()
        // console.log(array)
        const newArr = array.filter((item) => {return item > 0})
        const newNumber = newArr.join('')
        console.log(newNumber) 
    }else{
        console.log(`Please input parameter with integer data`)
    }
}

devideAndSort(123097901328740)