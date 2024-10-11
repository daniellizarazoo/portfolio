/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect,useState } from "react";

const TypeWritter = ({data,speed=200}) => {
    const [infoToShow,setInfoToShow] = useState('');
    const [indexArray,setIndexArray] = useState(0);
    const [indexChar,setIndexChar] = useState(0);
    useEffect(()=>{
        const index = indexArray;
        const indexC = indexChar;
        const typeWriter = () => {
            if(index <= data.length - 1){
                const currentString = data[index];
                if(indexC < currentString.length){
                    setInfoToShow((p) => p + currentString[indexC]);
                    setIndexChar((p) => p + 1);
                } else {
                    setTimeout(() => {
                        setIndexArray((prev) => prev + 1); // Cambia al siguiente string
                        setIndexChar(0); // Reinicia el índice de caracteres
                        setInfoToShow(''); // Reinicia el texto mostrado
                    }, 2000);
                };
                } else {
                    setIndexArray(0);
                    setIndexChar(0);
                };
            };
        
            const timeoutId = setTimeout(typeWriter, speed); // Llama a typeWriter cada 200 ms

            return () => clearTimeout(timeoutId); // Limpia el timeout al desmontar

        },[data,indexArray,indexChar]);

    return(
        <p className="text-3xl cursor-default">{infoToShow}|</p>
    );
};

export default TypeWritter;