const nameList = document.getElementById('nameList')
const todosCount = document.querySelector('#totalNames .chip')
const pendingCount = document.querySelector('#pendingNames .chip')
const completedCount = document.querySelector('#completedNames .chip')

const totalNames = document.getElementById('totalNames')
const pendingNames = document.getElementById('pendingNames')
const completedNames = document.getElementById('completedNames')

async function fetchNames() {
  try {
    const response = await fetch('http://localhost:3000/names', {
      method: 'GET',
    })
    if (response.ok) {
      const names = await response.json()
      nameList.innerHTML = '' // Clear existing names
      names.forEach((name) => {
        addNameToList(name.name, name.completed)
      })
      updateCounts()
    } else {
      console.error('Failed to fetch names')
    }
  } catch (error) {
    console.error('Error fetching names:', error)
  }
}

async function addName() {
  const input = document.getElementById('nameInput')
  const newName = input.value.trim()
  if (newName) {
    try {
      const response = await postNewName(newName)
      if (response.ok) {
        addNameToList(newName, false)
        input.value = ''
        updateCounts()
      } else {
        console.error('Failed to add name')
      }
    } catch (error) {
      console.error('Error adding name:', error)
    }
  }
}

function addNameToList(name, completed) {
  const listItem = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = completed
  checkbox.onclick = () => toggleName(name)
  listItem.textContent = name
  listItem.append(checkbox)
  listItem.className = 'list-item'
  nameList.appendChild(listItem)
}

async function postNewName(name) {
  return await fetch('http://localhost:3000/addName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  })
}

async function toggleName(name) {
  try {
    const response = await fetch('http://localhost:3000/toggleName', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
    if (response.ok) {
      updateCounts()
    } else {
      console.error('Failed to toggle name')
    }
  } catch (error) {
    console.error('Error toggling name:', error)
  }
}

async function updateCounts() {
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

document.getElementById('addButton').addEventListener('click', addName)
document
  .getElementById('nameInput')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addName()
    }
  })

totalNames.addEventListener('click', () => filterNames('todos'))
pendingNames.addEventListener('click', () => filterNames('pendientes'))
completedNames.addEventListener('click', () => filterNames('completados'))

// Fetch names on page load
document.addEventListener('DOMContentLoaded', fetchNames)
