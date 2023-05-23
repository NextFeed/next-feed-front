import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';

export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
    } = useContext(RootContext);

    return <div
        style={{
            width: screenW,
            height: screenH,
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
        <div className="Frame-21 fb">
            <div className="oneimage"></div>
            <div className="fcc">
                <span className="onecute">
                    CUTE
                </span>
                <span className="percent">
                    70%
                </span>
            </div>
        </div>
        <span className="fit">
            당신의 계정과 잘 어울리네요!
        </span>
        <span className="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img className="image-1 button" src="Images/insta.png" />
            <img className="image-2 button" src="Images/kakao.png" />
        </div>
        <div className="addImage fcc">
            <span className="AIanalysys">
                다른 사진 분석하기
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
                        <br />
                        몇 %
                        <span className="muchcute"> 귀여울</span>까?
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
                        <br />
                        가장
                        <span className="mostcute"> 귀여운 </span>
                        사진 찾기
                    </span>
                    <span className="multianalysis">
                        여러 장 분석
                    </span>
                </div>
            </div>
        </div>
        <div 
            className="widebutton button"
            onClick={() => {
                window.location.hash = "tagresult";
            }}
        >
            <span className="return">
                Instagram 결과로 돌아가기
            </span>
        </div>
        <div 
            className="widebutton button"
            onClick={() => {
                window.location.hash = "";
            }}
        >
            <span className="return">
                처음으로
            </span>
        </div>
    </div>;
};