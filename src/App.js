import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import MyConnect from './containers/MyConnect'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <MyConnect>
      Awbeci is only one in this world
    </MyConnect>
  </div>
)

export default App