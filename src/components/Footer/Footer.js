import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer className="FooterContainer">
        <div>
        <i className="fas fa-envelope"></i>
            <p className='mailTextFooter'>francoezequielmarchegiani2019@gmail.com</p>
        </div>
        <div>
        <i className="fab fa-github"></i>
            <Link className='githubTextFooter' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </div>
        <div>
        <i className="fab fa-github-alt"></i>
            <p className='GithubPortfolioTextFooter'>Github Portfolio</p>
        </div>
    </footer>
  );
}

export default Footer;