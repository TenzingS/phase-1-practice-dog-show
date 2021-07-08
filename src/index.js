table = document.querySelector("#table-body")

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

function fetchDogs(){
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(data => {
        data.forEach(dog => tableRow(dog))
        })
}

const tableRow = (dog) => {
    dogElement = renderDogs(dog)
    readyToAppendElement = addDogToElement(dog, dogElement)
    table.append(readyToAppendElement)
}


function renderDogs(dog){

    let tr = document.createElement("tr")

    const name = document.createElement('td')
    name.textContent = dog.name

    const breed = document.createElement('td')
    breed.textContent = dog.breed

    const sex = document.createElement('td')
    sex.textContent = dog.sex

    const editBtn = document.createElement('td')
    const button = document.createElement('button')
    button.textContent = "Edit Dog"

    editBtn.append(button)
    button.addEventListener('click', () => buttonClick(dog) )

    tr.append(name, breed, sex, editBtn)

    return tr
}

const addDogToElement = (dog, element) => {
    const elements = element.querySelectorAll('td')
    elements[0].textContent = dog.name
    elements[1].textContent = dog.breed
    elements[2].textContent = dog.sex
    return element
}

function buttonClick(dog) {
    const form = document.getElementById('dog-form')
    form.name.value = dog.name
    form.breed.value = dog.breed
    form.sex.value = dog.sex
}