// let bet = 0;
// let color ="";
// let profit = 0;
// let loss = 0 ;

// bet = prompt  ("ставка від 1 до 100 $");

// const randomNumber = Math.floor(Math.random() * 2 );
// let  win = randomNumber == 1 ? "чорний" : "червоний";

// color = prompt ("Оберай чорний чи червоний ");

  
// for (let i= 0; i <= 5;i ++) 
// {
//     if (win === color )
//     {profit = bet * 2 
//     console.log(i, 'Ви перемоглм, Ваш виграш ',profit)}

//     else {
//         loss  =  '-  ${bet}'
//         console.log(i ,'ви програли',loss)
//     }
// }


let bet = 0;
let color ="";
let profit = 0;
let loss = 0 ;
let result= 0;
let resultPlay = []
let ggg = 0;

bet = prompt  ("ставка від 1 до 100 $");
// color = prompt ("Оберай чорний чи червоний ");
for (let i= 0; i <= 5;i ++) 
{
const randomNumber = Math.floor(Math.random() * 2 );
let  win = randomNumber == 1 ? "чорний" : "червоний";
color = prompt ("Обирай чорний чи червоний ");

  

    if (win === color )
    {profit = bet * 2 
    console.log(i, 'Ви перемогли , Ваш виграш ',profit)
    alert (`Ви перемогли, Ваш виграш ${profit}`)
    resultPlay.push(profit)
    }

    else {
        loss  =  -bet;
        bet = bet *2
        console.log(`Ви програли ${loss}`)
        alert (`Ви програли ${loss}`)
        resultPlay.push(loss)
    }

}

console.log (result)
console.log(ggg = resultPlay[0]+resultPlay[1]+resultPlay[2]+resultPlay[3]+resultPlay[4]+resultPlay[5])
 alert  (` Результат гри ${ggg}`)

  