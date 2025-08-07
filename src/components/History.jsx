import React from 'react'
import { coffeeConsumptionHistory, calculateCurrentCaffeineLevel, getCaffeineAmount, timeSinceConsumption } from '../utils'

export default function History() {
  return (
    <>
    <div className='section-header'>
      <i className='fa-solid fa-clock-rotate-left'/>
        <h2>History</h2>
    </div>
    <p><i>Hover for more info</i></p>
    <div className='coffee-history'>
      {Object.keys(coffeeConsumptionHistory).sort((a,b)=>b-a).map((utcTime, coffeeIndex)=>{
        const coffee = coffeeConsumptionHistory[utcTime]
        const timeSinceConsume= timeSinceConsumption(utcTime)
        const ogAmount = getCaffeineAmount(coffee.name)
        const remainingAmount= calculateCurrentCaffeineLevel({[utcTime]: coffee})
        
        const summary =`${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${ogAmount}mg`
        
        return(
          <div title={summary} key={coffeeIndex}>
            <i className='fa-solid fa-mug-hot'/>
          </div>
        )
      })}
    </div>
    </>
  )
}
