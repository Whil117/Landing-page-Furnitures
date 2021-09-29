import {FC} from 'react'
import Home from '../components/home/Home'
import NavBar from '../components/NavBar/NavBar'
import { colors } from '../styles/colors'

const App:FC = () => {
    return (
        <main style={{fontFamily:"roboto", color:colors.black}}>
            <NavBar/>
            <Home/>
        </main>
    )
}

export default App
