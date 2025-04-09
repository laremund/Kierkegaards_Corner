import '../App.css';
import Divider from '@mui/material/Divider';
import { IconContext } from "react-icons";
import { IoIosMenu } from "react-icons/io";

function PageHeader() {
    return (
        <div className='header-section'>
            <div className='title-box'>
                <h2>Kierkegaard's Corner</h2>
            </div>
            <div className='nav-box'>
                <IconContext.Provider value={{className:"react-icons"}}>
                    <IoIosMenu/>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default PageHeader;