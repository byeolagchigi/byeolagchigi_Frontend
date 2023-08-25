import { MainHeader } from "../components/Main_Header";
import { MainFooter } from "../components/Main_Footer";

export const AdminPage = () => {
    return (
        <>
            <div className="admin-text-box">
                <h2>Admin Page</h2>
                <p>관리자님, 안녕하세요!</p>
            </div>

            <div className="admin-bari-box">
                <b>바리케이드 통제 제어</b>
                <p>부산광역시 지하 차도 바리게이트 통제 현황입니다.</p>
            </div>

            <div className="admin-whitch-box1">
                <div>
                    <p>당감지하차도</p>
                    <p>부산광역시 부산진구 당감동</p>
                </div>
                <div>
                    <p>제1지하차도</p>
                </div>
                <div>
                    <p>봉림지하차도</p>
                </div>
                <div>
                    <p>감천지하차도</p>
                </div>
            </div>
        </>
    )
}