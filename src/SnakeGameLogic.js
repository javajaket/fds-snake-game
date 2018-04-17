import {ROWS, COLS} from './config';



function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  // 맨 뒤 꼬리를 떼서 나가고자 하는 방향 앞으로 보내면 된다.
  this.joints = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0}, // 머리
//    {x: 3, y: 0}
  ];

  // 먹이의 좌표
    // 먹이를 먹으면 꼬리 뒤로 보낸다.
  this.fruit = {x: 10, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  // 뱀이 오른쪽 : y 축 -1 
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {

  this.joints.push({x:this.joints[2].x+1, y:0});
  this.joints.shift();
//  this.xAix++;
  console.log('right');
//  console.log('xArix')
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
//  console.log(this.joints);
  return true;
}

export default SnakeGameLogic;
