import {ROWS, COLS} from './config';


const vector_set = { 
  r : {x:1, y:0},
  u : {x:0, y:-1},
  d : {x:0, y:1},
  l : {x:-1, y:0}
} 

// FIXME: 이 상태들은 게임이 다시 시작되어도 초기화가 되지 않습니다.
let vector = vector_set.r;
let judge = true;
let starter = 0;

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열

  vector = vector_set.r //must innitialize the vector!!!!

  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 13, y: 3};
  
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수

  vector = vector_set.u
  if (starter === 1) {
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  console.log('up',this.joints[0].x,this.joints[0].y);
  starter = 0;
} 
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수

  vector = vector_set.d;
  if (starter === 1) {
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  console.log('down',this.joints[0].x,this.joints[0].y);
  starter = 0;
      }
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  vector = vector_set.l
  if (starter === 1) {
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  console.log('left',this.joints[0].x,this.joints[0].y);
starter =0 ;
      }
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수

  vector = vector_set.r;
  if (starter === 1) {
  let brand_new = {x:0, y:0};
    brand_new.x = this.joints[0].x + vector.x;
    brand_new.y = this.joints[0].y + vector.y;
    this.joints.pop();
    this.joints.unshift(brand_new);
  console.log('right',this.joints[0].x,this.joints[0].y);
starter =0;
    }
}

SnakeGameLogic.prototype.nextState = function() {

  // FIXME: 이동과 관련된 코드를 이 쪽으로 옮긴다면 `starter`같은 변수를 두지 않아도 됩니다.
  switch (vector) {
    case vector_set.r: starter = 1; this.right(); break;
    case vector_set.l: starter = 1; this.left(); break;
    case vector_set.u: starter = 1; this.up(); break;
    case vector_set.d: starter = 1; this.down(); break;
    // default : starter = 1; this.right(); return;
     }

  if ( this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
    let brand_new = {x:0, y:0};
    brand_new.x = this.joints[this.joints.length-1].x + (this.joints[this.joints.length-1].x - this.joints[this.joints.length-2].x);
    brand_new.y = this.joints[this.joints.length-1].y + (this.joints[this.joints.length-1].y - this.joints[this.joints.length-2].y);
    this.joints.push(brand_new);

    // FIXME: `Math.floor`를 사용할 때와 `Math.round`를 사용할 때의 확률 분포가 다릅니다.
    // FIXME: `kt`, `sk` 함수가 무한 재귀 호출에 빠질 수 있습니다.
    let kt = () => { let ab = Math.round(Math.random() * (COLS-1)); this.joints.some(item => item.x === ab) ? kt() : this.fruit.x = ab }
    let sk = () => { let ab = Math.round(Math.random() * (ROWS-1)); this.joints.some(item => item.y === ab) ? sk() : this.fruit.y = ab }
    
    kt();
    sk();

    // this.fruit.x = Math.round(Math.random() * (COLS-1));
    // this.fruit.y = Math.round(Math.random() * (ROWS-1));
    }

  for (let i = this.joints.length -1; i > 0 ; i--) {
    if ( this.joints[0].x === this.joints[i].x && this.joints[0].y === this.joints[i].y){
      console.log("head_xy",this.joints[0].x,this.joints[0].y)
      console.log("boom_self") 
      judge = false;
      return false;
    } 
  }

  
      if ( this.joints[0].x > (COLS-1) ||
      this.joints[0].x < 0  ||
      this.joints[0].y > (ROWS-1) ||
      this.joints[0].y < 0 ) {
        console.log("head_xy",this.joints[0].x,this.joints[0].y)
        console.log("boom")
        return false;
        
      }



  console.log(this.joints);
  console.log("this.joints.length",this.joints.length)
  console.log(`nextState`);
  console.log('judge',judge)

  return true;
}




export default SnakeGameLogic;
