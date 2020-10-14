import React, {useEffect} from 'react'
import {Link, Redirect, Route, withRouter} from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import {connect} from 'react-redux'
import {isAuthenticated} from '../redux/actions/actions'
import RegisterForm from '../components/Auth/registerForm/registerForm'
import NotesComponent from './notes/notes'


const ApiPage = props => {

  useEffect(() => {
    if (props.isAuth) {
      props.history.push('/api/profile')
    }
  }, [props.isAuth, props.history])


  const onLogout = () => {
    localStorage.removeItem('accessToken')
    props.onLogin(false)
  }


  return (
    <>
      <div className="App__header">
        <ul className="App__ul">
          <li>Logo</li>
        </ul>

        <ul className="App__ul">

          {
            props.isAuth
              ? <>
                <li><Link onClick={onLogout} to="/api/login">Logout</Link></li>
                <li><Link to="/api/notes">Notes</Link></li>
              </>
              : <>
                <li><Link to="/api/login">Login</Link></li>
                <li><Link to="/api/register">Register</Link></li>
              </>
          }

        </ul>
      </div>


      {
        props.isAuth
          ? <Redirect to="/api/register"/>
          : <Route path="/api/login">
            <div className="App-workplace light-bg" style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <Auth/>
            </div>
          </Route>
      }


      {
        props.isAuth
          ? <Route exact path="/api/profile">

            <div className="App-workplace light-bg">
              <div className="_container text-left">

                <NotesComponent/>

              </div>
            </div>

          </Route>
          : <Redirect to="/api/login"/>
      }


      <Route path="/api/register">
        <div className="App-workplace light-bg" style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <RegisterForm/>
        </div>
      </Route>
    </>
  )

}

function mapStateToProps(state) {
  return {
    isAuth: state.isAuth.isAuth,
    onError: state.isAuth.onError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: value => dispatch(isAuthenticated(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApiPage))