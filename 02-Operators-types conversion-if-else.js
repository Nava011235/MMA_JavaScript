var attempts = prompt ('Давайте поиграем. Вам нужно отгадать число от 1 до 50. Сколько попыток вы выбираете?') ;

var correctAnswer = Math.floor(Math.random() * 51);

var answer, prevAnswer = null;
var message = '';
var counter = 0;


while (counter < attempts && answer != correctAnswer) {
    counter += 1;
    answer = prompt(message + 'Введите число -> ');
    message = (!prevAnswer || Math.abs(answer - correctAnswer) <= Math.abs(prevAnswer - correctAnswer) ? 'Теплее. ' : 'Холоднее. ');
    prevAnswer = answer;
}

if (answer === correctAnswer) {
    alert('Вы угадали с ' + counter + 'й попытки');
} else {
    alert('Вы проиграли, так как исчерпали количество попыток.');
}