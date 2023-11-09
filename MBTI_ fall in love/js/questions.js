import { questions } from './data.js'

// 질문 화면의 각 요소를 찾아요!
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0;// 현재 질문 번호
let mbti = ''; // MBTI 결과
let mbtiResult='';

let m=0;/* MBTI E*/
let M=0;/**MBTI I */
let b=0;/**MBTI S */
let B=0;/**MBTI N */
let c=0;/**MBTI T */
let C=0;/**MBTI F */
let d=0;/**MBTI P */
let D=0;/**MBTI J */

// 배열사용
let EI = [m,M];
let SN = [b,B];
let TF = [c,C];
let PJ = [d,D];

let myArray = [EI,SN,TF,PJ];

// 화면에 질문을 랜더링하는 함수!
function renderQuestion() {
  const question = questions[currentNumber]
  questionEl.innerHTML = question.question
  numberEl.innerHTML = question.number
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 8.3 + '%'
}

// 다음 질문으로 넘어가는 함수!
function nextQuestion() {
  // 더 이상 질문이 없으면, 결과 페이지를 보여줘요!
  if (currentNumber === questions.length - 1) {
    // console.log(myArray);
    console.log(mbti);
    showResultPage()
    return
  }
  // const question = questions[currentNumber]
  currentNumber = currentNumber + 1
  renderQuestion()
}

// 결과 페이지로 이동!
function showResultPage() {
  location.href = '/results.html?mbti=' + mbtiResult
}

// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드!
if (choice1El) {

  choice1El.addEventListener('click', function () {
    if (currentNumber === 0 || currentNumber === 1 || currentNumber === 2) {
      EI[0]++;
    } else if (currentNumber === 3 || currentNumber === 4 || currentNumber === 5) {
      SN[0]++;
    } else if (currentNumber === 6 || currentNumber === 7 || currentNumber === 8) {
      TF[0]++;
    } else if (currentNumber === 9 || currentNumber === 10 || currentNumber === 11) {
      PJ[0]++;
    }
    nextQuestion();
    // console.log(myArray);
    compareResult();
  });
}else{
  console.error('Element with class "choice1" not found.');
}
if (choice2El) {
  choice2El.addEventListener('click', function () {
    if (currentNumber === 0 || currentNumber === 1 || currentNumber === 2) {
      EI[1]++;
    } else if (currentNumber === 3 || currentNumber === 4 || currentNumber === 5) {
      SN[1]++;
    } else if (currentNumber === 6 || currentNumber === 7 || currentNumber === 8) {
      TF[1]++;
    } else if (currentNumber === 9 || currentNumber === 10 || currentNumber === 11) {
      PJ[1]++;
    }
    nextQuestion();
    // console.log(myArray);
    compareResult();
  });
}else{
  console.error('Element with class "choice2" not found.');
}

function compareResult(){
  let mbti = '';
  if(EI[0]>EI[1]) mbti+='E';
    else mbti+="I";
  if (SN[0] > SN[1]) mbti += 'S';
    else mbti += 'N';
  if (TF[0] > TF[1]) mbti += 'T';
    else mbti += 'F';
  if (PJ[0] > PJ[1]) mbti += 'P';
    else mbti += 'J';

  console.log(mbti);
  return mbti;
  

}
// result.js에서 updateMBTI를 import하려면 필요한 함수.
export function updateMBTI() {
  // compareResult 함수 호출 및 반환값 출력 또는 저장
  mbtiResult = compareResult();
  // console.log("MBTI Result:", mbtiResult);
  return mbtiResult;
}


// 첫 번째 질문을 렌더링해요!
renderQuestion()


