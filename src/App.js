import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'
function App() {
  const colors=['red','greenyellow','blue','yellow','hotpink','cyan','orange','purple','lightpink','green','salmon','deepskyblue','brown','darkorange','grey','gold'];
  return (
    <div className="App">
     <ColorPicker colors={colors}/> 
    
    </div>
  );
}

export default App;
