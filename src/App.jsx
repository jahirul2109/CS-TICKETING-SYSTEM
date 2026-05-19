import { useState } from 'react'
import Navbar from './component/nav/Navbar'
import Count from './component/hero_section/Count'
import Status from './component/ticket/Status'
import Card from './component/card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <nav>
  <Navbar></Navbar>
 </nav>
 <Count></Count>
 {/* <Status></Status> */}
 <Card></Card>
 </>
  )
}

export default App
