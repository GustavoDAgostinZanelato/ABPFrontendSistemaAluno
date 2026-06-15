import { useEffect, useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${count} vezes!`
  }, [count])

  const numeros = [1,2,3,4,5,6]

  return(
    <>
    <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
    >
        Count is {count}
    </button>
    <ul>
        {numeros.map((numero) => 
            <li key='{fruta}'>{numero}</li>
        )}
    </ul>
    </>
  )
}

export default Counter