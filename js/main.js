const option = Array.from(document.getElementsByClassName('option'))
const submit = document.getElementById('submit')
const start = document.getElementById('start')
let answers = [['A','B','C'],['C','B','A']]
let posAnswer = 0
function toggle(){
    option.forEach(option => {
        if(option.classList.contains('invisible')){
            option.classList.remove('invisible')
            option.classList.add('visible')
        }else{
            option.classList.remove('visible')
            option.classList.add('invisible')
        }
    });
    if(submit.classList.contains('invisible')){
        submit.classList.remove('invisible')
        submit.classList.add('visible')
    }else{
        submit.classList.remove('visible')
        submit.classList.add('invisible')
    }
    start.classList.add('invisible')
    let answer = answers[posAnswer]
    k = 0
    option.forEach(option => {
        option.innerHTML = ''
        option.innerHTML = answer[k]
        k++
    });
}
let i = 0
function submitAnswer(){
    let k = 0
    let answer = answers[posAnswer]
    if(i===1){
        option.forEach(option => {
            option.innerHTML = ''
            option.innerHTML = answer[k]
            k++
        });
        i = 0
    }else{
        option.forEach(option => {
            option.insertAdjacentHTML('afterbegin','<img class = "img-option" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="img">')
        });
        posAnswer++
        i++
    }
}