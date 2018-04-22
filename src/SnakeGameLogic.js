import {ROWS, COLS} from './config';

/* ---------- 질문있습니다 ------------------
if this.joints > 5 이상일 때 bomb 가 생성되거나, 혹은 bomb2 가 생성될 수 는 없나요? .length 가 길어짐에 따라 게임 난이도를 bomb 증가로 올리고 싶은데, 이게 안 되면 시간(delay) 잡으신 걸로 게임 빨라지면서 bomb 생성은 안 되나요 
------------------------------------------- */

function SnakeGameLogic() {
  
  /* Initial objects set up */
  this.joints = [ {x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}, ];    
  this.fruit = { x: 10, y: 4}
  this.bomb = { x: 5, y: 10}
  
  /* for making a direction of snake head */
  this.dx = 1; this.dy = 0;
}

SnakeGameLogic.prototype.up = function() {
  this.dx = 0; this.dy = -1;
//  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  this.dx = 0; this.dy = 1; 
//  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  this.dx = -1; this.dy = 0;
//  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  this.dx = 1; this.dy = 0;
//  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  
  let sHead = this.joints[0];
  let newPosition = {
    x: sHead.x + this.dx,
    y: sHead.y + this.dy
  };
  
  /* ----------------- Required game functions ---------------- */
  /* To do an action when a thing overlaped with snake body(all items of array) */
  // FIXME: predicate의 이름은 `is...`로 시작하게 지어주는 것이 좋습니다. (isOnSnake 라던가)
  function onSnake(position, body) {
    for(let i=0; i<body.length; i++){
      if(position.x === body[i].x && position.y === body[i].y){
        return true;
      }        
    }
    return false;
  }
  
  /* To place an object by avoiding overlaped on snake body and other gaming objects */
  // FIXME: 함수의 이름은 명확한 의미를 가지도록 짓는 것이 좋습니다 (예: findEmptyCell)
  function MakeThings(position1, body, object) {
    do{
      position1.x = Math.floor(Math.random() * COLS);
      position1.y = Math.floor(Math.random() * ROWS);   
    } while(onSnake(position1, body) || avoidOverlap(position1, object));
  }
  
  /* To indicate when a thing overlaped on bomb */
  // FIXME: `avoidOverlap`과 기능이 매우 유사하므로, 역할을 명확히 한 후 둘 중에 하나만 남겨놓는 것이 좋습니다. (isSamePos 라던가)
  function onBomb(position2, bomb) {
    if(position2.x === bomb.x && position2.y === bomb.y){
      return false;
    }return true;
  }
  
  /* To indicate when an object overlaped on another one */
  function avoidOverlap(obj1, obj2) {
    if(obj1.x === obj2.x && obj1.y === obj2.y){
      return true;
    }
    return false;
  }
  
  /* --------------- game rules during playing --------------- */
  if(onSnake(newPosition, this.joints) || !onBomb(newPosition, this.bomb)){
    return false;
  }
  
  if(newPosition.x >= 0 && newPosition.y >= 0 && newPosition.x < COLS && newPosition.y < ROWS){
    this.joints.unshift(newPosition);
    if(newPosition.x === this.fruit.x && newPosition.y === this.fruit.y){
      MakeThings(this.fruit, this.joints, this.bomb);
      MakeThings(this.bomb, this.joints, this.fruit);
    }else {
      this.joints.pop();
    }     
    return true;
    } else return false;  
}

export default SnakeGameLogic;
