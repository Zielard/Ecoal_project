let u1 = {
  username: 'toto',
  password: '123'
}

let q1 = {
  name: 'The Great Paints',
  icon: 'quizz2/quizz2.jpg',
  keywords: ['painting', 'english', 'art'],
  questions: [{
    question: 'Which of the following was painted by Vincent Van Gogh?',
    video: null,
    txtAnswers: [],
    imgAnswers: ["quizz2/monet.jpg","quizz2/vanGogh.jpg","quizz2/daVinci.jpg","quizz2/jacksonPollock.jpg"],
    solutions: [2],
    points: 1
  }, {
    question: 'Which of the following was painted by Pablo Picasso',
    video: null,
    txtAnswers: [],
    imgAnswers: ["quizz2/vanGogh2.jpg","quizz2/andyWarhol.jpg","quizz2/henriMatisse.jpg","quizz2/picasso.jpg"],
    solutions: [3],
    points: 3
  }, {
    question: 'Where was Pablo Picasso Born?',
    video: null,
    txtAnswers: ["The Netherlands", "Italy", "Spain", "France"],
    imgAnswers: [],
    solutions: [2],
    points: 1
  },{
    question: 'When did Van Gogh Paint Starry Night?',
    video: null,
    txtAnswers: ["1889","1909","1919","1879"],
    imgAnswers: [],
    solutions: [0],
    points: 1
  },{
    question: 'Where was Claude Monet Born?',
    video: null,
    txtAnswers: ["Rome","Paris","Amsterdam","Mexico"],
    imgAnswers: [],
    solutions: [1],
    points: 1
  } ],
  published: true,
  owner: db.users.findOne({name: "toto"}),
  scores: []
}

let q2 = {
  name: 'Cultural Legends',
  icon: 'quizz3/quizz3.jpg',
  keywords: ['Ireland', 'history', 'mythology'],
  questions: [{
    question: 'What shape was King Authurs Table?',
    video: null,
    txtAnswers: ["Square","Round","Triangle","Rectangle"],
    imgAnswers: [],
    solutions: [1],
    points: 1
  }, {
    question: 'Who was the father of Zues in Greek Mythology?',
    video: null,
    txtAnswers: ["Cronos","Poseidon","Ares","Apollo"],
    imgAnswers: [],
    solutions: [0],
    points: 3
  }, {
    question: 'What did Cú Chulainn slay?',
    video: null,
    txtAnswers: ["A Dragon", "A Leprechaun", "A Dog", "A Knight"],
    imgAnswers: [],
    solutions: [2],
    points: 1
  }],
  published: true,
  owner: db.users.findOne({name: "toto"}),
  scores: []
};

let q3 = {
  name: 'Hip Hop Culture',
  icon: 'quizz4/quizz4.jpg',
  keywords: ['music','rap','hip-hop'],
  questions: [{
    question: 'Who was the first rapper to win a Pulitzer Prize for music?',
    video: null,
    txtAnswers: ["Kendrick Lamar","Eminem","Travis Scott","Tupac"],
    imgAnswers: [],
    solutions: [0],
    points: 1
  }, {
    question: 'Who was the most streamed hip hop artist in 2018?',
    video: null,
    txtAnswers: ["Snoop Dog","Post Malone","JpegMafia","Drake"],
    imgAnswers: [],
    solutions: [3],
    points: 3    

  }, {
    question: 'Who is the youngest artist?',
    video: null,
    txtAnswers: ["Eminem", "Snoop Dog","Kendrick Lamar", "Kanye West"],
    imgAnswers: [],
    solutions: [2],
    points: 1
  }],
  published: true,
  owner: db.users.findOne({name: "toto"}),
  scores: []
};

let q4 = {
  name: 'Architecture and painting ',
  icon: 'quizz5/1_portugal.jpg',
  keywords: ['architecture','painting','video'],
  questions: [{
    question: 'What is the name of this famous painting',
    video: 'quizz5/video.mp4',
    txtAnswers: ["Echo","The Storm","The Scream","The Crime"],
    imgAnswers: [],
    solutions: [2],
    points: 1
  }, {
    question: 'which of these authors are Spanish ?',
    video: null,
    txtAnswers: ["Magrit", "Frida Kahlo", "Salvador Dali", "Joan miro"],
    imgAnswers: [2,3],
    solutions: [3],
    points: 3
  }, {
    question: 'Which artists are working in the 21 centhury ?',
    video: null,
    txtAnswers: ["Andy Wharol", "Banksy", "JR", "Claude Monet"],
    imgAnswers: [],
    solutions: [1,2],
    points: 1
  }, {
    question: 'Which of these monuments are in art deco style ?',
    video: null,
    txtAnswers: [],
    imgAnswers: ['quizz5/1_portugal.jpg','quizz5/2_lens_mega_cut.jpg','quizz5/3_lens.jpg','quizz5/4_beaune.jpg'],
    solutions: [1,2],
    points: 1
  }],
  published: true,
  owner: db.users.findOne({name: "toto"}),
  scores: []
};


let quizzes = [q1, q2, q3, q4];
let users = [u1];

db.quizzes.drop();
db.quizzes.insert(quizzes);
db.users.insert(users);
