// объявляем константу elements, записываем в 
// неё результат вызова метода querySelectorAll,
// глобальной переменной document
const elements = document.querySelectorAll('.box');

// в elements - грубо говоря массив html элементов на сранице
console.log(elements);

// проходимся по каждому из элементов в массиве elements
for (var i = 0; i < elements.length; i++) {
  // текущий записываем в временную переменную currentEl
  const currentEl = elements[i]
  
  
  // добавляем обработчик события (функцию) "нажатие на элемент"
  currentEl.addEventListener('click', function(event) { 
    // запоминаем значение html элемента и превращаем в Number
    const val = Number(currentEl.innerHTML);
    
    // изменяем, добавляя 1
    currentEl.innerHTML = val + 1
    
    // проверяем есть ли у currentEl в classList класс blue, 
    // с помощью метода contains
    if ( currentEl.classList.contains('blue') ) {
      // если класс blue есть, то удаляем его и добавляем следующий - green
      currentEl.classList.remove('blue')
      currentEl.classList.add('green')
    } else if ( currentEl.classList.contains('green') ) {
      currentEl.classList.remove('green')
      currentEl.classList.add('yellow')
    } else if ( currentEl.classList.contains('yellow') ) {
      currentEl.classList.remove('yellow')
      currentEl.classList.add('blue')
    } else {
      // если ни одного класса нет, то добавляем первый - blue
      currentEl.classList.add('blue')
    }
    
  });
}