import './App.css';
import Divider from '@mui/material/Divider';
function PageFooter() {
    return (
        <div className='footer-container'>
            <Divider sx={{ bgcolor:'#000000'}}/>
            <div className='copyright-section'>
                <div className='copyright-container'>
                        <div className='copyright-first-line'>
                            @2024 Philosophy Insights.
                        </div>
                        <div className='copyright-second-lines'>
                            All Rights Reserved. Unauthorized use or reproduction is prohibited. 
                            By using this site, you agree to our Terms of Service and Privacy Policy.
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PageFooter;