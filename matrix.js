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
            matrixArray.forEach((item) => item.shift() )
            end++
        }  
    }
    return result
}

// console.log('>>>>>>>>>', matrix(doubleArray))

function checkRepeatsMatrix(matrix) {
    const flattedMatrix = matrix.flat();
    const matrixAsSet = new Set(flattedMatrix)

    return matrixAsSet.size === flattedMatrix.length;


    // const check = new Map()
    // let result = true
    // matrix.forEach((item) => { 
    //     item.forEach( (num) => { 
    //         if(result) { 
    //             check.set(num, (check.get(num) ? result = !result : 1)) 
    //         }
    //     })
    // })
    // return result
}

// console.log(matrix(doubleArray))

// task two

const operations = [   
    { "date": "2017-07-30", "amount": "5220" },    
    { "date": "2017-05-31", "amount": "5365" },    
    { "date": "2017-08-31", "amount": "5451" },    
    { "date": "2017-09-30", "amount": "5303" },    
    { "date": "2018-03-31", "amount": "5654" },    
    { "date": "2017-10-31", "amount": "5509" },    
    { "date": "2017-11-29", "amount": "5567" },    
    { "date": "2018-01-31", "amount": "5597" },    
    { "date": "2017-11-30", "amount": "5359" },    
    { "date": "2018-02-28", "amount": "5082" },    
    { "date": "2018-04-14", "amount": "2567" },
    { "date": "2004-04-14", "amount": "2567" },
    { "date": "2021-04-14", "amount": "2567" }    
]

function groupingYear(dates) {    
    let result = new Map()

    dates.forEach(element => {
        const date = new Date(Date.parse(element.date))
        const year = date.getFullYear().toString()
        const month = date.getMonth() + 1
        const day = date.getDate()
        // result[year] = (year, result[year] ? [...result[year], [month, day]] : [[month, day]] )   
        const existingYear = result.get(year);

        if (existingYear) {
            result.set(year, [...existingYear, [month, day]])
        } else {
            result.set(year, [[month, day]])
        }
    }); 
    
    return Array.from(result.entries()).reduce((acc, [year, values]) => {
        const sortedValues = values.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1]
            }

            return a[0] - b[0];
        })

        acc[year] = sortedValues.join('-');

        return acc;
    }, {});


    return result
}

// console.log(groupingYear(operations))

// task three 

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос'; 
// [[adres, sreda], [karp, park]]

function checkAnagrams(text) {
    const anagrams = new Map()
    const originalWordsArray = text.split(' ')
    const sortedWordsArray = text.split(' ').map(word => word.toLowerCase().split('').sort().join(''))

    const result = sortedWordsArray.reduce((result, word, index) => {
        anagrams.set(word, anagrams.get(word) ? [...anagrams.get(word), originalWordsArray[index]] : [originalWordsArray[index]])
        return result = [...anagrams.values()]
    }, [])
    return result
}

console.log(checkAnagrams(str))
