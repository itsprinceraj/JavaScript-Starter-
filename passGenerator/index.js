const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box") // password box
const totalChar = document.getElementById("total-char")  // slider
const upperInput = document.getElementById("upper-case") 
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const label = document.querySelector(".label");

const range = document.querySelector(".range")



function validate (){
    if(totalChar.value >=2 && totalChar.value <=30){

        return true;
    }
    else{
        return false
    }

}

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    



    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        
        if (validate()){
            label.style.cssText = "opacity: 0;"
            generatePassword();
        }else{
            label.style.cssText = "opacity: 1;"
        }
        // console.log(validate())
        // generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}



