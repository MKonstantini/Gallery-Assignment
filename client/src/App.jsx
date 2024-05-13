import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.scss'

// External Imports And Optimization
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

// Components
import Home from './components/Home'
import NotFound from './components/NotFound'

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
