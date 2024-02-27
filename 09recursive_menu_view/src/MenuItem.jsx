import React, { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus, FaPlus} from 'react-icons/fa'

function MenuItem({ item }) {

    const [currentChildrean, setCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setCurrentChildren({
            ...currentChildrean,
            [getCurrentLabel]: !currentChildrean[getCurrentLabel]
        })
    }
    return (
        <li className='menu-item'>
            <div style={{ display: 'flex', gap: '20px' }}>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                        <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            currentChildrean[item.label] ? <FaMinus/> : <FaPlus/>
                        }
                        </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && currentChildrean[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem