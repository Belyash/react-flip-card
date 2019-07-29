import React from 'react';

import { FlipCard } from './FlipCard';
import './FlipCard/index.css';

class App extends React.Component {
  render() {
    return (
        <div className="app">
            <header>
                <h1>Flip Card component</h1>
                <h2>Nice component for ReactJS.</h2>
            </header>

            <div className="row">
                <div className="col">
                    <FlipCard caption="Hypertext Markup Language">
                        Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.
                    </FlipCard>
                </div>
                <div className="col">
                    <FlipCard caption="Cascading Style Sheets">
                        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
                    </FlipCard>
                </div>
                <div className="col">
                    <FlipCard caption="JavaScript">
                        JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
                    </FlipCard>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
