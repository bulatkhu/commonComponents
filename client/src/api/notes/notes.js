import React, {useMemo, useState} from 'react'
import axios from 'axios'




const NotesComponent = () => {
  const [info, setInfo] = useState({
    isLoading: true,
    data: null,
    onError: false,
    errorText: ''
  })

  useMemo(() => {
    axios.get('/api/auth/profile', {
      headers: {
        Authorization: localStorage.getItem('accessToken')
      }
    })
      .then(res => {
        console.log(res)

        setInfo(res.data)
      })
      .catch(err => {
        setInfo(prev => ({
          ...prev, isLoading: false, onError: true, errorText: err.response.data
        }))
      })
  },[])

  return (
    <div>
      <h1>Your profile:</h1>

      {
        info.isLoading
          ? <div style={{ minHeight: 250, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <div className="loader"/>
            </div>
          : info.onError
            ? <p style={{color: 'red'}}>Error: you are {info.errorText}</p>
            : <ul>
                <li>name: {info.name}</li>
                <li>email: {info.email}</li>
              </ul>

      }

    </div>
  )
}

export default NotesComponent