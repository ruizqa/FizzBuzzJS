

function FizzBuzz(number){
    try {
        let reply= "";
    for(let i=1; i<=number;i++){
        if(i%3==0 && i%5!=0){
            reply +="Fizz"
        }
        else if(i%3!=0 && i%5==0){
            reply +="Buzz";
        }
        else if(i%3==0 && i%5==0){
            reply +="FizzBuzz";
        }
        else{
            reply +=i;
        }

        if(i<number-1){
            reply+=", "
        } 
        else if(i==number-1){
            reply+=", and "
        }
        else {
            reply+="."
        }

    }
    return reply;
}

    catch(e){
        return "Parameter must be a positive integer number";
    }

}

console.log(FizzBuzz(15));
console.log(FizzBuzz("fifteen"));