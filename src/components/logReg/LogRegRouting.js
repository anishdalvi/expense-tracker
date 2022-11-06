import { useState } from "react";
import Login from './Login'
import Register from './Register'
// eslint-disable-next-line
// // import Expense from "../../scenes/expense-tracker/Expense";
import { Routes, Route } from "react-router-dom";
import App from '../../App'


export default function LogRegRouting() {

  
  const [userstate, setUserState] = useState({})  

  return (
    <>
    <Routes>
                <Route path="*"   //parent route
                        element={ userstate && userstate._id ? (<App
                                setUserState={setUserState}
                                username={userstate.fname}
                            />
                            ) : (
                            <Login setUserState={setUserState} />  //ternary operator
                            )
                        }
                        />
              <Route path="/login" element={<Login setUserState={setUserState} />}/>
              <Route path="/register" element={<Register />} /> 
    </Routes>
    </>
  )
}
