import React from 'react';
import './css/Footer.css';
import useGithubUser from './hooks/useGithubUser';

function Footer() {
  const githubUser = useGithubUser('chriszam');

  return (
    <div className="footer flex-shrink-0 py-4 bg-dark text-white-50" id="sticky-footer">
      <div className="container text-center">
        {githubUser ? (
          <>
            <span>{githubUser.login} &copy; 2023</span>
            {/* Other dynamic content using 'githubUser' */}
          </>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default Footer;
