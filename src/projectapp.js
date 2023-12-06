import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
let ProjectApp = () =>{
    return(
        <div className="container mt-3">
         <div className="row">
          <div className="col-sm-10" >
           <h3 className="h3 ">Projects</h3>
           <h5 className="h5 ">Dasboard/Projects</h5>
          </div>
          <div className="col-sm-2 ">
           <button type="button" className="btn btn-sm btn-light">
             <i class="fa-solid fa-table-cells"></i>
           </button>
        
           <button type="button" className="btn btn-sm btn-light ml-1">
           <i class="fa-solid fa-bars"></i>
           </button>
           
           <button type="button" className="btn btn-sm btn-dark ml-1 mr-1  rounded-pill " style={{ backgroundColor: 'orange', border:'none'}} >
           <i class="fa-solid fa-plus po1"></i> 
            Create Project
           </button>
           
           
           
         </div>
        </div>
   
      <div className="row">
        <div className="col-sm-3 mt-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Project Name" />
          </div>
        </div>
        <div className="col-sm-3 mt-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Employee Name" />
          </div>
        </div>
            <div className="dropdown col-sm-3 mt-3 ">
             <button className="btn btn-sm form-control  dropdown-toggle  " type="button" style={{ border:'1px solid rgb(232, 228, 228) ' }} data-toggle="dropdown">
              Select Designation</button>
               <div className="dropdown-menu" >
                 <a className="dropdown-item" href="/">Team Lead</a>
                   <a className="dropdown-item" href="/">Team</a>
                    
                  </div>
                </div>
                <div className="col-sm-3 mt-3">
                 <div className="input-group">
                  <button className="btn btn-primary form-control" style={{ backgroundColor: 'green' }} type="submit"> Search </button>
                 </div>
                </div>
             </div>
        </div>
    
    

    )
    
}
export default ProjectApp