import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
import Graph from "../../Components/Graph.js";
import BottomNavigator from "../../Components/BottomNavigator.js";
import WideButton from "../../Components/WideButton.js";

const scoreOfFeature = (result, feature) => {
    if(result.feature1 === feature) {
        return result.score1;
    } else if(result.feature2 === feature) {
        return result.score2;
    } else if(result.feature3 === feature) {
        return result.score3;
    } else {
        return 0;
    }
}

export default function () {
    const {
        tag,
        screenW,
        multiResults,
        multiImgs,
        tagAnalysisResult,
    } = useContext(RootContext);


    const [sortType, setSortType] = useState("simil");
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [sortedMultiResults, setSortedMultiResults] = useState([]);

    const feature1 = tagAnalysisResult?.feature1 || "";
    const feature2 = tagAnalysisResult?.feature2 || "";
    const feature3 = tagAnalysisResult?.feature3 || "";
    useEffect(() => {
        if(!multiResults || multiResults.length === 0) {
            return;
        }
        let _sortedMultiResults = multiResults.map((result, index) => {
            result["img"] = multiImgs[index];
            return result;
        });
        if(sortType === "simil") {
            _sortedMultiResults = _sortedMultiResults.sort((result1, result2) => {
                const score11 = scoreOfFeature(result1, feature1);
                const score12 = scoreOfFeature(result2, feature1);
                if(score11 !== score12) {
                    return score12 - score11;
                }
                const score21 = scoreOfFeature(result1, feature2);
                const score22 = scoreOfFeature(result2, feature2);
                if(score21 !== score22) {
                    return score22 - score21;
                }
                const score31 = scoreOfFeature(result1, feature3);
                const score32 = scoreOfFeature(result2, feature3);
                if(score31 !== score32) {
                    return score32 - score31;
                }
                return 0;
            });
        }
        if(isCollapsed) {
            _sortedMultiResults = _sortedMultiResults.slice(0, 2);
        }
        setSortedMultiResults(_sortedMultiResults);
    }, [sortType, isCollapsed]);

    const renderResult = (result, index) => {
        return <div className="multiresult fsc" key={`result${index}`}>
            <div className="fs">
                <div className="feature">
                    {index+1}. {result.feature1.toUpperCase()} {result.score1}%
                </div>
            </div>
            <div className="fs">
                <img
                    className="image"
                    src={"data:image/png;base64," + result.img}
                />
                <Graph graphW={220} graphH={119} analysisResult={result}/>
            </div>
        </div>;
    };

    return <div
        style={{
            width: screenW,
        }}
        id="multiresult"
        className="fsc"
    >
        <div className="titleTab fcc">
            <img
                className="smallLogo"
                src="Images/logo.png"
            />
            <div className="fc titleRow">
                <img
                    className="backButton button"
                    src="Images/back.png"
                    onClick={() => {
                        window.history.back();
                    }}
                />
                <span className="pageTitle">
                    사진 분석 결과
                </span>
            </div>
        </div>
        <div className="taglabel fs">
            @{tag}
        </div>
        {
            multiResults &&
            <div className="fsc">
                <div className="sortContainer fe">
                    <div className="sortButton fb">
                        <div
                            className={"button" + (sortType === "simil" ? " primaryColor" : "")}
                            onClick={() => {
                                setSortType("simil");
                            }}
                        >
                            유사도순
                        </div>
                        <div>
                            |
                        </div>
                        <div
                            className={"button" + (sortType === "upload" ? " primaryColor" : "")}
                            onClick={() => {
                                setSortType("upload");
                            }}
                        >
                            업로드순
                        </div>
                    </div>
                </div>
                <div className="multiResultsBox fsc">
                    {sortedMultiResults.map(renderResult)}
                    {isCollapsed && "..."}
                </div>
                <div 
                    className="moreButton button fsc"
                    onClick={() => {
                        setIsCollapsed(!isCollapsed);
                    }}
                >
                    <div className={isCollapsed ? "more" : "collapse"}/>
                    더보기
                </div>
            </div>
        }
        <span className="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img className="image-1 button" src="Images/insta.png" />
            <img className="image-2 button" src="Images/kakao.png" />
        </div>
        <BottomNavigator 
            text="다른 사진 분석하기" 
            analysisResult={tagAnalysisResult}
        />
        <WideButton 
            text="Instagram 결과로 돌아가기"
            onClick={() => {
                window.location.hash = "tagresult";
            }}
        />
        <WideButton 
            text="처음으로"
            onClick={() => {
                window.location.hash = "";
            }}
        />
    </div>;
};