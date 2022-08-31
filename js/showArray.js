'use strict'

const showArray = (array, element, title='Array') => {
    const container = document.querySelector(element)
    const div = document.createElement('div')
    div.classList.add('numbers-container')

    div.innerHTML = `
        <h2>${title}</h2>
        <div class="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>
    `

    container.appendChild(div)
}

export {
    showArray
}