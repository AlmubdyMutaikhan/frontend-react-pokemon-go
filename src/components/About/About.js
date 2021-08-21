import './About.css';

const About = () => {
    return(
        <div className="about-container">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
                <div className="desc card">
                    <h1 className="about">About project:</h1>
                    <ul className="desc-list purple">
                        <li><h3>This is a project built in react.</h3></li>
                        <li><h3>Loads pokemons with "Lazy loading" feature.</h3></li>
                        <li><h3>Gives big info about each pokemon</h3></li>
                    </ul>
                </div>
                <div className="dev card">
                    <h1 className="about">About developer:</h1>
                    <ul className="desc-list center">
                        <h1 className="name">I am Almubdi</h1>
                        <h2 className="purple goal">And I want this project to be approved :)</h2>
                    </ul>
                    <a target="_blank" href="https://upskill.us.qwasar.io/tracks/season-03-frontend-may-2021-20/track_users/1252-mutaikha_a-may-2021-20-79bf/projects/my_pokemon_app" className="btn">Approve</a>
                </div>
          
            
        </div>
    )
}


export default About;