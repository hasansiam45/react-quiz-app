import { useEffect, useMemo, useState } from 'react';
import './app.css';
import Quiz from './components/Quiz';
import {data} from './components/data';
import Timer from './components/Timer';

function App() {

  const moneyPyramid = useMemo(()=> 
    [
      {id: 1, amount: '$ 100'},
      {id: 2, amount: '$ 200'},
      {id: 3, amount: '$ 300'},
      {id: 4, amount: '$ 400'},
      {id: 5, amount: '$ 500'},
      {id: 6, amount: '$ 600'},
      {id: 7, amount: '$ 700'},
      {id: 8, amount: '$ 800'},
      {id: 9, amount: '$ 900'},
      {id: 10, amount: '$ 1000'},
    ].reverse(),[]) 

  const [quesNum, setQuesNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  useEffect(()=> {
    quesNum > 1 && setEarned(moneyPyramid.find(m => m.id === quesNum - 1).amount);
  },[moneyPyramid, quesNum]);

  return (
    <div className="app">
      <div className="main">
        {stop ? <div className="endText">
          <h1>You have earned : {earned}</h1> 
          <div className="restart">
          <button onClick={()=> setStop(false)}>Play Again</button>
          </div>
        </div>:

        <>
        <h1 className="heading">Welcome to React Quiz!</h1>
        <div className="top">
          <div className="timer">
            <Timer quesNum={quesNum} setStop={setStop}/>
          </div>
        </div>

        <div className="bottom">
          <Quiz data={data} setStop={setStop} quesNum={quesNum} setQuesNum={setQuesNum} setEarned={setEarned}/>
        </div>
        </>
        
        }
        
      </div>

      <div className="pyramid">
        <ul className="moneyList">

          {moneyPyramid.map(m => (<li className={quesNum === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListNumber">{m.id}</span>
            <span className="moneyListAmount">{m.amount}</span>
          </li>))}

       
        </ul>
      </div>
    </div>
  );
}

export default App;
