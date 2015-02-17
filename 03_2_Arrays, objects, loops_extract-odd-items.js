/*http://jscourse.com/task/extract-odd-items
 Отфильтровать элементы массива с нечетным индексом
 Реализовать функцию extractOddItems(arr), которая возвращает новый массив, в котором содержатся только те элементы, которые обладали нечетным индексом в массиве, переданном в качестве аргумента. Пример работы:
 extractOddItems([0,1,0,1,0,1]); // [1,1,1]
 extractOddItems([1,2,3,4,5]); [2, 4]*/


var oddElements = [];
function extractOddItems(arr) {
    for (var i  = 0; i < arr.length; i += 1) {
        if (i % 2!== 0) {
            oddElements.push(arr[i]);
        }
    }
}
extractOddItems([0,1,2,3,4,5]);
console.log(oddElements); // [1, 3, 5]