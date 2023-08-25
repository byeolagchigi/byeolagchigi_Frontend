import { MainHeader } from "../components/Main_Header";
import { MainFooter } from "../components/Main_Footer";
import './Profile_page.css'
import {motion} from 'framer-motion';

export const Profile = () => {
    return (
        <>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <MainHeader />
                <div className="Profile-box">
                    <h2 className="mypage-text">My Page</h2>
                    <p className="hello-text">???님, 안녕하세요!</p>
                </div>

                <div className="Profile-second-box">
                    <b className="witch-text">???님의 지역은 하단 1동입니다.</b>
                    <p className="rename-text">내 지역 수정하러 가기</p>
                </div>

                <div className="Profile-third-box">
                    <p className="logout-text">로그아웃 하기{" >"}</p>
                    <p className="delete-text">계정 삭제 하기{" >"}</p>
                </div>
            <MainFooter />
        </motion.div>
            
        </>
    )
}

