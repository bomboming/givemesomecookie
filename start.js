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
  
  for(let i=0;i<flavor;i++){
    const result = select.indexOf(Math.max(...select));
    console.log(result);
    arr.push(result);
    select.splice(result,1,0);
    console.log(select);
  }
  console.log(arr);
  for(let i=1;i<arr.length;i++){
    if(arr[i]===0){
      alert("체리쥬빌레");
    }
    else if(arr[i]===1){
      alert("꿀바망");
    }
    else if(arr[i]===2){
      alert("레인보우샤베트");
    }
    else if(arr[i]===3){
      alert("아이스허니버터아몬드");
    }
    else if(arr[i]===4){
      alert("오래오쿠키앤크림");
    }
    else if(arr[i]===5){
      alert("월넛");
    }
    else if(arr[i]===6){
      alert("머스크메론");
    }
    else if(arr[i]===7){
      alert("트리플치즈러브");
    }
    else if(arr[i]===8){
      alert("매드어바웃초콜릿");
    }
    else if(arr[i]===9){
      alert("디노젤리");
    }
    else if(arr[i]===10){
      alert("엄마는외계인");
    }
    else if(arr[i]===11){
      alert("쫀떡궁합");
    }
    else if(arr[i]===12){
      alert("봉쥬르마카롱");
    }
    else if(arr[i]===13){
      alert("아몬드봉봉");
    }
    else if(arr[i]===14){
      alert("우유에빠진 딸기");
    }
    else if(arr[i]===15){
      alert("민트초코");
    }
    else if(arr[i]===16){
      alert("슈팅스타");
    }
    else if(arr[i]===17){
      alert("사랑에빠진딸기");
    }
    else if(arr[i]===18){
      alert("애플민트");
    }
    else if(arr[i]===19){
      alert("초코나무숲");
    }
    else if(arr[i]===20){
      alert("뉴욕치즈케이크");
    }
    else if(arr[i]===21){
      alert("피스타치오아몬드");
    }
    else if(arr[i]===22){
      alert("베리베리스트로베리");
    }
    else if(arr[i]===23){
      alert("바람과함께사라지다");
    }
    else if(arr[i]===24){
      alert("자모카아몬드휘지");
    }
    else if(arr[i]===25){
      alert("이상한나라의솜사탕");
    }
    else if(arr[i]===26){
      alert("초콜릿");
    }
    else if(arr[i]===27){
      alert("31요거트");
    }
    else if(arr[i]===28){
      alert("그린티");
    }
    else if(arr[i]===29){
      alert("체리쥬빌레");
    }
    else if(arr[i]===30){
      alert("워싱턴블루베리체리쥬빌레");
    }
    else if(arr[i]===31){
      alert("바닐라");
    }
    else if(arr[i]===32){
      alert("초콜릿무스");
    }
    else if(arr[i]===33){
      alert("북극곰폴라베어");
    }


  }
  return arr[0];
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
          
      } else if (value === 'pint') {
          flavor = 3;
          console.log(flavor);
      } else if (value === 'quarter') {
          flavor = 4;
          console.log(flavor);
      } else if (value === 'family') {
          flavor = 5;
          console.log(flavor);
      } else if (value === 'half') {
          flavor = 6;
          console.log(flavor);
          
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
