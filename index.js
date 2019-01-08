function findMinAndRemove(array){
  let min = array[0];
  let minIndex;
  for(let i = 0; i < array.length;i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1)
  return min;
}

function insertionSort(array){
  let sortArr = [];
  let min;
  while(array.length > 0){
    min = findMinAndRemove(array);
    sortArr.push(min);
  }
  return sortArr;
}
