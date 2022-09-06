const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const title = "Greetings";
  const name = "Valeri";
  const age = 26;
  return (
    <>
      <h1>{title}</h1>
      <Hello name="Valeri" age={age}/>
      <Hello name="Joku" age={20 + 1}/>
  
    </>
  )
}

export default App