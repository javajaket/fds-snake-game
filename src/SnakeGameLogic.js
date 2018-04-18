import {ROWS, COLS} from './config';
// 바라보는 방향을 관리해야한다.
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0}
  ];

  // 먹이의 좌표
  this.fruit = {x: 10, y: 10};
  this.direction = "right";
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "up";

    // 사과먹기 
    if(this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
      // 사과를 먹으면 
      
      this.fruit = {x : Math.floor(Math.random() * COLS), y : Math.floor(Math.random() * ROWS)};
    } 
  console.log('up');
  
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "down";

     // 사과먹기 
     if(this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
      // 사과를 먹으면 머리 앞에  머리를 추가시켜줘야 함 
      this.joints.push({x: this.joints[this.joints.length-1].x , y: this.joints[this.joints.length -1].y +1 })
      this.fruit = {x : Math.floor(Math.random() * COLS), y : Math.floor(Math.random() * ROWS)};
    }
  console.log('down');

}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "left";
   // 사과먹기 
   if(this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
    // 사과를 먹으면 머리 앞에  머리를 추가시켜줘야 함 
    this.joints.push({x: this.joints[this.joints.length-1].x -1 , y: this.joints[this.joints.length -1].y })
    this.fruit = {x : Math.floor(Math.random() * COLS), y : Math.floor(Math.random() * ROWS)};
  }
  console.log('left');

}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "right";

    // 사과먹기 
    if(this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
      // 사과를 먹으면 머리 앞에  머리를 추가시켜줘야 함 
      this.joints.push({x: this.joints[this.joints.length-1].x +1 , y: this.joints[this.joints.length -1].y })
      this.fruit = {x : Math.floor(Math.random() * COLS), y : Math.floor(Math.random() * ROWS)};
    }
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  
  if(this.direction === " up") {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x , y: this.joints[0].y -1 })
  } else if(this.direction === "down" ){
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x , y: this.joints[0].y +1 })
  } else if (this.direction === "left") {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x -1, y: this.joints[0].y })
  } else {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x +1, y: this.joints[0].y })
  }

   // 몸통이 닿으면 죽는다 .
   for(let i = 1; i < this.joints.length; i++){
    if(this.joints[0].x === this.joints[i].x && this.joints[0].y === this.joints[i].y){
      return false;
    }
  }
  // this.joints.slice(1).some(item => joints[0].x === item.x && item[0].y === item.y )
    //벽에 닿으면 죽는다.
    if(this.joints[0].x === 30 || this.joints[0].y ===  20  || this.joints[0].x < 0|| this.joints[0].y < 0 ){
      return false;
    }
 console.log(`nextState`);
  return true;

  }


export default SnakeGameLogic;

// 뱀을 이동시킬 때 꼬리를 떼고 머리를 붙인다. 
// 꼬리를 안 떼면 ? 
// 안 떼면 길이가 1늘어남 
// some 
// joints.slice(1)