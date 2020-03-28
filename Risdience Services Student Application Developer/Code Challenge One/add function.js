function add(intArray, intNumber) {
    console.log("Input: [" + intArray + "], " + intNumber);

    var tmp = intNumber.toString().split('');
    var i = intArray.length-1;
    var j = tmp.length-1;

    while(j >= 0){

        //If the intArray's length add zero digit to avoid segmentation fault
        if(i < 0){
            intArray.unshift(0);
            i = 0;
        }

        var num = intArray[i]+(tmp[j]*1);
        var tensDigit = Math.floor((num/10) % 10);

        if(tensDigit == 0) {intArray[i] += tmp[j]*1;}

        //Adjust any digit replace with two digit number and shit the tens digit number
        while(tensDigit != 0)
        {
            intArray[i] = num;
            intArray[i] -= tensDigit*10;
            if(i-1 >= 0) {
                intArray[i-1] += tensDigit;
                tensDigit = 0;
            }else{
                intArray.unshift(tensDigit);
                tensDigit = 0;
                i = 1;
            }
        }

        i--; j--;
    }

    console.log("Output: [" + intArray + "]");
    return intArray;
}
//========================      Testing       ========================
console.log(add([1, 2, 3], 5).toString() == [1, 2, 8].toString() ? true : false);
console.log(add([5, 6, 7, 8], 500).toString() == [6, 1, 7, 8].toString() ? true : false);

console.log(add([1, 2, 3], 0).toString() == [1, 2, 3].toString() ? true : false);
console.log(add([1, 2, 3], 090015).toString() == [9, 0, 1, 3, 8].toString() ? true : false);
console.log(add([5, 6, 7, 8], 19500).toString() == [2, 5, 1, 7, 8].toString() ? true : false);
console.log(add([1, 2, 3], 190015).toString() == [1, 9, 0, 1, 3, 8].toString() ? true : false);
console.log(add([4, 7, 2, 7, 5], 3890123).toString() == [3, 9, 3, 7, 3, 9, 8].toString() ? true : false);
