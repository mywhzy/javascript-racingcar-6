import { MissionUtils } from '@woowacourse/mission-utils';

export default class Game {
  async start() {
    await this.enterCarNames();
    await this.enterNumberOfAttempts();
  }

  async enterCarNames() {
    MissionUtils.Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNameStr = await MissionUtils.Console.readLineAsync('');
    const carList = carNameStr.split(',');

    if (carList.filter((item) => item.length > 5).length) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }

    return carList;
  }

  async enterNumberOfAttempts() {
    MissionUtils.Console.print('시도할 횟수는 몇 회인가요?');
    const count = await MissionUtils.Console.readLineAsync('');

    if (/[^1-9]/.test(count)) {
      throw new Error('[ERROR] 횟수는 숫자 형식만 입력 가능합니다.');
    }

    return count;
  }
}
