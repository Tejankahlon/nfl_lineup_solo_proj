import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
  },
  form: {
    width: '300px',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  button: {
    alignSelf: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    alignSelf: 'center',
    marginTop: '10px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
};

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
        console.log(res);
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

  return (
    <div style={styles.container}>
      <h1>Update Your Team</h1> <Link style={styles.link} to = "/">Home</Link>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
          <label htmlFor="QB">QB:</label>
          <input type="text" id ="QB" name='QB' value={team.QB} onChange={handleChange}/>
          {
            error.QB ? <p style={styles.errorMessage}>{error.QB.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="RB1">RB1:</label>
          <input type="text" id ="RB1" name='RB1' value={team.RB1} onChange={handleChange}/>
          {
            error.RB1 ? <p style={styles.errorMessage}>{error.RB1.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="RB2">RB2:</label>
          <input type="text" id ="RB2" name='RB2' value={team.RB2} onChange={handleChange}/>
          {
            error.RB2 ? <p style={styles.errorMessage}>{error.RB2.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="WR1">WR1:</label>
          <input type="text" id ="WR1" name='WR1' value={team.WR1} onChange={handleChange}/>
          {
            error.WR1 ? <p style={styles.errorMessage}>{error.WR1.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="WR2">WR2:</label>
          <input type="text" id ="WR2" name='WR2' value={team.WR2} onChange={handleChange}/>
          {
            error.WR2 ? <p style={styles.errorMessage}>{error.WR2.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="TE">TE:</label>
          <input type="text" id ="TE" name='TE' value={team.TE} onChange={handleChange}/>
          {
            error.TE ? <p style={styles.errorMessage}>{error.TE.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="WRT">W/R/T:</label>
          <input type="text" id ="WRT" name='WRT' value={team.WRT} onChange={handleChange}/>
          {
            error.WRT ? <p style={styles.errorMessage}>{error.WRT.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="K">K:</label>
          <input type="text" id ="K" name='K' value={team.K} onChange={handleChange}/>
          {
            error.K ? <p style={styles.errorMessage}>{error.K.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="DEF">DEF:</label>
          <input type="text" id ="DEF" name='DEF' value={team.DEF} onChange={handleChange}/>
          {
            error.DEF ? <p style={styles.errorMessage}>{error.DEF.message}</p> : null
          }
          </div>
          <button style={styles.button} type='submit'>Update</button>
        </form>
    </div>
  )
}

export default ViewTeam