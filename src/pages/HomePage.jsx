import { useContext } from "react";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../context/WorkoutProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import workoutPlan from "../data/workout-plan";
import workouts from "../data/workout-data";

function HomePage() {
    const { selectedGender, setSelectedGender, dropdownValue, setDropdownValue,
        selectedDays, setSelectedDays, workoutList, setWorkoutList,
        currentDay, setCurrentDay } = useContext(WorkoutContext);

    // const workouts = [
    //     { title: 'Push-ups', image: 'https://via.placeholder.com/150', sets: '3 sets of 15' },
    //     { title: 'Squats', image: 'https://via.placeholder.com/150', sets: '3 sets of 20' },
    //     { title: 'Push-ups', image: 'https://via.placeholder.com/150', sets: '3 sets of 15' },
    //     { title: 'Squats', image: 'https://via.placeholder.com/150', sets: '3 sets of 20' },
    //     { title: 'Push-ups', image: 'https://via.placeholder.com/150', sets: '3 sets of 15' },
    //     { title: 'Squats', image: 'https://via.placeholder.com/150', sets: '3 sets of 20' },
    //     { title: 'Push-ups', image: 'https://via.placeholder.com/150', sets: '3 sets of 15' },
    //     { title: 'Squats', image: 'https://via.placeholder.com/150', sets: '3 sets of 20' },
    //     { title: 'Push-ups', image: 'https://via.placeholder.com/150', sets: '3 sets of 15' },
    //     { title: 'Squats', image: 'https://via.placeholder.com/150', sets: '3 sets of 20' },
    //     // Add more workouts
    // ];

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        setDropdownValue(0);
        setSelectedDays(0);
    };

    const handleDaysChange = (e) => {
        let plan = Number(e.target.value);
        setSelectedDays(plan);
        setDropdownValue(plan)
        let workouts = workoutPlan.find(wPlan => wPlan.plan === `${plan}-days`).daySplit[0];
        setWorkoutList(workouts);
    };

    const handleDayClick = (day) => {
        setCurrentDay(day);
        let workouts = workoutPlan.find(wPlan => wPlan.plan === `${selectedDays}-days`).daySplit[day - 1];
        setWorkoutList(workouts);
    };

    return (
        <div className="container mt-5">
            {/* Gender Selection */}
            <div className="text-center mb-4">
                <button
                    className={`btn btn-lg mx-2 ${selectedGender === 'men' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleGenderSelect('men')}
                >
                    Men
                </button>
                <button
                    className={`btn btn-lg mx-2 ${selectedGender === 'women' ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => handleGenderSelect('women')}
                >
                    Women
                </button>
            </div>

            {/* Days Dropdown */}
            {selectedGender && (
                <div className="text-center mb-4">
                    <label htmlFor="days" className="form-label">How many days do you want to work out in a week?</label>
                    <select id="days" value={dropdownValue} className="form-select w-25 mx-auto" onChange={handleDaysChange}>
                        <option value="0">Select days</option>
                        <option value="2">2 days</option>
                        <option value="4">4 days</option>
                        <option value="6">6 days</option>
                    </select>
                </div>
            )}

            {/* Days Navigation and Workouts */}
            {selectedDays > 0 && (
                <div className="row">
                    {/* Days Navigation */}
                    <div className="col-md-3 mb-3">
                        <div className="list-group">
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
                                                <img src={workout.thumbnail} className="card-img-top" alt={workout.title} />
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