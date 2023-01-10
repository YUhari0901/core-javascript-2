/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime= prompt('현재 시각은?')


switch(thisTime){
    case MORNING:
       console.log('뉴스 기사 글을 읽는다.');
       break;
    case LUNCH : 
      console.log ('점심을 맛있게 먹는다. ');
      break;
    case DINNER:
      console.log ('수업 준비한다.');
      break;
    case NIGHT:
      console.log ('스터디 발표 쥰비');
      break;
    case LATE_NIGHT || case DAWN:
      console.log ('꿈속에서 디스코드 들어가기');
      break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

/* if (thisTime==='MORNING'){
    console.log('뉴스 기사 글을 읽는다.');
}
else if (thisTime==='LUNCH'){
    console.log ('점심을 맛있게 먹는다. ');
}else if (thisTime==='DINNER'){
 console.log ('수업 준비한다. ');
}else if (thisTime==='NIGHT'){
    console.log ('스터디 발표 쥰비');
}else if (thisTime==='LATE_NIGHT'){
    console.log ('꿈속에서 디스코드 들어가기');
}
     */





/* switch vs. if -------------------------------------------------------- */



//0~6의 값을 받는다
// 0='일'
// 1='월'
// 2='화'
// 3='수'
// 4='목'
// 5='금'
// 6='토'

/* let num = Number(prompt('0:월 ~ 6:토 입력')) ;
switch(num) {
  case 0:
    console.log('일')
    break;
  case 1:
    console.log('월')
    break;
  case 2:
    console.log('화')
    break;
  case 3:
    console.log('수')
    break;
  case 4:
    console.log('목')
    break;
  case 5:
    console.log('금')
    break;
  case 6:
    console.log('토')
    break;
} */

function getDay(dayValue){

    switch(getDay) {
        case 0:return'일';
        case 1:return'월';
        case 2:return'화';
        case 3:return'수';
        case 4:return'목';
        case 5:return'금';
        case 6:return'토';
      }
    
}


let result = getDay(1); 
console.log(result)

if(browser=='Edge'){ alert( "Edge를 사용하고 계시네요!" );
}
else if(browser =='Chrome' 
||browser=='Firefox'
||browser== 'Safari'
||browser=='Opera'){
  alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
}
else{ alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}


let a = +prompt('a?', '');
switch(a){
  case 0: alert( 0 );
  break;
  case 1:  alert( 1 );
  break;
  case 2:
  case 3: alert( '2,3' );
  break;

}