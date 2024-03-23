import { createContext } from 'react'

export const ThemeContext = React.createContext()

function App() {  
const [darkTheme, setDarkTheme] = useState(true)

function toggleTheme(){
  setDarkTheme(prevDarkTheme => !prevDarkTheme)
}

return (
  <>
    <ThemeContext.Provider value={darkTheme}> //all of the children inside this div can use the "dark theme" value
      <button onClick={toggleTheme}> Toggle Theme </button>
    <FunctionContextComponent />  
    <ClassContextComponent />
    </ThemeContext.Provider>

  </>
  );
}

export default App;
