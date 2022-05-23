console.log('it works!')

function calculateBill(total, tax){
    return total * tax
};

console.log(`your total is ${calculateBill(100, 1.15)}`)


function doctorize(name='silly goose'){
    return `Dr ${name}`
}

function yell(name = 'silly goose'){
    return `HEY ${name}`
}

console.log(`${yell(doctorize())}`)

