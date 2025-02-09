## 기능 목록

### 게임 시작

- 경주 할 자동차의 이름을 입력하며 게임을 시작한다.

  - `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 을 출력 후 사용자 입력을 받는다.
  - 조건: 자동차 이름은 5자 이하만 가능하며 쉼표를 기준으로 구분한다.

- 한 경주에서 자동차가 이동을 시도할 횟수를 결정한다.

  - `시도할 횟수는 몇 회인가요?` 를 출력 후 사용자 입력을 받는다.
  - 자동차는 사용자가 입력한 횟수만큼 이동(전진 or 멈춤) 가능하다.

- 사용자가 잘못된 값을 입력한 경우(자동차 이름이 5자를 초과할 때, 시도 횟수가 숫자 형식이 아닐 때) throw문으로 예외 발생시킨 후 애플리케이션을 종료한다. ex) `[ERROR] ~`

---

### 게임 진행

- 위에서 입력한 시도 횟수만큼 경주를 진행한다.
  - 조건: 자동차별로 0에서 9 사이의 무작위 값을 구한 후 그 값이 4 이상일 경우 전진한다.
- 각 회차마다 `이름 : 전진횟수(-)` 의 형태로 실행 결과를 출력한다.
  - 조건: 맨 처음 결과 출력 시엔 `실행 결과`를 먼저 출력한다.

---

### 게임 완료

- 경주 게임이 완료되면 전진한 횟수가 가장 많은 사람을 우승자로 알려준다.
  - 우승자는 한 명 이상일 수 있다.
  - 여러 명일 경우 쉼표를 이용해 구분한다. ex) `최종 우승자 : 이름1, 이름2`
