let N;
let M;
let askedQuestion;
let sum = 0;

do {

    N = Math.trunc(+prompt('Type first number'));
    M = Math.trunc(+prompt('Type second number'));
    askedQuestion = confirm('Skip even numbers');

    for(let i = N;i <= M;i++) {

        if( i % 2 === 0 && askedQuestion === true) {
        
            continue;

        } 

        sum += i;
    
    }

} while(isNaN(N) || isNaN(M) || N <= 0 || M < N || M === N);

console.log(sum);