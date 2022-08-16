'use strict'
const inputEl = document.querySelector('#password-text')
const copyBtn = document.querySelector('.copy-btn')
const generateBtn = document.querySelector('.generate-btn')
const alphabetLc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabetUc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialCharac = [`!`, `"`, `#`,`$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `=`, `?`, `@`, `[`, `]`, `^`, `{`, `|`, `}`, `~`]
const allChar = [...alphabetLc,...alphabetUc,...numbers,...specialCharac]
const arr = ["s", 'a','l',"e" ,"e", "m" ]
let pass = '';
generateBtn.addEventListener('click', function(e){
    e.preventDefault()
    pass = ''
    inputEl.value = ''
        
    if(inputEl.value === ""){
        for(let i = 0; i < 12; i++){
            let randnum = Math.floor(Math.random()* allChar.length);
            pass += allChar[randnum]
        }
        inputEl.value = pass;  
    }
})
copyBtn.addEventListener('click', function(e){
    e.preventDefault()
    navigator.clipboard.writeText(inputEl.value).then(() => {
        console.log('copied');
    }, () => {
        console.log('failed');
    })
})



