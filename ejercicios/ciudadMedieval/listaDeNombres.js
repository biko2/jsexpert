const nameList = document.getElementById('nameList')
const todosCount = document.querySelector('#totalNames .chip')
const pendingCount = document.querySelector('#pendingNames .chip')
const completedCount = document.querySelector('#completedNames .chip')

const totalNames = document.getElementById('totalNames')
const pendingNames = document.getElementById('pendingNames')
const completedNames = document.getElementById('completedNames')

function addName() {
  const input = document.getElementById('nameInput')
  const newName = input.value.trim()
  if (newName) {
    const listItem = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.onclick = updateCounts
    listItem.textContent = newName
    listItem.append(checkbox)
    listItem.className = 'list-item'
    nameList.appendChild(listItem)
    input.value = ''
    updateCounts()
  }
}

function updateCounts() {
  const items = nameList.querySelectorAll('li')
  const total = items.length
  const completed = Array.from(items).filter(
    (item) => item.querySelector('input').checked
  ).length
  const pending = total - completed
  todosCount.textContent = total
  pendingCount.textContent = pending
  completedCount.textContent = completed
}

function filterNames(filterType) {
  const items = nameList.querySelectorAll('li')
  items.forEach((item) => {
    const isChecked = item.querySelector('input').checked
    switch (filterType) {
      case 'todos':
        item.style.display = ''
        break
      case 'pendientes':
        if (!isChecked) {
          item.style.display = ''
        } else {
          item.style.display = 'none'
        }
        break
      case 'completados':
        if (isChecked) {
          item.style.display = ''
        } else {
          item.style.display = 'none'
        }
        break
    }
  })
  updateActiveFilter(filterType)
}

function updateActiveFilter(activeFilter) {
  totalNames.classList.toggle(
    'filter-button-disabled',
    activeFilter !== 'todos'
  )
  pendingNames.classList.toggle(
    'filter-button-disabled',
    activeFilter !== 'pendientes'
  )
  completedNames.classList.toggle(
    'filter-button-disabled',
    activeFilter !== 'completados'
  )
}

totalNames.addEventListener('click', () => filterNames('todos'))
pendingNames.addEventListener('click', () => filterNames('pendientes'))
completedNames.addEventListener('click', () => filterNames('completados'))

document.getElementById('addButton').addEventListener('click', addName)

document
  .getElementById('nameInput')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addName()
    }
  })
