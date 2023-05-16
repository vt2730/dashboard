import { useEffect } from 'react';
import './App.css';
import { AllItems } from './hooks/AllItems';
import { Category } from './hooks/Category';
import Button from './common/ButtonFields/Button';

function App() {
  const {getAllItems} = AllItems();
  const {getAllCategory} = Category() 

  useEffect(()=>{
    getAllItems()
},[])

  useEffect(()=>{
    getAllCategory()
  },[])
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
