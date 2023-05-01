import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Counter from './components/counter'
import UserList from './components/userList'
function App() {
  const [count, setCount] = useState(0);
  const [users,setUsers]=useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    axios('https://jsonplaceholder.typicode.com/todos')
      .then(response =>{
        setLoading(false);
  var arrResponse = response.data;
  setUsers(arrResponse);
      }
       )
      .catch(e => {
                console.log(e)
                setLoading(false);})
  },[])
  console.log(users)
const onIncrement=()=>{
  if(count>10){
    setCount((prev)=>prev+1)
  }
}
const onDecrement=()=>{
  if(count<0){
    setCount((prev)=>prev-1)
  }
}
 if (loading) {
        return <h1>loading...</h1>;
    }
  return (
    <div className="App">
     {/* <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/> */}
     <UserList users={users}/>
    </div>
  )
}

export default App
