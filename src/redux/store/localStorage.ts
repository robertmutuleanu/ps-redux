import { CoursesState } from '../reducers/courses';

type PersistedState = {
  courses: CoursesState;
};

export const loadState = (): PersistedState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: PersistedState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Intentionally ignored
  }
};
