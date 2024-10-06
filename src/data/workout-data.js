const workouts = [
    {
        key: 'bench-press-bar',
        title: 'Bench Press (Barbell)',
        thumbnail: 'https://fitwill.app/cdn-cgi/image/width=2048,quality=75,format=auto/https://fitwill.app/api/image/0025?w=1024&h=576',
        videoId: 'SCVCLChPQFY',
        sets: '3 to 4 sets of 8–12 reps',
        caloriesBurned: '50–70',
        instructions: `
- **Setup:** Lie flat on a bench with your eyes directly under the bar. Your feet should be flat on the ground, and your back should have a slight arch.
- **Grip:** Grip the barbell slightly wider than shoulder-width. Your wrists should be straight, and your grip should be firm but not too tight.
- **Execution:**
    - Unrack the bar by straightening your arms.
    - Lower the bar to your mid-chest while keeping your elbows at about a 45-degree angle to your body.
    - Press the bar back up to the starting position by fully extending your arms.
- **Breathing:** Inhale as you lower the bar, exhale as you press it back up.
        `,
        pointsToNote: `
- **Arching Your Back Too Much:** While some arch is natural, excessive arching can strain your lower back.
- **Elbow Flaring:** Keep your elbows at a 45-degree angle to avoid shoulder strain.
- **Grip Width:** If the grip is too wide or narrow, it can put undue stress on your shoulders and wrists.
- **Not Having a Spotter:** If lifting heavy, always have someone nearby to assist if needed.
        `
    },
    {
        key: 'incline-dumbbell-press',
        title: 'Incline Dumbbell Press',
        thumbnail: 'https://fitwill.app/cdn-cgi/image/width=2048,quality=75,format=auto/https://fitwill.app/api/image/0314?w=1024&h=576',
        videoId: 'IP4oeKh1Sd4',
        sets: '3 to 4 sets of 8–12 reps',
        caloriesBurned: '40–60',
        instructions: `
- **Setup:** Set the bench at a 30-45 degree incline. Sit on the bench with dumbbells resting on your thighs. As you lie back, use your thighs to help push the dumbbells up into position.
- **Grip and Form:**
    - Hold the dumbbells at shoulder level with palms facing forward.
    - Your feet should be flat on the ground, and your back should be pressed against the bench.
- **Execution:**
    - Press the dumbbells upward until your arms are fully extended but not locked.
    - Lower the dumbbells back down to the starting position in a controlled manner, keeping your elbows at a 45-degree angle.
- **Breathing:** Inhale as you lower the dumbbells, exhale as you press them back up.
        `,
        pointsToNote: `
- **Bench Angle:** If the bench is too steep, the focus shifts from the upper chest to the shoulders, reducing effectiveness.
- **Dumbbell Control:** Don’t let the dumbbells move too far outward or inward; keep them in a controlled motion to avoid shoulder strain.
- **Elbow Positioning:** Avoid flaring your elbows too wide, as this can cause shoulder injury.
- **Overarching the Back:** Keep a slight arch, but avoid excessive arching which can strain your lower back.
        `
    },
    {
        key: 'dips',
        title: 'Dips (Chest-focused)',
        thumbnail: 'https://fitnessvolt.com/wp-content/uploads/2021/12/Chest-Dips-vs-Triceps-Dips.jpg',
        videoId: 'dX_nSOOJIsE',
        sets: '3 to 4 sets of 8–12 reps',
        caloriesBurned: '40–60',
        instructions: `
- **Setup:** Use parallel bars or a dip station. Grab the bars firmly and lift yourself up with arms fully extended. Lean your torso slightly forward to target the chest more than the triceps.
- **Form:**
    - Keep your legs bent at the knees or crossed, and your torso angled forward.
    - Your arms should be straight at the top, with your shoulders slightly down and back.
- **Execution:**
    - Lower your body by bending your elbows until your upper arms are parallel to the ground (or slightly below).
    - Push yourself back up by straightening your arms to the starting position.
- **Breathing:** Inhale as you lower your body, exhale as you press back up.
        `,
        pointsToNote: `
- **Shoulder Strain:** Avoid going too deep, as this can cause shoulder injuries. Stop when your upper arms are parallel to the ground.
- **Body Position:** Keeping your torso too upright will shift the focus to your triceps. Lean forward to activate your chest more effectively.
- **Elbow Flare:** Keep your elbows at a moderate angle (not fully flared or tucked in) to avoid unnecessary shoulder or elbow strain.
        `
    },
    {
        key: 'overhead-tricep-extension',
        title: 'Overhead Tricep Extension (Dumbbell)',
        thumbnail: 'https://static.strengthlevel.com/images/exercises/seated-dumbbell-tricep-extension/seated-dumbbell-tricep-extension-800.jpg',
        videoId: '7h3lG2WnLXg',
        sets: '3 to 4 sets of 10–15 reps',
        caloriesBurned: '20–40',
        instructions: `
- **Setup:** Stand or sit on a bench with a dumbbell held in both hands. Grip the dumbbell with both palms under one end of the weight, or use a single dumbbell per hand with a neutral grip.
- **Form:**
    - Extend your arms fully overhead, keeping your elbows close to your ears.
    - Keep your core engaged and maintain a straight posture.
- **Execution:**
    - Lower the dumbbell behind your head by bending at the elbows, keeping your upper arms stationary.
    - Once you feel a stretch in your triceps, press the dumbbell back up by fully extending your arms overhead.
- **Breathing:** Inhale as you lower the dumbbell behind your head, exhale as you press it back up.
        `,
        pointsToNote: `
- **Elbow Positioning:** Make sure your elbows stay close to your head. If they flare out too much, the tension shifts away from the triceps.
- **Lower Back Arching:** Keep your core engaged to prevent excessive arching of the lower back, especially when using heavier weights.
- **Range of Motion:** Avoid going too low to the point where you feel discomfort in your shoulders. A moderate stretch is sufficient.
- **Grip:** Ensure a firm grip on the dumbbell to avoid losing control of the weight behind your head.
        `
    },
    {
        key: 'triceps-dips',
        title: 'Triceps Dips',
        thumbnail: 'https://www.endomondo.com/wp-content/uploads/2024/07/Chair-Tricep-Dips.png',
        videoId: 'oA8Sxv2WeOs',
        sets: '3 to 4 sets of 8–12 reps',
        caloriesBurned: '30–50',
        instructions: `
- **Setup:** Use parallel bars or a dip station. Grip the bars and lift yourself up so your arms are fully extended. Keep your torso upright to focus more on the triceps.
- **Form:**
    - Your legs should be bent at the knees or crossed, and your torso should remain straight (avoid leaning forward).
    - Keep your elbows close to your body.
- **Execution:**
    - Lower your body by bending your elbows until your upper arms are parallel to the ground.
    - Push yourself back up by extending your arms to the starting position.
- **Breathing:** Inhale as you lower your body, exhale as you press back up.
        `,
        pointsToNote: `
- **Elbow Positioning:** Keep your elbows tucked in close to your sides. Letting them flare out too much can put strain on your shoulders.
- **Going Too Low:** Lowering yourself too far can strain the shoulders. Only go until your upper arms are parallel to the ground.
- **Shoulder Engagement:** Keeping your torso too upright helps isolate the triceps but be mindful not to over-engage the shoulders.
        `
    },
    {
        key: 'chest-flyes',
        title: 'Chest Flyes (Dumbbell Flyes)',
        thumbnail: 'https://static.strengthlevel.com/images/exercises/dumbbell-fly/dumbbell-fly-800.jpg',
        videoId: 'Nhvz9EzdJ4U',
        sets: '3 to 4 sets of 10–15 reps',
        caloriesBurned: '30–50',
        instructions: `
- **Setup:** Lie flat on a bench with a dumbbell in each hand. Your feet should be flat on the ground, and your back slightly arched.
- **Grip and Form:**
    - Start with your arms extended above your chest, palms facing each other, and a slight bend in your elbows.
- **Execution:**
    - Slowly lower the dumbbells in an arc out to your sides until you feel a stretch in your chest. Keep the same slight bend in your elbows throughout the movement.
    - Bring the dumbbells back up, following the same arc, until they meet at the top over your chest.
- **Breathing:** Inhale as you lower the dumbbells, exhale as you bring them back up.
        `,
        pointsToNote: `
- **Elbow Locking:** Don’t lock your elbows or fully straighten your arms. A slight bend protects your joints and keeps tension on your chest muscles.
- **Depth:** Don’t lower the dumbbells too far, as this can put undue stress on your shoulders.
- **Heavy Weights:** Use lighter weights compared to pressing movements. Going too heavy can increase the risk of shoulder injury.
- **Back Positioning:** Keep your back slightly arched and avoid lifting it off the bench during the movement.
        `
    },
    {
        key: 'tricep-pushdown',
        title: 'Tricep Pushdowns (Cable Machine)',
        thumbnail: 'https://fitwill.app/api/image/1227?p=1&w=1024&h=1024',
        videoId: 'LXkCrxn3caQ',
        sets: '3 to 4 sets of 10–15 reps',
        caloriesBurned: '20–40',
        instructions: `
- **Setup:** Attach a straight bar, V-bar, or rope to the high pulley of a cable machine. Stand facing the machine with feet shoulder-width apart, gripping the attachment with palms facing down (overhand grip) for a bar or neutral grip for a rope.
- **Form:**
    - Keep your elbows tucked close to your sides, with your forearms parallel to the floor.
    - Your back should be straight, core engaged, and knees slightly bent for stability.
- **Execution:**
    - Push the bar/rope down by extending your elbows until your arms are fully straight.
    - Pause briefly at the bottom, squeezing your triceps.
    - Slowly return to the starting position, allowing your forearms to come back up.
- **Breathing:** Exhale as you push the bar/rope down, inhale as you bring it back up.
        `,
        pointsToNote: `
- **Elbow Positioning:** Keep your elbows stationary and close to your sides throughout the movement. Letting them flare out reduces tension on the triceps.
- **Control:** Don’t let the weight pull your arms up too quickly during the return motion. Maintain a controlled, slow movement to engage the triceps properly.
- **Shoulder Engagement:** Don’t use your shoulders or back to push the weight down. The focus should be entirely on the triceps.
- **Leaning Forward:** Avoid excessive leaning or swinging your body for momentum.
        `
    },
    {
        key: 'push-up',
        title: 'Push-ups',
        thumbnail: '',
        videoId: 'dQw4w9WgXcQ',
        sets: '3 sets of 15 reps',
        caloriesBurned: 100,
        instructions: 'Start in a plank position, lower your body until your chest nearly touches the floor, and push yourself back up. Keep your core engaged throughout the movement. Proper form is key to avoid injury.',
    },
    {
        key: 'squat',
        title: 'Squat',
        thumbnail: '',
        videoId: 'dQw4w9WgXcQ',
        sets: '3 sets of 15 reps',
        caloriesBurned: 100,
        instructions: `
            Start in a plank position, lower your body until your chest nearly touches the floor, and push yourself back up. 
            Keep your core engaged throughout the movement. Proper form is key to avoid injury. Start in a plank position, 
            lower your body until your chest nearly touches the floor, and push yourself back up. Keep your core engaged 
            throughout the movement. Proper form is key to avoid injury.

            <br/><br/>XOXOStart in a plank position, lower your body until your chest nearly touches the floor, and push yourself back up. 
            Keep your core engaged throughout the movement. Proper form is key to avoid injury.
        `.replace(/\s+/g, ' ').trim(),
    }
];

export default workouts;