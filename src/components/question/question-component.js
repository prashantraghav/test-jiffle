import React from 'react';
import './question-component.css';

const mapper = {
    '1': 'A', '2': 'B', '3': 'C' , '4': 'D'  
}

const QuestionComponent = (props) => {
    
    return (
        <div className="question">
            <p className="text">{props.text}</p>
            <ol>
                {props.options.map((option) => <li>{option}</li>)}
            </ol>

            <ul>
                {props.options.map((option, index) => 
                    <li onClick={()=>props.submitAnswer(props.questionId, index+1)} >{mapper[index+1]}</li>
                )}
            </ul>
        </div>
    )
}

export default QuestionComponent;