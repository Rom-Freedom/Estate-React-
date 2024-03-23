/* import SearchBar from '../../searchBar/SearchBar'; */
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia repellendus error tenetur, voluptatem ipsam amet exercitationem sequi esse odit similique odio quos, neque magni cum velit tempora sapiente deleniti!
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Cained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="img" />
            </div>
        </div>
    )
}

export default HomePage;