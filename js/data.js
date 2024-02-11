/*
 "이순간+별되 - ESFJ" ,0
 "이순간+알럽포 - ISFJ" ,1
 "이순간+미꿀미꿀 - ISTJ" ,2
 "이순간+넙사 - ESTJ" ,3
 "승서+별되 - ESFP" ,4
 "승서+알럽포 - ISFP" ,5
 "승서+미꿀미꿀 - ISTP" ,6
 "승서+넙사 - ESTP" ,7
 "POP+별되 - ENFP" ,8
 "POP+알럽포 - INFP" ,9
 "POP+미꿀미꿀 - INTP" ,10
 "POP+넙사 - ENTP" ,11
 "비상+별되 - ENFJ" ,12
 "비상+알럽포 - INFJ" ,13
 "비상+미꿀미꿀 - INTJ" ,14
 "비상+넙사 - ENTJ" ,15
*/

const qnaList = [
  {
    q: '1. 질문을 달라',
    a: [
      { answer: 'a. 답변을 입력하라', type: [0, 9, 10, 11, 12, 13, 14, 15] },
      { answer: 'b. 답변을 입력하라', type: [1, 2, 3, 4, 5, 6, 7, 8] }
    ]
  },
  {
    q: '2. 배고파요',
    a: [
      { answer: 'a. 심심해요', type: [1, 4, 5, 8, 9, 10, 12, 15] },
      { answer: 'b. 머리아파요', type: [0, 2, 3, 6, 7, 11, 13, 14] }
    ]
  },
  {
    q: '3. 뭐라 쓰지',
    a: [
      { answer: 'a. 빈 공 간', type: [1, 2, 3, 4, 10, 13, 14, 15] },
      { answer: 'b. 빈 공 간', type: [0, 5, 6, 7, 8, 9, 11, 12] }
    ]
  },
  {
    q: '4. 질문',
    a: [
      { answer: 'a. 답변', type: [0, 5, 6, 7, 8, 9, 11, 12] },
      { answer: 'b. 답변', type: [1, 2, 3, 4, 10, 13, 14, 15] }
    ]
  },
  {
    q: '5. 질문',
    a: [
      { answer: 'a. 답변', type: [0, 2, 3, 6, 7, 11, 13, 14] },
      { answer: 'b. 답변', type: [1, 4, 5, 8, 9, 10, 12, 15] }
    ]
  },

  {
    q: '6. 질문',
    a: [
      { answer: 'a. 답변', type: [0, 1, 2, 5, 6, 9, 10, 13] },
      { answer: 'b. 답변', type: [3, 4, 7, 8, 11, 12, 14, 15]}
    ]
  },
  {
    q: '7. 질문',
    a: [
      { answer: 'a. 답변', type: [1, 2, 3, 4, 5, 6, 7, 8] },
      { answer: 'b. 답변', type: [0, 9, 10, 11, 12, 13, 14, 15] }
    ]
  },
  {
    q: '8. 질문',
    a: [
      { answer: 'a. 답변', type: [1, 4, 5, 8, 9, 10, 12, 15] },
      { answer: 'b. 답변', type: [0, 2, 3, 6, 7, 11, 13, 14] }
    ]
  },
  {
    q: '9. 질문',
    a: [
      { answer: 'a. 답변', type: [0, 9, 10, 11, 12, 13, 14, 15] },
      { answer: 'b. 답변', type: [1, 2, 3, 4, 5, 6, 7, 8] }
    ]
  },
  {
    q: '10. 질문',
    a: [
      { answer: 'a. 답변', type: [3, 4, 7, 8, 11, 12, 14, 15] },
      { answer: 'b. 답변', type: [0, 1, 2, 5, 6, 9, 10, 13] }
    ]
  },
  {
    q: '11. 질문',
    a: [
      { answer: 'a. 답변', type: [1, 2, 3, 4, 10, 13, 14, 15] },
      { answer: 'b. 답변', type: [0, 5, 6, 7, 8, 9, 11, 12] }
    ]
  },
  {
    q: '12. 질문',
    a: [
      { answer: 'a. 답변', type: [0, 1, 2, 5, 6, 9, 10, 13] },
      { answer: 'b. 답변', type: [3, 4, 7, 8, 11, 12, 14, 15] }
    ]
  }
]

const infoList = [
  {
    name: '<이 순간 하나되어 + 별이 되어>',
    desc: ''
  },
  {
    name: '<이 순간 하나되어 + I Love Postech>',
    desc: ''
  },
  {
    name: '<이 순간 하나되어 + 미꿀미꿀>',
    desc: ''
  },
  {
    name: '<이 순간 하나되어 + 넙죽이 사냥>',
    desc: ''
  },
  {
    name: '<승리의 서곡 + 별이 되어>',
    desc: ''
  },
  {
    name: '<승리의 서곡 +  I Love Postech>',
    desc: ''
  },
  {
    name: '<승리의 서곡 + 미꿀미꿀>',
    desc: ''
  },
  {
    name: '<승리의 서곡 + 넙죽이 사냥>',
    desc: ''
  },
  {
    name: '<POSTECH OH POSTECH + 별이 되어>',
    desc: ''
  },
  {
    name: '<POSTECH OH POSTECH + I Love Postech>',
    desc: ''
  },
  {
    name: '<POSTECH OH POSTECH + 미꿀미꿀>',
    desc: ''
  },
  {
    name: '<POSTECH OH POSTECH + 넙죽이 사냥>',
    desc: ''
  },
   {
    name: '<비상+ 별이 되어>',
    desc: ''
  },
  {
    name: '<비상 + I Love Postech>',
    desc: ''
  },
  {
    name: '<비상 + 미꿀미꿀>',
    desc: ''
  },
  {
    name: '<비상 + 넙죽이 사냥>',
    desc: ''
  }
]
