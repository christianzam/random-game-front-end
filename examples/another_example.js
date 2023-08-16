import './App.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import useGithubUser from '../src/components/hooks/useGithubUser';

function App() {
  const githubUser = useGithubUser('chriszam');

  return (
    <div className="app-view">
      <Navbar/>
      <div className="main">

        <div className="left-area container">
          <span className='avatar rounded-5'>
            {/* Add the user's avatar image */}
            {githubUser ? (
              <img src={githubUser.avatar_url} alt="Avatar" className="img-avatar"/>
            ) : (
              <div>Loading Picture...</div>
            )}
          </span>
        </div>

        <div className="right-area">
          {githubUser ? (
              <ul>
                <li>HTML URL: <a href={githubUser.html_url}>{githubUser.html_url}</a></li>
                <li>Gists URL: <a href={githubUser.gists_url}>{githubUser.gists_url}</a></li>
                <li>Repos URL: <a href={githubUser.repos_url}>{githubUser.repos_url}</a></li>
              </ul>
            ) : (
              <div>Loading...</div>
            )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
