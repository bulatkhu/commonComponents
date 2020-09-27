import React, {useState} from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  function refToInput(some) {
  }

  return (
    <header className="App-header">
      Counter: {counter}

      <p>
        <button
          className="Button"
          onClick={() => setCounter(counter + 1)}
        >Add 1 to counter</button>

        <button
          className="Button"
          onClick={() => setCounter(counter - 1)}
        >Sub 1 to counter</button>

        <button
          className="Button"
          onClick={() => setCounter(5)}
        >
          Set counter to 5
        </button>
      </p>


      <input
        type="text"
        placeholder="Input counter here..."
        ref={refToInput}
        onChange={event => setCounter(+event.target.value)}
      />
    </header>
  )
}

export default Counter