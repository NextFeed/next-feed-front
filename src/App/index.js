import { useEffect, useState } from "react";
import { RootContext } from '../Utils/Contexts.js';
import Home from '../Pages/Home/index.js';

const hashToPage = (hash) => {
	return <Home/>;
};

export default function() {
	const [screenW, setScreenW] = useState(window.innerWidth);
    const [screenH, setScreenH] = useState(window.innerHeight);
	const [hash, setHash] = useState(window.location.hash);
	const [tag, setTag] = useState();

	const onResize = () => {
        setScreenW(window.innerWidth);
        setScreenH(window.innerHeight);
    };

    const onHashchange = () => {
        setHash(window.location.hash);
    };

	useEffect(() => {
        const storageTag = window.sessionStorage.getItem("tag");
        if(storageTag) {
            setTag(storageTag);
        }

        window.addEventListener('resize', onResize);
        window.addEventListener("hashchange", onHashchange);
        
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener("hashchange", onHashchange);
        };
    }, []);

	return <RootContext.Provider value={{
        tag,
        setTag,
        hash,
        screenW,
        screenH,
    }}>
		{hashToPage(hash)}
    </RootContext.Provider >;
};