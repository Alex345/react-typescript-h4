import {useState} from "react";
import '../assets/converterHexToRgb.css';

export default function ConverterHEXToRGB() {

    const body = document.getElementsByTagName('body')[0];
    const default_style = 'background-color:rgb(255,0,0);';

    const[form,setForm] = useState({
        hexField: '',
    });

    const handleNameChange = ({target}) => {
        const {name, value} = target;
        // console.log(name);
        // console.log(value);
        if(value.length > 7) {
            setForm(prevForm => ({...prevForm, [name]: value.substring(0,7)}));
        } else {
            setForm(prevForm => ({...prevForm, [name]: value}));
        }
    }

    const convertValue = (val) => {
        if(val.length === 7) {
            if(val.includes('#') === false) {
                body.setAttribute('style', default_style)
                return (<>#ошибка</>);
            }

            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);

            body.setAttribute('style', result ? 'background-color:rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')' : default_style);

            return (
                <>
                    { result ? 'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')' : '#ошибка'}
                </>
            );
        } else if(val.length > 7) {
            return (<>{val.substring(0,7)}</>);
        } else {
            body.removeAttribute('style');
            return (<></>);
        }
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
