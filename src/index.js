import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './nav'
import App from './app'
import ClientList from './client';
/*import ProjectApp from './projectapp';
import Project from './projectcard';*/

let Client = () =>{
   return(
   <>
   <Navbar/>
   <App/>
   <ClientList/>
   </>
   )
}
/*let Projectpage = () =>{
   return (
      <>
      <nav/>
      <ProjectApp/>
      <Project/>
      </>
   )
}*/ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Client/>);


