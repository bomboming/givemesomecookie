const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 15;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arr =new Array(0);
let flavor=0;
let count=0;


function checkOnlyOne(element) {
  const checkboxes 
      = document.getElementsByName("size");
  
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
}

function calResult() {
  
  let size=begin();
 
  console.log(select);

  const result = select.indexOf(Math.max(...select));
  console.log(result);
 
  
  for(let i=0;i<=select.length;i++){

    if(select[i]===select[result] && count<flavor-1){
      if(i===result){
        continue;
      }
      console.log(select[i]);
      arr.push(i);
      count++;
    }
    else if(select[i]===select[result]-1 && count<flavor-1){
      if(i===result){
        continue;
      }
      console.log(select[i]);
      arr.push(i);
      count++;

    }
    
  }
  console.log(arr);
  select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return result;
}



function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  const resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  const imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, qIdx, idx){
  const a = document.querySelector('.answerBox');
  const answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    const children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      const target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  const q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  const status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}



function begin() {
  let value = $("input[name='size']:checked").val();
  if (value == undefined) {
      alert('사이즈를 선택하세요!');
  } else {

      main.style.WebkitAnimation = "fadeOut 1s";
      main.style.animation = "fadeOut 1s";
      setTimeout(() => {
          qna.style.WebkitAnimation = "fadeIn 1s";
          qna.style.animation = "fadeIn 1s";
          setTimeout(() => {
              main.style.display = "none";
              qna.style.display = "block"
          }, 450)
          let qIdx = 0;
          goNext(qIdx);
      }, 450);

      if (value === 'single') {
          flavor=1;
          console.log(flavor);
          return flavor;
      } else if (value === 'pint') {
          flavor = 3;
          console.log(flavor);
          return flavor;
      } else if (value === 'quarter') {
          flavor = 4;
          console.log(flavor);
          return flavor;
      } else if (value === 'family') {
          flavor = 5;
          console.log(flavor);
          return flavor;
      } else if (value === 'half') {
          flavor = 6;
          console.log(flavor);
          return flavor;
      }


  }


}

/*
function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
*/
