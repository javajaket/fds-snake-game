import {ROWS, COLS} from './config';

// SnakeGameLogic 생성자 
//객체 안에 joint, fruit, direction이 생긴다.
function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  // x가 0이면 가장 왼쪽, y가 0이면 가장 위쪽이다. 
  // x와 y로 된 객체 한 쌍이 칸 한개를 나타낸다.
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};

  //뱀이 바라보고 있는 방향
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

  let newHead = {};

  // 뱀이 방향에 따라 움직이는 코드
  if (this.direction === 'right'){
    newHead.x = this.joints[0].x + 1;
    newHead.y = this.joints[0].y;
  } else if (this.direction === 'left'){
    newHead.x = this.joints[0].x - 1;
    newHead.y = this.joints[0].y;
  } else if (this.direction === 'up'){
    newHead.x = this.joints[0].x;
    newHead.y = this.joints[0].y - 1;
  } else if (this.direction === 'down'){
    newHead.x = this.joints[0].x;
    newHead.y = this.joints[0].y + 1;
  }
  if ( this.joints.some(item => item.x === newHead.x && item.y === newHead.y) ) {
    // 뱀이 가던 방향과 반대 방향의 키보드를 만나면 게임이 끝난다.
    return false;
  } 
  this.joints.unshift(newHead);    

  if( (this.joints[0].x  === this.fruit.x) && (this.joints[0].y === this.fruit.y)) {
    // 뱀이 먹이를 만나면 먹이가 움직인다.
    do{
      this.fruit.x = Math.ceil(COLS * Math.random()) - 1;
      this.fruit.y = Math.ceil(ROWS * Math.random()) - 1;
    } while (!this.joints.some(item => item.x !== this.fruit.x && item.y !== this.fruit.y))
    return true;
  } else {
  // 뱀이 먹이를 만나지 않으면 끝마디가 제거된다.
  this.joints.pop();
  }
  if ( this.joints[0].x < 0 || this.joints[0].x >= COLS || this.joints[0].y < 0 || this.joints[0].y >= ROWS ) {
  // 뱀이 벽에 부딪히면 게임이 끝난다.
    return false;
  } 
  return true;
}
export default SnakeGameLogic;
