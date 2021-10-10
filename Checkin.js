import React from "react";
import "./Checkin.css";
import box from '../assets/image/box-removebg-preview.png';
import x from '../assets/image/2.png';
class Checkin extends React.Component{
    render(){
        return(
 <div>
         <div classname="a">
                 <div classname="b">
                <div classname="c">
                <img src={box} alt=""/>
                    <p>Day 1 </p>
                </div>
                <div classname="c">
                    <img src={box} alt=""/>
                    <p>Day 2</p>
                </div>
                <div classname="c">
                <img src={box} alt=""/>
                    <p>Day 3</p>
                </div>
                <div classname="c">
                <img src={box} alt=""/>
                    <p>Day 4</p>
                </div>
                <div classname="c">
                <img src={box} alt=""/>
                    <p>Day 5</p>
                </div>
                <div classname="c">
                <img src={box} alt=""/>
                    <p>Day 6</p>
                </div>
                <div classname="c">
                <img src={box} alt=""/>
                    <p>Day 7</p>
                </div>
                <div classname="d">
                    <img src={x} alt="" classname="qimg"/>
  </div>
         </div>
                </div>
                         </div>
        );
    }
}
export default Checkin;