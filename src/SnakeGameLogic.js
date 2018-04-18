import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},  
  ];
  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  this.direction = "right";
  
  }

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // this.joints.pop();
  // this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
  console.log('up');
  
  this.direction = "up";
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log("down");
  // this.joints.pop();
  // this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
  this.direction = "down";
  
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // this.joints.pop();
  // this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
  console.log("left");
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log("right"); 
  // this.joints.pop();
  // this.joints.unshift({x: this.joints[0].x+1, y:this.joints[0].y });
  this.direction = 'right';
  
  //1. 만약 움직이는 방향이 이미 오른쪽으로 가있으면 무시 2. 아니면 바꿔줘 3. 벽에 부딪히면 종료
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
    if (this.direction === "right") {
      this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
    } else if (this.direction === "left") {
      this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
    } else if (this.direction === "up") {
      this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
    } else {
      this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
    }

  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.fruit.x = Math.floor(Math.random() * COLS);
    this.fruit.y = Math.floor(Math.random() * ROWS);
  }  else { this.joints.pop();}

    if (this.joints[0].x == -1 || this.joints[0].x == COLS || this.joints[0].y == -1 || this.joints[0].y == ROWS) {
    return false;   
  }
  else {return true;
          console.log(`nextState`);
        }
}
export default SnakeGameLogic;


// 뱀 바라보는방향에 따라 
// next state 가 동시에 수행
//some method를 써라

// 해야될 과제  자기몸에 박았을때, 뒤로갔을때.