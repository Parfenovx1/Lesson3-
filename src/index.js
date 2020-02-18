var age = (prompt("Введите ваш возраст", ""));

if(age >= 18){
    console.log("Вы допущены к сервису =)");
}else {
    if(age <= 12 && age > 0){
        console.log('Вы не допущены к сервису, но мы можем посоветовать вам сервис "Головач Лена" ');
    }else{
        if(age < 18 && age > 12){
        console.log("Вы не допущены к сервису =(");
        }else{
        console.log("Вы ввели не число, попробуйте еще раз")
    }
}}

//


age >= 18 ? console.log("Вы допущены к сервису =)")
: age <= 12 && age > 0 ? console.log(' Вы не допущены к сервису, но мы можем посоветовать вам сервис "Головач Лена" ')
: age < 18 && age > 12 ? console.log("Вы не допущены к сервису =(")
: console.log("Вы ввели не число, попробуйте еще раз");
 

//

alert("Опросник для приёма на работу")
var age = Number(prompt("Введите ваш возраст", ""));
var workExperience = Number(prompt("Введите опыт вашей работы в годах", ""));
var amountOfFingers = Number(prompt("Введите количество ваших пальцев на руках", ""));
var gender = prompt("Введите ваш гендер", "");

console.log(age, workExperience, amountOfFingers, gender);

if(age >= 30 && workExperience >= 3 && (amountOfFingers >= 9 && amountOfFingers < 11) && (gender != "женщина" && gender != "Женщина" )){
    console.log("Вы подходите на должность")
}else{
    console.log("Вы не подходите на должность")
}

