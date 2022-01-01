import React, { useEffect, useState } from 'react'

const Quiz = ({data, setStop, quesNum, setQuesNum, setEarned}) => {

    const [ques, setQues] = useState(null);
    const [selectedAns, setSelectedAns] = useState(null);
    const [className, setClassName] = useState('answer');

    useEffect(()=> {
        setQues(data[quesNum - 1]);
    },[data,quesNum]);

    const delay = (duration, cb) => {
        setTimeout(()=>{
            cb();
        },duration)
    }

    const handleClickAns = (a) => {
        setSelectedAns(a);
        setClassName('answer active')
        delay(1000, ()=>setClassName(a.correct ? 'answer correct' : 'answer wrong'));
        delay(2000, ()=>{
            if(a.correct){
                if(quesNum < 10){
                    setQuesNum(prev => prev+1);
                }else{
                    setEarned('$ 1000');
                    setStop(true);
                    setQuesNum(1);
                }
                setSelectedAns(null);
                
            }else{
                if(quesNum < 2){
                    setEarned('$ 0');
                }
                setStop(true);
                setQuesNum(1);
            }
        });
    }

    return (
        <div className="quiz">
            <div className="question">{ques?.question}</div>
            <div className="answers">
                {ques?.answers.map(a => 
                <div className={selectedAns == a ? className : 'answer'} onClick={()=> handleClickAns(a)}>{a.text}</div>
            )}
            </div>
        </div>
    )
}

export default Quiz
