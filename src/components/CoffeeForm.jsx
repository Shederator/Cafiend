import React from 'react'
import { coffeeOptions } from '../utils'

export default function CoffeeForm() {
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
                    <button className='button-card' key = {i}>
                        <h4>{option.name}</h4>
                        <p>{option.caffeine} mg </p>
                    </button>
                )
            } )}
            <button className='button-card'>
                <h4>Other</h4>
                <p>n/a</p>
            </button>
            </div>
            <select id='coffee-list' name='coffee-list'>
                <option value = {null}>Select type</option>
                {coffeeOptions.map((option,i)=>{
                    return(
                        <option value = {option.name} key = {i}>
                            {option.name} ({option.caffeine}mg)
                        </option>
                    )
                })}
            </select>
            <h4>Add the cost</h4>
    </>
  )
}
