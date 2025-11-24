import { useState } from "react";
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard";
import Newsitem from "./Components/Newsitem";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
     <Newsitem/>
    </div>
  );
};

export default App;