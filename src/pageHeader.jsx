import './App.css';
import Divider from '@mui/material/Divider';
import {ReactComponent as MenuIcon} from './assets/icons/menu-icon.svg';

function PageHeader() {
    return (
        <div className='header-container'>
            <div className='title-menu-container'>
                <div className='title-container'>
                    <h1 className='title'>Kierkegaard's Corner</h1>
                </div>
                <div className='menu-icon-container'>
                    <MenuIcon className='menu-icon'/>
                </div>
            </div>
            <Divider sx={{ bgcolor:'#000000'}}/>
        </div>
    )
}

export default PageHeader;