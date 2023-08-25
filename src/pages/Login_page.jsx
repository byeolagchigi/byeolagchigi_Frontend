import { MainHeader } from "../components/Main_Header";
import './Login_page.css';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";

export const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password }); // 요청 주소 수정
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleLogin();
        }
        
    }


    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div>
                <MainHeader />
                <div className="LoginText">
                    <img className="lock" alt="require" src={require("../images/lock.png")}/>
                    <div className='login-text'>
                        <b className='login-text'>Login</b>
                        <p className='login-second-text'>지하 차도 지역 알림 서비스를 이용해보세요.</p>
                    </div>
                </div>
                
                <div className="Login">
                    <div className="username-box">
                        <img className="usr-img" alt="require" src={require("../images/username.png")}></img>
                        <input type="text" className="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                    </div>
                    <div className="password-box">
                        <img className="pwd-img" alt="require" src={require("../images/password.png")}></img>
                        <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={onKeyPress}  placeholder="Mobile" ></input>
                    </div>
                    <div>
                        <Link to="/SignUp_page" className="makeAC">계정 만들기 {'>'}</Link>
                    </div>
                </div>

                <div>
                    <img className="GA" alt="require" src={require("../images/GA.png")}></img>
                </div>
            </div>
        </motion.div>
        
    );
}