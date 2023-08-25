import React, { useState } from "react";
import { HeaderStyle, ImageStyle} from "./Header_style";
import "./Main_Header.css"

export const MainHeader = () => {
    
    const [timer, setTimer] = useState("00:00");

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        setTimer(`${hours}:${minutes}`);
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()

    return (
        <div>
            <HeaderStyle>
                <h4 className="timer">{timer}</h4>
                <div className="right-phone">
                    <ImageStyle className="network" alt="require" src = {require("../images/network.png")}></ImageStyle>
                    <ImageStyle className="wifi" alt="require" src = {require("../images/wifi.png")}></ImageStyle>
                    <ImageStyle className="net" alt="require" src = {require("../images/bet.png")}></ImageStyle>
                </div>
            </HeaderStyle>


        </div>
    );
}

