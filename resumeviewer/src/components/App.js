import React, { Component } from 'react';
import $ from 'jquery';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Testimonials from './Testimonials';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {}
        }
    }

    componentDidMount() {
        this.requestResume();
    }

    requestResume() {
        $.ajax({
            url: 'http://localhost:3000/resume.json',
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({ personalInfo: data });
            },
            error: (xhr, status, err) => console.log(err)
        });
    }

    render() {
        return (
               <div>
                    <Header data={this.state.personalInfo.main}/>
                    <About data={this.state.personalInfo.main}/>
                    <Resume data={this.state.personalInfo.resume}/>
                    <Portfolio data={this.state.personalInfo.portfolio}/>
                    <Testimonials data={this.state.personalInfo.testimonials}/>
                    <Contact data={this.state.personalInfo.main}/>
                    <Footer/>
                </div>
        );
    }
}

export default App;
