let shorts = 15.678; 
let jeans = 123.965;
let shirts = 90.2345;

//Max Value
const maxVal = Math.max(shorts,jeans,shirts);
console.log(maxVal);

//Min Value
const minVal = Math.min(shorts,jeans,shirts);
console.log(minVal);

//Sum
const getSum = shorts + jeans + shirts;
console.log(getSum);

//Sum without pennies, rounded to lower side
const sumWithoutPennies = Math.floor(getSum);
console.log(sumWithoutPennies);

//Rounding to hundreds
const roundedToHundred = Math.round(getSum / 100) * 100;
console.log(roundedToHundred);

//Boolean sum
const booleanSumVal = sumWithoutPennies % 2 === 0 ? true : false; 
console.log(booleanSumVal);

//Amount of the rest
const amountOfTheRest = 500 - getSum;
console.log(amountOfTheRest);

//Avarage value
const avarageValue = +(getSum / 3).toFixed(2);
console.log(avarageValue);

//Random discount
const randomDiscount = Math.floor(Math.random() * 100);
console.log(+randomDiscount);

//Random and rounded discount
const roundedRandomDiscount = +(Math.random() * 100).toFixed(2);
console.log(roundedRandomDiscount);

//Pfofit
const cutProfit = getSum / 2;
const persentageResult = (getSum * randomDiscount) / 100;
const profitResult = +(cutProfit - persentageResult).toFixed(2);
console.log(profitResult);

//Advanced
console.log(`Максимальна ціна: ${maxVal}. Мінімальна ціна: ${minVal}. Загальна вартість товарів: ${getSum}. Округлена вартість всіх товарів до сотень: ${sumWithoutPennies}. Округлення до сотень ${roundedToHundred}. Булеве значення: ${booleanSumVal}. Сума решти: ${amountOfTheRest}. Середнє значення: ${avarageValue}. Рандомна знижка: ${randomDiscount}. Рандомна заокруглена знижка: ${roundedRandomDiscount}. Чистий прибуток: ${profitResult}  `);