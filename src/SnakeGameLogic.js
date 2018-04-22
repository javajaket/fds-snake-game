import { ROWS, COLS } from "./config";

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, 
                 { x: 1, y: 0 }, 
                 { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 4, y: 0 };
  // 방향 
  this.direction = "right";

}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "up";
  console.log("up");
};

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "down";
  console.log("down");
};

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "left";
  console.log("left");
};

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "right";
  console.log("right");
};

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  // 방향에 따라서 길이를 추가해준다. 
  if (this.direction === "up") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
  } else if (this.direction === "down") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
  } else if (this.direction === "left") {
    this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
  } else {
    this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
  }
  // 과일을 먹었으면 과일의 위치를 옮겨준다. 꼬리를 떼지 않음으로서 몸통의 길이를 한 칸 길게 해준다. 
  // 그렇지 않다면 꼬리를 떼준다.
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    do {
      this.fruit = {
       x : Math.floor(Math.random() * COLS),
       y : Math.floor(Math.random() * ROWS)
      }
    } while (this.joints.some(j => this.fruit.x === j.x && this.fruit.y === j.y)); 
   } else {
    this.joints.pop(); 
  }
  // 벽에 부딪히면 죽는다. 
  if (
    this.joints[0].x >= COLS ||
    this.joints[0].y >= ROWS ||
    this.joints[0].x < 0 ||
    this.joints[0].y < 0
  ) {
    return false;
  }
  // 몸통이 닿으면 죽는다.
  if(this.joints.slice(1).some(item => this.joints[0].x === item.x && this.joints[0].y === item.y)){
    return false;
  }
  // 기본값으로  true 
    return true;
 }


export default SnakeGameLogic;
