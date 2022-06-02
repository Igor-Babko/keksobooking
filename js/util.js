function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


const random = (min, max, number) => +((Math.random() * (max - min + 1)) + min).toFixed(number);


export {randomInteger,random };
