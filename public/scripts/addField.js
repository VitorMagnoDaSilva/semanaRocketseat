//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//Quando clicar no botão, executar uma ação

function cloneField() {
    //Duplicar os campos, Que campos?

    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false

    //Pegar os campos, que campos?

    const fields = newFieldsContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    //Colocar na página, onde?

    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}