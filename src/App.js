import { useEffect } from 'react';
import './App.css';
import { AllItems } from './hooks/AllItems';
import { Category } from './hooks/Category';
import DashBoardIndex from './hooks/Dashboard';

function App() {
  const {getAllItems} = AllItems();
  const {getAllCategory} = Category() 

  useEffect(()=>{
    getAllItems()
},[])

  useEffect(()=>{
    getAllCategory()
  }, [])
  

  return (
    <div className="App">
      <DashBoardIndex />
    </div>
  );
}

export default App;
