function processData(input) {
    //Enter your code here
    function compare(a,b) {
        return a - b;
    }
    
    function nextSmallestNumber() {
        var currentCount = 0;
        while(sticks[currentCount] == 0) {
            //console.log(sticks[currentCount]," --- smal");
            ++currentCount;
        }
        return sticks[currentCount];
    }
    
    function reducedArray(currentArray) {
        var newArr = [];
        currentArray.forEach(function(elem){
           if (!( elem  === 0 )) {
               newArr.push(elem);
           }   
        });
        return newArr;
    }
    
    var inputArray = input.split('\n');
    var testCases = Number(inputArray[0]);
    var sticksString = inputArray[1].split(" ");
    var sticks = [];
    for(var i = 0; i < testCases; ++i)
    {
        sticks.push(Number(sticksString[i]));
    }
    
    sticks.sort(compare);
    
    var smallestNum = sticks[0];
    
    
    
    while(sticks.length >= 1) {
       var length = sticks.length;
       console.log(length);
       for ( var i = 0; i < length; i++) {                    
           sticks[i] -= smallestNum;    
       }
        
        smallestNum = nextSmallestNumber();              
        
        sticks = reducedArray(sticks);
       
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
