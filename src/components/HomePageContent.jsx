import '../App.css';
import { IconContext } from "react-icons";
import { LiaBrainSolid, LiaHandPeaceSolid } from "react-icons/lia";

function HomePageContent () {

    return (
        <div className='body-container'>
            <div className='heading-section'>
                <h1>Old Dead Guys</h1>
                <h3>&quot;Life can only be understood backwards; but it must be lived forwards&quot;</h3>
                <h4>
                    Welcome to Old Dead Guys! We explore major philosophies from history, highlighting
                    the ones we find most fascinating. Choose between two categories:
                </h4>
                <div>
                    <a href="" className=''>
                        <h4>Ways of Thinking</h4>
                    </a>
                    <a href="" className=''>
                        <h4>Ways of Living</h4>
                    </a>
                </div>
            </div>
            <div className='body-section'>
                <div>
                    <h3>Ways of Thinking</h3>
                    <p>Philosophical frameworks for understanding reality</p>
                    <h5>Ways of Thinking are philosophical frameworks that help us understand reality, knowledge, and truth. They shape how we perceive the world around us.</h5>
                    <div>
                        <h5>Nihilism</h5>
                        <h5>Empricism</h5>
                        <h5>Relativism</h5>
                        <h5>Determinism</h5>
                        <h5>Rationalism</h5>    
                    </div>
                    <div>
                        <h5>Explore Ways of Thinking</h5>
                        <div></div>
                    </div>                    
                </div>
                <div>
                    <h3>Ways of Living</h3>
                    <p>Philosophical approaches to living a good life</p>
                    <h5>Ways of Living are philosophical approaches to living a good life. Some operate on the premise of a Way of Thinking, while others are their own thing.</h5>
                    <div>
                        <h5>Stoicism</h5>
                        <h5>Existentialism</h5>
                        <h5>Utilitarianism</h5>
                        <h5>Absurdism</h5>
                        <h5>Objectivism</h5>    
                    </div>
                    <div>
                        <h5>Explore Ways of Living</h5>
                        <div></div>
                    </div>                    
                </div>                
            </div>
            <div className='subfooter-section'>
                <h2>Philosophy for Everyone</h2>
                <h4>Some Ways of Living operate on the premise of a Way of Thinking, while others are their own thing—we know, not complicated at all.</h4>
                <a href="">
                    <h4>Start Exploring</h4>
                </a>
            </div>
            <div className='footer-section'>
                <p>
                    © 2025 Kierkegaard's Corner. All Rights Reserved.
                    Unauthorized use or reproduction is prohibited. 
                    By using this site, you agree to our Terms of Service 
                    and Privacy Policy.
                </p>
            </div>
        </div>
    )

}

export default HomePageContent;