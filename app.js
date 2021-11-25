/*let arr =[1,2,3,4,5]

let newarr =arr.splice(2,4);

console.log("arr : ",arr);
console.log("newarr : ",newarr);
*/

// NOT ORTALAMASI
/*
function getGrade(score) {
    let grade;
    // Write your code here
    if (grade > 25 && grade <= 30){
    console.log(grade, "= A");}
    else if(grade > 20 && grade <= 25){
            console.log(grade," = B")

    }    
    else if (grade > 15 && grade <= 20){
            console.log(grade," = C")
    } 
    
    else if(grade > 10 && grade <= 15){
            console.log(grade," = D")

    }    
    else if(grade > 5 && grade <= 10){
            console.log(grade," = E")

    }    
    else if(grade >= 0 && grade <= 5){
            console.log(grade, " = F")

    }    
    return grade;
}

getGrade(11);

*/

function getLetter(s) {
        let letter;
            // Write your code here
    
        switch (letter){
            case ("a","e","i","o","u"):
                letter = "A";
                break;
        
            case ("b","c","d","f","g"):
                letter="B";
                break;
        
            case ("h","j","k","l","m"):
                letter="C";
                break;
        
            default "n","p","q","r","s","t","v","w","x","y","z":
            
                letter ="C";
                break;
        
        

        }
        return letter;
    }
    getLetter("e")
    
