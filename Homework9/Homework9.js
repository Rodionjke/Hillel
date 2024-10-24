//task 1

const pythagoreanTable = document.createElement('table');
pythagoreanTable.classList.add('main_table')

for (let i = 1; i <= 10; i++) {
    const tableRowElement = document.createElement("tr");
    tableRowElement.classList.add('main_table') // styles in css file
    for (let j = 1; j <= 10; j++) {
        const tableCellElement = document.createElement('td');
        tableCellElement.textContent = (i * j).toString();
        tableRowElement.appendChild(tableCellElement);
        tableCellElement.classList.add('main_table') // styles in css file
        if (i === j) {
            tableCellElement.classList.add('diagonal_color') // styles in css file
        }
    }
    pythagoreanTable.appendChild(tableRowElement)
}
document.body.appendChild(pythagoreanTable)


//task 2
const changeColorButton = document.querySelector('button');
const paragraph = document.querySelector('p');
changeColorButton.addEventListener("click", () => {
    paragraph.classList.toggle('new_color');
})

//task 3

const randomImage = document.createElement("img");
const randomNumber = Math.floor(Math.random() * 9) + 1;
const imageUrl = `./img/${randomNumber}.jpg`;
randomImage.src = imageUrl;
randomImage.alt = `${randomNumber}`;
document.body.appendChild(randomImage);
