import { useState } from 'react';
import '../App.css';
import { IconContext } from "react-icons";
import { LiaBrainSolid } from "react-icons/lia";

function HomePageContent (header, subheader, description, image) {

    // Page navigation state
    const [whichPage, setWhichPage] = useState('Home');

    return (
        <div className='body-container'>
            <div className='heading-section'>
                <h1>Welcome to Kierkegaard's Corner</h1>
                <p>We explore modern philosophies and showcase the ones we find most fascinating.
                    <br/>Choose between two categories:
                </p>
            </div>
            <div className='body-section'>
                <div className='ways-of-box'>
                    <div className='big-icon-box'>
                        <IconContext.Provider value={{className:"react-icons"}}>
                        <LiaBrainSolid/>
                        </IconContext.Provider>
                    </div>
                    <h4>Ways of Thinking</h4>
                </div>
                <div className='ways-of-box'>
                    <div className='big-icon-box'>
                        {/* <IconContext.Provider value={{className:"react-icons"}}>
                        
                        </IconContext.Provider> */}
                    </div>
                    <h4>Ways of Living</h4>
                </div>
            </div>
        </div>
    )

}

export default HomePageContent;