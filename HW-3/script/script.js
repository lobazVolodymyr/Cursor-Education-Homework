//// №1

const getMaxDigit = (num) => { 

    const maxValue = Math.max( ...num.toString()  );
    return maxValue;

}

//// №2

const pow = (firstNum, secondNum) => {

    let sum = firstNum;
    
    for(let i = firstNum;i <= secondNum;i++) {

       sum *= firstNum;

    }

   return sum;

}

//// №3

const changeFirstLetter = (name) => {

    let firstLetter = name.charAt(0).toUpperCase();

    let restLetters = name.substring(1).toLowerCase();

    return firstLetter + restLetters;

}

//// №4

const chalculateSum = (sum) => {

    let taxRate = 19.5;

    let calcSum = sum * (taxRate / 100);

    return sum - calcSum;
    
}

//// №5

const getRandomNumber = (N, M) => { 

    return Math.trunc(Math.random() * (M - N + 1) + N );

}

//// №6

const countLetter = (letter, text) => { 

    var counter = 0;

    for(let i = 0;i < text.length;i++) {

        if(letter.toLowerCase() === text[i].toLowerCase()) {

            counter++;

        }

    }

    return counter;

}

// №7 // №8

const convertCurrency = (money) => { 

    const exchangeRate = 39;
    let cash = money.toLowerCase();
    
    if( cash.includes('$') ) {

        let sum = cash.replace('$','');

        return `${Math.trunc(sum * exchangeRate)}uah`;

    } else if(cash.includes('uah')) {

        let sum = cash.replace('uah','');

        return `${Math.trunc(sum / exchangeRate)}$`;

    } else {

        return 'Wrong exchange rate';

    }

}

// №9

const getRandomPassword = (setNum = 8) => { 

    let randomNum = '';

    for(let i = 0;i < setNum;i++) {

        randomNum += Math.floor(Math.random() * 10);

    }

    return randomNum;

}

// №10

const deleteLetters = (letter,text) => { 

    let result = text.toLowerCase().replaceAll(letter,'');

    return result;

}

// №11

const isPalyndrom = (text) => { 

    text = text.toLowerCase();
    return text.replaceAll(" ", '') == text.split('').reverse().join('').replaceAll(" ", '');

}


// №12

const deleteDuplicateLetter = (text) => { 

    let sum = '';
    text = text.toLowerCase();

    for(let i = 0;i < text.length;i++) {

        if (text.lastIndexOf(text[i]) == text.indexOf(text[i])) {
            
            sum += text[i];

        }

    }

    return sum;

}

console.log( `Функція No1: ${getMaxDigit(1236)}`)
console.log( `Функція No2: ${pow(2,5)}`);
console.log( `Функція No3: ${changeFirstLetter('vOLODYMYR')}`);
console.log( `Функція No4: ${chalculateSum(1000)}`);
console.log( `Функція No5: ${getRandomNumber(1.2, 10.2)}`);
console.log(`Функція No6: ${countLetter("а", "Асталавіста")}`);
console.log(`Функція No7/8: ${convertCurrency("100$")}`);
console.log(`Функція No9: ${getRandomPassword()}`);
console.log(`Функція No10: ${deleteLetters('a', "blablabla")}`);
console.log(`Функція No11: ${isPalyndrom("Я несу гусеня")}`);  
console.log(`Функція No12: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);   