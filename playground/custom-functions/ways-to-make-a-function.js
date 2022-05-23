console.log('it works re');


// function doctorize(firstname){
//     return `DR. ${firstname}`;
// }

//Anon function
// function (firstname){
//     return `DR. ${firstname}`
// }

//func expression
// const doctorize = function(firstname){
//     return `DR. ${firstname}`;
// }

//arrow func
// function inchToCM(inches){
//     return inches * 2.54;
// }


//func expr
// const inchToCM = function(inches){
//     return inches * 2.54;
// }

//arrow
// const inchToCM = inches => inches * 2.54;

// //arrow
// const add = (a,b = 3) => a + b

//function expression
(function() {
    console.log('weeesfs');
})();

//Methods!
function hello(){
    console.log('himan')
}

const bar = {foo: 'hamel', func: hello}
const wee = {name: 'ham', 
            yellhi: function() {console.log(`hi there ${this.name}`)},
        }

        // Callback functions
const button = document.querySelector('.clickMe');
button.name = 'a name'
button.addEventListener('click', wee.yellhi )


//Time functions
setTimeout(wee.yellhi, 1000)