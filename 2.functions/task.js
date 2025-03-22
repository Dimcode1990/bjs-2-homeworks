function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let element of arr) {
      sum += element;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let subArr of arrOfArr) {
      let result = func(...subArr);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }
  return maxWorkerResult;
}
