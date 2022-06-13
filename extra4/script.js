function func(str){
    if (typeof str  == "string"){
        while (str.indexOf(' ') == 0){
           str = str.replace(' ', '');
        }
        while (str[str.length-1] == ' '){
            str = str.slice(0, str.length - 1);
        }
        if (str.length > 30){
            str = str.slice(0, 30);
            str += '...';
        };
    return str;
    } else {
        console.log("Не является строкой");
    }
}
console.log(func('   0123456789012345678901234567890   '));