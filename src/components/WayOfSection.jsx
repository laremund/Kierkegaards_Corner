import '../App.css';
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

function WayOfSection (header, subheader, description, image) {

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
                        <IconContext.Provider value={{className:"react-icons"}}>
                            <IoIosArrowDown />
                        </IconContext.Provider>
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

export default WayOfSection;