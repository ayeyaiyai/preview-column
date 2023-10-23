import './App.css'
import sedanIcon from './images/icon-sedans.svg';
import suvIcon from './images/icon-suvs.svg';
import luxuryIcon from './images/icon-luxury.svg';

function App() {
  return (
    <div className='column-container'>
      <div className='column-body'>
        <div className='column-section left-column'>
          <div className='car-image-container'>
            <img src={sedanIcon} alt='sedan icon' className='car-image'></img>
          </div>
          <div className='column-title'>SEDANS</div>
          <div className='column-subtitle'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</div>
          <button className='column-button left-button'>Learn More</button>
        </div>
        <div className='column-section middle-column'>
          <div className='car-image-container'>
            <img src={suvIcon} alt='SUV icon' className='car-image'></img>
          </div>
          <div className='column-title'>SUVS</div>
          <div className='column-subtitle'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</div>
          <button className='column-button middle-button'>Learn More</button>
        </div>
        <div className='column-section right-column'>
          <div className='car-image-container'>
            <img src={luxuryIcon} alt='luxury car icon' className='car-image'></img>
          </div>
          <div className='column-title'>LUXURY</div>
          <div className='column-subtitle'>Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.</div>
          <button className='column-button right-button'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default App