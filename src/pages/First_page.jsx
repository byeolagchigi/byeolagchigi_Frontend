import { MainHeader } from "../components/Main_Header";
import './First_page.css'
import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export const FirstPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/Login_page'); // 1.5초 후에 /main2 페이지로 이동
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <div className="page">
            <MainHeader />
            <div className='text'>
                <b className='first-text'>지하 차도 침수 지역 알림 서비스</b>
                <p className='second-text'>우리 지역의 지하 차도 침수 현황은?</p>
            </div>
        </div>
    );
}