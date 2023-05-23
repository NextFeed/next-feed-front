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
        className="fsc"
    >
        <div className="Rectangle-16 fcc">
            <img
                className="logo"
                src="Images/logo.png"
            />
            <div className="fc tab">
                <img
                    className="back button"
                    src="Images/back.png"
                    onClick={() => {
                        window.history.back();
                    }}
                />
                <span className="a-">
                    여러 장 분석
                </span>
            </div>
        </div>
    </div>;
};