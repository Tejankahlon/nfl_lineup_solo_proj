import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ViewTeam = () => {

const navigate = useNavigate()
const {id} = useParams()
console.log("Team ID:", id)

const [team, setTeam] = useState({
  QB: '',
  RB1: '',
  RB2: '',
  WR1: '',
  WR2: '',
  TE: '',
  WRT: '',
  K: '',
  DEF: ''
})

useEffect(() => {
  axios.get(`http://localhost:8000/api/team/${id}`)
    .then(res => {
      if (res.data && res.data.Team) {
        console.log(res.data.Team);
        setTeam(res.data.Team);
    } else {
        console.error("Unexpected response structure:", res.data);
    }
})
      .catch(err => {
        console.log(err)
      })
},[id])

const [error, setError] = useState({})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(id)
  axios.patch(`http://localhost:8000/api/team/${id}`, team)
  .then(res=>{
    console.log(res)
    navigate("/")
  })
  .catch(err=>{
    if (err.response && err.response.data && err.response.data.error && err.response.data.error.errors) {
      console.log(err.response.data.error.errors);
      setError(err.response.data.error.errors);
  } else {
      console.log(err);
  }
  
  })
}

const handleChange = (e) => {
  setTeam({...team, [e.target.name]: e.target.value})
}

if (!team.QB) {
  return <div>Loading...</div>
}

  return (
    <div>
      <h1>Update Your Team</h1> <Link to = "/">Home</Link>

        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="QB">QB:</label>
          <input type="text" id ="QB" name='QB' value={team.QB} onChange={handleChange}/>
          {
            error.QB ? <p>{error.QB.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="RB1">RB1:</label>
          <input type="text" id ="RB1" name='RB1' value={team.RB1} onChange={handleChange}/>
          {
            error.RB1 ? <p>{error.RB1.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="RB2">RB2:</label>
          <input type="text" id ="RB2" name='RB2' value={team.RB2} onChange={handleChange}/>
          {
            error.RB2 ? <p>{error.RB2.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="WR1">WR1:</label>
          <input type="text" id ="WR1" name='WR1' value={team.WR1} onChange={handleChange}/>
          {
            error.WR1 ? <p>{error.WR1.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="WR2">WR2:</label>
          <input type="text" id ="WR2" name='WR2' value={team.WR2} onChange={handleChange}/>
          {
            error.WR2 ? <p>{error.WR2.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="TE">TE:</label>
          <input type="text" id ="TE" name='TE' value={team.TE} onChange={handleChange}/>
          {
            error.TE ? <p>{error.TE.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="WRT">W/R/T:</label>
          <input type="text" id ="WRT" name='WRT' value={team.WRT} onChange={handleChange}/>
          {
            error.WRT ? <p>{error.WRT.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="K">K:</label>
          <input type="text" id ="K" name='K' value={team.K} onChange={handleChange}/>
          {
            error.K ? <p>{error.K.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="DEF">DEF:</label>
          <input type="text" id ="DEF" name='DEF' value={team.DEF} onChange={handleChange}/>
          {
            error.DEF ? <p>{error.DEF.message}</p> : null
          }
          </div>
          <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default ViewTeam