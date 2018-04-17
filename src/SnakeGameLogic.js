import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  // 꼬리를 떼서 머리에 붙여준다
  // fruit[마지막인덱스]와 joints[0]이 같을 때 아이템 하나씩 추가
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표. joints[0]과 같아 지면 랜덤 위치
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수. joints y++
  
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수.joints y--
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수. joints x--
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수. joints x++
  // for (let i = 0; i < this.joints.length; i++) {
  //   this.joints[i].x++;
  // }
  console.log('right');
  this.joints.pop();
  this.joints.unshift({
    x: this.joints[0].x + 1, 
    y: 0}); // 꼬리를 떼서 머리 다음에 붙이기
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환. 0부터 시작. x < 30, y < 20 일 때 true
  // 게임이 끝났으면 `false`를 반환.

  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
