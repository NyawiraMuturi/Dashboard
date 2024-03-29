import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import Topbar from './pages/global/Topbar'
import LeftSidebar from './pages/global/Sidebar'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import Invoices from './pages/invoices'
import Contacts from './pages/contacts'
// import Bar from './pages/bar'
import Form from './pages/form'
// import Line from './pages/line'
// import FAQ from './pages/faq'
// import Pie from './pages pie'
// import Geography from './pages/geography'
// import Calendar from './pages/calendar'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <LeftSidebar/>
          <main className='content'>

            <Topbar/>

            {/* Routes */}

            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/form' element={<Form/>}/>
                {/* <Route path='/bar' element={<Bar/>}/> */}
                {/* <Route path='/pie' element={<Pie/>}/> */}
                {/* <Route path='/line' element={<Line/>}/> */}
                {/* <Route path='/faq' element={<FAQ/>}/> */}
                {/* <Route path='/geography' element={<Geography/>}/> */}
                {/* <Route path='/calendar' element={<Calendar/>}/> */}
            </Routes>

          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
