//import Header from './Header/Header';
import './styles/styles.css';
import Header from './header/Header';
import FirstSection from './sectionOne/First';
//@ts-ignore
 import background from './assets/background.png';

function App() {
  return (
    <>
      <img src={background} className="background" />
      <Header/>
      <FirstSection/>
    </>
  );
}

export default App;
