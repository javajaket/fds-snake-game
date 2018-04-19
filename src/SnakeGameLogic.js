import {ROWS, COLS} from './config';
// 게임 시작 시 한번 실행
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];
  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  // 뱀 시작 방향
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log('up');
  this.direction = 'up';
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
  this.direction = 'down';
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  this.direction = 'right';
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  const newHead = {};
  // 뱀이 움직이는 방향
  if (this.direction === 'right') {
    newHead.x = this.joints[0].x + 1, 
    newHead.y = this.joints[0].y
    // 자기 자신과 부딪히면 게임 종료
    if (this.joints.some(item => item.x === newHead.x && item.y === newHead.y)) {
      return false;
    }
    this.joints.unshift(newHead);
    this.joints.pop();
  } else if (this.direction === 'left') {
    newHead.x = this.joints[0].x - 1, 
    newHead.y = this.joints[0].y
    if (this.joints.some(item => item.x === newHead.x && item.y === newHead.y)) {
      return false;
    }
    this.joints.unshift(newHead);
    this.joints.pop();
  } else if (this.direction === 'up') {
    newHead.x = this.joints[0].x, 
    newHead.y = this.joints[0].y - 1
    if (this.joints.some(item => item.x === newHead.x && item.y === newHead.y)) {
      return false;
    }
    this.joints.unshift(newHead);
    this.joints.pop();
  } else if (this.direction === 'down') {
    newHead.x = this.joints[0].x, 
    newHead.y = this.joints[0].y + 1
    if (this.joints.some(item => item.x === newHead.x && item.y === newHead.y)) {
      return false;
    }
    this.joints.unshift(newHead);
    this.joints.pop();
  } else {
    return true;
  }
  // 먹이를 먹으면 1.먹이 밭 안에서 랜덤 위치 2.꼬리 하나 추가
  if (this.fruit.x === newHead.x && this.fruit.y === newHead.y) {
    this.fruit.x = Math.ceil(COLS * Math.random()); // 주사위 코드 const dice = Math.ceil(6 * Math.random());
    this.fruit.y = Math.ceil(ROWS * Math.random());
    this.joints.push({
      x: newHead.x,
      y: newHead.y
    });
  }
  // 벽에 부딪히면 게임 종료
  if (newHead.x >= COLS || newHead.y >= ROWS || newHead.x < 0 || newHead.y < 0) {
    // 게임이 끝났으면 `false`를 반환.
    return false;
  } else {
    // 게임이 아직 끝나지 않았으면 `true`를 반환.
    console.log(`nextState`);
    return true;
  }
}

export default SnakeGameLogic;
