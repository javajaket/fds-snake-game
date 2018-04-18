import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  // 먹이 좌표와 joints[0]이 같을 때 아이템 하나씩 추가
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표. joints[0]과 같아 지면 랜덤 위치
  this.fruit = {x: 3, y: 5};
  this.direction = 'right'
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수. joints y--
  // for (let i = 0; i < this.joints.length; i++) {
  //   this.joints[i].y--;
  // }
  this.direction = 'up';

  console.log('up');
  this.joints.pop();
  this.joints.unshift({
    x: this.joints[0].x, 
    y: this.joints[0].y - 1
  });
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수.joints y++
  // for (let i = 0; i < this.joints.length; i++) {
  //   this.joints[i].y++;
  // }
  this.direction = 'down';

  console.log('down');
  this.joints.pop();
  this.joints.unshift({
    x: this.joints[0].x, 
    y: this.joints[0].y + 1
  });
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수. joints x--
  this.direction = 'left';

  console.log('left');
  this.joints.pop();
  this.joints.unshift({
    x: this.joints[0].x - 1, 
    y: this.joints[0].y
  });
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수. joints x++
  // for (let i = 0; i < this.joints.length; i++) {
  //   this.joints[i].x++;
  // }
  this.direction = 'right';

  console.log('right');
  this.joints.pop();
  this.joints.unshift({
    x: this.joints[0].x + 1, 
    y: this.joints[0].y
  }); // 꼬리를 떼서 머리 다음에 붙이기
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환.
  // 게임이 끝났으면 `false`를 반환.
  if (this.fruit.x === this.joints[0].x && this.fruit.y === this.joints[0].y) {
    this.fruit.x = Math.ceil(COLS * Math.random()); // 주사위 코드 const dice = Math.ceil(6 * Math.random());
    this.fruit.y = Math.ceil(ROWS * Math.random());
    this.joints.push({
      x: this.joints[0].x,
      y: this.joints[0].y
    });
  }

  if (this.joints[0].x > COLS || this.joints[0].y > ROWS || this.joints[0].x < 0 || this.joints[0].y < 0) {
    return false;
  } else {
    console.log(`nextState`);
    return true;
  }

  if (this.direction === 'right') {
    this.joints.pop();
    this.joints.unshift({
      x: this.joints[0].x + 1, 
      y: this.joints[0].y
    });
  }
  // const newHead = {x: 10, y: 10};
  // const joints = [
  //   {x: 10, y: 10},
  //   {x: 10, y: 10},
  //   {x: 10, y: 10}
  // ]
  // joints.some(item => item.x === newHead.x && item.y === newHead.y)
}

export default SnakeGameLogic;
