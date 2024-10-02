// task one

const doubleArray = [    
    [1, 2, 3, 2, 3, 7, 9, 2], 
    [4, 5, 6, 5, 7, 8, 9, 5],     
    [7, 8, 9, 4, 6, 3, 1, 4]
]

function matrix(array) {  
    let end = 2
    const matrixArray = [    
        [],
        [],    
        []
    ]  
    const result = []
    for(let row = 0; row < array[0].length; row++) {

        for(let col = 0; col < array.length; col++) { 

            matrixArray[col].push(array[col][row])

        }    
        if(row === end) {

            result.push(checkRepeatsMatrix(matrixArray))

            matrixArray.forEach((item) => {
                item.reverse().pop()  

                item.reverse()

            });   

            end++
        }  
    }
    return result
}

function checkRepeatsMatrix(matrix) {
    const array = []  
    let result = true
    for(let row = 0; row < matrix[0].length; row++) {      
        for(let col = 0; col < matrix.length; col++) {
            if(array.includes(matrix[col][row])) {            
                result = false
                break          
            }
            array.push(matrix[col][row])            
            result = true
        }    
    }
    return result
}

// console.log(matrix(doubleArray))

// task two

const operations = [
    { "date": "2017-07-31", "amount": "5422" },    
    { "date": "2017-07-30", "amount": "5220" },    
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
]

function groupingYear(dates) {    
    let result = {}
    if(dates.length === 0) return result    
    dates.forEach(element => {
        const date = new Date(Date.parse(element.date))        
        if(`${date.getFullYear()}` in result) {
           result[`${date.getFullYear()}`].push([date.getMonth() + 1, date.getDate()])        
        } else {
            result[`${date.getFullYear()}`] = [[date.getMonth() + 1, date.getDate()]]        
        }
    });  
    result = sortDM(result, 1)  
    result = sortDM(result, 0)
     
    for(let key in result) {
        result[key] = result[key].map(item => item.join('-'))  
    }
    return result
}

function sortDM(array, index) {     
    for(let [key, value] of Object.entries(array)) {
        value.sort((a, b) => {
            return a[index] - b[index]      
        })
    }  
    return array
}

// console.log(groupingYear(operations))

// task three 

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос'; 
// [[adres, sreda], [karp, park]]

function checkAnagrams(text) {    const anagrams = {}
    const result = []      
    const originalWordsArray = text.split(' ')
    const arrayWords = text.split(' ').map(word => word.toLowerCase().split('').sort().join(''))
    arrayWords.forEach((i, index) => {      if(anagrams[i]) {
        anagrams[i].push(index)      } else {
        anagrams[i] = [index]      }
    })  
    for(let [key, value] of Object.entries(anagrams)) {        
        const arr = []
        value.forEach(item => arr.push(originalWordsArray[item]))        
        result.push(arr)
    }  
    return result
}

// console.log(checkAnagrams(str))
