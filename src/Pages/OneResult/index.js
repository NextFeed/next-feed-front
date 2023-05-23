import { useContext, useEffect, useState } from "react";
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

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        className="fsc"
    >
        <div class="Rectangle-16 fcc">
            <img
                className="logo"
                src="Images/logo.png"
            />
            <div className="fc tab">
                <img
                    className="back button"
                    src="Images/back.png"
                    onClick={() => {
                        setTag("");
                        window.location.hash = "#uploadone";
                    }}
                />
                <span className="a-">
                    사진 분석 결과
                </span>
            </div>
        </div>
        <div className="Frame-21 fb">
            <div class="oneimage"></div>
            <div class="fcc">
                <span class="onecute">
                    CUTE
                </span>
                <span className="percent">
                    70%
                </span>
            </div>
        </div>
        <span class="fit">
            당신의 계정과 잘 어울리네요!
        </span>
        <span class="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img class="image-1 button" src="Images/insta.png" />
            <img class="image-2 button" src="Images/kakao.png" />
        </div>
        <div className="addImage fcc">
            <span class="AIanalysys">
                다른 사진 분석하기
            </span>
            <div class="Line-2"></div>
            <div className="Frame-27 fb">
                <div
                    class="oneImage button"
                    onClick={() => {
                        window.location.hash = "uploadone";
                    }}
                >
                    <span class="howmuchcute">
                        다른 사진은
                        <br />
                        몇 %
                        <span class="muchcute"> 귀여울</span>까?
                    </span>
                    <span class="oneanalysis">
                        한 장 분석
                    </span>
                </div>
                <div
                    class="multiImage button"
                    onClick={() => {
                        window.location.hash = "uploadmulti";
                    }}
                >
                    <span class="mostcutefind">
                        내 사진 중
                        <br />
                        가장
                        <span class="mostcute"> 귀여운 </span>
                        사진 찾기
                    </span>
                    <span class="multianalysis">
                        여러 장 분석
                    </span>
                </div>
            </div>
        </div>
        <div 
            class="widebutton button"
            onClick={() => {
                window.location.hash = "#tagresult";
            }}
        >
            <span class="return">
                Instagram 결과로 돌아가기
            </span>
        </div>
        <div 
            class="widebutton button"
            onClick={() => {
                window.location.hash = "";
            }}
        >
            <span class="return">
                처음으로
            </span>
        </div>
    </div>;
};