import React, { createContext, useContext, useReducer } from 'react';
import {
  REGISTER_COURSE,
  UNREGISTER_COURSE, 
  SET_STUDENT_INFO,
  SET_LOADING,
  SET_ERROR,
  initialState
} from './courseRegistrationTypes';

// Reducer
function courseRegistrationReducer(state, action) {
  switch (action.type) {
    case REGISTER_COURSE:
      // Check if course is already registered
      if (state.registeredCourses.some(course => course.id === action.payload.id)) {
        return {
          ...state,
          error: 'Du är redan registrerad för denna kurs'
        };
      }
      return {
        ...state,
        registeredCourses: [...state.registeredCourses, action.payload],
        error: null
      };
    
    case UNREGISTER_COURSE:
      return {
        ...state,
        registeredCourses: state.registeredCourses.filter(
          course => course.id !== action.payload
        ),
        error: null
      };
    
    case SET_STUDENT_INFO:
      return {
        ...state,
        studentInfo: action.payload
      };
    
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
}

// Create context
const CourseRegistrationContext = createContext();

// Provider component
export function CourseRegistrationProvider({ children }) {
  const [state, dispatch] = useReducer(courseRegistrationReducer, initialState);

  // Action creators
  const registerCourse = (course) => {
    dispatch({ type: SET_LOADING, payload: true });
    
    // Simulate API call
    setTimeout(() => {
      // If course has student info, save it
      if (course.studentInfo) {
        dispatch({ type: SET_STUDENT_INFO, payload: course.studentInfo });
      }
      
      dispatch({ type: REGISTER_COURSE, payload: course });
      dispatch({ type: SET_LOADING, payload: false });
    }, 500);
  };

  const unregisterCourse = (courseId) => {
    dispatch({ type: SET_LOADING, payload: true });
    
    // Simulate API call
    setTimeout(() => {
      dispatch({ type: UNREGISTER_COURSE, payload: courseId });
      dispatch({ type: SET_LOADING, payload: false });
    }, 500);
  };

  const updateStudentInfo = (studentInfo) => {
    dispatch({ type: SET_STUDENT_INFO, payload: studentInfo });
  };

  const isRegistered = (courseId) => {
    return state.registeredCourses.some(course => course.id === courseId);
  };

  const getRegisteredCourse = (courseId) => {
    return state.registeredCourses.find(course => course.id === courseId);
  };

  const clearError = () => {
    dispatch({ type: SET_ERROR, payload: null });
  };

  const value = {
    registeredCourses: state.registeredCourses,
    studentInfo: state.studentInfo,
    loading: state.loading,
    error: state.error,
    registerCourse,
    unregisterCourse,
    updateStudentInfo,
    isRegistered,
    getRegisteredCourse,
    clearError
  };

  return (
    <CourseRegistrationContext.Provider value={value}>
      {children}
    </CourseRegistrationContext.Provider>
  );
}

// Custom hook to use the context
export function useCourseRegistration() {
  const context = useContext(CourseRegistrationContext);
  if (!context) {
    throw new Error('useCourseRegistration must be used within a CourseRegistrationProvider');
  }
  return context;
}
