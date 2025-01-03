const workoutPlan = [
    {
        plan: 'focus-routine',
        daySplit: [
            ['jumping-jacks', 'high-knees', 'arm-circles', 'bodyweight-squats', 'leg-swings'],
            ['bench-press-bar', 'incline-dumbbell-press', 'chest-flyes', 'dips', 'overhead-tricep-extension', 'tricep-pushdown', 'triceps-dips'],
            ['deadlifts', 'lat-pulldowns', 'barbell-rows', 'seated-row', 'pull-ups', 'barbell-curls', 'hammer-curls', 'concentration-curls'],
            ['overhead-press-bar', 'lateral-raises', 'front-raises-dumbbells', 'shrugs', 'face-pulls', 'planks', 'hanging-leg-raises', 'russian-twists'],
            [],
            ['squats', 'front-squat', 'lunges', 'leg-press', 'leg-curls', 'seated-leg-extensions', 'calf-raises', 'seated-calf-raises'],
            []
        ]
    },
    {
        plan: '6-days',
        daySplit: [
            ['bench-press-bar', 'incline-dumbbell-press', 'chest-flyes', 'dips', 'overhead-tricep-extension', 'tricep-pushdown', 'triceps-dips'],
            ['deadlifts', 'lat-pulldowns', 'barbell-rows', 'seated-row', 'barbell-curls', 'hammer-curls', '21s-ez-bar'],
            ['front-squat', 'lunges', 'leg-press', 'calf-raises', 'overhead-press-bar', 'lateral-raises', 'front-raises-dumbbells'],
            ['dumbbell-bench-press', 'decline-bench-press-bar', 'incline-dumbbell-flye', 'peckdek-flye', 'tricep-kickbacks', 'close-grip-bench-press', 'bar-push-down'],
            ['pull-ups', 'lat-pulldowns', 't-bar-row', 'dumbbell-pullover', 'concentration-curls', 'seated-row', 'preacher-curls'],
            ['overhead-press-bar', 'lateral-raises', 'face-pulls', 'shrugs', 'squats', 'seated-leg-extensions', 'leg-curls', 'seated-calf-raises']
        ]
    },
    {
        plan: 'full-body',
        daySplit: [
            ['jumping-jacks', 'high-knees', 'arm-circles', 'bodyweight-squats', 'leg-swings'],
            ['bench-press-bar', 'lat-pulldowns', 'deadlifts', 'lunges', 'seated-row', 'jumping-jacks', 'high-knees'], // Full Body Functional Workout (Strength + Conditioning Focus)
            ['bodyweight-squats', 'dips', 'overhead-tricep-extension', 'bicycle-crunches', 'seated-calf-raises', 'planks', 'leg-swings'], // Circuit Workout (Fat Loss + Toning Focus)
            ['jumping-jacks', 'high-knees', 'bodyweight-squats', 'lunges', 'cat-cow-stretch', 'planks', 'russian-twists'], // Endurance and Conditioning Focus
            ['incline-dumbbell-press', 'tricep-kickbacks', 'front-squat', 'seated-row', 'lateral-raises', 'dumbbell-bench-press', 'seated-leg-extensions'], // Toning Focus with Light Resistance
            ['cat-cow-stretch', 'hanging-leg-raises', 'bodyweight-squats', 'russian-twists', 'planks', 'leg-swings', 'arm-circles'] // Mobility and Core Strength Focus
        ]
    }
];

export default workoutPlan;