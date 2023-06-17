import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';

let cnt = 0;

export default function () {
    const {
        screenW,
        screenH,
        loadingRate,
        loadingText, 
    } = useContext(RootContext);

    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIteration(cnt++);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const progressW = 288;

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        id="loading"
        className="fcc"
    >
        <span className="loading fc">
            {loadingText}{".".repeat(iteration % 3 + 1)}
        </span>
        <div className="progressbar">
            <div className="progresspercent">
                {loadingRate * 100}%
            </div>
            <div 
                className="progresscontainer"
                style={{
                    width: progressW,
                }}
            >
                <div 
                    className="progress"
                    style={{
                        width: progressW * loadingRate,
                    }}
                >
                </div>
            </div>
        </div>
    </div>;
};