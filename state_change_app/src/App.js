import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / all;
  const positivePercent = (good / all) * 100;

  if(good === 0 && bad === 0 && neutral === 0){
    return <p>No feedback given</p>
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <tr><td>good {good}</td></tr>
        <tr><td>neutral {neutral}</td></tr>
        <tr><td>bad {bad}</td></tr>
        <tr><td>all {all}</td></tr>
        <tr><td>average {average}</td></tr>
        <tr><td> Positive {positivePercent}</td></tr>
        </tbody>
    </table>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = "Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text = "Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text = "Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App