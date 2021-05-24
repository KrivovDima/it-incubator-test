'use strict';

const input = document.querySelector('.main__input');
const btn = document.querySelector('.main__btn');

const arr = [{
    name: 'Dima',
    age: 31
  },
  {
    name: 'Dasha',
    age: 25
  },
  {
    name: 'Masha',
    age: 30
  }
]

btn.addEventListener('click', () => {
  setTimeout(() => {
    let inputValue = input.value;

    if (inputValue === 'google') {
      alert('Yandex круче. Но это не точно');
    } else {
      alert(`${inputValue} ${arr[0].name}`);
    }
  }, 3000)
});

// Задача 6
function superSum(a, b) {
  alert(a + b);
}

// Зачача 7
const minMaxArr = [5, 77, 4, 666, 45, 2, 121, 64];
let minNum = minMaxArr[0];
let maxNum = minMaxArr[0];

for (let i = 0; i < minMaxArr.length; i++) {
  if (minMaxArr[i] > maxNum) {
    maxNum = minMaxArr[i];
  }
  if (minMaxArr[i] < minNum) {
    minNum = minMaxArr[i];
  }
}

// Задача 8
let a = 66;
let b = 77;
[a, b] = [b, a];

// Задача 9
function findMax(arr) {
  const maxNum = Math.max(...arr);
  return maxNum;
}