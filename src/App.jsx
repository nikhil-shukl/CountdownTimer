import CountdownTimer from './CountdownTimer';

import './App.css'

function App() {
  

  return (
   
      <body>
        <h2>Summer Countdown</h2>
        <div id="container">
         
         <div>
            <CountdownTimer targetDate="2025-03-31T23:59:59" />
            

         </div>
         
         <div class="heads">
          <h4 className="days">DAYS</h4>
          <h4 className='hours'>HOURS</h4>
          <h4 className='minutes'>MINUTES</h4>
          <h4 className='seconds'>SECONDS</h4>
         </div>

        </div>

      </body>
    
   
  )
}

export default App;

