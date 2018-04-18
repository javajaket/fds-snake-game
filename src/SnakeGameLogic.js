import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 5, y: 3};
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.joints.pop();
  this.joints.unshift({x: this.joints[0].x , y: this.joints[0].y -1});

  console.log('up');
  this.direction = 'up';

  if(this.joints[0].y === COLS){
    
  }
  //return false;
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.joints.pop();
  this.joints.unshift({x: this.joints[0].x , y: this.joints[0].y +1 });
  console.log('down');
  this.direction = 'down';

  if(this.joints[0].y === COLS){
    
  }
  //return false;

}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.joints.pop();
  this.joints.unshift({x: this.joints[0].x -1, y: this.joints[0].y });
  console.log('left');
  this.direction = 'left';

  if(this.joints[0].x === ROWS){
    // for(let i = 0; i < this.joints.length; i++){
      
    // }
    
  }
  
  //return false;
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.joints.pop();
  this.joints.unshift({x : this.joints[0].x+1, y : this.joints[0].y});
  console.log('right');
  this.direction = 'right';

  // for(let i =0;i<this.joints.length;i++){
  //   this.joints[i].x ++;
  // }




  if(this.joints[0].x === ROWS){
    
  }
  //return false;

}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  console.log(`nextState`);

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

  
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
    //this.joints.unshift({x: this.fruit.x, y: this.fruit.y});
    this.fruit = {x: Math.floor(Math.random()*30), y: Math.floor(Math.random()*20)};

    if (this.direction === 'up') {
      this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y-1})
    }else if(this.direction ==='down'){
      this.joints.unshift({x: this.joints[0].x, y: this.joints[0].y+1})
    }else if(this.direction ==='right'){
      this.joints.unshift({x: this.joints[0].x+1, y: this.joints[0].y})
    }else{
      this.joints.unshift({x: this.joints[0].x-1, y: this.joints[0].y})
    }

    if(this.joints[0].x === ROWS||this.joints[0].y ===COLS){
      // for(let i = 0; i < this.joints.length; i++){
        
      // }
      
    }
    // if (this.direction === 'up'||this.direction ==='down'||this.direction ==='left'||this.direction ==='right') {
    //   this.joints.unshift({x: this.fruit.x, y: this.fruit.y})
    // }

    // if(this.joints[0].x === 30){
    //   return false;
    // }
    
    return false;
  }
  


  
  // switch(this.joints){
  //   case SnakeGameLogic.prototype.right:
  //   for(let i =0 ; i<this.joints.length; i ++){
  //     this.joints[i].x+1;
  //   };
  //   if(this.joints[0].x -=1){
  //     // return false;
  //   };
  //   break;
  //   case SnakeGameLogic.prototype.left:
  //   this.joints.x-1;
  //   break;
  //   case SnakeGameLogic.prototype.up:
  //   this.joints.y+1;
  //   break;
  //   default:
  //   this.joints.y-1;
  //   break;
  // }
  // for(let i =0;i<this.joints.length;i++){
  //   if(){
  //     this.joints[i].x +=1;
  //   }else if(this.joints[0].y>0){
  //     this.joints[i].y +=1;
  //   }
  // }

  return true;
}

export default SnakeGameLogic;
