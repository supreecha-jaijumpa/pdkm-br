import { useEffect, useState } from "react";


function App() {
  const [dot, setDot] = useState('.')

  useEffect(() => {
    let n = 1
    setInterval(() => {
      const amount = n % 6
      const temp = []
      for (let i = 0; i <= amount; i++) {
        temp.push('.')
      }

      setDot(temp.join(''))

      if (n < 6) {
        n++
        return
      }

      n = 0
    }, 100)
  }, [])

  return <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ textAlign: 'center', position: 'relative' }}>The project has closed. <br /> We'll be back soon <span style={{ position: 'absolute' }}>{dot}</span></h1>
  </div>;
}

export default App;
