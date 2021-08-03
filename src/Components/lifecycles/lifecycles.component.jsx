
import React from 'react';

export class Lifecycles extends React.Component  {
    constructor(props){
        // This will be call in mount phase
        super(props);
        console.log('constructor!');
    }
    // Mounting 
    componentDidMount(){
        console.log('componentDidMount!');
    }
    // Updating
    componentDidUpdate(){
        console.log('componentDidUpdate!');
    }
    
    // This will lie between Render and Updating (the props and state will be passed)
    shouldComponentUpdate(nextProps, nextState){
        console.log('componentShouldUpdate', nextProps );
        return nextProps.text !== this.props.text;
    }
    // This will unmount the unnecessary elements needed to render
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }

    render(){
        console.log('render!');
        return (
            <div className='lifecycles'>
                <h3>LIFECYCLES COMPONENT</h3>
                {this.props.text}
            </div>
        );
    }

};

