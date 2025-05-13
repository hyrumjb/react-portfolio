import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <>
            <div>
                <h2>here's the deal . . .</h2>
                <p>i'm currently updating this site (the design is still a bit outdated) to run on react.
                    it's actually going quite well, and then i'll starting in some more javascript features.
                </p>
                <a href="https://github.com/hyrumjb/react-portfolio">(5-12-2025)</a>
                <p>here's another little update, and it's clearly not perfect but i added some css. this should make the 
                    page a big more visually appealing, plus i added some background art by a world-renowned artist who learned
                    to use canva 5 minutes ago.
                </p>
                <a href="https://github.com/hyrumjb/css_practice">(5-1-2025)</a>
                <p>okay, i'm trying to build up this page from scratch, so here's what we're working with so far.
                    i'll update this page as i continue to add skills to my toolkit, but this is me typing every line of code,
                    so for now just html is what you're gonna get.
                </p>
                <a href="https://hyrumjb.github.io/html_practice/">(4-30-2025)</a>
            </div>

            <div>
                <h2>what's next?</h2>
                <p>go check out the pages above if you wanna see some real quality content. the <Link to="/about">about</Link> page is pretty cool because
                    it kind of just tells about my life. <Link to="/projects">projects</Link> will show some stuff I've done, both on my own and a bit for school.
                    and <Link to="/future">future</Link> is probably the coolest because it's all the next and new ideas. check them out.
                </p>
            </div>
            <hr />
        </>
    );
}

export default Home;