const getRandomArray = (length, min, max) => {

    let array = [];

    for(let i = 0;i < length;i++) {

        array.push(Math.floor(Math.random() * (max - min) + min));

    }

    return array;

}


console.log( getRandomArray(15, 1, 100) );


const getModa = (...numbers) => {

    numbers = numbers.slice().sort((x, y) => x - y);

    let bestStreak = 1;
    let bestElem = numbers[0];
    let currentStreak = 1;
    let currentElem = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {

      if (numbers[i-1] !== numbers[i]) {

        if (currentStreak > bestStreak) {

          bestStreak = currentStreak;
          bestElem = currentElem;

        }
  
        currentStreak = 0;
        currentElem = numbers[i];

      }
  
      currentStreak++;
      
    }
  
    return currentStreak > bestStreak ? currentElem : bestElem;

}

console.log( getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) );


const getAverage = (...numbers) => {

    let sum = 0;

    for(let i = 0;i < numbers.length;i++) {

        sum += Math.trunc(numbers[i]);

    }

    return sum / numbers.length;

}

console.log(getAverage( 6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) );


const getMedian = (...numbers) => {

    const arr = numbers.sort( (a,b) => {

        return a - b;

    });

    return arr[Math.floor(arr.length / 2)];
}

console.log( getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) );


const filterEvenNumbers = (...numbers) => {

    let newArr = numbers.filter( arr => {

        return arr % 2 != 0;
        
    });

    return newArr;

}

console.log( filterEvenNumbers(1, 2, 3, 4, 5, 6) );


const countPositiveNumbers = (...numbers) => {

    const newArr = numbers.filter( num => num > 0 );

    return newArr.length;
        
}

console.log( countPositiveNumbers(1, -2, 3, -4, -5, 6) );


const getDividedByFive = (...numbers) => {

    const filterArray = numbers.filter( num => num % 5 === 0 );

    return filterArray;

}

console.log( getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) );


const replaceBadWords = (string) => {

    const badWords = ['shit','fuck'];
    const newArr = string.split(' ');
   
    for(let i = 0;i < newArr.length;i++) {

        for(let j = 0;j < badWords.length;j++) {


            newArr[i] = newArr[i].replace(badWords[j], '*'.repeat(badWords[j].length)) ;

        }

    }

    return newArr.join(' ');

}

console.log( replaceBadWords("Are you fucking kidding?") );
console.log(replaceBadWords("Holy shit!"))
console.log(replaceBadWords("It's bullshit!"))