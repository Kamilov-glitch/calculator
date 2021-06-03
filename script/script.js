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
    times: false,
    divide: false,
    percentage: false,
}
let buttonClickAmount = 0;           // operator button click amount
let dotClickAmount = 0;            
let attribute;                      //operator.getAttribute('id') saxlamaq ucun variable
let dotPositionLength = 0;

const dot = document.querySelector('#dot');
function dotFunc() {
    dotClickAmount++;
    if (aTrue && dotClickAmount === 1) {
        if (a === '') {
            a = '0.'
        } else {
        a = a + dot.textContent;
        }
        dotPositionLength = a.length;
    } else if (bTrue && dotClickAmount === 1) {
        if (b === '') {
            b = '0.'
        }else {
            b = b + dot.textContent;
        }
        dotPositionLength = b.length;
    }
    showDisplayContent();
}
dot.addEventListener('click', dotFunc)

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

/*const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {

})*/

const equal = document.querySelector('#equal');
function equality () {
    // buttonClickAmount = 0;
    dotPositionLength = 0;
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
    if (result !== Infinity) {
        display.textContent = result;
    } else {
        display.textContent = 'That ain\'t gonna happen';
    }
}
function trueEquality() {
    dotPositionLength = 0;
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
    if (result !== Infinity) {
        display.textContent = result;
    } else {
        display.textContent = 'That ain\'t gonna happen';
    }
}
equal.addEventListener('click', trueEquality)

const backspace = document.querySelector('#backspace');
function backSpace() {
    if (aTrue) {
        a = a.substring(0, a.length - 1);
        if (a.length < dotPositionLength) {
            dotClickAmount = 0;
        }
        showDisplayContent();
    } else {
        b = b.substring(0, b.length - 1);
        if (b.length < dotPositionLength) {
            dotClickAmount = 0;
        }
        showDisplayContent();
    }
}
backspace.addEventListener('click', backSpace)

const clear = document.querySelector('#c');
let clearClicks = 0;
function clearFunc() {
    clearClicks++;
    if (clearClicks < 2) {
        aTrue ? a = '' : b = '';
        display.textContent = 0;
        dotClickAmount = 0;
        dotPositionLength = 0;
    } else {
        a = "";
        b = "";
        result = undefined;
        aTrue = true;
        bTrue = false;
        clearClicks = 0;
        buttonClickAmount = 0;
        dotClickAmount = 0;
        dotPositionLength = 0;
        display.textContent = 0;
    } 
}
clear.addEventListener('click', clearFunc)


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

///////////////////////////////////////////////////////////////////////////////////
/* This is the keyboard input code*/

function operatorKeyInput(key) {
    let _key = key;
    buttonClickAmount++;
    dotClickAmount = 0;
    if (buttonClickAmount === 1) {
        whichOperator[_key] = true;
    } else {
        equality();
        a = result;
        whichOperator[_key] = true;
    }

    if (a !== '') {
        aTrue=false;
        bTrue = true;      // her hansi operator secildikden sonra ikinci operanda kecid, yeni a-dan b-ye
    } else {
        bTrue = true;
        aTrue = false;
    };
}

function keyToButton(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 49:
            aTrue? a = a + 1 : b = b + 1;
            showDisplayContent();
            break;
        case 50:
            aTrue? a = a + 2 : b = b + 2;
            showDisplayContent();
            break;
        case 51:
            aTrue? a = a + 3: b = b + 3;
            showDisplayContent();
            break
        case 52:
            aTrue? a = a + 4: b = b + 4;
            showDisplayContent();
            break;
        case 53:
            if (e.shiftKey) {
                operatorKeyInput('percentage');
            }else {
                aTrue? a = a + 5: b = b + 5;
                showDisplayContent();
            }
            break;
        case 54:
            aTrue? a = a + 6: b = b + 6;
            showDisplayContent();
            break;
        case 55:
            aTrue? a = a + 7: b = b + 7;
            showDisplayContent();
            break;
        case 56:
            if (e.shiftKey) {
                operatorKeyInput('times')
            } else {
                aTrue? a = a + 8: b = b + 8;
                showDisplayContent();
            }
            break;
        case 57:
            aTrue? a = a + 9: b = b + 9;
            showDisplayContent();
            break;
        case 48:
            aTrue? a = a + 0: b = b + 0;
            showDisplayContent();
            break;
        case 8:
            backSpace();
            break;
        case 67:
            clearFunc();
            break;
        case 190:
            dotFunc();
            break;
        case 191:
            operatorKeyInput('divide');
            break;
        case 189:
            operatorKeyInput('minus');
            break;
        case 187:
            if (e.shiftKey) {
                operatorKeyInput('plus');
            } else {
                trueEquality();
            }
            break;
    }
}


window.addEventListener('keydown', keyToButton);









/* demeli sabah yaradiriq variable result, equal vaxti bunu otururuk display-e, ve a-ni (hesablama birinci gelen operandi) deyishirik resulta
ya necese resulti ishledirik bilmirem uje burasin  -- hell oldu*/

/* demeli dictionary yaradiriq icinde operatorlarin adi ve valuelari (valuelari false-dadir default olaraq), her operator button-u basildiqda ise
uygun gelen duyme true-ya cevrilir. Equal demek olar switch case-dir, ne trudursa ona uygun funksiya ishe dushur, bir operatordan sonra diger 
operator basilibsa (equalsiz) equal funksiyasina reference olsun, ishe dushsun -- hell oldu*/
/*there can be only one dot, demeli axtrarishla baxa bilerem ki noqte var ya yox, ya nese dot variable yarada bilerem, artirdiqca noqte increment
elye bilerem o variableni -- hell oldu */

/* yuxari merhele alinsa belke yavash-yavash display meselesine kecmek olar, sadece bosh value nece sifir olaraq gosterilecek, umummiyyetle
ne gosterecek display, bunlari dushunmek lazimdi ++++++++ */
// demeli bu display meselesinde iki yol var, ya hesablama etdikce oturmeliyem iformasiyani ya ayrica funksiya yazmaliyam ki++++++++
// global varibleleri oxuyub infirmasiya yazsin ++++++++++++++++


/* Make app prettier for the repository, work on CSS. Make some changes to code, like making sure when pressing dot button display shows
"0." and not ".". +++++++++

*/

// yeni bug tapdim, sifir. Demek olar ard-arda sonsuz sifir elave etmek olar, bunun qarshishin kesmek lazimdi
// clearClicksle baglidi da bug var, baxarsan ona da -- nese aglima geldi,  2-ye bolunub bolunmemesine esasen C ve ya CE funksiyasinin ishe dushemsini anlamaq olar.