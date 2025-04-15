import '../App.css';
import { IconContext } from "react-icons";
import { LiaBrainSolid, LiaHandPeaceSolid } from "react-icons/lia";

function HomePageContent () {

    return (
        <div className='body-container'>
            <div className='heading-section'>
                <h1>Welcome to Kierkegaard's Corner</h1>
                <div>
                    <p>We explore modern philosophies and showcase the ones we find most fascinating.</p>
                    <p>Choose between two categories:</p>
                </div>

            </div>
            <div className='body-section'>
                <div className='ways-of-box'>
                    <div className='inner-ways-of-box'>
                        <div className='big-icon-box'>
                            <IconContext.Provider value={{className:"react-icons"}}>
                            <LiaBrainSolid className='big-icon'/>
                            </IconContext.Provider>
                        </div>
                        <div className='description-box'>
                            <h3>Ways of Thinking</h3>
                            <p>
                                Philosophical frameworks and cognitive processes through which we interpret reality.
                            </p>
                        </div>
                    </div>
                    <div className='inner-ways-of-box'>
                        <div className='big-icon-box'>
                            <IconContext.Provider value={{className:"react-icons"}}>
                            <LiaHandPeaceSolid className='big-icon'/>
                            </IconContext.Provider>
                        </div>
                        <div className='description-box'>
                            <h3>Ways of Living</h3>
                            <p>
                                Ethical systems and lifestyles that guide action according to conceptions of a "good" life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='ways-of-thinking-section'>
                    <h1>Ways of Thinking</h1>
                </div>
                <div className='ways-of-living-section'>
                    <h1>Ways of Living</h1>
                </div>
            </div>
        </div>
    )

}

export default HomePageContent;