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
        className="fcc"
    >
        <span className="loading">
            분석중...
        </span>
        <div className="progressbar">
            <div className="progresspercent">
                0%
            </div>
            <div className="progresscontainer">
                <div className="progress">
                </div>
            </div>
        </div>
    </div>;
};