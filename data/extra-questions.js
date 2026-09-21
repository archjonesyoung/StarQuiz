/* 依各單元已核對的學習卡補充原創複習題；僅在本機使用，尚未發布。 */
(() => {
  const TARGET_COUNT = 30;
  const UNIT_CONCEPT_TITLES = {
    m_hanlin_115_4a_science_01: ['天空觀察', '方位與高度角', '高度角判讀', '月亮位置變化', '月相週期', '農曆觀月'],
    m_hanlin_115_4a_science_02: ['水域種類', '水生植物分類', '蓮與睡蓮', '漂浮與沉水植物', '水生動物', '保護水域'],
    m_hanlin_115_4a_science_03: ['物質變化', '溫度升降', '水與冰的變化', '酸鹼性', '天然指示劑', '公平實驗'],
    m_hanlin_115_4a_science_04: ['聲音與振動', '聲音傳播', '光源與反射', '光與影子', '鏡面反射', '聲光訊息與安全'],
    m_hanlin_115_4a_social_01: ['地圖種類', '讀圖要素', '方向標', '電子地圖', '出遊規劃'],
    m_hanlin_115_4a_social_02: ['地形種類', '山地丘陵與臺地', '盆地與平原', '地形與生活', '天氣與氣候', '氣候與產業'],
    m_hanlin_115_4a_social_03: ['居住地選擇', '人口變動', '人口遷移', '年齡結構', '少子化與高齡化', '多元家庭'],
    m_hanlin_115_4a_social_04: ['飲食文化', '文化交流', '服飾文化', '語言保存', '姓名與稱呼', '尊重文化差異'],
    m_hanlin_115_4a_social_05: ['節慶意義', '地方特色節慶', '族群節慶', '節日類型', '生命禮俗', '參與節慶禮儀'],
    m_hanlin_115_4a_social_06: ['蒐集家鄉故事', '訪問方法', '資料查證', '導覽內容整理', '導覽路線設計', '導覽呈現']
  };

  function rotateAnswers(question, offset) {
    const shift = offset % question.options.length;
    question.options = [...question.options.slice(shift), ...question.options.slice(0, shift)];
    question.correctIndex = (question.correctIndex - shift + question.options.length) % question.options.length;
    return question;
  }

  function conceptNotes(unit) {
    const titles = UNIT_CONCEPT_TITLES[unit.id];
    return (unit.studyCard?.concepts || []).map((raw, index) => {
      const match = raw.match(/^【([^】]+)】[：:]?\s*([\s\S]*)$/);
      return {
        title: titles?.[index] || (match ? match[1].trim() : `重點${index + 1}`),
        detail: (match ? match[2] : raw).trim()
      };
    }).filter(note => note.detail);
  }

  function buildConceptQuestions(unit, owner, subject) {
    const notes = conceptNotes(unit);
    if (notes.length < 4) return [];
    const questions = [];
    const add = (kind, number, question, options, explanation) => {
      const item = {
        id: `${unit.id}_extra_${kind}_${String(number).padStart(2, '0')}`,
        question,
        options,
        correctIndex: 0,
        explanation
      };
      questions.push(rotateAnswers(item, questions.length % 4));
    };

    notes.forEach((note, index) => {
      const others = [1, 2, 3].map(offset => notes[(index + offset) % notes.length]);
      add(
        'description', index + 1,
        `在「${unit.name}」的學習卡中，「${note.title}」應配對哪一段重點說明？`,
        [note.detail, ...others.map(other => other.detail)],
        `「${note.title}」的學習重點是：${note.detail}`
      );
      add(
        'heading', index + 1,
        `複習「${unit.name}」時，看到筆記「${note.detail}」，應歸入哪個重點？`,
        [note.title, ...others.map(other => other.title)],
        `這段筆記對應學習卡的「${note.title}」。`
      );
    });

    let pairNumber = 0;
    for (let first = 0; first < notes.length; first++) {
      for (let second = first + 1; second < notes.length; second++) {
        const a = notes[first];
        const b = notes[second];
        const wrongA = notes[(first + 1) % notes.length];
        const wrongB = notes[(second + 1) % notes.length];
        pairNumber++;
        add(
          'pair', pairNumber,
          `「${unit.name}」有兩段筆記：①${a.detail} ②${b.detail}。它們依序屬於哪兩個學習重點？`,
          [
            `${a.title}／${b.title}`,
            `${wrongA.title}／${b.title}`,
            `${a.title}／${wrongB.title}`,
            `${wrongA.title}／${wrongB.title}`
          ],
          `第一段是「${a.title}」，第二段是「${b.title}」。`
        );
      }
    }
    return questions;
  }

  function buildBryantEnglishQuestions(unit) {
    const verbs = [
      ['go', 'went', 'goes', 'going', 'to the park', 'last Sunday'],
      ['eat', 'ate', 'eats', 'eating', 'breakfast at home', 'this morning'],
      ['buy', 'bought', 'buys', 'buying', 'a new notebook', 'yesterday'],
      ['see', 'saw', 'sees', 'seeing', 'a rainbow after school', 'yesterday'],
      ['write', 'wrote', 'writes', 'writing', 'a letter to his friend', 'last night'],
      ['do', 'did', 'does', 'doing', 'his homework', 'yesterday evening'],
      ['play', 'played', 'plays', 'playing', 'basketball with his cousins', 'last weekend'],
      ['watch', 'watched', 'watches', 'watching', 'a science video', 'last night'],
      ['live', 'lived', 'lives', 'living', 'in Taichung', 'last year'],
      ['visit', 'visited', 'visits', 'visiting', 'his grandparents', 'last month'],
      ['study', 'studied', 'studies', 'studying', 'English at the library', 'last Friday'],
      ['make', 'made', 'makes', 'making', 'a paper plane', 'yesterday afternoon'],
      ['take', 'took', 'takes', 'taking', 'a photo of the river', 'last Sunday'],
      ['have', 'had', 'has', 'having', 'lunch with his classmates', 'yesterday']
    ];
    const questions = [];
    verbs.forEach(([base, past, present, ing, action, time], index) => {
      questions.push(rotateAnswers({
        id: `${unit.id}_extra_past_${String(index + 1).padStart(2, '0')}`,
        question: `Bryant ___ ${action} ${time}. Which verb completes the past-tense sentence?`,
        options: [past, base, present, ing],
        correctIndex: 0,
        explanation: `「${time}」指過去時間，${base} 的過去式是 ${past}。`
      }, index % 4));
      questions.push(rotateAnswers({
        id: `${unit.id}_extra_did_${String(index + 1).padStart(2, '0')}`,
        question: `Did Bryant ___ ${action} ${time}? Choose the verb after “Did”.`,
        options: [base, past, present, ing],
        correctIndex: 0,
        explanation: `問句已使用過去式助動詞 Did，後面的動詞要用原形 ${base}。`
      }, (index + 1) % 4));
    });
    return questions;
  }

  function buildMelodyEnglishQuestions(unit) {
    const actions = [
      ['read', 'reading', 'reads', 'a comic book', 'a story for her sister'],
      ['write', 'writing', 'writes', 'a birthday card', 'her name on the paper'],
      ['play', 'playing', 'plays', 'a board game', 'with her classmates'],
      ['run', 'running', 'runs', 'in the playground', 'around the track'],
      ['swim', 'swimming', 'swims', 'in the pool', 'across the small pool'],
      ['dance', 'dancing', 'dances', 'on the stage', 'with her friends'],
      ['draw', 'drawing', 'draws', 'a picture of a cat', 'a map of the park'],
      ['sing', 'singing', 'sings', 'a happy song', 'with the school choir'],
      ['cook', 'cooking', 'cooks', 'dinner with her mother', 'vegetables for lunch'],
      ['eat', 'eating', 'eats', 'an apple', 'a sandwich'],
      ['walk', 'walking', 'walks', 'to the library', 'along the river'],
      ['jump', 'jumping', 'jumps', 'over a small rope', 'on the grass'],
      ['watch', 'watching', 'watches', 'a cartoon', 'the birds outside'],
      ['clean', 'cleaning', 'cleans', 'her desk', 'the classroom'],
      ['sleep', 'sleeping', 'sleeps', 'on the sofa', 'under a warm blanket']
    ];
    const questions = [];
    actions.forEach(([base, ing, present, action1, action2], index) => {
      questions.push(rotateAnswers({
        id: `${unit.id}_extra_progressive_${String(index + 1).padStart(2, '0')}`,
        question: `Look! Melody ___ ${action1} right now.`,
        options: [`is ${ing}`, present, base, `are ${ing}`],
        correctIndex: 0,
        explanation: `Melody 是單數主詞，right now 表示正在進行；使用 is ${ing}。`
      }, index % 4));
      if (index < 14) {
        questions.push(rotateAnswers({
          id: `${unit.id}_extra_progressive_pair_${String(index + 1).padStart(2, '0')}`,
          question: `At this moment, Melody and her friend ___ ${action2}.`,
          options: [`are ${ing}`, `is ${ing}`, present, base],
          correctIndex: 0,
          explanation: `Melody and her friend 是複數主詞；現在進行式要用 are ${ing}。`
        }, (index + 1) % 4));
      }
    });
    return questions;
  }

  for (const owner of ['bryant', 'melody']) {
    for (const subject of ['chinese', 'english', 'math', 'science', 'social']) {
      for (const unit of CURRICULUM_DATA[owner].subjects[subject].units) {
        const missing = TARGET_COUNT - unit.questions.length;
        if (missing <= 0) continue;
        const extra = subject === 'english'
          ? (owner === 'bryant' ? buildBryantEnglishQuestions(unit) : buildMelodyEnglishQuestions(unit))
          : buildConceptQuestions(unit, owner, subject);
        if (extra.length < missing) {
          console.warn(`${unit.name} 缺少 ${missing - extra.length} 道補充題`);
          continue;
        }
        unit.questions.push(...extra.slice(0, missing));
        if (unit.studyCard?.tips) {
          unit.studyCard.tips = unit.studyCard.tips.replace(/(?:以下|本卡)?\s*(?:原有)?(?:10|15)\s*題/g, '本單元30題');
        }
      }
    }
  }
})();
