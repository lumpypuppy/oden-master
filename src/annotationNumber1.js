import React from 'react';

let buttonStyle = {
    color: 'gray',
    backgroundColor: 'light-gray',
    padding: '15px',
 }

class Action extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        alert('Click happened');
      }

    render() {
        return (
            <div>
                    <br></br>
                    <br></br>
                    <button style={buttonStyle} onClick={this.handleClick} value="Submit">Alert</button>
                    <br></br>
                    <br></br>
          </div>
        );
    }
}

export default Action;