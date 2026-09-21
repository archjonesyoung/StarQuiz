/* 數學單元補充 20 道原創計算與應用題；僅在本機使用，尚未發布。 */
(() => {
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const lcm = (a, b) => a * b / gcd(a, b);
  const fraction = (n, d) => {
    const factor = gcd(n, d);
    return `${n / factor}/${d / factor}`;
  };
  const number = value => String(Number(value.toFixed(2)));
  const numericChoices = (answer, step = 1, suffix = '') => {
    const values = [answer, answer + step, answer + step * 2, answer - step > 0 ? answer - step : answer + step * 3];
    return values.map(value => `${number(value)}${suffix}`);
  };
  const makeQuestion = (unit, index, question, options, explanation) => {
    if (new Set(options).size !== 4) throw new Error(`${unit.id} 第${index + 1}題選項重複`);
    const shift = index % 4;
    return {
      id: `${unit.id}_extra_math_${String(index + 1).padStart(2, '0')}`,
      question,
      options: [...options.slice(shift), ...options.slice(0, shift)],
      correctIndex: (4 - shift) % 4,
      explanation
    };
  };

  function bryantQuestion(unit, unitIndex, index) {
    const j = index % 10;
    switch (unitIndex) {
      case 0: {
        const a = (j + 2) * 6;
        const b = (j + 3) * 4;
        const answer = index < 10 ? gcd(a, b) : lcm(a, b);
        const topic = index < 10 ? '最大公因數' : '最小公倍數';
        return makeQuestion(unit, index, `${a} 和 ${b} 的${topic}是多少？`, numericChoices(answer, index < 10 ? 1 : 2), `先找兩數的共同因數或公倍數，可得${topic}是 ${answer}。`);
      }
      case 1: {
        const a = index + 2, b = j % 4 + 3, c = j % 5 + 2, d = j % 3 + 2;
        const n = a * d, denominator = b * c;
        const answer = fraction(n, denominator);
        return makeQuestion(unit, index, `計算 ${a}/${b} ÷ ${c}/${d}，結果約分後是多少？`, [answer, fraction(n + denominator, denominator), fraction(n, denominator + 1), fraction(n + 1, denominator)], `除以分數要乘以倒數：${a}/${b} × ${d}/${c}＝${answer}。`);
      }
      case 2: {
        if (index < 10) {
          const first = j + 3, difference = j % 4 + 2, nth = j % 4 + 6;
          const answer = first + (nth - 1) * difference;
          return makeQuestion(unit, index, `一列數從 ${first} 開始，每次增加 ${difference}；第 ${nth} 個數是多少？`, numericChoices(answer, difference), `第 ${nth} 個數＝${first}＋(${nth}－1)×${difference}＝${answer}。`);
        }
        const triangles = j + 3, answer = triangles * 2 + 1;
        return makeQuestion(unit, index, `${triangles} 個三角形排成一列，相鄰兩個共用一邊，共需要幾根一樣長的小棒？`, numericChoices(answer, 2, ' 根'), `第一個三角形用3根，以後每增加一個用2根，共 ${3}＋(${triangles}－1)×2＝${answer} 根。`);
      }
      case 3: {
        const divisor = (j + 2) / 10, quotient = (index + 4) / 2;
        const dividend = Number((divisor * quotient).toFixed(2));
        return makeQuestion(unit, index, `計算 ${number(dividend)} ÷ ${number(divisor)}，商是多少？`, numericChoices(quotient, 0.5), `${number(divisor)}×${number(quotient)}＝${number(dividend)}，所以商是 ${number(quotient)}。`);
      }
      case 4: {
        if (index < 10) {
          const a = (j + 2) * 3, b = (j + 3) * 3;
          const answer = `${j + 2}：${j + 3}`;
          return makeQuestion(unit, index, `紅珠有 ${a} 顆、藍珠有 ${b} 顆，紅珠與藍珠的最簡整數比是多少？`, [answer, `${a}：${b}`, `${j + 3}：${j + 2}`, `${j + 2}：${j + 5}`], `兩項都除以3，${a}：${b}＝${answer}。`);
        }
        const a = j + 3, b = 2;
        const answer = a / b;
        return makeQuestion(unit, index, `甲、乙兩種果汁的容量比是 ${a}：${b}，甲對乙的比值是多少？`, numericChoices(answer, 0.5), `比值＝前項÷後項＝${a}÷${b}＝${number(answer)}。`);
      }
      case 5: {
        const radius = j + 2;
        const answer = index < 10 ? 2 * 3.14 * radius : 3.14 * radius + 2 * radius;
        const stem = index < 10 ? `半徑 ${radius} 公分的圓，圓周長是多少公分？` : `半徑 ${radius} 公分的半圓形，包含直徑的周長是多少公分？`;
        return makeQuestion(unit, index, `${stem}（圓周率取3.14）`, numericChoices(answer, 1, ' 公分'), index < 10 ? `圓周長＝2×3.14×${radius}＝${number(answer)} 公分。` : `半圓周長＝3.14×${radius}＋${2 * radius}＝${number(answer)} 公分。`);
      }
      case 6: {
        const radius = j + 2;
        const answer = 3.14 * radius * radius / (index < 10 ? 1 : 2);
        const stem = index < 10 ? '圓面積' : '半圓面積';
        return makeQuestion(unit, index, `半徑 ${radius} 公分的${stem}是多少？（圓周率取3.14）`, numericChoices(answer, 1, ' 平方公分'), `${stem}＝3.14×${radius}×${radius}${index < 10 ? '' : '÷2'}＝${number(answer)} 平方公分。`);
      }
      case 7: {
        const speed = j + 3, time = j % 5 + 3;
        const distance = speed * time;
        return index < 10
          ? makeQuestion(unit, index, `跑了 ${distance} 公尺、花 ${time} 秒，平均速率是多少公尺／秒？`, numericChoices(speed, 1, ' 公尺／秒'), `速率＝距離÷時間＝${distance}÷${time}＝${speed} 公尺／秒。`)
          : makeQuestion(unit, index, `每秒走 ${speed} 公尺，持續 ${time} 秒，共走了多少公尺？`, numericChoices(distance, 2, ' 公尺'), `距離＝速率×時間＝${speed}×${time}＝${distance} 公尺。`);
      }
      case 8: {
        const mapCm = j + 2, scale = index < 10 ? 100 : 500;
        const answer = mapCm * scale / 100;
        return makeQuestion(unit, index, `比例尺是 1：${scale}，地圖上量得 ${mapCm} 公分，實際距離是多少公尺？`, numericChoices(answer, index < 10 ? 1 : 5, ' 公尺'), `實際距離＝${mapCm}×${scale}＝${mapCm * scale} 公分＝${answer} 公尺。`);
      }
    }
  }

  function melodyQuestion(unit, unitIndex, index) {
    const j = index % 10;
    switch (unitIndex) {
      case 0: {
        const digit = j % 8 + 2, place = index < 10 ? 10000 : 1000000;
        const value = digit * place, full = value + 3217 + j * 13;
        return makeQuestion(unit, index, `在 ${full.toLocaleString('en-US')} 中，${index < 10 ? '萬' : '百萬'}位上的數字「${digit}」所代表的值是多少？`, numericChoices(value, place), `數字 ${digit} 在${index < 10 ? '萬' : '百萬'}位，表示 ${digit}×${place}＝${value.toLocaleString('en-US')}。`);
      }
      case 1: {
        const a = 123 + index * 13, b = 12 + index % 9, answer = a * b;
        return makeQuestion(unit, index, `一盒彩色筆有 ${a} 支，${b} 盒共有幾支？`, numericChoices(answer, a, ' 支'), `${a}×${b}＝${answer} 支。`);
      }
      case 2: {
        const known = index < 10 ? 35 + j * 8 : 15 + j * 6;
        const total = index < 10 ? 180 : 90;
        const answer = total - known;
        return makeQuestion(unit, index, `兩個角合起來是 ${total} 度，其中一角是 ${known} 度，另一角是多少度？`, numericChoices(answer, 5, ' 度'), `${total}－${known}＝${answer} 度。`);
      }
      case 3: {
        const denominator = j % 5 + 3, whole = j % 4 + 1, remainder = j % (denominator - 1) + 1;
        const numerator = whole * denominator + remainder;
        if (index < 10) {
          const answer = `${whole}又${remainder}/${denominator}`;
          return makeQuestion(unit, index, `假分數 ${numerator}/${denominator} 換成帶分數是多少？`, [answer, `${whole + 1}又${remainder}/${denominator}`, `${whole}又${remainder}/${denominator + 1}`, `${whole + 2}又${remainder}/${denominator}`], `${numerator}÷${denominator}＝${whole}餘${remainder}，所以是${answer}。`);
        }
        return makeQuestion(unit, index, `帶分數 ${whole}又${remainder}/${denominator} 換成假分數是多少？`, [`${numerator}/${denominator}`, `${numerator + denominator}/${denominator}`, `${numerator - 1}/${denominator}`, `${numerator + 1}/${denominator}`], `${whole}×${denominator}＋${remainder}＝${numerator}，所以是 ${numerator}/${denominator}。`);
      }
      case 4: {
        const kilometers = index + 12;
        return index < 10
          ? makeQuestion(unit, index, `${kilometers} 公里是多少公尺？`, numericChoices(kilometers * 1000, 1000, ' 公尺'), `1公里＝1000公尺，${kilometers}公里＝${kilometers * 1000}公尺。`)
          : makeQuestion(unit, index, `${(kilometers + 0.5) * 1000} 公尺是多少公里？`, numericChoices(kilometers + 0.5, 0.5, ' 公里'), `1000公尺＝1公里，所以是 ${number(kilometers + 0.5)} 公里。`);
      }
      case 5: {
        const divisor = j % 7 + 3, quotient = index + 12, dividend = divisor * quotient;
        return makeQuestion(unit, index, `${dividend} 顆糖平均分成 ${divisor} 份，每份有幾顆？`, numericChoices(quotient, 1, ' 顆'), `${dividend}÷${divisor}＝${quotient} 顆。`);
      }
      case 6: {
        const first = 30 + index % 5 * 7, second = 40 + index % 7 * 5;
        const answer = 180 - first - second;
        return makeQuestion(unit, index, `一個三角形有兩個內角分別是 ${first} 度、${second} 度，第三個角是多少度？`, numericChoices(answer, 5, ' 度'), `三角形內角和180度，第三角＝180－${first}－${second}＝${answer}度。`);
      }
      case 7: {
        const a = index + 12, b = index % 6 + 3, c = index % 4 + 2;
        const answer = index < 10 ? (a + b) * c : a + b * c;
        const stem = index < 10 ? `先把 ${a} 顆和 ${b} 顆糖合成一包，再準備 ${c} 包，共有幾顆？` : `已有 ${a} 顆糖，再買 ${c} 包、每包 ${b} 顆，共有幾顆？`;
        return makeQuestion(unit, index, stem, numericChoices(answer, b, ' 顆'), index < 10 ? `(${a}＋${b})×${c}＝${answer} 顆。` : `${a}＋${b}×${c}＝${answer} 顆。`);
      }
      case 8: {
        const a = (125 + index * 13) / 100, b = (35 + index * 7) / 100;
        const answer = index < 10 ? a + b : a - b;
        return makeQuestion(unit, index, `計算 ${number(a)} ${index < 10 ? '＋' : '－'} ${number(b)}，答案是多少？`, numericChoices(answer, 0.01), `小數點對齊計算，${number(a)} ${index < 10 ? '＋' : '－'} ${number(b)}＝${number(answer)}。`);
      }
      case 9: {
        const values = [j + 3, j + 7, j + 4, j + 9, j + 5];
        const table = `週一至週五的閱讀本數依序是 ${values.join('、')} 本`;
        const answer = index < 10 ? values.reduce((sum, value) => sum + value, 0) : values[3] - values[0];
        const stem = index < 10 ? `${table}，這五天共讀了幾本？` : `${table}，週四比週一多讀幾本？`;
        return makeQuestion(unit, index, stem, numericChoices(answer, 1, ' 本'), index < 10 ? `把五天的本數相加，共 ${answer} 本。` : `${values[3]}－${values[0]}＝${answer} 本。`);
      }
    }
  }

  for (const [owner, build] of [['bryant', bryantQuestion], ['melody', melodyQuestion]]) {
    CURRICULUM_DATA[owner].subjects.math.units.forEach((unit, unitIndex) => {
      const originals = unit.questions.filter(question => !question.id.includes('_extra_'));
      const supplement = Array.from({ length: 20 }, (_, index) => build(unit, unitIndex, index));
      unit.questions = [...originals, ...supplement];
    });
  }
})();
