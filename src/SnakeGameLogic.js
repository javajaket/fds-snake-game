import { ROWS, COLS } from './config';



/*----------TODO List------------- 
1. 상하좌우 동작 모듈화 -> clear
2. 시작하자마자 자동 이동 -> clear
   keyboardEvent에 상태를 지정해주고 nextState에 상태를 넘겨줘서 방향에 따른 동작이 실행되게 했다.
3. 왼쪽 <-> 오른쪽 or 위쪽 <-> 아래쪽 KeyPress 방지
4. 최대 ROW / COLS에 도착하면 정지 -> clear
5. 먹이 좌표에 도착하면 배열길이 증가
6. 머리가 이동하다 꼬리에 부딪치면 정지 -> clear
*/

function SnakeGameLogic() {
    // 각 마디의 좌표를 저장하는 배열
    //head -> 순서
    this.joints = [
        { x: 2, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 0 },
    ];
    this.newHead = {};
    // 먹이의 좌표
    this.fruit = { x: 3, y: 5 };

    // 방향을 정해주는 변수
    this.state = {
        direction: '',
        startEnd: true
    };
}

// 상하좌우 이동 함수
// return은 머리가 몸통에 부딪혔을때 정지하는 동작을 구현하기 위해 head정보를 반환한다.
function posMove(joints, newXvalue, newYvalue, fruit, newHead) {
    newHead = { x: newXvalue, y: newYvalue };
    // 꼬리가 머리로 바뀌는 동작 && 먹이 먹는 동작
    // 꼬리가 머리로 바뀌는 좌표가 먹이와 같은 곳이면 꼬리를 떼는 동작을 없앤다
    if (newXvalue === fruit.x && newYvalue === fruit.y) {
        joints.unshift(newHead);
        fruit.x = Math.trunc(Math.random() * COLS);
        fruit.y = Math.trunc(Math.random() * ROWS);
    } else {
        joints.pop();
        joints.unshift(newHead);
    }
    return newHead;
}
// 게임이 정지하는 함수
// nextState에서 Head정보를 갱신받아와서 조건검사
function findFunc(joints, newHead) {
    // newHead정보는 joints[0]에 항상포함되기때문에 능력부족으로 some함수 사용 불가
    // FIXME: `Array.prototype.slice`를 쓴다면...?
    // 반복문으로 joints[1]부터 마지막index까지 검사하면서 head와 같은 것이 있는지 확인
    for (let i = 1; i < joints.length; i++) {
        if (joints[i].x === newHead.x && joints[i].y === newHead.y) {
            return false;
        }
    }
    if (joints[0].y === ROWS || joints[0].x === COLS) {
        return false;
    } else if (joints[0].y < 0 || joints[0].x < 0) {
        return false;
    } else {
        return true
    }
}
SnakeGameLogic.prototype.up = function() {
    // 위쪽 화살표 키를 누르면 실행되는 함수
    console.log('up');
    this.state.direction = 'up';
}

SnakeGameLogic.prototype.down = function() {
    // 아래쪽 화살표 키를 누르면 실행되는 함수
    console.log('down');
    this.state.direction = 'down';
}

SnakeGameLogic.prototype.left = function() {
    // 왼쪽 화살표 키를 누르면 실행되는 함수
    console.log("left");
    this.state.direction = "left";
};

SnakeGameLogic.prototype.right = function() {
    // 오른쪽 화살표 키를 누르면 실행되는 함수
    console.log("right");
    this.state.direction = "right";
};


SnakeGameLogic.prototype.nextState = function() {
    // 한 번 움직여야 할 타이밍마다 실행되는 함수
    // 게임이 아직 끝나지 않았으면 `true`를 반환
    // 게임이 끝났으면 `false`를 반환
    console.log(`nextState`);

    switch (this.state.direction) {
        case "up":
            // FIXME: `posMove`를 메소드로 정의한다면 매개변수 개수를 줄일 수 있습니다.
            this.newHead = posMove(this.joints, this.joints[0].x, this.joints[0].y - 1, this.fruit, this.newHead);
            break;
        case "down":
            this.newHead = posMove(this.joints, this.joints[0].x, this.joints[0].y + 1, this.fruit, this.newHead);
            break;
        case "left":
            this.newHead = posMove(this.joints, this.joints[0].x - 1, this.joints[0].y, this.fruit, this.newHead);
            break;
        case "right":
            this.newHead = posMove(this.joints, this.joints[0].x + 1, this.joints[0].y, this.fruit, this.newHead);
            break;
        default:
            console.log('default');
            this.newHead = posMove(this.joints, this.joints[0].x + 1, this.joints[0].y, this.fruit, this.newHead);
            break;
    }
    return findFunc(this.joints, this.newHead);
}

export default SnakeGameLogic;
