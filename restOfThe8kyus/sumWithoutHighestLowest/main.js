function sumArray(array) {
    //! 1st way
    // input is an array
    // if input is null, return 0
    // if input length <= 2, return 0
    // sort array to smallest to largest
    // for loop minus first and last index OR  slice, then loop

    if(array == null) {
        return 0;
    }
    else if(array.length <=2){
        return 0;
    } else {
        array.sort((a,b) => a-b) //compares and sorts
        // console.log(array);
        // let newArr = array.slice(1,-1)
        array.pop();
        array.shift();
        let newArr = array
        console.log(newArr);
        let sum = 0;
        newArr.forEach(element => {
    
            sum+= Number(element);
        });
        // for(let i = 0; i<newArr.length ; i++) {
        //     sum += newArr[i];
        // }
        return sum;
    }
    

    //! 2nd way
    // ternary
    // array ? 
        // if true
            // sort
            // array.sort((a,b)=> a-b)
            // slice 
                // .slice(-1,1)
            // reduce/loop
                // .
        // if false, return 0
        // :0
}







// console.log(sumArray(null))                    /* , 0 );*/
// console.log(sumArray([ ]))                     /* , 0 );*/
// console.log(sumArray([ 3 ]))                   /* , 0 );*/
// console.log(sumArray([ 3, 5 ]))                 /*, 0 );*/
// console.log(sumArray([ 6, 2, 1, 8, 10 ]))      /* , 16 ) */
console.log(sumArray([ 0, 1, 6, 10, 10 ]))      /*, 17 );*/
// console.log(sumArray([ -6, -20, -1, -10, -12 ]))/*, -28 )*/
// console.log(sumArray([ -6, 20, -1, 10, -12 ])) /* , 3*/ 