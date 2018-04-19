import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},  
  ];
  // 먹이의 좌표
  this.fruit = {x: 3, y: 5}; // 첫 빨간색 상자 취치 조정
  this.direction = "right"; // 맨처음 시작 방향 결정
  // this.newHead = this.joints[1..joints.length];
  // this.trunk = this.joints.shift();
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
  // this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y }); // direction이 아닌 좌표를 이용한 이동 
  console.log("left");
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log("right"); 
  // this.joints.pop();
  // this.joints.unshift({x: this.joints[0].x+1, y:this.joints[0].y });
  this.direction = 'right';
  
  
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  // 초당 newxtState가 수행 되면서 시간이 지날수록 앞으로 낳아가고 좌우 방향 좌표 통해 명령
    if (this.direction === "right") {
      this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
    } else if (this.direction === "left") {
      this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
    } else if (this.direction === "up") {
      this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
    } else {
      this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
    }
    // fruit 위치 생성과 과일이 뱀의 몸에 생성되지 않도록 지정
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.fruit.x = Math.floor(Math.random() * COLS);
    this.fruit.y = Math.floor(Math.random() * ROWS);
     this.fruit.x != this.joints.x;
     this.fruit.y != this.joints.y;
  } else {
    this.joints.pop();
  }

  // 에러의 경우 1. 벽에 부딪히면 종료 2. 자기몸에 닿으면 종료 3. 가던 방향 과 반대로 가면 종료 라는 특징의 에러를 해결
  //for구문을 통해 2,3 을해결

  for (let i = 1; i < this.joints.length; i++) {
    if (this.joints[0].x === this.joints[i].x && this.joints[0].y === this.joints[i].y) {
      return false;
    }
  }
  
// 벽에 부딪히면 종료 되는 이벤트 
  if (this.joints[0].x == -1 || this.joints[0].x == COLS || this.joints[0].y == -1 || this.joints[0].y == ROWS) {
    return false;   
  }  
  else {return true;
          console.log(`nextState`);
        }
}
export default SnakeGameLogic;


//some method를 써라

// 해야될 과제  자기몸에 박았을때, 뒤로갔을때.