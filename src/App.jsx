import { useState } from 'react'
import Navbar from './component/nav/Navbar'
import Count from './component/hero_section/Count'
import Status from './component/ticket/Status'
import Cardcointainer from './component/card/Cardcontainer'

const promiseData = fetch('/data/api_data.js').then(res=> res.json());

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <nav>
  <Navbar></Navbar>
 </nav>
 <Count></Count>
 <Cardcointainer
 promiseData = {promiseData}
 ></Cardcointainer>
 </>
  )
}

export default App
