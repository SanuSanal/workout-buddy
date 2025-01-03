import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../context/WorkoutProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import workoutPlan from "../data/workout-plan";
import workouts from "../data/workout-data";

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function HomePage() {
    const { selectedDays, workoutList, setWorkoutList,
        currentDay, setCurrentDay } = useContext(WorkoutContext);

    const handleWorkoutChange = (event) => {
        // setChecked(event.target.checked);
        console.log("value");
        console.log(event.target.checked);

        let plan = event.target.checked ? 'focus-routine' : 'full-body';
        // setRoutine(plan);
        console.log(plan);
        let workouts = workoutPlan.find(wPlan => wPlan.plan === plan).daySplit[0];
        console.log(workouts);

        setWorkoutList(workouts);
    };

    const handleDayClick = (day) => {
        setCurrentDay(day);
    };

    const setWorkoutsForDay = (day) => {
        if (day !== 0) {
            let workouts = workoutPlan.find(wPlan => wPlan.plan === `${selectedDays}-days`).daySplit[day - 1];
            setWorkoutList(workouts);
        } else {
            setWorkoutList(['jumping-jacks', 'high-knees', 'arm-circles', 'bodyweight-squats', 'leg-swings']);
        }
    }

    useEffect(() => {
        setWorkoutsForDay(currentDay);
    }, [currentDay]);

    const Android12Switch = styled(Switch)(({ theme }) => ({
        padding: 8,
        '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
            },
            '&::before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12,
            },
            '&::after': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    theme.palette.getContrastText(theme.palette.primary.main),
                )}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12,
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 16,
            height: 16,
            margin: 2,
        },
    }));

    return (
        <div className="container mt-5">

            <div className="text-center mb-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3>Workout Routine</h3>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Typography>Full Body</Typography>
                    <Android12Switch defaultChecked onChange={handleWorkoutChange} />
                    <Typography>Focused Routine</Typography>
                </Stack>
            </div>

            {/* Days Navigation and Workouts */}
            {selectedDays > 0 && (
                <div className="row">
                    {/* Days Navigation */}
                    <div className="col-md-2 mb-3">
                        <div className="list-group">
                            <button
                                className={`list-group-item list-group-item-action ${currentDay === 0 ? 'active' : ''}`}
                                onClick={() => handleDayClick(0)}
                            >
                                Warm-up
                            </button>
                            {[...Array(selectedDays)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`list-group-item list-group-item-action ${currentDay === index + 1 ? 'active' : ''}`}
                                    onClick={() => handleDayClick(index + 1)}
                                >
                                    Day {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Workout List */}
                    <div className="col-md-9">
                        <div className="row">
                            {workoutList.map((workoutKey, index) => {
                                let workout = workouts.find(w => w.key === workoutKey);
                                return (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <Link to={`/item/${workout.key}`}>
                                            <div className="card h-100">
                                                <img src={`https://img.youtube.com/vi/${workout.videoId}/hqdefault.jpg`} className="card-img-top" alt={workout.title} />
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{workout.title}</h5>
                                                    <p className="card-text">{workout.sets}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;