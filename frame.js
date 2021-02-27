const generateFrame = ({title, description}) => `
<div class="frame">
    <header>
        <h1>${title}</h1>
        <p>${description}</p>
    </header>
    <main>
        <textarea readonly></textarea>
        <form id="input-form">
            <input type="text" id="textInput">
            <button type="submit" id="textButton">Enter</button>
        </form>
    </main>
    <footer>
        <a href="../">Return to index page</a>
    </footer>
</div>
`

// Use with onload event
const drawFrame = ({title, description}) => {
    document.body.insertAdjacentHTML('afterbegin', generateFrame({title, description}))
}

const addInputListener = (callback) => {
    const form = document.querySelector('#input-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        callback(form.textInput.value)
        form.textInput.value = ''
    })
}

const print = (text) => {
    const textarea = document.querySelector('textarea')
    textarea.value += `${text}\n`
    textarea.scrollTop = textarea.scrollHeight
}

export {drawFrame, addInputListener, print}