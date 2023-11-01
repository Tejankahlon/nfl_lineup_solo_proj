import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'


const DisplayTeams = () => {

const [allTeams, setAllTeams] = useState([])

const navigate = useNavigate()
const {id} = useParams()

useEffect(() => {
  axios.get('http://localhost:8000/api/teams')
    .then(res => {
      console.log(res)
      setAllTeams(res.data.Teams)
    })
    .catch(err => {
      console.log(err)
    })
},[])

const handleDelete = (id) => {
  axios.delete(`http://localhost:8000/api/team/${id}`)
    .then(res=>{
      console.log(res)
      setAllTeams((prevStateOfTeam) => prevStateOfTeam.filter((team) => team._id !== id))

    })
    .catch(err=> {
      console.log(err)
      navigate("/")
    })
}

  return (
    <div>
        <h1>Fantasy Team Lineups</h1>
        <Link to={'/createTeam'}>Create Team</Link>
        {
          allTeams.map((team) => (
            <div key={team._id}>
                <h2>Team List</h2>
                <h3>{team.QB}</h3>
                <h3>{team.WR1}</h3>
                <h3>{team.WR2}</h3>
                <h3>{team.RB1}</h3>
                <h3>{team.RB2}</h3>
                <h3>{team.TE}</h3>
                <h3>{team.WRT}</h3>
                <h3>{team.K}</h3>
                <h3>{team.DEF}</h3>
                <div>
                  <Link to={`/viewTeam/${team._id}`}>Edit</Link>
                </div>
                <button onClick={() => handleDelete(team._id)}>Delete</button>
            </div>
          ))
        }
    </div>
  )
}

export default DisplayTeams
