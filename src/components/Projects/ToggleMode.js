import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as circle } from '@fortawesome/free-regular-svg-icons'

import { PATHFINDER, MAPBOOK, SCHEDULER } from '../Projects';

export default function ToggleMode(props) {

  const { projectMode, setProject } = props;

  return (
    <div className="placeholder">

        {projectMode === PATHFINDER && 
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={circle} onClick={() => setProject(MAPBOOK)}/>  
            <FontAwesomeIcon icon={circle} onClick={() => setProject(SCHEDULER)}/>  
          </div>
        }
        
        {projectMode === MAPBOOK && 
          <div>
        <FontAwesomeIcon icon={circle} onClick={() => setProject(PATHFINDER)}/>  
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={circle} onClick={() => setProject(SCHEDULER)}/>  
          </div>
        }

        {projectMode === SCHEDULER && 
          <div>
            <FontAwesomeIcon icon={circle} onClick={() => setProject(PATHFINDER)}/>  
            <FontAwesomeIcon icon={circle} onClick={() => setProject(MAPBOOK)} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        }
        
      </div>
  )
}