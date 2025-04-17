import '../App.css';
import { IconContext } from "react-icons";
import { IoIosMenu } from "react-icons/io";

function PageHeader() {
    return (
        <section class="header-section"> 
            <h3>Old Dead Guys</h3> 
            <div class="">
                <a href="#" class=""> 
                    <h5>Home</h5>
                </a>
                <a href="#" class=""> 
                    <h5>Ways of Thinking</h5>
                </a>
                <a href="#" class=""> 
                    <h5>Ways of Living</h5>
                </a> 
            </div>
        </section>
    )
}

export default PageHeader;