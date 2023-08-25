import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoHome } from 'react-icons/go';
import { BsCloudRain } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { TbZoomQuestion } from 'react-icons/tb';
import './Main_Footer.css';

export const MainFooter = () => {
    const [gohome, setGohome] = useState(true);
    const [rain, setRain] = useState(false);
    const [search, setSearch] = useState(false);
    const [person, setPerson] = useState(false);

    const handleGohome = () => {
        setGohome(true);
        setRain(false); // 다른 아이콘 상태 초기화
        setPerson(false);
        setSearch(false);
    }

    const handleRain = () => {
        setRain(true);
        setGohome(false); // 다른 아이콘 상태 초기화
        setPerson(false);
        setSearch(false);
    }

    const handleSearch = () => {
        setSearch(true);
        setRain(false);
        setGohome(false);
        setPerson(false);
    }

    const handlePerson = () => {
        setPerson(true);
        setRain(false);
        setGohome(false);
        setSearch(false);
    }

    return (
        <>
            <div className="footer-box">
                <div className="icon-box">
                    <div onClick={handleGohome}>
                        <Link to="/Main_page">
                            <GoHome size="28" color={gohome ? "black" : "gray"} />
                        </Link>
                    </div>
                    <div onClick={handleRain}>
                        <Link to="/Main_page">
                            <BsCloudRain size="28" color={rain ? "black" : "gray"} />
                        </Link>
                    </div>
                    <div onClick={handleSearch}>
                        <Link to="">
                            <TbZoomQuestion size="28" color={search ? "black" : "gray"}/>
                        </Link>
                    </div>
                    <div onClick={handlePerson}>
                        <Link to="/Profile_page">
                            <BsPerson size="28" color={person ? "black" : "gary"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
