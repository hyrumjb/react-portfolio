import '../App.css';

import blockchainImg from '../assets/blockchain_ss.png';
import cryptoImg from '../assets/crypto.png';
import foodTripImg from '../assets/food-trip.png';
import siliconSlopesImg from '../assets/silicon-slopes.png';
import stGeorgeImg from '../assets/st-george.png';
import steveImg from '../assets/steve_ss.png'

function Projects() {
    return (
        <>
            <h2>here's some of my work:</h2>
            <div>
                <div className="center">
                    <h3>silicon slopes</h3>
                    <img 
                        src={siliconSlopesImg}
                        alt="product screenshot" 
                        className="ss" id="vertical" 
                    />
                    <a href="https://github.com/hyrumjb/silicon-slopes">github</a>
                </div>
                <p>here's a <a href="https://hyrumjb.github.io/silicon-slopes/">link</a> to check out this new one.
                    i like the interactivity and design of this site--to be fair, it really is quite simple--but it's sleek,
                    the sidebar nav works well, and it's functional and beautiful on all device sizes.
                </p>
            </div>
            <div>
                <div className="center">
                    <h3>crypto world</h3>
                    <img 
                        src={cryptoImg}
                        alt="product screenshot"
                        className="ss"
                        id="vertical"
                    />
                    <a href="https://github.com/hyrumjb/crypto">github</a>
                </div>
                <p>here's a <a href="https://hyrumjb.github.io/crypto/">link</a> to check this project out.
                    i like the design of this one--it's simple and minimalist but based on the crypto exchange okx.
                    the interaction is all javascript-based, and i feel like i'm starting to get more of a hold on
                    making it simple and clear.
                </p>
            </div>
            <div>
                <div className="center">
                    <h3>st. george - tourism time</h3>
                    <img
                        src={stGeorgeImg}
                        alt="product screenshot" 
                        className="ss" 
                        id="vertical" 
                    />
                    <a href="https://github.com/hyrumjb/st-george">github</a>
                </div>
                <p>here's a <a href="https://hyrumjb.github.io/st-george/">link</a> to check this project out.
                    once again, this is a project hat used just html and css (less javascript than even the last one), but
                    it seems way more well-designed than the last one. A lot of the features that I emulated in this come from
                    the sequoia capital website, especially the colorway and the fixed header, but there are some mixed ideas as well.
                </p>
            </div>
            <div>
                <div clasNames="center">
                    <h3>food trip - diet analysis</h3>
                    <img 
                        src={foodTripImg} 
                        alt="product screenshot" 
                        className="ss" 
                    />
                    <a href="https://github.com/hyrumjb/food">github</a>
                </div>
                <p>here's a <a href="https://hyrumjb.github.io/food/">link</a> to check this project out.
                    this is one that used html, css, and started using quite a bit of javascript to analyze the user's choices
                    and provide them with a grade. it uses openai as the engine behind the decision making, grading, and feedback.
                    the design is also built to be responsive to both mobile and varying sizes of desktop interfaces.
                </p>
            </div>
            <div>
                <div className="center">
                    <h3>steve jobs tribute</h3>
                    <img
                        src={steveImg} 
                        alt="product screenshot" 
                        className="ss" 
                    />
                    <a href="https://github.com/hyrumjb/html_practice/blob/main/steve.html">github</a>
                </div>
                <p>this link should work right <a href="steve.html">here</a>. basically, it's a site about steve jobs, with some quotes, video tributes, and his biographer's thoughts on him.
                    also, if i do say so myself, it's some pretty good looking html.
                </p>
            </div>
            <div>
                <div className="center">
                    <h3>personalized blockchain</h3>
                    <img 
                        src={blockchainImg}
                        alt="product screenshot" 
                        className="ss" 
                    />
                    <a href="https://github.com/hyrumjb/blockchain">github (frontend)</a>
                    <a href="https://github.com/hyrumjb/blockchain_backend">github (backend)</a>
                </div>
                <p>this one was a project for cs111 at byu. i ended up spending quite a bit of time on it, and when it was 
                    running it was actually running quite beautifully. it lets you add a new block to a blockchain running on render
                    and to provide individualized data for each block. it actually runs quite well, saving the blockchain data, and the
                    ui is basic but aesthetic pa din.
                </p>
            </div>
            <div>
                <div className="center">
                    <h3>finance app</h3>
                    <a href="https://github.com/hyrumjb/startup">github</a>
                </div>
                <p>this one was for cs260 at byu, which frankly was a class i wasn't ready for (and actually wasn't really supposed
                    to be in), but i learned a ton from it. i'm not necessarily proud of the aesthetic or even function of this one, but
                    i guess it worked by the end and at least i learned a ton out of necessity.
                </p>
            </div>
            <hr />
        </>
    );
}

export default Projects;