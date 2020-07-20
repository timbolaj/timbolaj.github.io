import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as circle } from '@fortawesome/free-regular-svg-icons'

import { PATHFINDER, MAPBOOK, SCHEDULER } from '../Projects';

export default function ToggleMode(props) {

  const { projectMode } = props;

  return (
    <div className="placeholder">

        {projectMode === PATHFINDER && 
          <div>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={circle} />  
            <FontAwesomeIcon icon={circle} />  
          </div>
        }
        
        {projectMode === MAPBOOK && 
          <div>
            <FontAwesomeIcon icon={circle} />  
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={circle} />  
          </div>
        }

        {projectMode === SCHEDULER && 
          <div>
            <FontAwesomeIcon icon={circle} />  
            <FontAwesomeIcon icon={circle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
        }
        
      </div>
  )
}