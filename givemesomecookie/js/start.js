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
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-0.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===1){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-1.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===2){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-2.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===3){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-3.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===4){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-4.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===5){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-5.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===6){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-6.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===7){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-7.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===8){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-8.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===9){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-9.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===10){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-10.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===11){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-11.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===12){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-12.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===13){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-13.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===14){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-14.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===15){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-15.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===16){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-16.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===17){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-17.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===18){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-18.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===19){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-19.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===20){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-20.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===21){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-21.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===22){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-22.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===23){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-23.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===24){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-24.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===25){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-25.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===26){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-26.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===27){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-27.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===28){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-28.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===29){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-29.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
    $('#flavor-count').append(please)
    }
    else if(arr[i]===30){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-30.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===31){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-31.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===32){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-32.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
      $('#flavor-count').append(please)
    }
    else if(arr[i]===33){
      let please = `<h1>체리쥬빌레</h1><img src="./img/image-33.png" alt="mainImage" class="img-fluid col-lg-6 col-md-8 col-sm-10 col-12 mx-auto" /><p>체리과육이 탱글탱글 씹히는 체리 아이스크림</p>`
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
