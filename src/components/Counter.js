import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeCounter} from '../actions/counterAction';


class Counter extends Component {

    changeCounter = () =>{
        this.props.changeCounter(5);
    }
    
    render() { 
        return ( 
            <div>
                Counter: {this.props.counter}
                <br />
                <button onClick={this.changeCounter}>
                    change counter
                </button>
            </div>
         );
    }
}
 
const mapStateToProp = (state) => {
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = {
    changeCounter,
};

export default connect(mapStateToProp, mapDispatchToProps)(Counter);