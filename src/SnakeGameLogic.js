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
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  // 임시루 작성~
  // 뱀 머리 좌표~
  let newJoint = {x: this.joints[0]['x'], y: this.joints[0]['y']}
  switch(this.direction) {
    case 'up' :
      newJoint['y']--;
      break;
    case 'down':
      newJoint['y']++;
      this.joints.unshift();
      break;
    case 'left' : 
      newJoint['x']--;
      this.joints.unshift();
      break;
    default: 
      newJoint['x']++;
  }
  if (this.joints.some(item => item['x'] === newJoint['x'] && item['y'] === newJoint['y'])) {
    // 뱀이 자기 몸통에 부딪치면
    return false;
  } else if ((newJoint['x'] < 0 || newJoint['x'] > COLS - 1) || (newJoint['y'] < 0 || newJoint['y'] > ROWS - 1)) {
    // 뱀이 영역 벗어나면
    return false;
  } else if ((newJoint['x'] === this.fruit['x'] && newJoint['y'] === this.fruit['y'])) {
    // 뱀이 사과를 먹을때
    this.joints.unshift(newJoint);
    this.fruit['x'] = Math.floor(Math.random() * COLS);
    this.fruit['y'] = Math.floor(Math.random() * ROWS);
    // this.joints.pop();
  }
  else {
    // 그냥 뱀 이동
    this.joints.unshift(newJoint);
    this.joints.pop();
  }
  return true; // nextState에서 false면 게임 오버임
}

export default SnakeGameLogic;
