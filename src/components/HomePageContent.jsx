import '../App.css';
import { IconContext } from "react-icons";
import { LiaBrainSolid, LiaHandPeaceSolid } from "react-icons/lia";

function HomePageContent () {

    return (
        <div className='body-container'>
            <div className='heading-section'>
                <h1>Old Dead Guys</h1>
                <h3>&quot;Life can only be understood backwards; but it must be lived forwards&quot;</h3>
                <h4>
                    Welcome to Old Dead Guys! We explore major philosophies from history, highlighting
                    the ones we find most fascinating. Choose between two categories:
                </h4>
                <div>
                    <a href="" className=''>
                        <h4>Ways of Thinking</h4>
                    </a>
                    <a href="" className=''>
                        <h4>Ways of Living</h4>
                    </a>
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
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Nihilism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Determinism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Empiricism & Rationalism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Relativism</h1>
                    </div>                                        
                </div>
                <div className='ways-of-living-section'>
                    <h1>Ways of Living</h1>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Stoicism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Absurdism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Existentialism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Objectivism</h1>
                    </div>
                    <div className='philosophy-section'>
                        <h1 className='h1-article'>Utilitarianism & Hedonism</h1>
                    </div>                                                                                                    
                </div>
            </div>
        </div>
    )

}

export default HomePageContent;