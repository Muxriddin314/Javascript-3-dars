let personName = prompt("Ismingizni kiriting:");
alert(`Salom ${personName} aka`)
let age = Number(prompt(`${personName} aka Yoshingizni kiriting: `));
if(age >= 18){
    alert(`${personName} Haydovchilik Guvohnoma olasiz!`);
}
else if(age < 18){
    alert(`${personName} aka, ${18-age}  yildan keyin xabarlashing!!!`);
}
//------------------------------------------------------------------------------
let num1 = Number(prompt("Birinchi sonni kiriting: a="));
let num2 = Number(prompt("Ikkinchi sonni kiriting: b="));
let num3 = Number(prompt("Uchinchi sonni kiriting: c="));

let maxNumber = Math.max(num1,num2,num3);
if(num1==num2==num3){
    alert(`${num1}=${num2}=${num3} ushbu sonlar teng!`);
}

else {
    alert(`%cUshbu sonlardan eng kattasi - ${maxNumber}`);
}