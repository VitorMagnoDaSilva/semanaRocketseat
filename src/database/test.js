const Database = require('./db')

Database.then((db) =>{
    //Inserir Dados

    proffy = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: "991931239", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 

    }

    classValue = {
        subject: "Química", 
        cost: "20", 
        //O proffy_id virar pelo banco de dados
    }

    classSchedule = [
        {
            weekday = 1,
            time_from = 720,
            time_to = 1220
        },
        {
            weekday = 0,
            time_from = 520,
            time_to = 1220
        }
    ]
    //Consultar dados inseridos
})