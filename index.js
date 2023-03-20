const { DEFAULT_LENGTH } = require('./config')

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#-_&$!@+?/*';

const length = (process.argv[2] != undefined) ? process.argv[2] : DEFAULT_LENGTH

let result = '';
    
var charactersLength = characters.length;
for (let i = 0, j = length; i < j; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

console.log(result)