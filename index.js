const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function passwordGenerate(lenght = 8){
    let result = '';
    for(let i = 0; i <= lenght; i++) {
        result += alph.charAt(Math.floor(Math.random() * alph.length))
    }
    return result;
}

const pass = passwordGenerate(6);
console.log(pass)

