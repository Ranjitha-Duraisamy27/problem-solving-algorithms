function birthdayCakeCandles(candles) {
  const largeNumber = [...candles].sort((a, b) => b - a)[0];
  return candles.filter((el) => el === largeNumber).length;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
