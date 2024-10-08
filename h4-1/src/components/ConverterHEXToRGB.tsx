import {useState} from "react";

export default function ConverterHEXToRGB() {

    const[form,setForm] = useState({
        hexField: '',
    });

    const handleNameChange = ({target}) => {
        const {name, value} = target;
        console.log(name);
        console.log(value);
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const convertValue = (val) => {
        console.log(val);
        if(val.includes('#') === false && val !== '') return (<>#ошибка</>);


        return (
            <>
                {val}
            </>
        );
    }

    return (
        <form>
            <label htmlFor="hexField">
                Введите цвет в формате HEX для преобразования в RGB
            </label>
            <input
                type="text"
                id="hexField" name="hexField"
                value={form.hexField}
                onChange={handleNameChange}/>
            <span>{convertValue(form.hexField)}</span>
        </form>
    )
}
