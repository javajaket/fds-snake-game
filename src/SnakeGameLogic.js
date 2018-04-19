import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  //SnakeGameLogic()은 한번 실행할때 마다 생성 
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{x: 2, y: 0},{ x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 4};
}


// 한 번 움직여야 할 타이밍마다 실행되는 함수
SnakeGameLogic.prototype.nextState = function() {
  //키보드를 두번째 누르기 전까지 계속 움직여야 하므로, 방향 함수도 nextState에 
  //작성하는 것이 맞다.
  //이전에 어떤 방향키를 눌렀냐-의 정보를 저장해 두는것이 필요하다(변수)
      SnakeGameLogic.prototype.up = function() {
        // 위쪽 화살표 키를 누르면 실행되는 함수
        // 위쪽 키를 누르면 this.joint가 x+1, y-1
        const newHead = { x: this.joints[0].x, y: this.joints[0].y - 1 };
        this.joints.unshift(newHead);
      };
      console.log("up");

      SnakeGameLogic.prototype.down = function() {
        // 아래쪽 화살표 키를 누르면 실행되는 함수
        // 아래쪽 키를 누르면 this.joint가 x-1, y+1
        const newHead = { x: this.joints[0].x, y: this.joints[0].y + 1 };
        this.joints.unshift(newHead);
      };
      console.log("down");

      SnakeGameLogic.prototype.left = function() {
        // 왼쪽 화살표 키를 누르면 실행되는 함수
        // 왼쪽 키를 누르면 this.joint가 x-1, y
        const newHead = { x: this.joints[0].x - 1, y: this.joints[0].y };
        this.joints.unshift(newHead);
      };
      console.log("left");

      SnakeGameLogic.prototype.right = function() {
        // 오른쪽 키를 누르면 this.joint가 x+1, y
        const newHead = { x: this.joints[0].x + 1, y: this.joints[0].y };
        this.joints.unshift(newHead);
      };
      console.log("right");          


  // 만약 뱀 머리의 위치가 벽에 닿으면 다이다이다이! 
  if (this.joints[0].x >= COLS
    || this.joints[0].y >= ROWS
    || this.joints[0].x < 0
    || this.joints[0].y < 0) {
  return false;} 
  
  // 뱀 머리가 this.fruit에 닿으면, this.joints[] 머리에 과일 좌표값 unshift 
  // 쌤 힌트. 열매를 먹었을때 pop을 안하면 길이가 늘어나겠져??????? 
  // 과일이 math.random으로 새로생긴다.
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
        this.fruit.x = Math.floor(Math.random() * COLS + 1);
				this.fruit.y = Math.floor(Math.random() * ROWS + 1);
        }
        else if (!this.joints.some(item => item.x !== this.fruit.x && item.y !== this.fruit.y)) {
           return true;} else {this.joints.pop()}
          

// 새 머리 
  const newHead = {};
// 기존 몸통
  const joints = this.joints;
  if (joints.some(item => item.x === newHead.x && item.y === newHead.y)){
    return false;
  }
  
  console.log(`nextState`);
  return true;
}
  

export default SnakeGameLogic;
