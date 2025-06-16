import React from 'react'

export default function Hero() {
  return (
    <>
        <h1>Coffee Tracking for Coffee <abbr title = 'An enthusiest or devotee'>Fiends</abbr>!</h1>
        <div className='benefits-list'>
            <h3 className='font-bolder'>Try <span className='text-gradient'>Caffiend</span> and start ...</h3>
            <p>✅ Tracking ever cofee</p>
            <p>✅ Measuring your blood cafine levels</p>
            <p>✅ Costing and quantifying your addiction</p>
        </div>
        <div className='card info-card'>
            <div>
                <i className="fa-solid fa-circle-info"></i>
                <h3>Did you know ...</h3>
            </div>
            <h5>That caffine&apos;s half-life is about 5 hours?</h5>
            <p>Caffeine&apos;s half-life is around 5 hours. That means if you drink coffee at 4 PM, half of it may still be in your system by 9 PM, potentially affecting your sleep. Factors like age, medications, and smoking can change how quickly your body processes it.</p>

        </div>
    </>
  )
}
