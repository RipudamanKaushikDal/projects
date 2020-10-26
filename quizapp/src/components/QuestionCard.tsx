import React from 'react'
import {AnswerObject} from "../App"
import {Wrapper, ButtonWrapper} from "./QuestionCard.Styles"

type Props = {
    question:string,
    answers: string[],
    callback:(e:React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer:AnswerObject | undefined,
    questionNum:number,
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <p className="number">Question: {props.questionNum}/{props.totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html:props.question}} />
            <div>
                {props.answers.map(answer => (
                    <ButtonWrapper 
                    key ={answer}
                    correct={props.userAnswer?.correctAnswer === answer}
                    userClicked = {props.userAnswer?.answer === answer}
                    >
                        <button disabled={props.userAnswer? true: false} value={answer} onClick={props.callback}>
                            <span dangerouslySetInnerHTML={{__html:answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
            
        </Wrapper>
    )
}

export default QuestionCard
