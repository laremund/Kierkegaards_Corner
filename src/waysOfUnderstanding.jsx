import { useState } from 'react';
import './App.css';

function WaysOfUnderstanding (header, subheader, description, image) {

    // Accordion Logic
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='body-theory-container'>
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
                    <div className='icon-arrow'>
                        {/* arrow icon goes here */}
                    </div>
                </div>
    {/* Expanded Section */}
    {isExpanded && 
                <div className='body-expanded-theory-section'>
                    <div className='theory-divider'>
                        {/* divider line here */}
                    </div>
                    <div className='content-expanded-theory-section'>
                        <div className='text-expanded-theory-container'>
                            <p1 className='text-expanded-theory'>
                                ${description}
                            </p1>
                        </div>
                        <div className='image-expanded-theory-container'>
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