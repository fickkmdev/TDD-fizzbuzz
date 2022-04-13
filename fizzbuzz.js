function fizzBuzz(number) {
    if(isFizzBuzz(number))  return "FizzBuzz"
    if(isFizz(number)) return "Fizz"
    if(isBuzz(number)) return "Buzz"
    return number
}

function isFizzBuzz(number){
    return number%3===0 && number%5===0
}

function isFizz(number){
    return number%3===0
}

function isBuzz(number){
    return number%5===0
}

//executable spec
console.log(`Input 1 should say 1 ${fizzBuzz(1) === 1 ? "✅" : "❌"}`)
console.log(`Input 2 should say 2 ${fizzBuzz(2) === 2 ? "✅" : "❌"}`)
console.log(`Input 3 should say Fizz ${fizzBuzz(3) === "Fizz" ? "✅" : "❌"}`)
console.log(`Input 4 should say 4 ${fizzBuzz(4) === 4 ? "✅" : "❌"}`)
console.log(`Input 5 should say Buzz ${fizzBuzz(5) === "Buzz" ? "✅" : "❌"}`)
console.log(`Input 6 should say Fizz ${fizzBuzz(6) === "Fizz" ? "✅" : "❌"}`)
console.log(`Input 7 should say 7 ${fizzBuzz(7) === 7 ? "✅" : "❌"}`)
console.log('7,8 covered we skip it')
console.log(`Input 10 should say Buzz ${fizzBuzz(10) === "Buzz" ? "✅" : "❌"}`)
console.log('11,12,13,14 covered we skip it')
console.log(`Input 15 should say FizzBuzz ${fizzBuzz(15) === "FizzBuzz" ? "✅" : `❌ it's ${fizzBuzz(15)}`}`)
console.log(`Input 30 should say FizzBuzz ${fizzBuzz(30) === "FizzBuzz" ? "✅" : `❌ it's ${fizzBuzz(30)}`}`)