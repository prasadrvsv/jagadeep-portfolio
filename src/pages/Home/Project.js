import React, { useState } from 'react'
import Datas from '../Data/Data'
import Card from '../../components/Card'
import Buttons from '../../components/Buttons'
// import { DragCloseDrawerExample } from '../../components/Modal'

function Project() {
    const [item, setItems] = useState(Datas)
    const menuItems = [...new Set(Datas.map((val) => val.category))]

    const filterItems = (cat) => {
        const newItems = Datas.filter((newval) => newval.category === cat)
        setItems(newItems)
    }

    return (
        <div id="projects" className='flex flex-col h-auto justify-center items-center '>
            <div className='flex justify-center items-center mt-20 mb-10' >
                <h1 className='font-extrabold md:text-8xl sm:text-7xl text-6xl'>Projects</h1>
            </div>
            <div className='flex justify-center items-center my-4'>
                <Buttons
                    menuItems={menuItems}
                    filterItems={filterItems}
                    setItems={setItems}
                />
            </div>
            <div className='flex flex-wrap justify-center'>
                <Card item={item} />
            </div>
            {/* <div>
                <DragCloseDrawerExample item={item}/>
            </div> */}
        </div>
    )
}

export default Project
