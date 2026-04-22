"use strict";

/**
 * @param {*} winnerRate Поточний рейтинг переможця.
 * @param {*} loserRate Поточний рейтинг того, хто програв.
 * @returns {number} Оновлений рейтинг переможця, округлений до одного знака після коми або NaN
 */

const calculateRate = (winnerRate, loserRate) =>{
if (typeof winnerRate !== "number" ||
    typeof loserRate !== "number" || winnerRate < 0 || loserRate < 0 ){
    return NaN;
}
let newRate = winnerRate;

  if (winnerRate === 0) {
    return Number(loserRate.toFixed(1));
  }

 
  if (loserRate === 0) {
    return Number(winnerRate.toFixed(1));
  }

  const diff = winnerRate - loserRate;

  if (loserRate > winnerRate) {
    newRate += (loserRate - winnerRate + 5) / 3;
  } else {
    if (diff >= 0 && diff <= 2) {
      newRate += 2;
    } else if (diff > 2 && diff < 20) {
      newRate += 1;
    } else if (diff >= 20) {
      newRate += 0;
    }
  }

  return Number(newRate.toFixed(1));
}

console.log(calculateRate(10, 8));   