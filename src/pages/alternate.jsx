import React, { useCallback, useContext, useState } from "react";
import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
    Stack,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { WorkoutContext } from "../context/WorkoutProvider";
import workoutPlan from "../data/workout-plan";
import { PlayArrow } from "@mui/icons-material";

const WorkoutRoutine = () => {

    const { selectedDays, workoutList, setWorkoutList,
        currentDay, setCurrentDay, routine, setRoutine } = useContext(WorkoutContext);

    const handleWorkoutChange = useCallback((event) => {
        console.log(event.target.checked);
        let plan = event.target.checked ? 'focus-routine' : 'full-body';
        // setRoutine(plan);
        console.log(plan);
        let workouts = workoutPlan.find(wPlan => wPlan.plan === plan).daySplit[0];
        setWorkoutList(workouts)
        console.log(workouts);
    }, []);

    const workouts = {
        Monday: ["Push-ups", "Squats", "Burpees"],
        Tuesday: ["Plank", "Lunges", "Crunches"],
        Wednesday: ["Pull-ups", "Deadlifts", "Bench Press"],
        Thursday: ["Mountain Climbers", "Bicep Curls", "Tricep Dips"],
        Friday: ["Jumping Jacks", "Plank Rows", "Side Lunges"],
    };

    const [selectedDay, setSelectedDay] = useState("Monday");

    const handleDaySelection = (day) => {
        setSelectedDay(day);
    };

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
        <Box sx={{ p: 3, textAlign: "center" }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                Workout Routine
            </Typography>

            {/* Workout routine switch */}
            <Stack direction="row" spacing={1} sx={{ mb: 3, alignItems: 'center',  justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: "bold" }}>Full Body</Typography>
                    <Android12Switch defaultChecked onChange={handleWorkoutChange}/>
                    <Typography sx={{ fontWeight: "bold" }}>Focused Routine</Typography>
                </Stack>

            {/* Day Selector */}
            <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                flexWrap="wrap"
                sx={{ mb: 4, rowGap: 1.5 }}
            >
                {Object.keys(workouts).map((day) => (
                    <Button
                        key={day}
                        variant={selectedDay === day ? "contained" : "outlined"}
                        color="secondary"
                        onClick={() => handleDaySelection(day)}
                        sx={{
                            textTransform: "capitalize",
                            borderRadius: 3,
                            px: 3,
                            py: 1,
                            fontSize: "1rem",
                        }}
                    >
                        {day}
                    </Button>
                ))}
            </Stack>

            {/* Workouts for Selected Day */}
            <Typography variant="h5" sx={{ mb: 3 }}>
                {selectedDay}'s Workouts
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {workouts[selectedDay].map((workout, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                                borderRadius: 4,
                                boxShadow: 4,
                                transition: "transform 0.3s",
                                ":hover": { transform: "scale(1.05)" },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    py: 4,
                                }}
                            >
                                <FitnessCenterIcon
                                    sx={{
                                        fontSize: 40,
                                        color: "white",
                                        mb: 1.5,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    {workout}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WorkoutRoutine;
