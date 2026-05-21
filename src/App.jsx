import { useState } from 'react'
import Navbar from './component/nav/Navbar'
import Count from './component/hero_section/Count'
import Cardcointainer from './component/card/Cardcontainer'

const promiseData = fetch('/data/api_data.js').then(res => res.json());

function App() {
  const [selected, setSelected] = useState([])
  const [removeSelected, setRemoveSelected] = useState([])
  const addProgress = (card) => {
    const cards = [...selected, card];
    setSelected(cards);
  }
  const addResolve = (resolve) => {
    const resolveData = [...removeSelected, resolve];
    setRemoveSelected(resolveData);
  }
  console.log(selected)
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <Count
        removeSelected={removeSelected}
        selected={selected}
      ></Count>
      <Cardcointainer
        removeSelected={removeSelected}
        addResolve={addResolve}
        addProgress={addProgress}
        selected={selected}
        setSelected={setSelected}
        promiseData={promiseData}
      ></Cardcointainer>
    </>
  )
}

export default App
