const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 8;
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
      let please = `<h1>체리 초코 쥬빌레</h1><img src="./img/image-0.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리쥬빌레와 초콜릿의 달콤한 만남!</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===1){
      let please = `<h1>꿀.바.망</h1><img src="./img/image-1.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>허니망고 아이스크림과 바나나 아이스크림 속에 망고 다이스가 쏙쏙!</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===2){
      let please = `<h1>오버더 레인보우 샤베트</h1><img src="./img/image-2.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>파인애플 샤베트, 라즈베리 샤베트, 오렌지 샤베트에, 상큼한 레몬&라임 샤베트가 어우러진 제품</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===3){
      let please = `<h1>아이스 허니버터 아몬드</h1><img src="./img/image-3.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>버터 스카치 아이스크림과 바닐라 아이스크림 속에 단짠단짠 허니버터 아몬드가 쏙쏙</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===4){
      let please = `<h1>오레오 쿠키 앤 크림</h1><img src="./img/image-4.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>부드러운 바닐라향 아이스크림에, 달콤하고 진한 오레오 쿠키가 듬뿍!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===5){
      let please = `<h1>월넛</h1><img src="./img/image-5.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>고소하고 향긋한 호두 아이스크림에 호두가 듬뿍 들어있는 제품</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===6){
      let please = `<h1>머스크 메론</h1><img src="./img/image-6.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>후레쉬한 메론의 진하고 부드러운 맛</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===7){
      let please = `<h1>트리플 치즈 러브</h1><img src="./img/image-7.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>뉴욕 치즈케이크, 카라멜 치즈케이크, 까망베르 치즈 세가지 치즈 아이스크림의 조화!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===8){
      let please = `<h1>매드 어바웃 초콜릿</h1><img src="./img/image-8.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>초콜릿 첨가로 더욱 깔끔하게 즐기는 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===9){
      let please = `<h1>디노 젤리</h1><img src="./img/image-9.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>파인애플 & 그린 애플 아이스크림에 알록달록 공룡젤리가 콩콩!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===10){
      let please = `<h1>엄마는 외계인</h1><img src="./img/image-10.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===11){
      let please = `<h1>쫀떡궁합</h1><img src="./img/image-11.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>고소한 흑임자, 인절미 아이스크림에 쫄깃한 떡리본과 바삭한 프랄린 피칸이 쏙쏙!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===12){
      let please = `<h1>봉쥬르 마카롱</h1><img src="./img/image-12.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>부드러운 크림치즈 아이스크림과 마카롱, 초콜릿의 달콤한 만남!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===13){
      let please = `<h1>아몬드 봉봉</h1><img src="./img/image-13.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>입안 가득 즐거운 초콜릿, 아몬드로 더욱 달콤하게!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===14){
      let please = `<h1>우유에 빠진 딸기</h1><img src="./img/image-14.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>설(雪)목장 유기농 우유와 산청딸기의 싱그러운 만남!</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===15){
      let please = `<h1>민트 초콜릿 칩</h1><img src="./img/image-15.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>쿨한 그녀들의 선택! 상쾌한 민트향에 초코칩까지!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===16){
      let please = `<h1>슈팅스타</h1><img src="./img/image-16.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>톡톡 터지는 팝핑 캔디와 스프링클 캔디,상큼한 체리 시럽이 들어있는 제품</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===17){
      let please = `<h1>사랑에 빠진 딸기</h1><img src="./img/image-17.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>크런치 초콜릿, 치즈 케이크, 스트로베리가 듬뿍 들어있는 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===18){
      let please = `<h1>애플 민트</h1><img src="./img/image-18.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>상큼한 사과와 시원한 민트향이 기분까지 상쾌하게</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===19){
      let please = `<h1>초코나무 숲</h1><img src="./img/image-19.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>2014년 아이스크림 콘테스트 1위 선정작!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===20){
      let please = `<h1>뉴욕 치즈케이크</h1><img src="./img/image-20.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>부드럽게 즐기는 뉴욕식 정통 치즈케이크 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===21){
      let please = `<h1>피스타치오 아몬드</h1><img src="./img/image-21.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>피스타치오향과 아몬드가 만나 고소함이 두배!</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===22){
      let please = `<h1>베리베리 스트로베리</h1><img src="./img/image-22.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>새콤상큼 딸기 과육이 듬뿍!</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===23){
      let please = `<h1>바람과 함께 사라지다</h1><img src="./img/image-23.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>블루베리와 딸기로 상큼함을 더한 치즈케이크 한 조각</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===24){
      let please = `<h1>자모카 아몬드 훠지</h1><img src="./img/image-24.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>깊고 풍부한 자모카 아이스크림에 고소한 아몬드와 초콜릿 훠지 시럽이 들어있는 제품</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===25){
      let please = `<h1>이상한 나라의 솜사탕</h1><img src="./img/image-25.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>부드럽고 달콤한 솜사탕과 함께 떠나는 이상한 나라로의 여행</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===26){
      let please = `<h1>초콜릿</h1><img src="./img/image-26.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>진하고 부드러운 정통 초콜릿 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===27){
      let please = `<h1>31요거트</h1><img src="./img/image-27.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>유산균이 살아있는 오리지널 요거트 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===28){
      let please = `<h1>그린티</h1><img src="./img/image-28.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>엄선된 녹차를 사용한 싱그러운 그린티 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===29){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-29.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===30){
      let please = `<h1>워싱턴 블루베리 쥬빌레</h1><img src="./img/image-30.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>고품질의 워싱턴주 블루베리 아이스크림과 블루베리향 사베트가 어우러진 맛</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===31){
      let please = `<h1>바닐라</h1><img src="./img/image-31.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>부드럽고 깔끔한 바닐라 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===32){
      let please = `<h1>초콜릿 무스</h1><img src="./img/image-32.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>초콜릿 칩이 들어있는 진한 초콜릿 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===33){
      let please = `<h1>북극곰 폴라베어</h1><img src="./img/image-33.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>폴라베어처럼 쿨~한 민트 아이스크림에 크런치가 쏙쏙!</p>`
      $('#flavor-count').append(please)
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
