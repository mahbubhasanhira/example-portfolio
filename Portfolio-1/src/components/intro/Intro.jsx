import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import './intro.scss';

const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay: 1500, backSpeed: 60, strings: ["Programmer",'Developer', 'Designer', "Freelancer"] })
    }, [textRef])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/my-bg.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Mahbub Hasan</h1>
                    <h3>A self motivated <span ref={textRef}>Designer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Intro;