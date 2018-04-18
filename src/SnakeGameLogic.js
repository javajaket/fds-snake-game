import { ROWS, COLS } from "./config";
// 바라보는 방향을 관리해야한다.
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 10, y: 10 };
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

  if (this.direction === "up") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
    if (
      this.joints[0].x !== this.fruit.x ||
      this.joints[0].y !== this.fruit.y
    ) {
      this.joints.pop();
    }
  } else if (this.direction === "down") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
    if (
      this.joints[0].x !== this.fruit.x ||
      this.joints[0].y !== this.fruit.y
    ) {
      this.joints.pop();
    }
  } else if (this.direction === "left") {
    this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
    if (
      this.joints[0].x !== this.fruit.x ||
      this.joints[0].y !== this.fruit.y
    ) {
      this.joints.pop();
    }
  } else {
    this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
    if (
      this.joints[0].x !== this.fruit.x ||
      this.joints[0].y !== this.fruit.y
    ) {
      this.joints.pop();
    }
  }
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    this.fruit = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS)
    };
  }
  if (
    this.joints[0].x === COLS ||
    this.joints[0].y === ROWS ||
    this.joints[0].x < 0 ||
    this.joints[0].y < 0
  ) {
    return false;
  }
  // 몸통이 닿으면 죽는다 . some을 사용하여 구현할 것. 
  // x의좌표가 같지 않고 y의좌표가 같지 않냐? 라고 물어봄 배열의 요소를 하나씩 확인하다가 트루가 나오면 트루를 반환함 
  //하나라도 트루면 트루이기 때문에 확인하다가 하나 트루 나오면 멈추고 트루 반환한다
  // 죽는것은 엑스좌표가 같고 와이좌표가 같을 때 죽음 
  //some으로 구현해야 한다 ㅜㅜㅜㅜ잘 안된다ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ
  this.joints.slice(1).some(item => this.joints[0].x !== item.x || this.joints[0].y !== item.y)
  console.log(`nextState`);
};

export default SnakeGameLogic;

