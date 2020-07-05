    let arr = [2,10,8,5,9];
    for(let i = 0; i<arr.length; i++){
       for(let j = 0; j<arr.length; j++){
          if(arr[j]>arr[j + 1]){
             let temp = arr[j];
             console.log(temp)
             arr[j] = arr[j+1];
             arr[j+1] = temp;
          }
       }
    }
    console.log(arr);
