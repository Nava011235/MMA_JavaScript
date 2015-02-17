/*http://jscourse.com/task/summ-numbers-by-condition
 Просуммировать числа из массива, которые больше 100
 Реализовать функцию sumOnly100Plus, которая принимает аргументом массив, и возвращает сумму всех чисел массива, которые больше 100.
 В массиве могут быть не только числовые данные, их никак не учитывать. Пример работы:
 sumOnly100Plus([150, "200", " ", 30, 300]); // 450*/

var sum = 0;
function  sumOnly100Plus(arr) {
    var sumArr = []
    for (var i = 0; i < arr.length; i +=1){
        if (arr[i] > 100 && typeof arr[i] === 'number') {
            sumArr.push(arr[i]);
        }
    }
    for (var j = 0; j < sumArr.length; j +=1) {
        sum += sumArr[j];
    }
    return sum;
}
sumOnly100Plus([150, "200", " ", 30, 300]);
console.log(sum); //450