import { PATHFINDER, MAPBOOK, SCHEDULER } from '../components/Projects';

export const forward = (mode, setProject) => {
  switch (mode) {
    case PATHFINDER:
      setProject(MAPBOOK);
      break;
    case MAPBOOK:
      setProject(SCHEDULER);
      break;
    case SCHEDULER:
      setProject(PATHFINDER);
      break;
  }
}

export const back = (mode, setProject) => {
  switch (mode) {
    case PATHFINDER:
      setProject(SCHEDULER);
      break;
    case MAPBOOK:
      setProject(PATHFINDER);
      break;
    case SCHEDULER:
      setProject(MAPBOOK);
      break;
  }
}

/* 
  const slideshow = () => {
    clearInterval();
    switch (projectMode) {
      case PATHFINDER:
        setProject(MAPBOOK);
        break;
      case MAPBOOK:
        setProject(SCHEDULER);
        break;
      case SCHEDULER:
        setProject(PATHFINDER);
        break;
    }
  }
*/