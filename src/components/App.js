import Header from "./Header";
import react, {useState, useEffect} from "react";
import Speakers from "./Speakers";

function App() {
    
    const [theme, setTheme] = useState("light");
    return (
        <div className={theme === "light" ? "containter-fluid light" : "container-fluid dark"}>
            <Header theme={theme}/>
            <Speakers theme={theme} setTheme={setTheme}/>
        </div>
      );
}

export default App;