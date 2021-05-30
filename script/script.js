/* This part is calculator body code */

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - (+b);
}

function multiply(a, b) {
    return +a * +b;
}

function division(a, b) {
    return +a / +b;
}

function percent(a, b) {
    return +a * +b / 100;
}

let result;
let a = '';
let b = '';
let aTrue = true;
let bTrue = false;
let whichOperator = {
    plus: false,
    minus: false,
    multiply: false,
    divide: false,
    percentage: false,
}
let buttonClickAmount = 0;           // operator button click amount
let dotClickAmount = 0;            
let attribute;                      //operator.getAttribute('id') saxlamaq ucun variable

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    dotClickAmount++;
    if (aTrue && dotClickAmount === 1) {
        a = a + dot.textContent;
    } else if (bTrue && dotClickAmount === 1) {
        b = b + dot.textContent;
    }
})

const numList = document.querySelectorAll('.num');
numList.forEach(num => {
    num.addEventListener('click', () => {
        if (aTrue) {
            a = a + num.textContent;
        } else {
            b = b + num.textContent;
        }
        showDisplayContent();
    })
})

const operatorList = document.querySelectorAll('.operator');
operatorList.forEach(operator => {
    operator.addEventListener('click', () => {
        buttonClickAmount++;
        dotClickAmount = 0;
        if (buttonClickAmount === 1) {
            attribute = operator.getAttribute('id');
            // console.log(whichOperator[attribute]);
            whichOperator[attribute] = true;
        } else {
            equality();
            a = result;    // ikinci defe operator basilanda result itmesin deye onun valuesi ilk operanda kocurulur.
            attribute = operator.getAttribute('id');
            // console.log(whichOperator[attribute]); 
            whichOperator[attribute] = true;
            // buttonClickAmount = 0;
        }

        if (a !== '') {
            aTrue=false;
            bTrue = true;      // her hansi operator secildikden sonra ikinci operanda kecid, yeni a-dan b-ye
        } else {
            bTrue = true;
            aTrue = false;
        };
        
    })
})

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {

})

const equal = document.querySelector('#equal');
function equality () {
    // buttonClickAmount = 0;
    dotClickAmount = 0;
    switch (true) {
        case whichOperator.plus:
            result = add(a, b);
            whichOperator.plus = false;
            break;
        case whichOperator.minus:
            result = subtract(a, b);
            whichOperator.minus = false;
            break;
        case whichOperator.multiply:
            result = multiply(a, b);
            whichOperator.multiply = false;
            break;
        case whichOperator.divide:
            result = division(a, b);
            whichOperator.divide = false;
            break;
        case whichOperator.percentage:
            result = percent(a, b);
            whichOperator.percentage;
            break;
        }
    aTrue = true;       // yeniden birinci operanda qayidish
    bTrue = false;
    a = '';             // valuelarin bir nov sifirlanmasi
    b = '';
    display.textContent = result;
}
equal.addEventListener('click', () => {
    buttonClickAmount = 0;
    dotClickAmount = 0;
    switch (true) {
        case whichOperator.plus:
            result = add(a, b);
            whichOperator.plus = false;
            break;
        case whichOperator.minus:
            result = subtract(a, b);
            whichOperator.minus = false;
            break;
        case whichOperator.multiply:
            result = multiply(a, b);
            whichOperator.multiply = false;
            break;
        case whichOperator.divide:
            result = division(a, b);
            whichOperator.divide = false;
            break;
        case whichOperator.percentage:
            result = percent(a, b);
            whichOperator.percentage;
            break;
        }
    aTrue = true;       // yeniden birinci operanda qayidish
    bTrue = false;
    a = '';             // valuelarin bir nov sifirlanmasi
    b = '';
    display.textContent = result;
})

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (aTrue) {
        a = a.substring(0, a.length - 1);
        showDisplayContent();
    } else {
        b = b.substring(0, b.length - 1);
        showDisplayContent();
    }
})

const clear = document.querySelector('#c');
let clearClicks = 0;
clear.addEventListener('click', () => {
    clearClicks++;
    if (clearClicks < 2) {
        aTrue ? a = '' : b = '';
        display.textContent = 0;
    } else {
        a = "";
        b = "";
        result = undefined;
        aTrue = true;
        bTrue = false;
        clearClicks = 0;
        buttonClickAmount = 0;
        dotClickAmount = 0;
        display.textContent = 0;
    } 
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This part is calculator display code */
const display = document.querySelector('#calcDisplay');
display.textContent = 0;
function showDisplayContent() {
    if (a === '' && aTrue) {
        display.textContent = 0;
    } else if (b === '' && bTrue) {
        display.textContent = 0;
    } else if (aTrue) {
        display.textContent = a;
    } else if(bTrue) {
        display.textContent = b;
    }
}
showDisplayContent();












/* demeli sabah yaradiriq variable result, equal vaxti bunu otururuk display-e, ve a-ni (hesablama birinci gelen operandi) deyishirik resulta
ya necese resulti ishledirik bilmirem uje burasin  -- hell oldu*/

/* demeli dictionary yaradiriq icinde operatorlarin adi ve valuelari (valuelari false-dadir default olaraq), her operator button-u basildiqda ise
uygun gelen duyme true-ya cevrilir. Equal demek olar switch case-dir, ne trudursa ona uygun funksiya ishe dushur, bir operatordan sonra diger 
operator basilibsa (equalsiz) equal funksiyasina reference olsun, ishe dushsun -- hell oldu*/
/*there can be only one dot, demeli axtrarishla baxa bilerem ki noqte var ya yox, ya nese dot variable yarada bilerem, artirdiqca noqte increment
elye bilerem o variableni -- hell oldu */

/* yuxari merhele alinsa belke yavash-yavash display meselesine kecmek olar, sadece bosh value nece sifir olaraq gosterilecek, umummiyyetle
ne gosterecek display, bunlari dushunmek lazimdi */
// demeli bu display meselesinde iki yol var, ya hesablama etdikce oturmeliyem iformasiyani ya ayrica funksiya yazmaliyam ki
// global varibleleri oxuyub infirmasiya yazsin
