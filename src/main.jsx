import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import Main from './component/LayOut/Main';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';
import Grandpaa from './component/Grandpaa/Grandpaa';

const router = createBrowserRouter([
  {
     path : '/',
     element : <Main></Main>,
     children :[
     {
      path :'/',
      element : <Home></Home>,
      loader : ()=> fetch ('t-shirts.json')
     },
     {
      path : 'review',
      element : <OrderReview></OrderReview>
     } ,
     {
      path : 'grandpaa',
      element : <Grandpaa></Grandpaa>
     }

     ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
