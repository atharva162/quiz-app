import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
const questions= [
  {
    Ques: 'Who is the CEO of Tesla?',
    Ans: [
      {anstxt: 'Bill Gates', istrue: false },
      {anstxt: 'Satya Nadela', istrue: false},
      {anstxt: 'Elon Musk', istrue: true},
      {anstxt: 'Steve Jobs', istrue: false}
    ]
  },
  {
    Ques: 'How many book does Harry Porter edition has?',
    Ans: [
      {anstxt: 5, istrue: false},
      {anstxt: 4, istrue: false},
      {anstxt: 6, istrue: false},
      {anstxt: 7, istrue: true}
    ]
  },
  {
    Ques: 'FCC stands for?',
    Ans: [
      {anstxt:'Foreign Finance Corporation',istrue: false},
      {anstxt:'Film Finance Corporation',istrue: false},
      {anstxt: 'Federation of Football Council',istrue: true},
      {anstxt:'None of the above',istrue: false}
      ]
  },
  {
      Ques: 'Which of the following is the first calculating device?',
      Ans: [
        {anstxt: 'Abacus',istrue: true},
        {anstxt: 'Calculator',istrue: false},
        {anstxt: 'Clock',istrue: false},
        {anstxt: 'Difference Engine',istrue: false}
      ]
  },
   { 
     Ques: 'Entomology is the science that studies?',
     Ans: [
       { anstxt: 'Behavior of human beings', istrue: false},
       { anstxt: 'Insects', istrue: false},
       { anstxt: 'The origin and history of technical and scientific terms', istrue: false},
       { anstxt: 'The formation of rocks', istrue: false}
     ]
    }
]

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleClick =(istrue) =>{
  if(istrue) {
    setScore(score+1)
  }

  const nextQues= currentQuestion+1;
  if(nextQues < questions.length){
       setCurrentQuestion(nextQues)
  } else{
    setShowScore(true)
  }
}

return(
  <div className="app">{showScore?
  (<div className="score-section">You scored {score} out of {questions.length}</div>):
(<div className="question-section"><div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
<div className="question-text">{questions[currentQuestion].Ques}</div>

<div class="answer-section">{questions[currentQuestion].Ans.map((Answer, index) => (<><button onClick={()=> handleClick(Answer.istrue)}>{Answer.anstxt}</button><br /></>)
)}</div>
</div>)
  }</div>
)}

export default App;
