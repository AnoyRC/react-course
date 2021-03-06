/* eslint-disable no-unreachable */

//import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";
function App() {
  return (
  <Layout>
    
    <Routes>
    <Route path="/" element={<AllMeetups/>}/>
    <Route path="/new-meetups" element={<NewMeetups/>}/>
    <Route path="/favorites" element={<Favorites/>}/>
     
    </Routes>
    {/*<h1>My Todos</h1>
    <Todo text='Learn React' />    
    <Todo text='Master React' />  
  <Todo text='Explore the full react course' /> */}
  </Layout>
  );
}
export default App;
