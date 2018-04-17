import {ROWS, COLS} from './config';
// 바라보는 방향을 관리해야한다.
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 5},
    {x: 2, y: 4},
    {x: 2, y: 3},
    {x: 2, y: 2},
    {x: 2, y:1} 
  ];

  // 먹이의 좌표
  this.fruit = {x: 10, y: 10};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // x 좌표가 플러스 된다.?

  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  // x 좌표가 마이너스 된다.?
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // y 좌표가 마이너스 된다.?
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  // y 좌표가 플러스 된다.?
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  // 좌표가 x와 y의 끝 좌표 이상이나 좌표가 음수가 되면 false 
  console.log(`nextState`);
  return true;
}


export default SnakeGameLogic;
