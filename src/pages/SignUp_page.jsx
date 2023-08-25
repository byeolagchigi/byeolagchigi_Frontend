import { MainHeader } from "../components/Main_Header";
import React, {useState} from "react";
import './SignUp_page.css'
import {motion} from 'framer-motion'
import axios from "axios";

export const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3001/signup', { username, password });
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSignup();
        }
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <MainHeader />
                <div className="SignText">
                    <img className="SignLock" alt="require" src={require("../images/sign.png")}></img>
                    <div className="sign-text">
                        <b className="first-sign-text">Create account</b>
                        <p className="second-sign-text">회원가입을 하고 서비스를 이용해 보세요.</p>
                    </div>
                </div>

                <div className="account">
                        <div className="username-box-sign">
                            <img className="usr-img" alt="require" src={require("../images/username.png")}></img>
                            <input type="text" className="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                        </div>
                        <div className="password-box-sign">
                            <img className="pwd-img" alt="require" src={require("../images/password.png")}></img>
                            <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                        </div>
                        <div className="email-box-sign">
                            <img className="email-img" alt="require" src={require("../images/Email.png")}></img>
                            <input type="email" className="email" placeholder="E-mail"></input>
                        </div>
                        <div className="mobile-box-sign">
                            <img className="mobile-img" alt="require" src={require("../images/mobile.png")}></img>
                            <input type="text" className="mobile" placeholder="Mobile" onKeyPress={onKeyPress}></input>
                        </div>
                </div>

                <div>
                        <img className="GA" alt="require" src={require("../images/GA.png")}></img>
                    </div>


            </motion.div>
        </>
    )
}