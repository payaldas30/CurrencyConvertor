import { useState } from 'react'
import UseCurrencyInfo from './Hooks/UseCurrencyInfo'
import InputBox from './Components/InputBox'


function App() {
  const [amount, setamount] = useState(0)
  const [From, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [covertedAmt, setCovertedAmt] = useState(0)

 const CurrencyInfo =UseCurrencyInfo(From)
 const option= Object.keys(CurrencyInfo)
 const swap=()=>{
  setFrom(to)
  setTo(From)
  setCovertedAmt(amount)
  setamount(covertedAmt)
 }
 
 const convert=()=>{
  setCovertedAmt(amount*CurrencyInfo[to])
 }
  
 
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=400')`,
          }}
          
      >
        <h1 className='text-white font-extrabold text-[50px] text-center'>CURRENCY-CONVERTOR</h1>
          <div className="w-[90%] md:w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                <div className="w-full mb-1">
                <InputBox
                   label="From"
                   amount={amount}
                   CurrencyOption={option}
                   onCurrencyChange={(currency)=>setamount(amount)}
                   selectCurrency={From}
                   onamountChange={(amount)=>setamount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                             onClick={swap} 
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                            label="To" 
                            amount={covertedAmt}
                           CurrencyOption={option}
                           onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                         amountDisable
         
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                       Convert {From.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
 
}
export default App

