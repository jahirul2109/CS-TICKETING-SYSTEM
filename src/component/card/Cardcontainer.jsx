import React, { use, useEffect, useState } from 'react'
import Card from './Card'
import InProgress from '../task/Progress';
export default function Cardcointainer({ promiseData, selected, setSelected, addProgress, removeSelected, addResolve }) {
    const coustomerData = use(promiseData);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(coustomerData)
    }, [coustomerData])

    console.log(coustomerData)
    return (
        <div className='grid grid-cols-5 gap-2 w-11/12 mx-auto mt-20'>
            <Card
                cards={cards}
                setCards={setCards}
                addProgress={addProgress}
                selected={selected}
                setSelected={setSelected}
                coustomerData={coustomerData}></Card>
            <InProgress
                removeSelected={removeSelected}
                addResolve={addResolve}
                selected={selected}
                setSelected={setSelected}
            ></InProgress>
        </div>
    )
}
