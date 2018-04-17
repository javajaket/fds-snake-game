import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{x: 2, y: 0},{ x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 4};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // 위쪽 키를 누르면 this.joint가 x+1, y-1
  
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  // 아래쪽 키를 누르면 this.joint가 x-1, y+1
  // x좌표 = y좌표, game over
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // 왼쪽 키를 누르면 this.joint가 x-1, y
  // x좌표 = y좌표, game over.
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  // 오른쪽 키를 누르면 this.joint가 x+1, y
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  // 키 깂 입력받으면 바로 함수 실행 
  // 뱀 머리의 forward가 바뀌면 this.joint의 x좌표값이 reverse 된다.
  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
