import './App.css';
import {ReactComponent as MenuIcon} from './icons/menu-icon.svg';

function PageHeader() {
    return (
        <div className='header-container'>
            <div className='title-menu-container'>
                <div className='title-container'>
                    <h1 className='title'>Kierkegaard's Corner</h1>
                </div>
                <div className='menu-icon-container'>
                    <MenuIcon />
                </div>
            </div>
            <div className='header-divider'>
                {/* Divider Line 1 here */}
            </div>
        </div>
    )
}

export default PageHeader;