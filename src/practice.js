const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = arr.length;
const waveSort = (arr, n) => {
  for (let i = 0; i < n; i += 2) {
    if (i !== n - 1) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};
waveSort(arr, n);
console.log(arr);
