import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//总结redux
//1、redux里面设置store，规则是{type:,xxx:}，一旦在containers里面发出dispatch就会改变store里面的state值 
//2、containers里面设置监听的组件
//3、reducers里面包括todos和visibilityFilter两种不同的state，但是如果通过dispatch触发的话两边同时接收数据但是会通过type来过滤选择谁来处理数据
//其它相关的：action设置store公共方法返回给store，componnets组件是真正意义上接收数据的组件