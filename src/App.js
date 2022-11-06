import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
//import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
//import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
//import Line from "./scenes/line";
import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Expense from "./scenes/expense-tracker/Expense";
//import Login from './components/logReg/Login'
//import Register from './components/logReg/Register'

function App({username, setUserState}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  //const [userstate, setUserState] = useState({})

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} setUserState={setUserState} username={username} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" 
              element={ userstate && userstate._id ? (<Expense
                    setUserState={setUserState}
                    username={userstate.fname}
                  />
                ) : (
                  <Login setUserState={setUserState} />  //ternary operator
                )
              }
              />
              <Route path="/login" element={<Login setUserState={setUserState} />}/>
              <Route path="/register" element={<Register />} /> */}
                
              <Route exact path="/" element={<Expense  />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              
              <Route path="/form" element={<Form setUserState={setUserState} username={username} />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              <Route path="/pie" element={<Pie />} />
              
             
              <Route path="/calendar" element={<Calendar />} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
