import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const CreateTeam = () => {

const navigate = useNavigate()

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

const [error, setError] = useState({})

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post("http://localhost:8000/api/team", team)
  .then(res=>{
    console.log(res)
    navigate("/")
  })
  .catch(err=>{
    console.log(err.response.data.error.errors)
    setError(err.response.data.error.errors)
  })
}

const handleChange = (e) => {
  setTeam({...team, [e.target.name]: e.target.value})
}

  return (
    <div>
      <h1>Create Your Team</h1> <Link to = "/">Home</Link>

        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="QB">QB:</label>
          <input type="text" id ="QB" name='QB' onChange={handleChange}/>
          {
            error.QB ? <p>{error.QB.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="RB1">RB1:</label>
          <input type="text" id ="RB1" name='RB1' onChange={handleChange}/>
          {
            error.RB1 ? <p>{error.RB1.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="RB2">RB2:</label>
          <input type="text" id ="RB2" name='RB2' onChange={handleChange}/>
          {
            error.RB2 ? <p>{error.RB2.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="WR1">WR1:</label>
          <input type="text" id ="WR1" name='WR1' onChange={handleChange}/>
          {
            error.WR1 ? <p>{error.WR1.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="WR2">WR2:</label>
          <input type="text" id ="WR2" name='WR2' onChange={handleChange}/>
          {
            error.WR2 ? <p>{error.WR2.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="TE">TE:</label>
          <input type="text" id ="TE" name='TE' onChange={handleChange}/>
          {
            error.TE ? <p>{error.TE.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="WRT">W/R/T:</label>
          <input type="text" id ="WRT" name='WRT' onChange={handleChange}/>
          {
            error.WRT ? <p>{error.WRT.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="K">K:</label>
          <input type="text" id ="K" name='K' onChange={handleChange}/>
          {
            error.K ? <p>{error.K.message}</p> : null
          }
          </div>
          <div>
          <label htmlFor="DEF">DEF:</label>
          <input type="text" id ="DEF" name='DEF' onChange={handleChange}/>
          {
            error.DEF ? <p>{error.DEF.message}</p> : null
          }
          </div>
          <button>Submit</button>
        </form>


    </div>
  )
}

export default CreateTeam