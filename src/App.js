# JSX use attributes with the HTML elements are same as the regular HTML.

# the naming convention in JSX is in camel case for attributes instead of standard naming convention of HTML becomes className in JSX.

# this is because the class is reserved keyword in JavaScript.

import React , { Component } from 'react';
class App extends Component {
	render() {
	   return(
	      <div>
	      <h1>Hello Students!!</h1>
	      <h2>We are learning React.js Module</h2>
	      <p data-customAttr = "demo">
	      Use the link www.jetking.co/learn to access our MBD Course.
	      </p>
	      </div>
	    );
       	}
}
export default App;
