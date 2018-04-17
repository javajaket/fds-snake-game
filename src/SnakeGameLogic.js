import {ROWS, COLS} from './config';


let vector_set = { 
  r : {x:1, y:0},
  u : {x:0, y:-1},
  d : {x:0, y:1},
  l : {x:-1, y:0}
} 

let vector;
let r = 1;
let d = 1;

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 13, y: 3};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  d = 0;
  vector = vector_set.u
  let brand_new = {x:0, y:0};
  if ( r === 1 ) {  
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  } else { 
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    this.joints.shift();
    this.joints.push(brand_new);
  }
  console.log(this.joints);
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  d = 1;
  vector = vector_set.d;
  let brand_new = {x:0, y:0};
  if ( r === 1 ) {  
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.shift();
    this.joints.push(brand_new);
  } else { 
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  }
  console.log(this.joints);
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  r = 0;
  vector = vector_set.l
  let brand_new = {x:0, y:0};
  if ( d === 1 ) {  
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    this.joints.shift();
    this.joints.push(brand_new);
  } else { 
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  }


  // brand_new.x += this.joints[this.joints.length-1].x + vector.x;
  // brand_new.y += this.joints[this.joints.length-1].y + vector.y;
  // this.joints.shift();
  // this.joints.push(brand_new);
  console.log(this.joints);
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  r = 1;
  vector = vector_set.r;
  let brand_new = {x:0, y:0};
  if ( d === 1 ) {  
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    this.joints.shift();
    this.joints.push(brand_new);
  } else { 
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  }


  // brand_new.x += this.joints[0].x + vector.x;
  // brand_new.y += this.joints[0].y + vector.y;
  // this.joints.pop();
  // this.joints.unshift(brand_new);
  console.log(this.joints);
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환



// 뒤 따다 붙이기
// 먹이 머리에 붙이기
// 벡터만 조정하기


  console.log(`nextState`);
  return true;
}





export default SnakeGameLogic;
