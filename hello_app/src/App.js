const Hello = ({ name, age }) => {
  const bornYear = () =>  new Date().getFullYear() - age;
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
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
      <Hello name= {name} age={age}/>
      <Hello name= "Pekka" age={20 + 1}/>
  
    </>
  )
}

export default App