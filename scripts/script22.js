alert('Задание 2\nПрисвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.');
alert('Реализуем эту задачу при помощи цикла "for". Результат данного решения будет выведен в КОНСОЛЬ!!!');
let start = prompt('Введите число от 0 до 15');
let range = 15 - parseInt(start);
for (let i = parseInt(start); i <= 15; i++) {
    console.log(i);
}
alert('А теперь при помощи "switch"');
start = prompt('Введите число от 0 до 15');
switch (start) {
case '0':
    alert('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '1':
    alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '2':
    alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '3':
    alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '4':
    alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '5':
    alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '6':
    alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '7':
    alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '8':
    alert('8, 9, 10, 11, 12, 13, 14, 15');
    break;
case '9':
    alert('9, 10, 11, 12, 13, 14, 15');
    break;
case '10':
    alert('10, 11, 12, 13, 14, 15');
    break;
case '11':
    alert('11, 12, 13, 14, 15');
    break;
case '12':
    alert('12, 13, 14, 15');
    break;
case '13':
    alert('13, 14, 15');
    break;
case '14':
    alert('14, 15');
    break;
case '15':
    alert('15');
    break;
default:
    alert('Ошибка ввода значения!!!');
}