import {connect} from 'react-redux';
import {increase,decrease} from './index';
import 'antd/dist/antd.css';

function App(props){
    const {payIncrease,payDecrease} = props;
    return(
        <div className="App">
            <h2>The current salary is {props.salary}</h2>
            <button onClick={payIncrease}>Increase salary</button>
            <button onClick={payDecrease}>Decrease salary</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        salary:state
    }
}

function mapDispatchToProps(dispatch){
    return {
        payIncrease:()=>dispatch(increase(1000)),
        payDecrease:()=>dispatch(decrease(1000))
    }
}

export default App = connect(mapStateToProps,mapDispatchToProps)(App)
