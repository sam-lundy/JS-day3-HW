

// connect/test js file to html
console.log('testing')

// .getElementsByTagName()
const h1s = document.getElementsByTagName('h1');
console.log(h1s)

// .getElementsByClassName()
const students = document.getElementsByClassName('student');
console.log(students);

// .getElementById()
const instructors = document.getElementById('instructors');
console.log(instructors);

// .querySelector() (ES6 Modern Approach)
const h1sQuery = document.querySelectorAll('#instructors');
console.log(h1sQuery);

// .querySelectorAll()

// .innerText property: Changes the text
console.log(students[1].innerText = 'Mitchell')
// h1s[1].innerText = 'I am changed'

// .innerHTML property: Allows you to write HTML code
const dylansDiv = document.querySelector('.dylansDiv')
console.log(dylansDiv)
dylansDiv.innerHTML = `
    <p>I was created from JS</p>
`

// .createElement()
const newBtn = document.createElement('button')
newBtn.innerText = 'Thieves'
document.body.append(newBtn)
console.log(newBtn)

// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)
newBtn.addEventListener('click', () => {
    if (newBtn.className === '') {
        newBtn.className = 'purple'
    } else if (newBtn.className === 'purple') {
        newBtn.className = 'green'
    } else {
        newBtn.className = ''
    }
    console.log('clicked')
})

const changeColor = () => {
switch (newBtn.className) {
    case '':
        newBtn.className = 'purple'
        break
    case 'purple':
        newBtn.className = 'green'
        break
    default:
        newBtn.className = ''
    }
}




// Option 2: using onclick attribute in HTML
// onclick="function(event)"

// h1s[1].onclick = changeColor

// Lets create a new button and append to a specfic div
const newBtn2 = document.createElement('button')
newBtn2.innerText = 'Anotha one'
dylansDiv.append(newBtn2)

// adding addEventListener() to new button to add text every time its clicked
newBtn2.addEventListener('click', () => {
    const pTag = document.createElement('p')
    pTag.innerText = 'YEEER'
    document.body.append(pTag)
})

// grabbing form data with .addEventListener()
const formEl = document.querySelector('form')
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('e')
    const pokeName = formEl[0].value
    pokeData(pokeName)
})

const pokeData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/vs/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
}