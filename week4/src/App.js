import axios from "axios";
import { useEffect } from "react";

async function getGithubProfile() {
  const response = await axios.get(
    "https://api.github.com/users/hyunwookCHUNG"
  );
  console.log("data", response.data);
}

function App() {
  useEffect(() => {
    getGithubProfile();
  }, []);
  return <div className="App">뇸!</div>;
}

export default App;
