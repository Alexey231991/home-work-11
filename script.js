const colors = ['blue', 'lime', 'yellow']


const boxes = document.querySelectorAll('.box')

for (let key = 0; key < boxes.length; key++) {
    const box = boxes[key]

    let count = 0
    
    box.addEventListener('click', function () {
        const position = count % colors.length

        box.style.backgroundColor = colors[position]

        count++
        box.innerHTML = count
    })
}