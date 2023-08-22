import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainComponent from './MainComponenet';
import HeaderComponenet from './HeaderComponenet';

function App() {
  const [value, setValue] = useState(0)
  const [previous, setPrevious] = useState({
    order: 0,
    name: "",
    rate: 0
  })
  const [ordered, setOrdered] = useState([])
  const CartValue = (a, b, c) => {
    previous.order = a
    previous.name = b
    previous.rate = c * a
    setPrevious({ ...previous })
    if (previous.order > 0) {
      setOrdered([...ordered, previous])
    }
    if (a > 0) {
      setValue(value + 1)
    }
    setPrevious({
      ...previous, order: 0,
      name: "",
      rate: 0
    })
  }
console.log(ordered)
  const remove = (inde)=>{
    ordered.map((item,index)=>{
      if(inde == index){
        ordered.splice(index,1)
        setOrdered([...ordered])
      }
    })
    setValue(value-1)
  }

  return (
    <div className="App">
      <HeaderComponenet valueCart={value} OrderSend={ordered} removeElement = {remove} />
      <MainComponent cartValue={CartValue} />
    </div>
  );
}

export default App;
