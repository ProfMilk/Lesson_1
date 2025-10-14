/*function CalcRetangleArea(height,length){
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
        
CalcRetangleArea(-1,4);
CalcCircleArea(-1);
*/
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
gradeCategory(95); // "A"
gradeCategory(72); // "C"
gradeCategory(58)
