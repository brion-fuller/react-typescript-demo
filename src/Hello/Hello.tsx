import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { ICombinedState } from '../types/IState';
import * as styles from "./Hello.css";

interface IHelloAction {
    type: string;
    amount: number;
}

interface IHelloStateProps {
    number: number;
}
interface IHelloDispatchProps {
    increase(n: number):IHelloAction;
    decrease(n: number):IHelloAction;
}

//Actions refactor out
export function increase(n: number): IHelloAction {
    return {
        type: 'INCREASE',
        amount: n
    }
}

export function decrease(n: number): IHelloAction {
    return {
        type: 'DECREASE',
        amount: n
    }
}

function mapStateToProps(state) {
  return state.number;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({increase: increase,decrease: decrease}, dispatch)
}


//@connect<IHelloStateProps, IHelloDispatchProps, any>(mapStateToProps, mapDispatchToProps)
class Hello extends React.Component<IHelloStateProps&IHelloDispatchProps, {}> {
    render() {
        return( 
            <div>
                <h1 className={styles.hello}>Hello World!</h1>
                <button onClick={() => this.props.decrease(1)}>Decrease</button>
                <button onClick={() => this.props.increase(1)}>Increase</button>
                <p>{this.props.number}</p>
            </div>
        );
    }
}

export default connect(
  function(state: ICombinedState){return { number: state.update.number }},
  { increase, decrease }
)(Hello);