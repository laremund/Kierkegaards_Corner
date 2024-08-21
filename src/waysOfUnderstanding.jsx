import { useState } from 'react';
import './App.css';
import {ReactComponent as ArrowIconDown} from './assets/icons/arrow-icon-down.svg';
import {ReactComponent as ArrowIconUp} from './assets/icons/arrow-icon-up.svg';

function WaysOfUnderstanding (header, subheader, description, image) {

    // Accordion Logic
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='body-container'>
    {/* Unexpanded Section */}
            <div className='theory-section'>
                <div
                    className='header-subheader-icon-theory'
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className='header-theory-container'>
                        <h2 className='header-theory'>${header}</h2>
                    </div>
                    <div className='subheader-theory-container'>
                        <h2 className='subhheader-theory'>${subheader}</h2>
                    </div>
                    <div className='arrow-icon-container'>
                        <ArrowIconDown className='arrow-icon-down'/>
                    </div>
                </div>
    {/* Expanded Section */}
    {isExpanded && 
                <div className='theory-expanded-section'>
                    <div className='theory-divider'>
                        {/* styling in App.css dictates everything about this horizontal line */}
                    </div>
                    <div className='content-theory-expanded-section'>
                        <div className='text-theory-expanded-container'>
                            <p1 className='text-theory-expanded'>
                                ${description}
                            </p1>
                        </div>
                        <div className='image-theory-expanded-container'>
                            ${image}
                        </div>
                    </div>
                </div>
    }
            </div>
        </div>
    )

}

export default WaysOfUnderstanding;