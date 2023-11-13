import { results, mbtis } from './data.js'

// 주소 쿼리스트링에서 mbti 값을 가져오기!
const mbtiResult = new URLSearchParams(location.search).get('mbtiResult1')
const result = results[mbtis[mbtiResult]]
// var mbtiresult = updateMBTI();
// 결과를 출력할 각 요소를 찾아요!
const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const starEls = document.querySelectorAll('.star img')

//test
console.log(mbtiResult);
console.log(result);

// 각 요소에 내용을 채워넣어요!
titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl,index) {
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})

starEls.forEach(function (starEl,index){
  starEl.src = result.starImg[index]
})
