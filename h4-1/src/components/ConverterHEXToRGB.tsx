import {useState} from "react";
import '../assets/converterHexToRgb.css';

export default function ConverterHEXToRGB({fn}) {

  const [form, setForm] = useState({
    hexField: '',
  });

  const handleNameChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;

    if (value.length > 7) {
      setForm(prevForm => ({...prevForm, [name]: value.substring(0, 7)}));
    } else {
      setForm(prevForm => ({...prevForm, [name]: value}));
    }
  }

  return (
    <form>
      <div className="form__wrapper">
        <label htmlFor="hexField">
          Введите цвет в формате HEX для преобразования в RGB
        </label>
        <input
          type="text"
          id="hexField" name="hexField"
          value={form.hexField}
          onChange={handleNameChange}/>
        <span>{fn(form.hexField)}</span>
      </div>
    </form>
  )
}
