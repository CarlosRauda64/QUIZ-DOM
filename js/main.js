const option = Array.from(document.getElementsByClassName('option'))
const submit = document.getElementById('submit')
const start = document.getElementById('start')
const title = document.getElementById('title')
const indications = document.getElementById('indications')
let questions = ['¿Cúal es el río más largo del mundo?', 
    '¿Qué año llegó Cristóbal Colón a América?',
    'Sonic la mascota de Sega, ¿Qué tipo de animal es?'
]
let answers = [['El Amazonas','Rio Lempa','Nilo'],['1942','1492','1453'], ['Armadillo','Erizo','Equidna']]
let answersCorrect = ['El Amazonas','1492','Erizo']
let answer = ''
let posAnswer = 0
let index = 0
let hits = 0
//Esto sirve para cambiar de modalidad los botones
//que sirven para comenzar el Quiz como para
//los botones que sirven para el Quiz
function toggleVisibilty(element){
    if(element.classList.contains('invisible')){
        element.classList.remove('invisible')
        element.classList.add('visible')
    }else{
        element.classList.remove('visible')
        element.classList.add('invisible')
    }
}
function toggleStart(){
    submit.disabled = false;
    option.forEach(option => {
        option.disabled = false;
        toggleVisibilty(option)
    });
    toggleVisibilty(submit)
    toggleVisibilty(start)
    toggleVisibilty(indications)
    start.disabled = true
    title.textContent = questions[posAnswer]
    let answer = answers[posAnswer]
    k = 0
    option.forEach(option => {
        option.innerHTML = ''
        option.innerHTML = answer[k]
        k++
    });
}

//Vemos que pregunta selecciono el usuario
//tomamos el valor y cambiamos de color 
//el boton
option.forEach((op, index)=> {
    op.addEventListener('click', () =>{
        answer = op.textContent
        op.classList.add('toggleBg')
        for(let i=0; i<option.length; i++){
            if(i!=index){
                option[i].classList.remove('toggleBg')
            }
        }
    })
});

//Sirve para registrar la respuestas.
function submitAnswer(){
    let k = 0
    let answerConsult = answers[posAnswer]
    if(answer===''){
        alert('Por favor selecciona una respuesta')
        return
    }
    if(answer===answersCorrect[posAnswer]){
        hits++
    }
    if(index===1 && submit.textContent!='Finalizar'){
        option.forEach(option => {
            option.classList.remove('toggleBg')
            option.disabled = false;
            option.innerHTML = ''
            option.innerHTML = answerConsult[k]
            submit.textContent = 'Responder'
            title.textContent = questions[posAnswer]
            answer = ''
            k++
        });
        index = 0
    }else if(submit.textContent!='Finalizar'){
        option.forEach(option => {
            if(option.textContent===answersCorrect[posAnswer]){
                option.insertAdjacentHTML('afterbegin','<img class = "img-option" src="https://res.cloudinary.com/drfyvt5er/image/upload/v1724823819/icons8-de-acuerdo-48_e6uuid.png" alt="img">')
            }else{
                option.insertAdjacentHTML('afterbegin','<img class = "img-option" src="https://res.cloudinary.com/drfyvt5er/image/upload/v1724823825/icons8-error-48_ynfkue.png" alt="img">')
            }
            option.disabled = true;
        });
        posAnswer++
        index++
        submit.textContent = 'Siguiente'
        if(posAnswer===answers.length){
            submit.textContent = 'Finalizar'
            title.textContent = `Respuestas correctas: ${hits}`
        }
    //Este ultimo else sirve para volver
    //a reiniciar el QUIZ cuando haya finalizado
    }else{
        option.forEach(option => {
            option.disabled = false
            option.classList.remove('toggleBg')
            toggleVisibilty(option)
        });
        toggleVisibilty(submit)
        toggleVisibilty(start)
        toggleVisibilty(indications)
        submit.disabled = true
        start.disabled = false
        title.textContent = 'Bienvenido a una Prueba sobre Cultura General'
        submit.textContent = 'Responder'
        posAnswer = 0
        index = 0
        hits = 0
    }
}