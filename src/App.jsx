import { LineChart } from 'recharts'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOption from './components/priceOption/PriceOption'
import Linechart from './components/linechart/Linechart'
import Barchart from './components/Barchart/Barchart'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <PriceOption></PriceOption>
        <Linechart></Linechart>
        <Barchart></Barchart>
      </div>
    </>
  )
}

export default App
