const ProjectCard = ({ projectName, openedTasks, closedTasks, description, leaderPhoto, teamPhotos, deadline }) => {
    
  
    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">{openedTasks} Open Tasks, {closedTasks} Completed</p>
          <p className="card-text"><strong>Description:</strong> {description}</p>
          <p className="card-text"><strong>Deadline:</strong>{deadline}</p>
         
          <div className="mb-3">
            <strong>Project Leader:</strong>
            <img src={leaderPhoto} alt="Leader" className="img-thumbnail rounded-circle ml-2" width="30" height="30" />
          </div>
  
          
          <div className="mb-3">
            <strong>Team:</strong>
            {teamPhotos.map((photo, index) => (
              <img key={index} src={photo} alt={"team"} className="img-thumbnail rounded-circle ml-2" width="30" height="30" />
            ))}
          </div>
  
          <div>
            <strong>Progress:</strong>
            <div className="progress">
              <div
                className="progress-bar" role="progressbar"
              >
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Project = () => {
    const projects = [
      {
        projectName: 'Office Management',
        openedTasks: 1,
        closedTasks: 9,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        deadline:'17 Apr 2023',
        leaderPhoto: 'https://source.unsplash.com/200x200/?person',
        teamPhotos: ['https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person'],
      },
      {
        projectName: 'Project Management',
        openedTasks: 2,
        closedTasks: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        deadline:'17 Apr 2023',
        leaderPhoto: 'https://source.unsplash.com/200x200/?person',
        teamPhotos: ['https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person'],
      },
      {
        projectName: 'Video Calling App',
        openedTasks: 3,
        closedTasks: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        deadline:'17 Apr 2023',
        leaderPhoto: 'https://source.unsplash.com/200x200/?person',
        teamPhotos: ['https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person'],
      },
      {
        projectName: 'Hospital Administration',
        openedTasks: 12,
        closedTasks: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        deadline:'17 Apr 2023',
        leaderPhoto: 'https://source.unsplash.com/200x200/?person',
        teamPhotos: ['https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person', 'https://source.unsplash.com/200x200/?person'],
      },
     
    ];
  
    return (
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-3">
                <ProjectCard {...project} />
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Project;
  