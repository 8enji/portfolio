
import React, {useRef, useEffect} from "react";



const renderMatrix = (ref) => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+`~[]{}|\\'\"/?.,<>"

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const render = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.05)"; // black w a tiny bit of alpha
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "#0f0"; // pure green
        context.font = fontSize + "px monospace";
        context.shadowColor = "rgba(0,0,0,0.3)";
        context.shadowBlur = 4;


        for (let i = 0; i < rainDrops.length; i++) {
            // randomize the string of characters to render
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    setInterval(render, 40);
};

const MatrixRain = (props) => {
    const ref = useRef();
    const keyName = "mrl-" + props.key;
    const thisClassName = "mrl-container";
    useEffect(() => { 
        renderMatrix(ref)
       }, []);
    
    return (
        <canvas key={keyName} className={thisClassName} ref={ref} style = {{position:"absolute", top: 0, left: 0}}/>
    );
};

export default MatrixRain;