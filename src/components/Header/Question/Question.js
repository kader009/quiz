import React from 'react';

const Question = () => {
  return (
    <div className='container-fluid mt-5'>
    <blockquote>
      <h1 className='text-warning fs-3'>What is the purpose of react router.</h1>
      <p>React Router is a standard library for routing in React. <br /> It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
    </blockquote>
    <br />
    <blockquote>
      <h1 className='text-warning fs-3'>How does context api works.</h1>
      <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. <br /> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
    </blockquote>
    <br />
    <blockquote>
      <h1 className='text-warning fs-3'>What is useRef in react.</h1>
      <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). <br /> The returned object will persist for the full lifetime of the component.</p>
    </blockquote>
    </div>
  );
};

export default Question;