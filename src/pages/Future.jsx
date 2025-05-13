import { useState, useEffect } from 'react';
import '../App.css';

import thumbImg from "../assets/thumb.svg";

function Future() {
    const [count, setCount] = useState(() => parseInt(localStorage.getItem("count")) || 0);
    const [isPopping, setIsPopping] = useState(false);

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    const handleClick = () => {
        setCount(prev => prev + 1);
        setIsPopping(true);
    };

    useEffect(() => {
        if (isPopping) {
            const timer = setTimeout(() => setIsPopping(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isPopping]);

    return (
        <>
            <div>
                <h2>future things to work on:</h2>
                <ul>
                    <li>cryptocurrency for the philippines/southeast asia</li>
                    <li>ehr that uses ai to analyze data</li>
                    <li>social network where you can only post if randomly selected</li>
                    <li>personal bank where you can see all money flow</li>
                    <li>blockchain for real estate transactions</li>
                    <li>online ai college powered by mit, stanford, harvard, etc. free courses</li>
                    <li>marketplace for specialized artists to sell products</li>
                    <li>smart contracts to automate everything legal</li>
                    <li>personal finance app for third-world countries</li>
                    <li>referral-based microloans for third-world countries</li>
                    <li>duolingo-style learning for everything</li>
                    <li>network to meet a guide when travelling</li>
                    <li>cryptocurrency that's 10x as fast as sui</li>
                    <li>combined website to teach skills and offer jobs (design, writing, coding, social media)</li>
                    <li>crowdsourcing ideas website</li>
                    <li>ai learning platform for schools and personal use</li>
                    <li>software as a service for health insurance</li>
                </ul>
            </div>
            <div className="center">
                <img src={thumbImg} alt="Thumbs up icon" onClick={handleClick} className={isPopping ? "thumb-pop" : ""} style={{ cursor: 'pointer' }} />
                <h2>{count}</h2>
            </div>
            <hr />
        </>
    );
}

export default Future;