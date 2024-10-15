import './App.css'
import ConverterHEXToRGB from "./components/ConverterHEXToRGB";

function App() {

  const default_style = 'background-color:rgb(255,0,0);';

  const convertValue = (val) => {
    if(val.includes('#') === false && val.length !== 0) {
        root.setAttribute('style', default_style);
        return (<>#ошибка</>);
    } else if (val.length === 7) {

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);

      root.setAttribute('style', result ? 'background-color:rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ');' : default_style);

      return (
          <>
            {result ? 'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')' : '#ошибка'}
          </>
      );
    } else if (val.length > 7) {
      return (<>{val.substring(0, 7)}</>);
    } else {
      root.removeAttribute('style');
      return (<></>);
    }
  }

  return (
    <ConverterHEXToRGB fn={convertValue}/>
  )
}

export default App
