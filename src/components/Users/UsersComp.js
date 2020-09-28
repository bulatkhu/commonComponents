import React from 'react'
import {connect} from 'react-redux'
import store from '../../redux/store'
import {fetchUsers} from '../../redux/actions/actions'

store.dispatch(fetchUsers())

const UsersComp = props => {

  return (
    <>
      <h1>Users: {props.users.length}</h1>

      <div>

        {
          props.users.length
            ? (
              <ul>
                {props.users.map(item => <li key={item.id}>{item.name}</li>)}
              </ul>
            )
            : null
        }

      </div>
    </>
  )
}

function mapStateToProps(state) {

  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UsersComp)