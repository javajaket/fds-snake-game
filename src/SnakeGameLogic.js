import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 10, y: 10};
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'up';
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'down';
  console.log('down');


}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'left';
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  
  this.direction = 'right';
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  console.log(`nextState`);

  ///자동으로 한칸씩 증가
  if (this.direction === 'up') {
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y-1})
  }else if(this.direction ==='down'){
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y+1})
  }else if(this.direction ==='right'){
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x+1, y: this.joints[0].y})
  }else{
    this.joints.pop();
    this.joints.unshift({x: this.joints[0].x-1, y: this.joints[0].y})
  }

  //먹이를 먹고 앞에 하나가 증가
  for(let item of this.joints){
    if (item.x === this.fruit.x && item.y === this.fruit.y){
    //this.joints.unshift({x: this.fruit.x, y: this.fruit.y});
      this.fruit = {x: Math.floor(Math.random()*30), y: Math.floor(Math.random()*20)};

      if (this.direction === 'up') {
        this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y-1})
      }else if(this.direction ==='down'){
        this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y+1})
      }else if(this.direction ==='right'){
        this.joints.unshift({x: this.joints[0].x+1, y: this.joints[0].y})
      }else if(this.direction ==='left'){
        this.joints.unshift({x: this.joints[0].x-1, y: this.joints[0].y})
      }
    }
  }
  //판을 넘어가면 중단
  if(this.joints[0].x<0 ||
     this.joints[0].x===30||
     this.joints[0].y<0 ||
     this.joints[0].y===20
    )
    {
      return false;
    } 
    
  // this.joints.some(item => {
  //   item.x
  // })

  //좌우/상하 반복

    if(true){
    let count=0;
    for(let i=1; i<this.joints.length;i++){
      if(this.joints[i].y===this.joints[0].y&&this.joints[i].x===this.joints[0].x){
        count ++
      }
    }
    return count===0;
  }
  






  return true;
}

export default SnakeGameLogic;
