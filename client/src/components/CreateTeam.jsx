import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import img from '../assets/football_logo.png'


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
    <div style={styles.container}>
      <img src={img} alt="Football Logo" className='mb-4' />
      <h1>Let's Build!</h1> <Link style={styles.link} to = "/">Home</Link> 
        <form style={styles.form} onSubmit={handleSubmit}> 
          <div style={styles.inputGroup}>
          <label htmlFor="QB">QB:</label>
          <input type="text" id ="QB" name='QB' onChange={handleChange}/>
          {
            error.QB ? <p style={styles.errorMessage}>{error.QB.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="RB1">RB1:</label>
          <input type="text" id ="RB1" name='RB1' onChange={handleChange}/>
          {
            error.RB1 ? <p style={styles.errorMessage}>{error.RB1.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="RB2">RB2:</label>
          <input type="text" id ="RB2" name='RB2' onChange={handleChange}/>
          {
            error.RB2 ? <p style={styles.errorMessage}>{error.RB2.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="WR1">WR1:</label>
          <input type="text" id ="WR1" name='WR1' onChange={handleChange}/>
          {
            error.WR1 ? <p style={styles.errorMessage}>{error.WR1.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="WR2">WR2:</label>
          <input type="text" id ="WR2" name='WR2' onChange={handleChange}/>
          {
            error.WR2 ? <p style={styles.errorMessage}>{error.WR2.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="TE">TE:</label>
          <input type="text" id ="TE" name='TE' onChange={handleChange}/>
          {
            error.TE ? <p style={styles.errorMessage}>{error.TE.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="WRT">W/R/T:</label>
          <input type="text" id ="WRT" name='WRT' onChange={handleChange}/>
          {
            error.WRT ? <p style={styles.errorMessage}>{error.WRT.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="K">K:</label>
          <input type="text" id ="K" name='K' onChange={handleChange}/>
          {
            error.K ? <p style={styles.errorMessage}>{error.K.message}</p> : null
          }
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="DEF">DEF:</label>
          <input type="text" id ="DEF" name='DEF' onChange={handleChange}/>
          {
            error.DEF ? <p style={styles.errorMessage}>{error.DEF.message}</p> : null
          }
          </div>
          <button style={styles.button} >Submit</button>
        </form>

    </div>
  )
}

export default CreateTeam