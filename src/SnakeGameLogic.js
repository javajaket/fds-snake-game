import {ROWS, COLS} from './config';


let vector_set = { 
  r : {x:1, y:0},
  u : {x:0, y:-1},
  d : {x:0, y:1},
  l : {x:-1, y:0}
} 

let vector;
let judge = true;

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

  vector = vector_set.u
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    if ( brand_new.x > 30 ||
      brand_new.x < 0  ||
        brand_new.y > 20 ||
        brand_new.y < 0 ) {
          console.log(brand_new.x,brand_new.y,"/",this.joints[this.joints.length-1].x,this.joints[this.joints.length-1].y)
          console.log("boom")
          judge = false;
          return;
        }
    this.joints.shift();
    this.joints.push(brand_new);
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수

  vector = vector_set.d;
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    if ( brand_new.x > 30 ||
      brand_new.x < 0  ||
        brand_new.y > 20 ||
        brand_new.y < 0 ) {
          console.log(brand_new.x,brand_new.y,"/",this.joints[this.joints.length-1].x,this.joints[this.joints.length-1].y)
          console.log("boom")
          judge = false;
          return;
        }
    this.joints.shift();
    this.joints.push(brand_new);
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  vector = vector_set.l
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    if ( brand_new.x > 30 ||
      brand_new.x < 0  ||
        brand_new.y > 20 ||
        brand_new.y < 0 ) {
          console.log(brand_new.x,brand_new.y,"/",this.joints[this.joints.length-1].x,this.joints[this.joints.length-1].y)
          console.log("boom")
          judge = false;
          return;
        }
    this.joints.shift();
    this.joints.push(brand_new);
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수

  vector = vector_set.r;
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[this.joints.length-1].x + vector.x;
    brand_new.y = this.joints[this.joints.length-1].y + vector.y;
    if ( brand_new.x > 30 ||
    brand_new.x < 0  ||
      brand_new.y > 20 ||
      brand_new.y < 0 ) {
        console.log(brand_new.x,brand_new.y,"/",this.joints[this.joints.length-1].x,this.joints[this.joints.length-1].y)
        console.log("boom")
        judge = false;
        return;
      }
    this.joints.shift();
    this.joints.push(brand_new);
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {

  if ( this.joints[this.joints.length-1].x === this.fruit.x && this.joints[this.joints.length-1].y === this.fruit.y){
    let brand_new = {x:0, y:0};
    brand_new.x = this.joints[0].x - vector.x;
    brand_new.y = this.joints[0].y - vector.y;
    this.joints.unshift(brand_new);
    this.fruit.x = Math.floor(Math.random() * 30);
    this.fruit.y = Math.floor(Math.random() * 20);
    }

  for (let i = 0; i < this.joints.length -1 ; i++) {
    if ( this.joints[this.joints.length-1].x === this.joints[i].x && this.joints[this.joints.length-1].y === this.joints[i].y){
      console.log("getin")
      judge = false;
    } 
  }



  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환



// 뒤 따다 붙이기
// 먹이 머리에 붙이기
// 벡터만 조정하기


  console.log(`nextState`);
  return judge;
}





export default SnakeGameLogic;
