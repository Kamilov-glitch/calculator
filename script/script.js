function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function percent(a, b) {
    return a * b / 100;
}

let result;
let a = '';
let b = '';
let aTrue = true;
let bTrue = false;
// let array = [];

const numList = document.querySelectorAll('.num');
numList.forEach(num => {
    num.addEventListener('click', () => {
        if (aTrue) {
            return a = a + num.textContent;
            // return array.push(num.textContent);
        } else {
            return b = b + num.textContent;
        }
    })
})

const operatorList = document.querySelectorAll('.operator');
operatorList.forEach(operator => {
    operator.addEventListener('click', () => {
        if (a !== '') aTrue=false;
        else bTrue = true;
    })
})

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {

})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    aTrue = true;
    bTrue = false;
    a = '';
    b = '';
})

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (aTrue) {
        a = a.substring(0, a.length - 1);
    } else {
        b = b.substring(0, b.length - 1);
    }
})

const clear = document.querySelector('#c');
let clearClicks = 0;
clear.addEventListener('click', () => {
    clearClicks++;
    if (clearClicks < 2) aTrue ? a = '' : b = '';
    else {
        a = "";
        b = "";
        clearClicks = 0;
    } 
})

/* demeli sabah yaradiriq variable result, equal vaxti bunu otururuk display-e, ve a-ni (hesablama birinci gelen operandi) deyishirik resulta
ya necese resulti ishledirik bilmirem uje burasin */

/* demeli dictionary yaradiriq incinde operatorlarin adi ve valuelari (valuelari false-dadir default olaraq), heroperator button-u basildiqda ise
uygun gelen duyme true-ya cevrilir. Equal demek olar switch case-dir, ne trudursa ona uygun funksiya ishe dushur, bir operatordan sonra diger 
operator basilibsa (equalsiz) equal funksiyasina reference olsun, ishe dushsun*/

/* yuxari merhele alinsa belke yavash-yavash display meselesine kecmek olar, sadece bosh value nece sifir olaraq gosterilecek, umummiyyetle
ne gosterecek display, bunlari dushunmek lazimdi */