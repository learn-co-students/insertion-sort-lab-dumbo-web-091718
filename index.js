function findMinAndRemove(arr){
    console.log(arr)
    let min = arr[0]
    let idx = 0 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
            idx = i 
        }
    }
    arr.splice(idx, 1)
    return min
}

function insertionSort(arr){  
    let sortedArr = []
    while(arr.length !== 0){
        sortedArr.push(findMinAndRemove(arr))
    }
    return sortedArr
}
