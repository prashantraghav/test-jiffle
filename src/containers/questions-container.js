import React from 'react';
import QuestionComponent from '../components/question/question-component'
import ReportComponent from '../components/report/report-component';

import QUESTIONS_DATA from '../data-dump/questions';


class QuestionsContainers extends React.Component {
    constructor(props){
        super(props);
        
        this.questions = [];
        this.getQuestions();
        this.state = {
            quesLoaded: false,
            currentQuestionId: 0,
            displayResult: false
        }
    }

    getQuestions = () => {
        const url = "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json"
        fetch(url).then((response) => {
            return response.json();
        }).then((questions) => {
            this.questions = questions;
            this.setState({quesLoaded: true});
        }).catch((response) => {
            this.questions = QUESTIONS_DATA;
            this.setState({quesLoaded: true});
        });

    }

    submitAnswer = (questionId, givenAnswer) => {
        this.questions[questionId].givenAnswer = givenAnswer
        const nextQuestionId = parseInt(questionId) + 1
        const updateState = {};
        if(this.questions[nextQuestionId])
            updateState.currentQuestionId = nextQuestionId
        else
            updateState.displayResult = true;
        
        this.setState(updateState);
    }

    render(){
        const question = this.questions[this.state.currentQuestionId];
        return (
            <div>
                {question && !this.state.displayResult && <QuestionComponent questionId = {this.state.currentQuestionId} submitAnswer={this.submitAnswer} {...question} /> }
                {this.state.displayResult && <ReportComponent questions = {this.questions} />}
            </div>
        )
    }
}

export default QuestionsContainers;