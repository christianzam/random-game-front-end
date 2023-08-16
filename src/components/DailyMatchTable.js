import React from 'react';
import './css/DailyMatchTable.css'

function DailyMatchTable({ dailyMatch }) {
  // Sort the dailyMatch array by points in descending order
  const sortedMatches = dailyMatch.sort((a, b) => b.points - a.points);

  return (
    <table className="custom-table table table-bordered text-center">
      <thead>
        <tr>
          <th scope="col">
            <div className='container'>
              <div>23/Jul/2023</div>
              <div>Match #9</div>
            </div>
          </th>
          <th scope="col">Place</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        {sortedMatches.map((match, index) => (
          <tr key={index}>
            <td>{match.player}</td>
            <td>{index + 1}</td>
            <td>{match.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DailyMatchTable;
