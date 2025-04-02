import { useState } from 'react';
import '../App.css';
import { IconContext } from "react-icons";
import { LiaBrainSolid } from "react-icons/lia";

function HomePageContent (header, subheader, description, image) {

    // Page navigation state
    const [whichPage, setWhichPage] = useState('Home');

    return (
        <div className='body-container'>
            <div className='body-text-home-section'>
                <div className='body-text-home-container'>
                    <p className='body-text-home'>
                    Welcome to Kierkegaard’s Corner! We explore major philosophies 
                    from history, highlighting the ones we find most fascinating. 
                    Choose between two categories: Ways of Thinking and Ways of Living. 
                    Some Ways of Living operate on the premise of a Way of Thinking, 
                    while others are their own thing—we know, not complicated at all.
                    </p>
                </div>
            </div>
            {/* Ways of Thinking & Ways of Living links */}
            <div className='dual-choice-container'>
                <div className='thinking-choice-section'>
                    <div className='thinking-choice-text-container'>
                        <h1 className='thinking-choice-text'>
                            Ways of Thinking
                        </h1>
                    </div>
                </div>
                <div className='brain-icon-container'>
                    <IconContext.Provider value={{className:"react-icons"}}>
                        <LiaBrainSolid/>
                    </IconContext.Provider>
                </div>
                <div className='living-choice-section'>
                    <div className='living-choice-text-container'>
                        <h1 className='living-choice-text'>
                            Ways of Living
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomePageContent;