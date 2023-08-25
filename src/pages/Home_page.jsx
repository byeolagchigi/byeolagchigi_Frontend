import { MainFooter } from "../components/Main_Footer";
import { MainHeader } from "../components/Main_Header";
import {motion} from 'framer-motion';
import '../pages/Home_page.css';

export const MainPage = () => {
    return (
        <>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <MainHeader/>
                <div >
                    <h2 className="home-text">Home</h2>
                    <div className="Main_page_box">
                        <img className="search" alt="require" src={require("../images/search.png")}></img>
                        <input type="text" className="home-input-box" placeholder="지하 차도 침수 지역을 검색해보세요"></input>
                        <img className="mike" alt="require" src={require("../images/mike.png")}></img>
                    </div>
                </div>

                <div>
                    <h3 className="home-news-box">오늘의 기사</h3>
                    <p className="home-news-text">최근 일어난 지하 차도 침수 현장입니다.</p>
                    <div className="news-box">
                        <img className="news" alt="require" src={require("../images/news.png")}></img>
                        <p className="home-news-box-text">오송 지하차도 참사 생존자들, 탈출 장면 블랙박스 추가 공개 "지옥에서 발버둥쳤다"</p>
                    </div>
                    <div className="news-right-box"></div>
                </div>

                <div>
                    <h3 className="home-situation-text">최근 지하 차도 침수 현황</h3>
                    <p className="home-situation-person-text">???님 지역의 지하 차도 침수 상황입니다.</p>
                    <div className="situation-box">
                        <img className="post" alt="require" src={require("../images/post.png")}></img>
                        <b className="situation-text-first">우리 지역 지하 차도 침수 현황</b>
                        <p className="situation-text-second">?건 (2022~2023년 간)</p>
                        <p className="situation-text-third">다른 지역 지하 차도 침수 현황 보러가기 {">"}</p>
                    </div>
                </div>
            <MainFooter/>
        </motion.div>
            
        </>
    )
}