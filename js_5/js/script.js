/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на
 третье. Числа передаются параметром.*/

 function calcSum(num1, num2, num3) {
    let numSum = (num1 - num2) / num3;
    
    console.log(`Результат:${numSum}`)

 }

 calcSum(prompt("Введите любое число"), prompt("Отнимем от него"), prompt("И разделим всё на?"));


 /*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
 передается параметром.*/

function cubeOfnumber (num) {
    let i = num**3;
     console.log(`Куб числа:${i}`);

    i = num**2;
    console.log(`Квадрат числа:${i}`);

}
   
cubeOfnumber(prompt("Введите число для возведения в степень"));


/*3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function min(a, b) {
    
    if (a < b) {
       console.log(`Меньшее число ${a}`);
    } else {
       console.log(`Меньшее число ${b}`);
    };

 
}

function max(a, b) {
    
    if (a > b) {
       console.log(`Большее число ${a}`);
    } else {
       console.log(`Большее число ${b}`);
    }
    
}

min(prompt(`Введите 1-ое число`), prompt(`Введите 2-ое число`));
//??????????7 Как передать параметры в обе функции одновременно??

/*4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/

let arr = []

function arrNum (a, b) {
    for (; a <= b; a++){
        arr.push(a);
    }

}
   
function showArr () {
    console.log(arr);

}

arrNum(prompt("С какого числа начнем диапазон?"), prompt("Каким числом закончим диапазон?"));

showArr();


/*5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

function isEven (i) {
    if (i%2 == 0) {
        return true; 
    } else {
        return false;
    }
}

console.log(isEven(prompt("Введите целое число:")));


/*6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.*/

function arrEven (a) {
    let evenNumber = [];

    for (let i = 0; i < a.length; i++) {
        isEven(a[i]);
        if (isEven(a[i]) == true)  {
            evenNumber.push(a[i]);
        }
    }
    console.log (evenNumber);

}   

arrEven ([12, 13, 17, 11, 71, 21, 22]);


/*9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000.*/

function getFibArray(N){
    let arr = [];
    for (let i = 0; i < N; i++) {
            if (i == 0 || i == 1) {arr[i] = 1;
        } else { 
            arr[i] = arr[i-1] + arr[i-2]
        };

    }

    console.log(arr);
   
}  

getFibArray(16);
    









