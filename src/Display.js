import React, { useContext, useState } from 'react'
import { store } from './App';
const Display = () => {
    const [data, setData] = useContext(store)
    const [name, setName] = useState('');
    const submitHandleer =e =>{
        e.preventDefault();
        setData([...data,{brandname:name}])
    }
    return (
        <div className='card'>
            <div className="card-body">
                {data.map(item => <h3 className="card-title">{item.brandname}</h3>)}
                <form className='form' onSubmit={submitHandleer}>
                    <input type='text' placeholder='enter your brand ' onChange={(e) => setName(e.target.value)} />
                    <input type="submit" value='add' />
                </form>
            </div>
        </div>)
}

export default Display