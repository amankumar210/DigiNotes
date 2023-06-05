import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1 className="header-title">About My NewNotes - Note-taking App & News Website</h1>
      </header>

      <div className="content">
        <div className="carousel-container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={require('../images/carouselImg1.jpg')} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={require('../images/carouselImg2.jpeg')} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100"src={require('../images/carouselImg3.jpg')} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100"src={require('../images/carouselImg4.jpg')} alt="Fourth slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100"src={require('../images/carouselImg5.jpg')} alt="Fifth slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="description-container">
          <h2 className="section-title">Welcome to my Note-taking App!</h2>
          <p className="description">
            My note-taking app provides a user-friendly and efficient way to organize your thoughts, ideas, and
            reminders. With a sleek and intuitive interface, managing your notes has never been easier.
          </p>
          <p className="description">
            I have integrated my Note-taking App with my News Website. This seamless integration allows you to access the Note-taking App directly from the News Website. Stay up-to-date with the latest news and easily jot down any important information or thoughts without leaving the site.
          </p>
        </div>

        <div className="features-container">
          <h2 className="section-title">Key Features</h2>

          <div className="card-container">
            <div className="card">
              <img className="card-image" src={require('../images/cardImg1.jpg')} alt="Featured 1" />
              <h3 className="card-title">Seamless Integration</h3>
              <p className="card-description">
                The Note-taking App and News Website are seamlessly integrated, allowing users to access the Note-taking App directly from the News Website. This integration provides a convenient and efficient way for users to take notes while staying updated with the latest news.
              </p>
            </div>

            <div className="card">
              <img className="card-image" src={require('../images/cardImg2.jpg')} alt="Featured 2" />
              <h3 className="card-title">User Authentication and Personalization</h3>
              <p className="card-description">
                The integrated project includes a login and signup facility, allowing users to create accounts and securely login to access their personalized notes. Each user has their own private space to manage and organize their notes, providing a personalized experience.
              </p>
            </div>

            <div className="card">
              <img className="card-image" src={require('../images/cardImg3.jpg')} alt="Featured 3" />
              <h3 className="card-title">Real-time News Updates</h3>
              <p className="card-description">
                The News Website fetches live news from the newsapi.org API, ensuring that users have access to the latest news articles and updates. Users can stay informed and explore various news categories directly from the website, enhancing their browsing experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">© 2023 &nbsp; NewNotes.com by <a href='https://www.linkedin.com/in/aman-kumar2/' target='_blank'>Aman Kumar</a> &nbsp; All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;