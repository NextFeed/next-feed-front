export default function({
    text, 
    analysisResult,
}) {
    return <div className="addImage fcc">
        <span className="AIanalysys">
            {text}
        </span>
        <div className="Line-2"></div>
        <div className="Frame-27 fb">
            <div 
                className="oneImage button"
                onClick={() => {
                    window.location.hash = "uploadone";
                }}
            >
                <span className="howmuchcute">
                    다른 사진은
                    <br/>
                    몇 % <span className="muchcute"> {analysisResult?.feature1 || "N/A"} </span>할까?
                </span>
                <span className="oneanalysis">
                    한 장 분석
                </span>
            </div>
            <div 
                className="multiImage button"
                onClick={() => {
                    window.location.hash = "uploadmulti";
                }}
            >
                <span className="mostcutefind">
                    내 사진 중
                    <br/>
                    가장 <span className="mostcute"> {analysisResult?.feature1 || "N/A"} </span>한 사진 찾기
                </span>
                <span className="multianalysis">
                    여러 장 분석
                </span>
            </div>
        </div>
    </div>;
};