import React from 'react'
import { connect } from 'react-redux'
import MyTodo from '../components/MyTodo'

const mapStateToProps = state => {
  return {
      todos:state.todos
  }
}

let MyConnect = ({dispatch})=>(
  <div onClick={e=>{
      dispatch({
        type:'ISME',
        id:12,
        text:'Awbeci'
      })
    }}>
    this is MyConnect components 
  </div>
)

MyConnect = connect(mapStateToProps)(MyConnect)

export default MyConnect