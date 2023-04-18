const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");

function calculateAge(){
    // console.log("age is calculated");

    const BirthdayValue = birthdayE1.value;
    // console.log(BirthdayValue)

    if(BirthdayValue==="")
    {
        alert("Please enter your birhtday")
    }
    else{
        const age = getAge(BirthdayValue);
        // console.log(age);
        resultE1.innerText = `Your Age is ${age} ${age>1 ? "Years" : "Year"} old`;
    }

}

function getAge(BirthdayValue)
{
    const currentDate = new Date();
    const birthdayDate = new Date(BirthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate()))
    {
        age--;
    }

    return age;
}


btnE1.addEventListener("click",calculateAge);
