import React, { Component } from 'react';

class About extends Component {
    render() {
        if(this.props.data) {
            this.name = this.props.data.name;
            this.image = 'images/' + this.props.data.image;
            this.bio = this.props.data.bio;
            this.street = this.props.data.address.street;
            this.city = this.props.data.address.city;
            this.state = this.props.data.address.state;
            this.zip = this.props.data.address.zip;
            this.phone = this.props.data.phone;
            this.email = this.props.data.email;
            this.download = this.props.data.resumeDownload;
        }

        return (
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src={this.image} alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>{this.bio}</p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>{this.name}</span><br/>
                                        <span>{this.street}<br/>
                                            {this.city}, {this.state} {this.zip}
                                        </span><br/>
                                        <span>{this.phone}</span><br/>
                                        <span>{this.email}</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href={this.download} className="button"><i className="fa fa-download"/>Download Resume</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default About;

