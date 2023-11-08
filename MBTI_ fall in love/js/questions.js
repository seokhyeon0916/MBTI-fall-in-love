import { questions } from './data.js'

// 질문 화면의 각 요소를 찾아요!
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0 // 현재 질문 번호
let mbti = '' // MBTI 결과

// 화면에 질문을 랜더링하는 함수에요!
function renderQuestion() {
  const question = questions[currentNumber]
  questionEl.innerHTML = question.question
  numberEl.innerHTML = question.number
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}
// 다음 질문으로 넘어가는 함수에요!
function nextQuestion(choiceNumber) {
  // 더 이상 질문이 없으면, 결과 페이지를 보여줘요!
  if (currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  currentNumber = currentNumber + 1
  renderQuestion()
}
// 결과 페이지로 이동!
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti
}
let m=0;/* MBTI E*/
let M=0;/**MBTI I */
let b=0;/**MBTI S */
let B=0;/**MBTI N */
let c=0;/**MBTI T */
let C=0;/**MBTI F */
let d=0;/**MBTI P */
let D=0;/**MBTI J */
// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드에요!
choice1El.addEventListener('click', function () {
  if(currentNumber===0){
    m++;
  }else if(currentNumber===1){
    m++;
  }else if(currentNumber===2){
    m++;
  } else if(currentNumber===3){
    b++;
  }else if(currentNumber===4){
    b++;
  }else if(currentNumber===5){
    b++;
  }else if(currentNumber===6){
    c++;
  }else if(currentNumber===7){
    c++;
  }else if(currentNumber===8){
    c++;
  }else if(currentNumber===9){
    d++;
  }else if(currentNumber===10){
    d++;
  }else if(currentNumber===11){
    d++;
  }
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  if(currentNumber===0){
    M++;
  }else if(currentNumber===1){
    M++;
  }else if(currentNumber===2){
    M++;
  } else if(currentNumber===3){
    B++;
  }else if(currentNumber===4){
    B++;
  }else if(currentNumber===5){
    B++;
  }else if(currentNumber===6){
    C++;
  }else if(currentNumber===7){
    C++;
  }else if(currentNumber===8){
    C++;
  }else if(currentNumber===9){
    D++;
  }else if(currentNumber===10){
    D++;
  }else if(currentNumber===11){
    D++;
  }
  nextQuestion(1)
})

// 첫 번째 질문을 렌더링해요!
renderQuestion()
