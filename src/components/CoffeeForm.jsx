import React from 'react'
import { coffeeOptions } from '../utils'
import {useState} from 'react' 

export default function CoffeeForm() {
    const [showCoffeeTypes,setShowCoffeeTypes] = useState(false)
    const [selected, setSelected] = useState(null)
    const [cost, setCost] = useState(0)
    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(0)
  return (
    <>
        <div className='section-header'>
            <i className='fa-solid fa-pencil'/>
            <h2>Start Tracking Today</h2>
        </div>
        <h4>Select coffee type</h4>
        <div className='coffee-grid'>
            {coffeeOptions.slice(0,5).map((option, i)=>{
                return (
                    <button
                        onClick={() => {
                            setSelected(option.name)
                            setShowCoffeeTypes(false)
                        }}
                        className={`button-card${option.name === selected ? ' coffee-button-selected' : ''}`}
                        key={i}
                    >
                        <h4>{option.name}</h4>
                        <p>{option.caffeine} mg </p>
                    </button>
                )
            } )}
            <button onClick={()=>{
                setShowCoffeeTypes(!showCoffeeTypes)
                setSelected(null)
                }} className='button-card'>
                <h4>Other</h4>
                <p>n/a</p>
            </button>
            </div>

            {showCoffeeTypes&&<select onChange={(e)=>{
                setSelected(e.target.value)
            }} id='coffee-list' name='coffee-list'>
                <option value = {null}>Select type</option>
                {coffeeOptions.map((option,i)=>{
                    return(
                        <option value = {option.name} key = {i}>
                            {option.name} ({option.caffeine}mg)
                        </option>
                    )
                })}
            </select>}

            <h4>Add the cost ($) </h4>
            <input className='w-full' type = "number" vlaue={cost} onChange={(e)=>{
                setCost(e.target.value)
            }} placeholder='4.50'/>
            <h4>Time since consumption </h4>
            <div className='time-entry'>
              <div>
                <h6>Hours</h6>
                <select onChange={(e)=>{
                    setHour(e.target.value)
                }} id="hours-select">
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((h,i)=>{ 
                        return (
                            <option key ={i} value ={h}>{h}</option>
                    )
                    })}
                </select>
              </div> 
              <div>
                <h6>Minutes</h6>
                <select onChange={(e)=>{
                    setMinutes(e.target.value)
                }} id="mins-select">
                    {[0,5,10,15,30,45].map((m,i)=>{ 
                        return (
                            <option key ={i} value ={m}>{m}</option>
                    )
                    })}
                </select>
              </div>
            </div>
            <button> Add Entry </button>
    </>
  )
}
