import React, { useState } from 'react'
import "./Style.css"

export default function Wish({ addWish, toClear }) {
    const [wis, UseWis] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (wis.trim() !== "") {
            addWish(wis.trim());
        }
        UseWis("");
    }
    function handleChange(e) {
        e.preventDefault();
        UseWis(e.target.value);
    }
    function handleClear(e) {
        e.preventDefault();
        toClear();
        UseWis("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='first'>
                    <input type="text" className='inp' value={wis} onChange={handleChange} placeholder='   Enter your Wish' />
                    <button className='btn'>Update</button>
                    <button className='btn' onClick={handleClear}>Clear All</button>
                </div>
            </form>
        </>
    )
}
