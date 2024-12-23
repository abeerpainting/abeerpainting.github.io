import './App.css';

import HeaderBar from "./components/HeaderBar";
import PaintingGallery from "./components/PaintingGallery";
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <PaintingGallery/>
      <Quote/>
    </div>
  );
}

export default App;
