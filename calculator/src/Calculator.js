import React,{Component} from 'react';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.calculateButton = this.calculateButton.bind(this)
        this.state ={
            inpValue1:'',
            inpValue2:'',
            inpValue3:'',
            result:'',
            showWarning1:false,
            showWarning2:false
        }
    }
    handelChange1 = e =>{
        const target = e.target;
        // const name = target.name;

        this.setState({
            inpValue1:target.value
        })
    }
    handelChange2 = e =>{
        const target = e.target;
        // const name = target.name;

        this.setState({
            inpValue2:target.value
        })
    }
    handelChange3 = e =>{
        const target = e.target;
        // const name = target.name;

        this.setState({
            // [name]:target.value
            inpValue3:target.value
        })
    }
    calculateButton(){
        // const inpval = this.input.value;
        if((/^[A-Za-z]+$/.test(this.state.inpValue1)) || (/^[A-Za-z]+$/.test(this.state.inpValue3))){
            this.setState({showWarning1:true})
        }else if(((this.state.inpValue2) !== '+') && ((this.state.inpValue2) !== '-') &&  ((this.state.inpValue2) !== '*') &&  ((this.state.inpValue2) !== '/')){
            this.setState({showWarning2:true})
        }else{
            this.setState({showWarning1:false})
            this.setState({showWarning2:false})
            this.setState({result:eval(`${this.state.inpValue1} ${this.state.inpValue2} ${this.state.inpValue3}`)})
        }
   
        // this.setState({result:this.state.firstNum + this.state.secondNum})
        
    }
    render(){
        const calculatorStyle = {
            margin: '50px'
        }
        return(
            <div style={calculatorStyle}>
                <div id="calculator">
                    <h1>Calculator:</h1>
                    <div>
                        <div><span>The firstNum:</span><input name="firstName" type="text" onChange={this.handelChange1.bind(this)} defaultValue={this.state.inpValue1}></input></div>
                        <div><span>The operator is:</span><input name="operator" type="text" onChange={this.handelChange2.bind(this)} defaultValue={this.state.inpValue2}></input></div>
                        <div><span>The secondNum:</span><input name="secondName" type="text" onChange={this.handelChange3.bind(this)} defaultValue={this.state.inpValue3}></input></div>
                        <div className="warning"> {this.state.showWarning1 ? 'The first and last field should be a number':''}</div>
                        <div className="warning"> {this.state.showWarning2 ? 'Please choose a good operator:(+,-,/,*)':''}</div>
                        <div>The calculate result is:<span className="result">{this.state.result}</span></div>
                    </div>
                    <div>
                        <button disabled={(this.state.inpValue1 === "") || (this.state.inpValue2 === "") || (this.state.inpValue3 === "")} onClick={this.calculateButton}>
                            Click Me
                        </button>
                    </div>
                </div>
            </div>
     
        )
    }
}
export default Calculator