// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35
*/ 
// тут твой код

const text = (argument) => {
 if (userAge < 35) {
    console.log("Ты пацан")
 }
}
console.log(text(userAge))

    

//задание 2
const isAdmin = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "доступ запрещен", 
  если значение константы isAdmin ложно
*/
// тут твой код  
  if (isAdmin === false ) {
  console.log("Доступ Запрешен")
  }

console.log(funt(isAdmin))

//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают.
*/   
// тут твой код
if (password === realPassword) {
    console.log("Правельный Пороль")
}

// задание 4
const myAge = "20";

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно" 
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
// тут твой код
if ( typeof(myAge) === "number") {
    console.log("Возраст укзан верно")
}
// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль "икс меньше игрик" только 
  в том случае, если значение переменной x меньше, чем значение переменной y
*/
// тут твой код
if (x < y ) {
console.log("икс меньше игрик")
}