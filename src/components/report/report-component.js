import React from 'react';
import './report-component.css';

const ReportComponent = (props) => {
    return (
        <div className="report">
            {
                props.questions.map((question) => 
                    <div class="report-ques">
                        <div className="text">{question.text}</div>
                        <div className="status">{ question.answer == question.givenAnswer ? 'Correct' : 'Incorrent'} </div>
                    </div>
                )
            }
        </div>
    )
}

export default ReportComponent;