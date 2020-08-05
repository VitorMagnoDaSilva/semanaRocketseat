//Procurar o botão 
    document.querySelector("#add-time")
//Quando clicar no botão
    .addEventListener('click', cloneField)
//Executar uma ação 
    function cloneField(){
         //Duplicar os campos: Qual campo?
    const newFieldContainer = document.querySelector(".shedule-item").cloneNode(true)

    //Limpar campos

    const fields = newFieldContainer.querySelectorAll('input')

        fields.forEach(function(field) {
            console.log(field)

                field.value = ""
        })
    }
//Assim colocando na página: Mas onde:
    document.querySelector("#schedule-items").appendChild(newFieldContainer)



