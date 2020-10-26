import React,{useState} from 'react';
import QuestionCard from "./components/QuestionCard"
import {QuestionState, Difficulty, fetchQuestions} from "./API"
import {GlobalStyle, Wrapper} from "./App.Styles"



export interface AnswerObject {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] =useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

  const newQuestions = await fetchQuestions(10,Difficulty.MEDIUM)

  setQuestions(newQuestions)
  setScore(0);
  setUserAnswers([])
  setNumber(0)
  setLoading(false)
  }

  const checkAnswer = (evt:React.MouseEvent<HTMLButtonElement>) => {
    
    if (!gameOver) {
      const answer = evt.currentTarget.value;
      
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      
      setUserAnswers(prev => [...prev,answerObject])
    }
  }

  const nextQuestion = () => {

    const nxtQuestion = number + 1;
     if (nxtQuestion === 10) {
       setGameOver(true);
     } else {
       setNumber(nxtQuestion)
     }
  }

  return (
    <>

    <GlobalStyle />
    <Wrapper>

      <h1>React Quiz</h1>

      {gameOver || userAnswers.length === 10 ? (
        
        <button className="start" onClick={startTrivia}>Start</button>
      ):null}
      
      {!gameOver && <p className="score">Score:{score}</p>}

    { loading && <p>Loading Question ....</p> }

     { !loading && !gameOver && 
      <QuestionCard questionNum={number+1}
        totalQuestions={10}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]:undefined}
        callback={checkAnswer}
        />}

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== 9 && 
        
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
        
        }

    </Wrapper>
    </>
  );
}

export default App;
