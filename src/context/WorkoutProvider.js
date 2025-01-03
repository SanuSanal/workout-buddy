import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [selectedGender, setSelectedGender] = useState('');
    const [dropdownValue, setDropdownValue] = useState(0);
    const [selectedDays, setSelectedDays] = useState(6);
    const [workoutList, setWorkoutList] = useState([]);
    const [currentDay, setCurrentDay] = useState(0);
    const [routine, setRoutine] = useState('focus-routine');

  return (
    <WorkoutContext.Provider
      value={{ selectedGender, setSelectedGender, dropdownValue, setDropdownValue,
        selectedDays, setSelectedDays, workoutList, setWorkoutList,
        currentDay, setCurrentDay, routine, setRoutine
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
