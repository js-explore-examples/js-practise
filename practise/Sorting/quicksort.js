function quicksort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    } else {
        let pivot = arr[arr.length - 1];
        let leftArray = [];
        let rightArray = [];
        for (let it = 0; it < arr.length - 1; it++) {
            if (arr[it] <= pivot) {
                leftArray.push(arr[it]);
            } else {
                rightArray.push(arr[it]);
            }
        }
        let sortedLeftArray = quicksort(leftArray);
        let sortedRightArray = quicksort(rightArray);
        return sortedLeftArray.concat(pivot, sortedRightArray);
    }
}

quicksort([1, 4, 2, 5, 7, 2, 4]);