import { useContext, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
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
    const [isMale, setIsMale] = useState(true);
    
    const onSubmit = async(event) => {
        // const apiBaseUrl = "http://localhost:3000";
        // const response = await fetch(`${apiBaseUrl}/api/tag?tag=${tagInput}`);
        // const result = await response.json();
        event.preventDefault();
        setTag(tagInput);
        window.location.hash = "tagresult";
    };

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        className="fcc"
    >
        <img className="Logo-1" src="Images/logo.png"/>
        <span className="-Instagram-">
            당신의 Instagram 계정을
            입력하세요!
        </span>
        <span className="AI-">
            AI가 당신의 매력을 분석해드립니다.
        </span>
        <span className="public-">
            *공개 계정만 가능합니다.
        </span>
        <form onSubmit={onSubmit}>
            <label className="Rectangle-1 fb">
                <img className="Vector" src="Images/Vector.png"/>
                <input 
                    type="text" 
                    className="taginput"
                    value={tagInput}
                    onChange={event => setTagInput(event.target.value)}
                    required 
                />
                <div className="Instagram- placeholder">
                    Instagram 계정
                </div>
                <input 
                    type="submit" 
                    className="submit fc button"
                    value="분석하기"
                />
            </label>
            <div style={{
                display: "flex",
            }}>
                <div 
                    onClick={() => setIsMale(true)}
                    className={"Rectangle-2 fc button " + (isMale ? "selected" : "unselected")}
                >
                    <span className="gender">
                        남성
                    </span>
                </div>
                <div 
                    onClick={() => setIsMale(false)}
                    className={"Rectangle-3 fc button " + (isMale ? "unselected" : "selected")}
                >
                    <span className="gender">
                        여성
                    </span>
                </div>
            </div>
        </form>
    </div>;
};