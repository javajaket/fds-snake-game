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
1. 시작하자마자 자동 이동
2. 왼쪽 <-> 오른쪽 or 위쪽 <-> 아래쪽 KeyPress 방지
3. 최대 ROW / COLS에 도착하면 정지
4. 먹이 좌표에 도착하면 배열길이 증가
5. 머리가 이동하다 꼬리에 부딪치면 정지*/

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
}

function move(arr, xValue, yValue) {
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
    const len = this.joints.length;
    this.joints.pop();

    const newHead = {
        x: this.joints[0].x,
        y: this.joints[0].y - 1
    }
    this.joints.unshift(newHead);
    // move(this.joints, this.joints.x, this.joints.y - 1);
    console.log(this.joints);
}

SnakeGameLogic.prototype.down = function() {
    // 아래쪽 화살표 키를 누르면 실행되는 함수
    console.log('down');
    const len = this.joints.length;
    this.joints.pop();

    const newHead = {
        x: this.joints[0].x,
        y: this.joints[0].y + 1
    };
    this.joints.unshift(newHead);
    console.log(this.joints);
}

SnakeGameLogic.prototype.left = function() {
    // 왼쪽 화살표 키를 누르면 실행되는 함수
    console.log("left");
    this.joints.pop();
    const len = this.joints.length;
    const newHead = {
        x: this.joints[0].x - 1,
        y: this.joints[0].y
    };
    this.joints.unshift(newHead);
    console.log(this.joints);
};

SnakeGameLogic.prototype.right = function() {
    // 오른쪽 화살표 키를 누르면 실행되는 함수
    console.log("right");
    this.joints.pop();
    const newHead = {
        x: this.joints[0].x + 1,
        y: this.joints[0].y
    };
    this.joints.unshift(newHead);
    console.log(this.joints);
};

SnakeGameLogic.prototype.nextState = function() {
    // 한 번 움직여야 할 타이밍마다 실행되는 함수
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    // 게임이 끝났으면 `false`를 반환
    console.log(`nextState`);
    return true;
}

export default SnakeGameLogic;