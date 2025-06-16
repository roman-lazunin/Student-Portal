// Course registration context constants and types

// Actions
export const REGISTER_COURSE = 'REGISTER_COURSE';
export const UNREGISTER_COURSE = 'UNREGISTER_COURSE';
export const SET_STUDENT_INFO = 'SET_STUDENT_INFO';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

// Initial state
export const initialState = {
  registeredCourses: [],
  studentInfo: null,
  loading: false,
  error: null
};
