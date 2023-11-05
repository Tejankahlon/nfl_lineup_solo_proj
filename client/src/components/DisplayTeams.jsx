import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const DisplayTeams = () => {
  const [allTeams, setAllTeams] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8000/api/teams')
      .then(res => {
        console.log(res)
        setAllTeams(res.data.Teams)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/team/${id}`)
      .then(res => {
        console.log(res)
        setAllTeams((prevStateOfTeam) => prevStateOfTeam.filter((team) => team._id !== id))
      })
      .catch(err => {
        console.log(err)
        navigate("/")
      })
  }

  return (
    <>
      <style jsx>{`
  .team-container {
    background-color: #2c3e50; 
    border: none;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px; 
    border-radius: 5px; 
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.team-header {
    font-weight: bold; 
    color: #ecf0f1; 
    margin-bottom: 10px; 
    font-size: 1.2em; 
}

.team-list {
    color: #f39c12; 
    font-weight: 500; 
}

.btn-edit {
    background-color: #4a90e2;
    color: #fff;
    border: none;
}

.btn-edit:hover {
    background-color: #357ab7;
}

.btn-delete {
    background-color: #c0392b;
    color: #fff;
    border: none;
}

.btn-delete:hover {
    background-color: #a93226;
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5em;
  font-weight: 700; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

`}</style>


      <div className="container mt-4">
        <div className="text-center mb-4">
          <h2>Fantasy Team Lineups</h2>
          <Link to="/createTeam" className="btn btn-primary">Create Team</Link>
        </div>

        {allTeams.map((team) => (
          <div key={team._id} className="team-container">
            <div className="team-header">
              Team
            </div>
            <div className="team-list">
              QB: {team.QB}, WR1: {team.WR1}, WR2: {team.WR2}, RB1: {team.RB1}, RB2: {team.RB2}, TE: {team.TE}, W/R/T: {team.WRT}, K: {team.K}, DEF: {team.DEF}
              <div className="mt-2">
                <Link to={`/viewTeam/${team._id}`} className="btn btn-edit btn-sm mr-2">Edit</Link>
                <button className="btn btn-delete btn-sm" onClick={() => handleDelete(team._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DisplayTeams
