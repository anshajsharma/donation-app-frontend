import React, { useEffect, useState,useRef } from 'react';
import "./Banner.css";
import { useNavigate} from "react-router-dom";

const images = ["https://cdn.pixabay.com/photo/2017/07/15/19/37/india-2507482__480.jpg","https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_1280.jpg","https://cdn.pixabay.com/photo/2018/07/19/08/51/old-man-3548098__340.jpg"]
const delay = 3500;
function Banner() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

    useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const navigate = useNavigate();

    return(
        <header className="banner"
         style={{
             backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${images[index]})`,
             transition: `all 0.8s ease-in-out`
         }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                Foundation
                </h1>
                <p>Login/Signup as</p>
            <div className="banner__buttons">
                <button className="banner__button" onClick={()=>navigate("/org")}>Organisation</button>
                <button className="banner__button"  onClick={()=>navigate("/people")}>People</button>
            </div>
            <h1 className="banner__description">
            A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. A computer system is a "complete" computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for "full" operation. 
            </h1>
            </div>
            {/* <div className="banner--fadeBottom"/> */}
        </header>
  
    );
}

export default Banner