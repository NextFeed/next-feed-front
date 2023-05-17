import { useContext, useState } from "react";
import { RootContext } from '../../Utils/Contexts';
import "./style.css";

export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
    } = useContext(RootContext);
    const [tagInput, setTagInput] = useState("");

    return <div 
        style={{
            width: screenW,
            height: screenH,
        }}
        className="fcc"
    >
        <div className="Logo-1"></div>
        <span className="-Instagram-">
            당신의 Instagram 계정을
            입력하세요!
        </span>
        <span className="AI-">
            AI가 당신의 매력을 분석해드립니다.
        </span>
        <div className="Rectangle-1 fc">
            <div className="Vector"></div>
            <span className="Instagram-">
                Instagram 계정
            </span>
            <div className="Rectangle-17 fc button">
                <span className="_">
                    분석하기
                </span>
            </div>
        </div>
        <div style={{
            display: "flex",
        }}>
            <div className="Rectangle-2 fc button">
                <span>
                    남성
                </span>
            </div>
            <div className="Rectangle-3 fc button">
                <span>
                    여성
                </span>
            </div>
        </div>
    </div>;
};