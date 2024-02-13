import { useState } from 'react'
import './App.css'

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')
    const [hexCode, setHexCode] = useState('');
    const [rgbCode, setRgbCode] = useState('');

    function handleCreateHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(hexColor);
        console.log(hexColor);
        setHexCode(hexColor);
    }
    function handleCreateRgbColor() {
        const rgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        setColor(rgbColor);
        console.log(rgbColor);
        setRgbCode(rgbColor)
    }

    return (
        <div style={{ width: '100vw', height: '100vh', background: color }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor}>Generate Random Color</button>
            <p>The {typeOfColor === 'hex' ? 'HEX' : 'RGB'} code is: {typeOfColor === 'hex' ? hexCode : rgbCode}</p>
        </div>
    )
}

export default RandomColor