const year = 2020;

const check = () =>{
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ){
        return true
    }
        else false
}
console.log('rok' + year + check() === true 
    ? 'jest przestępny' 
    : 'nie jest przestępny');