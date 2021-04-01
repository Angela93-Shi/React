import React,{useState} from 'react';

function Calculator_function(){
    // const [state,setState] = useState({
        // inpValue1:'',    Q1:统一定义？
        // inpValue2:'',
        // inpValue3:'',
        // result:'',
        // showWarning1:false,
        // showWarning2:false,
    // })
    const [inpValue1,setInpValue1] = useState('');
    const [inpValue2,setInpValue2] = useState('');
    const [inpValue3,setInpValue3] = useState('');
    const [result,setResult] = useState('');
    const [showWarning1,setShowWarning1] = useState(false);
    const [showWarning2,setShowWarning2] = useState(false);

    const handelChange1 = e =>{
        const target = e.target;
        // const name = target.name;
        setInpValue1(target.value);
    };
    const handelChange2 = e =>{
        const target = e.target;
        // const name = target.name;

        setInpValue2(target.value);
    };
    const handelChange3 = e =>{
        const target = e.target;
        // const name = target.name;

        setInpValue3(target.value);
    };
    const calculateButton= ()=>{
        // const inpval = this.input.value;
        if((/^[A-Za-z]+$/.test(inpValue1)) || (/^[A-Za-z]+$/.test(inpValue3))){
            setShowWarning1(true);
        }else if(((inpValue2) !== '+') && ((inpValue2) !== '-') &&  ((inpValue2) !== '*') &&  ((inpValue2) !== '/')){
            setShowWarning2(true);
        }else{
            setShowWarning1(false);
            setShowWarning2(false);
            setResult(eval(`${inpValue1} ${inpValue2} ${inpValue3}`));
        }
   
        // this.setState({result:this.state.firstNum + this.state.secondNum})
        
    }
    return(
        <div className="calculatorStyle">
        <h1>Function Component</h1>
        <div id="calculator">
            <h2>Calculator:</h2>
            <div>
                <div><span>The firstNum:</span><input name="firstName" type="text" onChange={handelChange1} defaultValue={inpValue1}></input></div>
                <div><span>The operator is:</span><input name="operator" type="text" onChange={handelChange2} defaultValue={inpValue2}></input></div>
                <div><span>The secondNum:</span><input name="secondName" type="text" onChange={handelChange3} defaultValue={inpValue3}></input></div>
                <div className="warning"> {showWarning1 ? 'The first and last field should be a number':''}</div>
                <div className="warning"> {showWarning2 ? 'Please choose a good operator:(+,-,/,*)':''}</div>
                <div>The calculate result is:<span className="result">{result}</span></div>
            </div>
            <div>
                <button disabled={(inpValue1 === "") || (inpValue2 === "") || (inpValue3 === "")} onClick={calculateButton}>
                    Click Me
                </button>
            </div>
        </div>
    </div>
    )
}
export default Calculator_function
