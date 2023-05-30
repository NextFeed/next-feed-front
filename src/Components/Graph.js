export default function({
    graphW,
    graphH,
    analysisResult,
}) {
    const featureLabelW = 50;
    const lengthLabelH = 10;
    const lengthLabelW = graphW - featureLabelW;
    const featureLabelH = graphH - lengthLabelH;
    const figContainerW = graphW - featureLabelW;
    const figContainerH = featureLabelH;
    const barH = 14;
    const figVP = 10;
    const figHP = 8;
    const figW = figContainerW - figHP * 2;
    const figH = figContainerH - figVP * 2;

    const {
        feature1, 
        feature2, 
        feature3, 
        score1, 
        score2, 
        score3, 
    } = analysisResult;

    const bar1W = figW * score1 / 100;
    const bar2W = figW * score2 / 100;
    const bar3W = figW * score3 / 100;

    return <div 
        className="fsc graph"
        style={{
            width: graphW,
            height: graphH,
        }}
    >
        <div
            className="fb lengthlabel"
            style={{
                marginLeft: featureLabelW,
                width: lengthLabelW,
                height: lengthLabelH,
            }}
        >
            <div>
                0
            </div>
            <div>
                50
            </div>
            <div>
                100
            </div>
        </div>
        <div
            className="fs"
            style={{
                width: graphW,
                height: featureLabelH,
            }}
        >
            <div
                className="fbc featurelabel"
                style={{
                    paddingTop: figVP,
                    paddingBottom: figVP,
                    width: featureLabelW,
                    height: featureLabelH - 2 * figVP,
                }}
            >
                <div className="primaryColor">
                    {feature1.toUpperCase()}
                </div>
                <div>
                    {feature2.toUpperCase()}
                </div>
                <div>
                    {feature3.toUpperCase()}
                </div>
            </div>
            <div
                style={{
                    position: "relative",
                    width: figContainerW,
                    height: figContainerH,
                }}
            >
                <div
                    className="fb figline"
                    style={{
                        position: "absolute",
                        width: figContainerW,
                        height: figContainerH,
                    }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div
                    className="fbsc"
                    style={{
                        position: "absolute",
                        paddingTop: figVP,
                        paddingBottom: figVP,
                        paddingLeft: figHP,
                        paddingRight: figHP,
                        width: figW,
                        height: figH,
                    }}
                >
                    <div
                        className="fs"
                    >
                        <div
                            className="bar primaryBackground"
                            style={{
                                width: bar1W,
                                height: barH,
                            }}
                        >
                        </div>
                        <div
                            className="num primaryColor"
                        >
                            {score1}%
                        </div>
                    </div>
                    <div
                        className="fs"
                    >
                        <div
                            className="bar"
                            style={{
                                width: bar2W,
                                height: barH,
                            }}
                        >
                        </div>
                        <div
                            className="num"
                        >
                            {score2}%
                        </div>
                    </div>
                    <div
                        className="fs"
                    >
                        <div
                            className="bar"
                            style={{
                                width: bar3W,
                                height: barH,
                            }}
                        >
                        </div>
                        <div
                            className="num"
                        >
                            {score3}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};