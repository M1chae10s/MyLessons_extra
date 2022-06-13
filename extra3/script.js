let lang = prompt("Введите ru или eng", "ru");

if (lang == "ru"){
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang == "eng"){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday")
} else {
    console.log("Неопознанный язык");
}

switch(lang){
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    case "eng":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
}

let arr =[];
arr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
arr.eng = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(arr[lang]);

let name = prompt("Введите имя", "Артём");
const nameArr = (name) => {
    return (name == "Артём") ? 'Директор':
    (name == "Максим") ? 'Преподаватель':
    'Студент';
}
console.log(nameArr(name));
