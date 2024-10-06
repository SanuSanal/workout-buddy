import { Navigate, useParams } from "react-router-dom"
import workouts from "../data/workout-data";
import { marked } from "marked";

function WorkoutPage() {
    const { title } = useParams();

    const workout = workouts.find(w => w.key === title);

    if (!workout) {
        return <Navigate to="/" />
    }

    return (
        <div className="container mt-5 workout-detail-page">
          {/* Workout Title */}
          <div className="text-center mb-4">
            <h1>{workout.title}</h1>
          </div>
    
          {/* YouTube Video Embed */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${workout.videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
    
          {/* Workout Details Section */}
          <div className="row justify-content-center">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sets and Reps</h5>
                  <p className="card-text">{workout.sets}</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Calories Burned</h5>
                  <p className="card-text">{workout.caloriesBurned} cal</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-8 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Workout Instructions</h5>
                  <p className="card-text" dangerouslySetInnerHTML={{ __html: marked(workout.instructions) }}>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Potential Issues</h5>
                  <p className="card-text" dangerouslySetInnerHTML={{ __html: marked(workout.pointsToNote) }}>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default WorkoutPage;