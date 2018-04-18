import { ROWS, COLS } from './config';

/* 4_17 
Logic은 꼬리가 머리가 되는 것임으로 
pop으로 삭제와 unshift로 추가해주면 되고
가고자 하는 좌표로 +1 또는 -1을 해주면 된다.
-----------------------------------------
결국 x, y좌표에 +1 / -1만해주면되니 이것을
모듈화 시키자
*/

/*----------TODO List------------- 
1. 상하좌우 동작 모듈화 -> clear
2. 시작하자마자 자동 이동 -> clear
   keyboardEvent에 상태를 지정해주고 nextState에 상태를 넘겨줘서 방향에 따른 동작이 실행되게 했다.
3. 왼쪽 <-> 오른쪽 or 위쪽 <-> 아래쪽 KeyPress 방지
4. 최대 ROW / COLS에 도착하면 정지
5. 먹이 좌표에 도착하면 배열길이 증가
6. 머리가 이동하다 꼬리에 부딪치면 정지*/

function SnakeGameLogic() {
    // 각 마디의 좌표를 저장하는 배열
    //head -> 순서
    this.joints = [
        { x: 2, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 0 },
    ];

    // 먹이의 좌표
    this.fruit = { x: 3, y: 5 };
    this.pos = {
            xpos: 1,
            ypos: 1
        }
        // 방향을 정해주는 변수
    this.state = ''
}
// 상하좌우 이동 함수
function posMove(arr, xValue, yValue) {

    let len = arr.length;
    arr.pop();

    const newHead = {
        x: xValue,
        y: yValue
    };
    arr.unshift(newHead);
    return arr;
}
SnakeGameLogic.prototype.up = function() {
    // 위쪽 화살표 키를 누르면 실행되는 함수
    console.log('up');
    this.state = 'up';
    console.log(this.joints);
}

SnakeGameLogic.prototype.down = function() {
    // 아래쪽 화살표 키를 누르면 실행되는 함수
    console.log('down');
    this.state = 'down';
    console.log(this.joints);
}

SnakeGameLogic.prototype.left = function() {
    // 왼쪽 화살표 키를 누르면 실행되는 함수
    console.log("left");
    this.state = "left";
    console.log(this.joints);
};

SnakeGameLogic.prototype.right = function() {
    // 오른쪽 화살표 키를 누르면 실행되는 함수
    console.log("right");
    this.state = "right";
    console.log(this.joints);
};

SnakeGameLogic.prototype.nextState = function() {
    // 한 번 움직여야 할 타이밍마다 실행되는 함수
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    // 게임이 끝났으면 `false`를 반환
    console.log(`nextState`);
    //
    switch (this.state) {
        case 'up':
            posMove(this.joints, this.joints[0].x, this.joints[0].y - 1);
            break;
        case 'down':
            posMove(this.joints, this.joints[0].x, this.joints[0].y + 1);
            break;
        case 'left':
            posMove(this.joints, this.joints[0].x - 1, this.joints[0].y);
            break;
        case 'right':
            posMove(this.joints, this.joints[0].x + 1, this.joints[0].y);
            break;
        default:
            posMove(this.joints, this.joints[0].x + 1, this.joints[0].y);
    }
    return true;
}

export default SnakeGameLogic;