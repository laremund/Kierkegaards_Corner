import '../App.css';
import Divider from '@mui/material/Divider';
import { IconContext } from "react-icons";
import { IoIosMenu } from "react-icons/io";

function PageHeader() {
    return (
        <div className='header-container'>
            <div className='title-menu-container'>
                <div className='title-container'>
                    <h1 className='title'>Kierkegaard's Corner</h1>
                </div>
                <div className='menu-icon-container'>
                    <IconContext.Provider value={{className:"react-icons"}}>
                        <IoIosMenu/>
                    </IconContext.Provider>
                </div>
            </div>
            <Divider sx={{ bgcolor:'#000000'}}/>
        </div>
    )
}

export default PageHeader;