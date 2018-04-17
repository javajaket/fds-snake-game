import {ROWS, COLS} from './config';

// SnakeGameLogic 생성자 
//객체 안에 joint와 fruit가 생긴다.
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  
  //뱀 마디의 좌표를 나타낸다.
  // x가 0이면 가장 왼쪽이다.
  // y가 0이면 가장 위쪽이다. 
  // x와 y로 된 객체 한 쌍이 칸 한개를 나타낸다.
  // 객체의 갯수가 게임 하단 현재 길이에 출력된다.
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];
  

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
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
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  // 시작점의 객체가 뒤집어진 경우의 풀이
  // this.joints.shift();
  // let snakeLength = this.joints.length;
  // const firstPiece = {};
  // firstPiece.x = this.joints[snakeLength - 1].x + 1;
  // firstPiece.y = this.joints[snakeLength - 1].y;
  // this.joints.push(firstPiece);  
 

  //꼬리를 뗀다.
  this.joints.pop();
  //배열앞의 요소를 추가한다.
  const newHead = {
   x: this.joints[0].x + 1,
   y: this.joints[0].y
  };
  this.joints.unshift(newHead);

}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  return true;
  //return이 false이면 게임이 끝났다는 뜻이다.
  //뱀의 색깔이 검정색이 된다.
}

export default SnakeGameLogic;
