import React from 'react'
import { connect } from 'react-redux'
import MyTodo from '../components/MyTodo'

let MyConnect = ({dispatch,children})=>(
  <div onClick={e=>{
      dispatch({
        type:'ISME',
        id:12,
        text:'Awbeci'
      })
    }}>
    {children}
  </div>
)

MyConnect = connect()(MyConnect)

export default MyConnect