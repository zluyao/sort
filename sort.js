// 快速排序  选择基准，小的放左边，大的放右边，拼接，递归
export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [],
    right = [],
    current = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right));
}
