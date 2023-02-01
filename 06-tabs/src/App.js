import axios from "axios";
import { useState } from "react";
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchTabs = async () => {
    setLoading(true)
    try {
      const { data } = await axios(url)
      setTabs(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  return (
    <section>

    </section>
  );
}

export default App;
