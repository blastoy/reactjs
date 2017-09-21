import React, { Component } from 'react';
import './App.css';
import Uuid from 'uuid';
import Firebase from 'firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Uuid.v1(),
            name: '',
            answers: {
                q1: '',
                q2: '',
                q3: '',
                q4: ''
            },
            submitted: false
        }
    }

    handleNameSubmit(event) {
        event.preventDefault();
        console.log('Submitted');
        let name = this.refs.name.value;
        this.setState({ name: name }, () => {
            console.log(this.state);
        });
    }

    handleQuestionSubmit(event) {
        event.preventDefault();
        Firebase.database()
            .ref('surveys/' + this.state.id)
            .set({
                name: this.state.name,
                answers: this.state.answers
            });
        this.setState({ submitted: true }, () => {
            console.log("Questions Submitted!");
        });
    }

    handleQuestionChange(event) {
        console.log(event.target.value);
        let answers = this.state.answers;
        switch(event.target.name) {
            case 'q1': answers.q1 = event.target.value; break;
            case 'q2': answers.q2 = event.target.value; break;
            case 'q3': answers.q3 = event.target.value; break;
            case 'q4': answers.q4 = event.target.value; break;
            default: break;
        }
        this.setState({ answers: answers }, () => {
            console.log(this.state);
        });
    }

    render() {
        let user;
        let questions;

        if(this.state.name && !this.state.submitted) {
            user = <h2>Welcome {this.state.name}!</h2>;
            questions = <span>
                <h3>Survey Questions</h3>
                <form onSubmit={this.handleQuestionSubmit.bind(this)}>
                    <div>
                        <label>What is your favorite operating system?</label><br/>
                        <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange.bind(this)}/> Windows<br/>
                        <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange.bind(this)}/> OSX<br/>
                        <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange.bind(this)}/> Linux<br/>
                        <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange.bind(this)}/> Solaris<br/>
                        <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange.bind(this)}/> Other<br/>
                    </div>
                    <div>
                        <label>What is your favorite TV brand?</label><br/>
                        <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange.bind(this)}/> Sony<br/>
                        <input type="radio" name="q2" value="Samsung" onChange={this.handleQuestionChange.bind(this)}/> Samsung<br/>
                        <input type="radio" name="q2" value="Panasonic" onChange={this.handleQuestionChange.bind(this)}/> Panasonic<br/>
                        <input type="radio" name="q2" value="Vizio" onChange={this.handleQuestionChange.bind(this)}/> Vizio<br/>
                        <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange.bind(this)}/> Other<br/>
                    </div>
                    <div>
                        <label>What is your favorite Smartphone Brand?</label><br/>
                        <input type="radio" name="q3" value="Apple" onChange={this.handleQuestionChange.bind(this)}/> Apple<br/>
                        <input type="radio" name="q3" value="Samsung" onChange={this.handleQuestionChange.bind(this)}/> Samsung<br/>
                        <input type="radio" name="q3" value="Nexus" onChange={this.handleQuestionChange.bind(this)}/> Nexus<br/>
                        <input type="radio" name="q3" value="Blackberry" onChange={this.handleQuestionChange.bind(this)}/> Blackberry<br/>
                        <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange.bind(this)}/> Other<br/>
                    </div>
                    <div>
                        <label>What is your favorite time of day?</label><br/>
                        <input type="radio" name="q4" value="Morning" onChange={this.handleQuestionChange.bind(this)}/> Morning<br/>
                        <input type="radio" name="q4" value="Afternoon" onChange={this.handleQuestionChange.bind(this)}/> Afternoon<br/>
                        <input type="radio" name="q4" value="Evening" onChange={this.handleQuestionChange.bind(this)}/> Evening<br/>
                        <input type="radio" name="q4" value="Night" onChange={this.handleQuestionChange.bind(this)}/> Night<br/>
                        <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange.bind(this)}/> Other<br/>
                    </div>
                    <button type="submit" className="btn-default">Submit</button>
                </form>
            </span>;
        } else if(!this.state.name && !this.state.submitted) {
            questions = '';
            user = <span>
                <h2>Please enter your name to begin the survey</h2>
                <form onSubmit={this.handleNameSubmit.bind(this)}>
                    <input type="text" placeholder="Enter Name..." ref="name"/>
                    <button type="submit" className="btn-input">Take Survey</button>
                </form>
            </span>
        } else if(this.state.submitted) {
            user = <h2>Thank you {this.state.name}!!</h2>
        } else {}

        return (
            <div>
                <section id="header">
                    <h2>SimpleSurvey</h2>
                </section>
                <section id="content">
                    <aside id="user" className="text-center">{user}</aside>
                    <aside id="questions">{questions}</aside>
                </section>
            </div>
        );
    }
}

export default App;
