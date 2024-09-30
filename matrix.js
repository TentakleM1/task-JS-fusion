// task one

const doubleArray = [
    [1, 2, 3, 2, 3, 7, 9], 
    [4, 5, 6, 5, 7, 8, 9], 
    [7, 8, 9, 4, 6, 3, 1]
]


const matrixtwo = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

function newMatrix(colums) {
    let count = 0
    const result = []
    while(count <= colums) {
        result.push([])
        count++
    }
    return result
}

function checkRepeat(matrix) {
    const result = newMatrix(matrix.length - 1)

    const array = []

    let check = true

    for(let row = 0; row < matrix[0].length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if(array.includes(matrix[col][row])) {
                result[col].push(false)
                check = false  
            }
            array.push(matrix[col][row])
            result[col].push(true)   
        }
    }

    if(check) return true

    return result

}

function threeXthree(array) {
    const result = []
    let matrix = newMatrix(2)
    let count = 0

    for(let row = 0; row < array[0].length; row++) {
        for (let col = 0; col < array.length; col++) {
            if(count === 3) {
                console.log(matrix)
                // result.push(checkRepeat(matrix))
                count = 0
                matrix = []
            }
            matrix.push(array[col][row])
            count++  
        }
    }

    return array
}

console.log(threeXthree(doubleArray))

// console.log(checkRepeat(matrix))
// console.log(checkRepeat(matrixtwo))

// task two

const operations = [

    { "date": "2017-07-31", "amount": "5422" },
    
    { "date": "2017-06-30", "amount": "5220" },
    
    { "date": "2017-05-31", "amount": "5365" },
    
    { "date": "2017-08-31", "amount": "5451" },
    
    { "date": "2017-09-30", "amount": "5303" },
    
    { "date": "2018-03-31", "amount": "5654" },
    
    { "date": "2017-10-31", "amount": "5509" },
    
    { "date": "2017-12-31", "amount": "5567" },
    
    { "date": "2018-01-31", "amount": "5597" },
    
    { "date": "2017-11-30", "amount": "5359" },
    
    { "date": "2018-02-28", "amount": "5082" },
    
    { "date": "2018-04-14", "amount": "2567" },

    { "date": "2004-04-14", "amount": "2567" },

    { "date": "2021-04-14", "amount": "2567" }
    
    ];

function groupingYear(dates) {
    if(dates.length === 0) return {}
    const result = {}
    dates.forEach(element => {
        const date = new Date(Date.parse(element.date))
        if(`${date.getFullYear()}` in result) {
            result[`${date.getFullYear()}`].push(`${date.getMonth()}-${date.getDate()}`)
        } else {
            result[`${date.getFullYear()}`] = [`${date.getMonth()}-${date.getDate()}`]
        }
    });
    return result
}

// console.log(groupingYear(operations))

// task three 

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос'; // [[adres, sreda], [karp, park]]
const strtwo = 'мир торт'

function checkAnagrams(text) {
    let count = 0 
    const array = text.split(' ').map(word => word.toLowerCase().split('').sort().join(''))
    count = array.length - array.filter((word, index) => array.indexOf(word) === index).length
    return count
}

// console.log(checkAnagrams(str))
// console.log(checkAnagrams(strtwo))
