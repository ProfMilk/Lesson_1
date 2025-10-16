//Lab 1
function CalcRetangleArea(height,length){
    let area=0;
    if(height<0||length<0){
        console.log("Invalid Number")
        }else{
            area=height*length;
            console.log(area);
        }
    }
    

    function CalcCircleArea(radius){
        let area=0;
        if(radius<0){
        console.log("Invalid Number")
        }else{
            area=3.14*radius**2;
        console.log(area)
        }
        };
        
CalcRetangleArea(5,4);
CalcCircleArea(5);
//Lab 2
function gradeCategory(score){
if(score<=100 && score>=90){
 console.log("A")
}else if(score<=89 && score>=80){
    console.log("B") 
}else if(score<=79 && score>=70){
    console.log("C") 
}else if(score<=69 && score>=60){
    console.log("D") 
}else if(score<60){
 console.log("F")
}
}
gradeCategory(95); 
gradeCategory(72);
gradeCategory(58)

//Lab 3
function countVowels(word){
    const vowels=("aeiouAEIOU");
    let count=0;
    if(word.length>0){
for(let char of word){
 if(vowels.includes(char)){
    count++;
}
}
    }else{
        console.log("Invalid String")
    }
return count;
}
console.log(countVowels("Hello"));
console.log(countVowels("Javascript"));
//Lab 4
function doubleNumbers(numbers) {
    let doubled=[];
    for (let num of numbers) {
        doubled.push(num * 2);
    }
    return doubled;
}
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

//Lab 5

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

function describeTemperature(f) {
    let c = fahrenheitToCelsius(f);
    if (c < 0) {
        return "Freezing!";
    } else if (c <= 20) {
        return "Cold";
    } else if (c <= 30) {
        return "Warm";
    } else {
        return "Hot";
    }
}
console.log(describeTemperature(32)); // "Cold"
console.log(describeTemperature(68)); // "Cold"
console.log(describeTemperature(95)); // "Hot"
//Nice
