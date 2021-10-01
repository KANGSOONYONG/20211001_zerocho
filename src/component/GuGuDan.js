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
            setResult("정답");
            setValue("");
        } else {
            setResult("땡");
            setValue("");
        }
    }

    return (
        <>
            <div>{sentence}</div>
            <form onSubmit={gugudanLogic}>
                <input type="text" value={value} onChange={valueChange}/>
                <button>입력 !</button>
            </form>
            <div>{result}</div>
        </>
    )
}