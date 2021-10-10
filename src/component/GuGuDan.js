import { useState } from "react"
// import CreatepreviousQ from "./CreatepreviousQ";

export default function GuGuDan () {
    const randomNumber = Math.ceil(Math.random() * 9);
    const randomNumber2 = Math.ceil(Math.random() * 9);

    const [first, setFirst] = useState(randomNumber);
    const [second, setSecond] = useState(randomNumber2);
    const [value, setValue] = useState();
    const [result, setResult] = useState();

    const sentence = ` ${first} 곱하기 ${second} 는? `;

    const valueChange = (e) => {
        setValue(e.target.value)
    }

    const gugudanLogic = (e) => {
        e.preventDefault();

        if(parseInt(value) === first * second){
            setFirst(randomNumber);
            setSecond(randomNumber2);
            setResult("정답 : " + value);
            setValue("");
            inputFocus.focus();
        } else {
            setResult("땡, " + value + "을 쓰니깐 틀리지");
            setValue("");
            inputFocus.focus();
        }
    }

    let inputFocus;
    const onRefInput = (e)=> {inputFocus = e}
    return (
        <>
            <div>{sentence}</div>
            <form onSubmit={gugudanLogic}>
                <input ref={onRefInput} type="text" value={value} onChange={valueChange}/>
                <button>입력 !</button>
            </form>
            <div>{result}</div>
        </>
    )
}