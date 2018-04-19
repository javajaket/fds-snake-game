// 게임을 렌더링 할 HTML 요소의 선택자
export const GAME_ROOT = '#game-root';

// 게임 자동 실행 여부
export const AUTO_START = false;
//true일 경우에는 nextState를 자동으로 해준다.
//false일 경우에는 게임시작이라는 버튼이 생기고 버튼을 클릭해야 nextState가 실행된다.

// 게임판의 행 개수
export const ROWS = 20;

// 게임판의 열 개수
export const COLS = 30;

// 뱀의 이동 주기 (밀리세컨드 단위)
export const INITIAL_DELAY = 300;
//0.3초마다 nextState 주기가 바뀐다.
//그때마다 이동시킨다.

// 1초 마다 주기에 곱해줄 상수 (0.95로 지정하면 적당)
export const DELAY_EXPONENT = 1;
