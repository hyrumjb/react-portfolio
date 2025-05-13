import { useState } from 'react';
import '../App.css';

function About() {

    const [isOpen, setIsOpen] = useState(true);

    const hidePopUp = () => {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className="pop-up" id="hide-me" onClick={hidePopUp}>
                    <div
                        className="pop-up-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span 
                            className="close-pop-up"
                            onClick={hidePopUp} 
                            role="button"
                        >
                            &times;
                        </span>
                        <p>Check out one of my latest projects built with HTML, CSS, JavaScript, and React:</p>
                        <p className="center">
                            Silicon Slopes (click <a href="https://hyrumjb.github.io/silicon/">here</a>).
                        </p>
                    </div>
                </div>
            )}
            
            <div>
                <h2>random facts . . .</h2>
                <ul>
                    <li>lived in columbus, palo alto, chandler, st. george, rochester, omaha, kaysville, gilbert, provo</li>
                    <li>also a bit around the philippines (lds mission)</li>
                    <li>currently at byu studying cs and econ</li>
                    <li>roughly 40 years old (+/- 20 years)</li>
                    <li>go bucks beat ttun</li>
                    <li>fluent in 0 languages</li>
                </ul>
            </div>
            <hr />
        </>
    );
}

export default About;