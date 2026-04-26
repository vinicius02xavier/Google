const BASE_URL = 'https://www.google.com/search?q='
const ICON_CLOCK = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#999" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>'


const historyCache = JSON.parse(localStorage.getItem('clone-google-history')) || []

const searchContent = document.getElementById('search__content')

function handleFocusInput() {
  searchContent.classList.add('active')
}

function handleBlurInput() {
}

document.addEventListener('click', (event) => {
  if (!searchContent.contains(event.target)) {
    searchContent.classList.remove('active')
  }
})

function handleKeydown(event) {
  if(event.key === 'Enter') {
    const value = event.target.value
    historyCache.push(value)
    location.href = BASE_URL.concat(value)
    localStorage.setItem('clone-google-history', JSON.stringify(historyCache))
  }
}

function handleHistory() {
  const listHistory = document.getElementById('history')
  listHistory.innerHTML = ''

  historyCache.forEach((historyItem, index) => {
    const li = document.createElement('li')

    const anchor = document.createElement('a')
    anchor.setAttribute('href', BASE_URL.concat(historyItem))
    anchor.innerHTML = ICON_CLOCK + `<span>${historyItem}</span>`

    const button = document.createElement('button')
    button.textContent = 'excluir'
    button.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      historyCache.splice(index, 1)
      localStorage.setItem('clone-google-history', JSON.stringify(historyCache))
      handleHistory()
    })

    li.appendChild(anchor)
    li.appendChild(button)
    listHistory.appendChild(li)
  })
}

handleHistory()