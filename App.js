import React from "react";
import ReactDOM from "react-dom/client"


// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React !!!");


const Title = () => <strong id="title" tabIndex="5" className="class"> This is Title Component inside Heading Component !!!!</strong>;

const HeadingComponent = () => {
    return (
        <div className="container">
            <Title/>
            <p className="p-class">This is Functional component in p-tag....</p>
            <h1 id="heading" tabIndex="5" className="class"> 
    This is my first react functional component....</h1>
        </div>
    
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
