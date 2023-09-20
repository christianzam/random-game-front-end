import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar';
import UserProfile from './components/UserProfile';
import DailyMatchTable from './components/DailyMatchTable';
import UserList from './components/UserList';
import Footer from '../src/components/Footer';


function App() {
  const playerData = {
    name: 'John Doe',
    scoringAccuracy: 85,
    matchesPlayed: 20,
    matchesWon: 15,
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
  };

  const dailyMatchData = [
    { player: 'Player A', place: 1, points: 3 },
    { player: 'Player B', place: 2, points: 1 },
    { player: 'Player C', place: 3, points: 8 },
    // Add more daily match data as needed
  ];

  return (
    <div className='main-container'>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <UserProfile userId='10' player={playerData} />
            <DailyMatchTable dailyMatch={dailyMatchData} />
          </div>
          <div className="col-md-4 mt-5">
            {/* <h1>User Profile</h1>
            <UserProfile userId="1" /> */}
            <UserList /> {/* Render the UserList component */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
