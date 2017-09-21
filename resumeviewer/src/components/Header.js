import React, { Component } from 'react';

class Header extends Component {
    render() {
        if(this.props.data) {
            this.name = this.props.data.name;
            this.occupation = this.props.data.occupation;
            this.description = this.props.data.description;
            this.city = this.props.data.address.city;
            this.networks = this.props.data.social
                .map(network =>
                    <li key={network.name}>
                        <a href={network.url}>
                            <i className={network.className}/>
                        </a>
                    </li>
                );
        }

        return (
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm {this.name}.</h1>
                            <h3>I'm a {this.city} based <span>{this.occupation}. </span>{this.description}</h3>
                            <hr />
                            <ul className="social">
                                {this.networks}
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
                    </p>
                </header>
        );
    }
}

export default Header;
