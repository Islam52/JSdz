let point = 0;
let answer = '';

answer = prompt('2+2=');
if (answer == 4) {
    alert( 'Верно');
    point = point + 1;
} else {
    alert( 'Неверно'); // любое значение, кроме 4
}

answer = prompt('3+3=');
if (answer == 6) {
    alert('Верно');
    point = point + 1;
} else {
    alert('Неверно');
}

alert('Вы набрали ' + point + ' баллов')