import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0}
  ];

  // 먹이의 좌표
  this.fruit = {
    x : Math.ceil((Math.random() * COLS)-1),
    y : Math.ceil((Math.random() * ROWS)-1)
  }

  // 기본 진행 방향
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수'
  // y 좌표를 변환 
  // nextState 함수가 실행될 때마다 각 마디의 y 좌표 값은 1씩 줄어들게 함
  // up 키를 누르면 direction의 값은 'up'
  //console.log('up');
  this.direction = 'up';
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  // y 좌표를 변환 
  // nextState 함수가 실행될 때마다 각 마디의 y 좌표 값은 1씩 늘어들게 함
  // down 키를 누르면 direction의 값은 'down'
  //console.log('down');
  this.direction = 'down';
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  // x 좌표를 변환 
  // nextState 함수가 실행될 때 마다 각 마디의 x좌표는 1씩 줄어들게 함
  // left 키를 누르면 direction의 값은 'left'
  //console.log('left');
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  // x 좌표를 변환 
  // nextState 함수가 실행될 때 마다 각 마디의 x좌표는 1씩 늘어나게 함
  // right 키를 누르면 direction의 값은 'right'
  //console.log('right');
  this.direction = 'right';
}

SnakeGameLogic.prototype.nextState = function () {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  // 꼬리에 추가할 위치 값 = switch 루프로 인해 꼬리의 위치 값이 바뀌기전의 위치값 기억
  const cellX = this.joints[this.joints.length - 1].x;
  const cellY = this.joints[this.joints.length - 1].y;

  // nextState()가 실행될 때 마다 direction의 값에 따라 위치 이동 = 꼬리를 없애고 머리를 추가
  switch(this.direction){ 
    case 'right' : // direction의 값이 'right'이면 우측 이동
      this.joints.unshift({
        x: this.joints[0].x + 1,
        y: this.joints[0].y
      });
      this.joints.pop();
      break;
    case 'left' : // direction의 값이 'left'이면 좌측 이동
      this.joints.unshift({
        x: this.joints[0].x - 1,
        y: this.joints[0].y
      });
      this.joints.pop();
      break;
    case 'up' : // direction의 값이 'up'이면 위로 이동
      this.joints.unshift({
        x: this.joints[0].x,
        y: this.joints[0].y - 1
      });
      this.joints.pop();
      break;
    case 'down' : // direction의 값이 'down'이면 아래로 이동
      this.joints.unshift({
        x: this.joints[0].x,
        y: this.joints[0].y + 1
      });
      this.joints.pop();
      break;
    default : return false;
  };

  // fruit를 먹었을때 = fruit와 snake머리의 위치가 동일할 때 
  if(this.fruit.x === this.joints[0].x && this.fruit.y === this.joints[0].y){
    
    // snake 꼬리에 값 추가
    this.joints.push({
      x : cellX,
      y : cellY
    });
    
    // fruit는 셀안에서 임의의 위치에 새로 생성되어야함
    this.fruit.x = Math.ceil((Math.random() * COLS)-1);
    this.fruit.y = Math.ceil((Math.random() * ROWS)-1);

    // 새로 생성된 fruit 좌표 확인
    document.querySelector('.panel').innerHTML = `fruit 생성 좌표는 x : ${this.fruit.x}, y : ${this.fruit.y} 입니다.`;
  }

  // snake 몸통끼리 부딪치면 게임 종료
  // snake의 첫번째 요소값을 없앤 새로운 배열 선언 = 머리만 제거한 몸통
  const newJoints = this.joints.slice(1);
  // 새로운 배열 요소들의 값과 snake의 첫번째 요소 값이 동일한지 검사 = 머리와 몸통의 값이 동일한 경우 게임 종료
  if (newJoints.some(item => item.x == this.joints[0].x && item.y == this.joints[0].y)) {
    document.querySelector('.panel').innerHTML = '';
    return false;
  }

  // 만약 snake가 정해진 셀의 위치를 벗어나면 게임 종료
  if (this.joints[0].x > COLS-1 ||
      this.joints[0].y > ROWS-1 ||
      this.joints[0].x < 0 ||
      this.joints[0].y < 0) {
      document.querySelector('.panel').innerHTML = '';
    return false;
  } else {
    return true;
  }

}

export default SnakeGameLogic;