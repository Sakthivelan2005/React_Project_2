
import { useEffect, useState } from 'react';
import Content from './Content.js'
import { Buttons } from './Buttons.js';
function App() {
  const API_URL ="https://jsonplaceholder.typicode.com";
  const [Request_url,SetRequest_url] = useState("users")
  const [Items,SetItems]= useState([]);

  useEffect(() => {
const fetchItems = async()=>{
  try {
    const response = await fetch(`${API_URL}/${Request_url}`);
    if(!response.ok) throw Error("Data Not Received");
    const data = await response.json();
    SetItems(data);
    
  } catch (error) {
    console.error(error);
  }
}
fetchItems()
  },[Request_url])
  return (
    <main>
    <Buttons SetRequest_url={SetRequest_url}/>
    <Content Items={Items} />
    </main>
  );
}

export default App;
