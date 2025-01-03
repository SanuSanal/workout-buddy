const workouts = [
    {
        key: 'bench-press-bar',
        title: 'Bench Press (Barbell)',
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
    "key": "deadlifts",
    "title": "Deadlifts",
    "videoId": "r4MzxtBKyNE",
    "sets": "3 to 4 sets of 5–8 reps",
    "caloriesBurned": "100–150",
    "instructions": `
- **Setup:** Stand with your feet hip-width apart, with the barbell over the middle of your feet. Use an overhand, mixed, or hook grip.
- **Form:**
    - Bend at your hips and knees, grabbing the bar, keeping your chest up, and maintaining a straight back.
    - Your hips should be above knee level, shoulders just in front of the bar.
    - Engage your core, pull your shoulders back, and keep a neutral spine.
- **Execution:**
    - Drive through your heels, extending your knees and hips to lift the bar.
    - Keep the bar close to your body and stand upright at the top by fully extending your hips.
    - Lower the bar back down in a controlled manner.
- **Breathing:** Inhale before lifting, brace your core, and exhale as you complete the lift.
    `,
    "pointsToNote": `
- **Rounded Back:** Keep your back straight throughout the movement to avoid injury.
- **Bar Positioning:** Keep the bar close to your body, especially during the lift and descent.
- **Hips Rising:** Ensure your hips and chest rise together.
- **Overextension:** Don’t lean back at the top; stand tall without hyperextending your lower back.
    `
},
{
    "key": "lat-pulldowns",
    "title": "Lat Pulldowns (Cable Machine)",
    "videoId": "JGeRYIZdojU",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "30–50",
    "instructions": `
- **Setup:** Sit on the lat pulldown machine with your feet flat on the floor. Grab the bar with a wide overhand grip, slightly wider than shoulder-width.
- **Form:**
    - Keep your back straight and chest up, and position yourself so that your arms are fully extended above you.
    - Engage your core and avoid using your lower back to assist in pulling.
- **Execution:**
    - Pull the bar down towards your chest by engaging your lats and bending your elbows.
    - Squeeze your shoulder blades together as the bar reaches your upper chest.
    - Slowly return to the starting position by extending your arms fully.
- **Breathing:** Exhale as you pull the bar down, inhale as you extend your arms back up.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows directly under the bar as you pull it down to engage your lats effectively.
- **Back Positioning:** Maintain a straight back; do not lean back excessively to avoid strain.
- **Control:** Avoid using momentum or swinging your body to pull the weight. Focus on a slow and controlled movement.
- **Grip:** A wider grip emphasizes your upper lats, while a closer grip can target the lower lats.
    `
},
{
    "key": "barbell-rows",
    "title": "Barbell Rows",
    "videoId": "FWJR5Ve8bnQ",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "50–80",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, holding a barbell with an overhand grip. Bend your knees slightly and hinge forward at your hips, keeping your back straight.
- **Form:**
    - Your torso should be at about a 45-degree angle with arms fully extended.
    - Engage your core and keep your shoulders back.
- **Execution:**
    - Pull the barbell towards your lower chest, keeping your elbows close to your body.
    - Squeeze your shoulder blades together at the top.
    - Slowly lower the bar back to the starting position.
- **Breathing:** Exhale as you row the barbell up, inhale as you lower it back down.
    `,
    "pointsToNote": `
- **Back Positioning:** Keep your back flat throughout the movement to avoid injury.
- **Elbow Positioning:** Keep your elbows close to your body to fully engage your lats and middle back.
- **Control:** Use controlled movements to avoid swinging the bar.
    `
},
{
    "key": "seated-row",
    "title": "Seated Row (Cable Machine)",
    "videoId": "vwHG9Jfu4sw",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "30–50",
    "instructions": `
- **Setup:** Sit at the cable row machine, placing your feet on the platform and grabbing the handle with a neutral grip.
- **Form:**
    - Sit up straight, keep your chest out, and slightly bend your knees.
    - Keep your back straight and avoid leaning back excessively.
- **Execution:**
    - Pull the handle towards your lower chest by driving your elbows back.
    - Squeeze your shoulder blades together at the end of the movement.
    - Slowly extend your arms back to the starting position.
- **Breathing:** Exhale as you pull the handle towards you, inhale as you extend your arms.
    `,
    "pointsToNote": `
- **Back Positioning:** Maintain a neutral spine without excessive leaning or rounding.
- **Range of Motion:** Avoid leaning too far back or forward; keep the movement controlled.
- **Elbow Positioning:** Keep your elbows close to your body to better engage your lats.
    `
},
{
    "key": "barbell-curls",
    "title": "Barbell Curls",
    "videoId": "kwG2ipFRgfo",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–30",
    "instructions": `
- **Setup:** Stand with your feet shoulder-width apart, holding a barbell with an underhand grip (palms facing up).
- **Form:**
    - Keep your elbows close to your sides and your core engaged.
    - Stand upright with minimal body movement.
- **Execution:**
    - Curl the barbell towards your chest by flexing your elbows.
    - Pause at the top and squeeze your biceps before slowly lowering the barbell back down.
- **Breathing:** Exhale as you curl the barbell up, inhale as you lower it back down.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows stationary; don't let them drift forward.
- **Momentum:** Avoid swinging your body or using momentum to lift the weight.
- **Grip:** Using a shoulder-width grip targets the overall biceps, while a closer grip emphasizes the outer head of the biceps.
    `
},
{
    "key": "hammer-curls",
    "title": "Hammer Curls (Dumbbells)",
    "videoId": "OPqe0kCxmR8",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–30",
    "instructions": `
- **Setup:** Stand with your feet shoulder-width apart, holding a dumbbell in each hand with a neutral grip (palms facing each other).
- **Form:**
    - Keep your elbows close to your sides and your core engaged.
    - Maintain a neutral grip throughout the movement.
- **Execution:**
    - Curl the dumbbells towards your shoulders while keeping your palms facing each other.
    - Pause at the top before slowly lowering the dumbbells back to the starting position.
- **Breathing:** Exhale as you curl the dumbbells up, inhale as you lower them down.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows stationary and close to your torso.
- **Grip:** Ensure you maintain the neutral grip for proper biceps and forearm engagement.
- **Control:** Avoid swinging or using momentum to lift the weight.
    `
},
{
    "key": "21s-ez-bar",
    "title": "21s (EZ Bar Curls)",
    "videoId": "gIL7f7Ljb9A",
    "sets": "3 sets of 21 reps (7 reps each range of motion)",
    "caloriesBurned": "25–40",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, holding an EZ bar with an underhand grip.
- **Form:**
    - Keep your elbows close to your body and your core engaged.
    - Stand upright with minimal body movement.
- **Execution:**
    - Start by curling the bar halfway up for 7 reps (lower half of the range of motion).
    - Then, curl from halfway to the top for 7 reps (upper half of the range).
    - Finally, complete 7 full-range curls from the bottom to the top.
- **Breathing:** Inhale on the lower phase of the lift, exhale as you complete each rep.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows stationary and avoid moving them forward during the movement.
- **Control:** Use strict form and control to avoid swinging and momentum.
- **Range of Motion:** Each phase of the 21 reps focuses on a different portion of the curl, so avoid rushing through the movements.
    `
},
{
    "key": "front-squat",
    "title": "Front Squat",
    "videoId": "uYumuL_G_V0",
    "sets": "3 to 4 sets of 6–10 reps",
    "caloriesBurned": "80–120",
    "instructions": `
- **Setup:** Stand with your feet shoulder-width apart, holding the barbell across your front shoulders, elbows pointing forward, and hands under the bar for support.
- **Form:** 
    - Keep your chest up, core braced, and elbows high.
    - Squat down by bending your knees and hips, keeping your torso upright.
- **Execution:** 
    - Lower yourself until your thighs are parallel to the floor.
    - Drive through your heels to return to the starting position.
- **Breathing:** Inhale as you lower into the squat, exhale as you push back up.
    `,
    "pointsToNote": `
- **Torso Position:** Maintain an upright torso throughout the movement.
- **Knee Tracking:** Ensure your knees track in line with your toes to prevent strain.
- **Depth:** Aim for a depth where your thighs are parallel to the floor or lower.
    `
},
{
    "key": "lunges",
    "title": "Lunges",
    "videoId": "tTej-ax9XiA",
    "sets": "3 to 4 sets of 10–12 reps per leg",
    "caloriesBurned": "40–70",
    "instructions": `
- **Setup:** Stand with your feet together, holding dumbbells or with bodyweight only.
- **Form:** 
    - Step forward with one foot, keeping your chest up and core engaged.
    - Lower your hips until both knees are bent at 90-degree angles.
- **Execution:** 
    - Push through your front heel to return to the starting position.
    - Alternate legs for each repetition.
- **Breathing:** Inhale as you lower, exhale as you push back up.
    `,
    "pointsToNote": `
- **Knee Positioning:** Ensure your front knee doesn’t go past your toes to avoid injury.
- **Balance:** Engage your core for stability to avoid wobbling.
- **Control:** Use slow, controlled movements.
    `
},
{
    "key": "leg-press",
    "title": "Leg Press (Machine)",
    "videoId": "q4W4_VJbKW0",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "50–80",
    "instructions": `
- **Setup:** Sit on the leg press machine, placing your feet shoulder-width apart on the platform.
- **Form:** 
    - Keep your back pressed against the pad and feet firmly on the platform.
- **Execution:** 
    - Push the platform away by extending your knees, without locking them.
    - Slowly return to the starting position by bending your knees.
- **Breathing:** Exhale as you push the weight, inhale as you lower it back.
    `,
    "pointsToNote": `
- **Foot Placement:** Adjust foot placement to focus on different areas (lower for quads, higher for glutes).
- **Knee Positioning:** Avoid locking your knees at the top to prevent injury.
- **Control:** Maintain control and avoid using momentum.
    `
},
{
    "key": "calf-raises",
    "title": "Calf Raises",
    "videoId": "H1b_tKeq3Us",
    "sets": "3 to 4 sets of 15–20 reps",
    "caloriesBurned": "20–30",
    "instructions": `
- **Setup:** Stand on a flat surface or a raised platform with the balls of your feet, holding a barbell or dumbbells, or bodyweight.
- **Form:** 
    - Keep your feet shoulder-width apart, chest up, and core engaged.
- **Execution:** 
    - Raise your heels as high as possible, squeezing your calves.
    - Lower your heels back down slowly to the starting position.
- **Breathing:** Exhale as you raise your heels, inhale as you lower them.
    `,
    "pointsToNote": `
- **Range of Motion:** Focus on a full range of motion to fully engage the calves.
- **Control:** Use slow, controlled movements for optimal muscle activation.
- **Balance:** Engage your core to help maintain stability.
    `
},
{
    "key": "overhead-press-bar",
    "title": "Overhead Press (Barbell)",
    "videoId": "KP1sYz2VICk",
    "sets": "3 to 4 sets of 8–10 reps",
    "caloriesBurned": "40–60",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, holding a barbell at shoulder height with an overhand grip.
- **Form:** 
    - Keep your chest up, core braced, and wrists in a neutral position.
- **Execution:** 
    - Press the bar overhead until your arms are fully extended.
    - Lower the bar back to the starting position slowly.
- **Breathing:** Exhale as you press the bar up, inhale as you lower it back down.
    `,
    "pointsToNote": `
- **Shoulder Engagement:** Avoid using momentum or leaning back; keep the movement strict to focus on the shoulders.
- **Grip:** Keep your grip at shoulder-width to avoid shoulder strain.
- **Control:** Lower the bar slowly to engage your muscles properly.
    `
},
{
    "key": "lateral-raises",
    "title": "Lateral Raises (Dumbbells)",
    "videoId": "PzsMitRdI_8",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–30",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, holding dumbbells at your sides.
- **Form:** 
    - Keep a slight bend in your elbows, chest up, and core engaged.
- **Execution:** 
    - Lift the dumbbells out to your sides until your arms are parallel to the floor.
    - Slowly lower them back to the starting position.
- **Breathing:** Exhale as you lift the dumbbells, inhale as you lower them.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows slightly bent to avoid joint strain.
- **Range of Motion:** Lift to shoulder height only; no higher to protect your shoulder joints.
- **Control:** Use controlled movements to prevent swinging or using momentum.
    `
},
{
    "key": "front-raises-dumbbells",
    "title": "Front Raises (Dumbbells)",
    "videoId": "zkP0MsTcIVU",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "20–30",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, holding dumbbells in front of your thighs with an overhand grip.
- **Form:** 
    - Keep your core engaged and arms slightly bent.
- **Execution:** 
    - Raise the dumbbells to shoulder height in front of you.
    - Lower them back down in a controlled manner.
- **Breathing:** Exhale as you raise the dumbbells, inhale as you lower them.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows slightly bent and avoid locking them.
- **Range of Motion:** Raise only to shoulder height to protect your joints.
- **Control:** Avoid swinging the weights; use slow, controlled movements.
    `
},
{
    "key": "dumbbell-bench-press",
    "title": "Dumbbell Bench Press",
    "videoId": "VmB1G1K7v94",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "40–70",
    "instructions": `
- **Setup:** Lie flat on a bench, holding a dumbbell in each hand with an overhand grip.
- **Form:** 
    - Keep your feet flat on the floor and press your back against the bench.
    - Hold the dumbbells at chest level with your elbows bent.
- **Execution:** 
    - Push the dumbbells upward until your arms are fully extended.
    - Slowly lower them back to the starting position.
- **Breathing:** Exhale as you push up, inhale as you lower the dumbbells.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows at a 45-degree angle to avoid shoulder strain.
- **Control:** Move the dumbbells slowly and avoid letting them drop.
- **Back Position:** Maintain a slight arch in your lower back for stability.
    `
},
{
    "key": "decline-bench-press-bar",
    "title": "Decline Bench Press (Barbell)",
    "videoId": "6yGZ0KCaiWM",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "40–70",
    "instructions": `
- **Setup:** Lie on a decline bench with your feet secured, holding the barbell with an overhand grip.
- **Form:** 
    - Keep your chest up and back flat on the bench.
- **Execution:** 
    - Lower the barbell to your lower chest.
    - Press it back up until your arms are fully extended.
- **Breathing:** Inhale as you lower the bar, exhale as you press it up.
    `,
    "pointsToNote": `
- **Bar Path:** Keep the barbell moving in a straight path over your chest.
- **Control:** Avoid bouncing the bar off your chest for momentum.
- **Grip Width:** Use a slightly wider grip to target the chest muscles.
    `
},
{
    "key": "incline-dumbbell-flye",
    "title": "Incline Dumbbell Flye",
    "videoId": "JSDpq14vCZ8",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "30–50",
    "instructions": `
- **Setup:** Lie on an incline bench, holding a dumbbell in each hand with palms facing each other.
- **Form:** 
    - Keep a slight bend in your elbows.
    - Lower the dumbbells out to your sides.
- **Execution:** 
    - Bring the dumbbells together above your chest in a controlled motion.
    - Slowly lower them back to the starting position.
- **Breathing:** Exhale as you bring the dumbbells together, inhale as you lower them.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows slightly bent throughout the movement.
- **Range of Motion:** Do not lower the dumbbells too far to avoid shoulder strain.
- **Control:** Focus on a slow, controlled motion for muscle activation.
    `
},
{
    "key": "peckdek-flye",
    "title": "Pec Deck Flye (Machine)",
    "videoId": "eGjt4lk6g34",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "30–50",
    "instructions": `
- **Setup:** Sit on the pec deck machine with your arms positioned at chest height on the handles.
- **Form:** 
    - Keep your chest up and back against the pad.
    - Grasp the handles with a slight bend in your elbows.
- **Execution:** 
    - Bring the handles together in front of your chest.
    - Slowly return them to the starting position.
- **Breathing:** Exhale as you bring the handles together, inhale as you return them.
    `,
    "pointsToNote": `
- **Elbow Bend:** Keep a slight bend in your elbows to avoid shoulder strain.
- **Control:** Avoid letting the weight stack slam at the bottom.
- **Chest Focus:** Squeeze your chest at the top of the movement.
    `
},
{
    "key": "tricep-kickbacks",
    "title": "Tricep Kickbacks (Dumbbells)",
    "videoId": "m_UlDFNX4mk",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Hold a dumbbell in each hand, bending over with your back flat and elbows bent.
- **Form:** 
    - Keep your elbows close to your body.
    - Extend your arms backward to straighten them.
- **Execution:** 
    - Squeeze your triceps at the top of the movement.
    - Slowly return to the starting position.
- **Breathing:** Exhale as you extend your arms, inhale as you lower them.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows stationary to fully engage the triceps.
- **Back Position:** Maintain a flat back to avoid lower back strain.
- **Control:** Use slow, controlled movements to engage the triceps effectively.
    `
},
{
    "key": "close-grip-bench-press",
    "title": "Close-Grip Bench Press (Barbell)",
    "videoId": "DzA2xZhDGeo",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "40–70",
    "instructions": `
- **Setup:** Lie on a bench, gripping the barbell with hands slightly closer than shoulder-width apart.
- **Form:** 
    - Keep your feet flat on the floor and back against the bench.
- **Execution:** 
    - Lower the barbell to your chest, keeping your elbows close to your body.
    - Press the barbell back up until your arms are fully extended.
- **Breathing:** Inhale as you lower the bar, exhale as you press it up.
    `,
    "pointsToNote": `
- **Grip Width:** Keep a narrow grip to focus on triceps rather than chest muscles.
- **Elbow Positioning:** Keep your elbows tucked in to avoid shoulder strain.
- **Control:** Avoid bouncing the bar off your chest.
    `
},
{
    "key": "bar-push-down",
    "title": "Bar Pushdown (Cable Machine)",
    "videoId": "32auHIqgEoM",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Attach a straight bar to the high pulley of a cable machine. Stand facing the machine with feet shoulder-width apart, gripping the bar with an overhand grip.
- **Form:** 
    - Keep your elbows close to your sides and forearms parallel to the floor.
- **Execution:** 
    - Push the bar down by extending your arms until they are fully straight.
    - Slowly return to the starting position.
- **Breathing:** Exhale as you push the bar down, inhale as you bring it back up.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows stationary to engage the triceps properly.
- **Control:** Avoid using momentum or swinging the bar down.
- **Grip:** Use a firm grip on the bar to maintain control.
    `
},
{
    "key": "pull-ups",
    "title": "Pull-Ups",
    "videoId": "aAggnpPyR6E",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "50–70",
    "instructions": `
- **Setup:** Grab a pull-up bar with an overhand grip, hands slightly wider than shoulder-width apart.
- **Form:** 
    - Keep your core tight and legs straight.
- **Execution:** 
    - Pull yourself up until your chin is above the bar.
    - Lower yourself back down in a controlled motion.
- **Breathing:** Exhale as you pull up, inhale as you lower down.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows close to your body as you pull.
- **Full Range of Motion:** Lower yourself fully before pulling up again.
- **Control:** Avoid swinging or using momentum to lift yourself.
    `
},
{
    "key": "t-bar-row",
    "title": "T-Bar Row",
    "videoId": "hYo72r8Ivso",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "50–80",
    "instructions": `
- **Setup:** Position yourself with a T-bar, feet shoulder-width apart and knees slightly bent.
- **Form:** 
    - Lean forward with a flat back, holding the bar close to your chest.
- **Execution:** 
    - Pull the bar toward your torso, squeezing your shoulder blades together.
    - Slowly lower the bar back to the starting position.
- **Breathing:** Exhale as you pull, inhale as you lower the bar.
    `,
    "pointsToNote": `
- **Back Position:** Keep your back flat to avoid strain.
- **Elbow Positioning:** Keep your elbows tucked in close to your body.
- **Control:** Avoid using momentum to lift the bar.
    `
},
{
    "key": "dumbbell-pullover",
    "title": "Dumbbell Pullover",
    "videoId": "CSkSflHdC3A",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "30–50",
    "instructions": `
- **Setup:** Lie on a bench, holding a dumbbell with both hands above your chest.
- **Form:** 
    - Keep a slight bend in your elbows.
- **Execution:** 
    - Lower the dumbbell behind your head until your arms are parallel to the floor.
    - Bring the dumbbell back to the starting position.
- **Breathing:** Inhale as you lower the dumbbell, exhale as you bring it back up.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows slightly bent throughout the movement.
- **Control:** Move the dumbbell in a slow and controlled motion to avoid shoulder strain.
- **Back Position:** Keep your lower back pressed against the bench.
    `
},
{
    "key": "concentration-curls",
    "title": "Concentration Curls",
    "videoId": "0AUGkch3tzc",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Sit on a bench, holding a dumbbell in one hand with your elbow resting on your inner thigh.
- **Form:** 
    - Keep your back straight and your core tight.
- **Execution:** 
    - Curl the dumbbell up toward your shoulder.
    - Slowly lower it back to the starting position.
- **Breathing:** Exhale as you curl, inhale as you lower the dumbbell.
    `,
    "pointsToNote": `
- **Control:** Focus on a slow, controlled movement to maximize bicep activation.
- **Elbow Stability:** Keep your elbow firmly planted on your thigh.
- **Range of Motion:** Fully extend your arm before starting the next rep.
    `
},
{
    "key": "preacher-curls",
    "title": "Preacher Curls",
    "videoId": "sxA__DoLsgo",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Sit at a preacher curl bench, holding a barbell with an underhand grip.
- **Form:** 
    - Rest your upper arms on the pad and grip the bar with hands shoulder-width apart.
- **Execution:** 
    - Curl the bar up toward your shoulders.
    - Slowly lower it back to the starting position.
- **Breathing:** Exhale as you curl, inhale as you lower the bar.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows on the pad throughout the movement.
- **Range of Motion:** Fully extend your arms at the bottom of each rep.
- **Control:** Avoid swinging the weight or using momentum.
    `
},
{
    "key": "face-pulls",
    "title": "Face Pulls",
    "videoId": "0Po47vvj9g4",
    "sets": "3 to 4 sets of 12–15 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Attach a rope to a cable machine at face height, and grab it with both hands.
- **Form:** 
    - Stand with feet shoulder-width apart, keeping your core tight.
- **Execution:** 
    - Pull the rope toward your face, keeping your elbows high.
    - Squeeze your shoulder blades together at the top, then slowly return to the start.
- **Breathing:** Exhale as you pull, inhale as you release.
    `,
    "pointsToNote": `
- **Elbow Positioning:** Keep your elbows higher than your wrists.
- **Control:** Avoid using momentum; keep the movement slow and controlled.
- **Shoulder Engagement:** Focus on squeezing your shoulder blades at the peak of the movement.
    `
},
{
    "key": "shrugs",
    "title": "Shrugs (Dumbbells or Barbell)",
    "videoId": "_t3lrPI6Ns4",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, holding dumbbells or a barbell at your sides.
- **Form:** 
    - Keep your back straight and core tight.
- **Execution:** 
    - Shrug your shoulders up toward your ears, squeezing at the top.
    - Slowly lower back to the starting position.
- **Breathing:** Exhale as you lift your shoulders, inhale as you lower them.
    `,
    "pointsToNote": `
- **Range of Motion:** Focus on lifting your shoulders without rolling them.
- **Control:** Avoid using your arms to lift the weights.
- **Posture:** Keep your back straight and core engaged.
    `
},
{
    "key": "squats",
    "title": "Squats (Barbell or Bodyweight)",
    "videoId": "Dy28eq2PjcM",
    "sets": "3 to 4 sets of 8–12 reps",
    "caloriesBurned": "80–100",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, with a barbell on your shoulders or hands in front if bodyweight.
- **Form:** 
    - Keep your chest up and core tight.
- **Execution:** 
    - Lower yourself by bending your knees and hips, keeping your back straight.
    - Push through your heels to return to standing.
- **Breathing:** Inhale as you lower, exhale as you stand back up.
    `,
    "pointsToNote": `
- **Knee Alignment:** Make sure your knees track over your toes.
- **Back Stability:** Keep your lower back from rounding.
- **Control:** Lower yourself slowly to avoid injury.
    `
},
{
    "key": "seated-leg-extensions",
    "title": "Seated Leg Extensions",
    "videoId": "Orxowest56U",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Sit on a leg extension machine, with your feet under the padded bar.
- **Form:** 
    - Grip the handles and keep your back against the seat.
- **Execution:** 
    - Extend your legs until they are straight.
    - Slowly lower the weight back to the starting position.
- **Breathing:** Exhale as you lift, inhale as you lower.
    `,
    "pointsToNote": `
- **Control:** Avoid letting the weight slam down between reps.
- **Range of Motion:** Fully extend your legs but avoid locking your knees.
- **Knee Positioning:** Make sure your knees are aligned with the machine’s pivot point.
    `
},
{
    "key": "leg-curls",
    "title": "Leg Curls",
    "videoId": "n5WDXD_mpVY",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Lie on a leg curl machine, with your feet under the padded bar.
- **Form:** 
    - Grip the handles and keep your hips flat on the bench.
- **Execution:** 
    - Curl your legs toward your glutes.
    - Slowly lower back to the starting position.
- **Breathing:** Exhale as you curl, inhale as you lower.
    `,
    "pointsToNote": `
- **Control:** Avoid jerking the weight during the movement.
- **Range of Motion:** Fully curl your legs but avoid hyperextending at the top.
- **Hip Positioning:** Keep your hips on the bench throughout the movement.
    `
},
{
    "key": "seated-calf-raises",
    "title": "Seated Calf Raises",
    "videoId": "1vpso8stntg",
    "sets": "3 to 4 sets of 15–20 reps",
    "caloriesBurned": "20–40",
    "instructions": `
- **Setup:** Sit on a calf raise machine, placing the balls of your feet on the platform.
- **Form:** 
    - Keep your back straight and core tight.
- **Execution:** 
    - Press the weight up by raising your heels.
    - Slowly lower your heels back down.
- **Breathing:** Exhale as you lift your heels, inhale as you lower them.
    `,
    "pointsToNote": `
- **Full Range of Motion:** Allow your heels to drop fully for maximum stretch.
- **Control:** Move in a slow and controlled manner, especially when lowering.
- **Knee Stability:** Keep a slight bend in your knees to reduce strain.
    `
},
{
    "key": "jumping-jacks",
    "title": "Jumping Jacks",
    "videoId": "2CUyDdztieE",
    "sets": "2 to 3 sets of 30–60 seconds",
    "caloriesBurned": "5–10",
    "instructions": `
- **Setup:** Stand upright with your legs together and arms at your sides.
- **Form:** 
    - Jump up, spreading your legs shoulder-width apart while raising your arms above your head.
    - Jump again to return to the starting position.
- **Breathing:** Breathe steadily throughout the movement.
    `,
    "pointsToNote": `
- **Engage Core:** Keep your core tight to maintain balance.
- **Avoid Slouching:** Keep your back straight and shoulders back.
    `
  },
  {
    "key": "high-knees",
    "title": "High Knees",
    "videoId": "FvjmPRU3zn4",
    "sets": "2 to 3 sets of 30–60 seconds",
    "caloriesBurned": "5–10",
    "instructions": `
- **Setup:** Stand tall with your feet hip-width apart.
- **Form:** 
    - Alternate driving your knees toward your chest as quickly as possible.
    - Keep your arms bent and swing them with each knee raise.
- **Breathing:** Inhale as you bring your knee up, exhale as you lower it.
    `,
    "pointsToNote": `
- **Posture:** Keep your chest lifted and avoid leaning forward.
- **Engage Core:** Keep your core engaged to maintain balance.
    `
  },
  {
    "key": "arm-circles",
    "title": "Arm Circles",
    "videoId": "wdsbVT4KzYs",
    "sets": "2 to 3 sets of 30 seconds in each direction",
    "caloriesBurned": "2–5",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart and arms extended straight to the sides.
- **Form:** 
    - Rotate your arms in small circles, gradually increasing the size.
    - Perform circles in both clockwise and counterclockwise directions.
- **Breathing:** Maintain steady breathing throughout the movement.
    `,
    "pointsToNote": `
- **Control:** Avoid swinging arms too fast; focus on smooth, controlled movement.
- **Shoulder Engagement:** Engage your shoulders and avoid shrugging.
    `
  },
  {
    "key": "bodyweight-squats",
    "title": "Bodyweight Squats",
    "videoId": "8uoaYwS6iFM",
    "sets": "2 to 3 sets of 10–15 reps",
    "caloriesBurned": "8–12",
    "instructions": `
- **Setup:** Stand with feet shoulder-width apart, toes slightly turned out.
- **Form:** 
    - Lower your body by bending your knees and pushing your hips back.
    - Keep your chest up and avoid letting your knees go past your toes.
    - Push through your heels to return to the starting position.
- **Breathing:** Inhale as you lower down, exhale as you stand back up.
    `,
    "pointsToNote": `
- **Knee Alignment:** Ensure your knees stay aligned with your toes.
- **Depth:** Lower yourself until your thighs are parallel to the ground, but don’t overdo the depth if it causes discomfort.
    `
  },
  {
    "key": "leg-swings",
    "title": "Leg Swings",
    "videoId": "MWJ36dnb0AM",
    "sets": "2 to 3 sets of 10–15 swings per leg",
    "caloriesBurned": "5–8",
    "instructions": `
- **Setup:** Stand next to a wall or stable surface for support.
- **Form:** 
    - Swing one leg forward and backward in a controlled motion.
    - Keep your upper body upright, and engage your core.
- **Breathing:** Breathe steadily throughout the movement.
    `,
    "pointsToNote": `
- **Control:** Avoid swinging too fast; focus on smooth and controlled movements.
- **Engage Core:** Keep your core engaged to avoid losing balance.
    `
  },
  {
    "key": "face-pulls",
    "title": "Face Pulls",
    "videoId": "0Po47vvj9g4",
    "sets": "3 to 4 sets of 10–12 reps",
    "caloriesBurned": "50–70",
    "instructions": `
- **Setup:** Attach a rope handle to a cable machine at upper-chest height.
- **Form:**
    - Grip the rope with both hands, palms facing inward, and step back so the weights are off the stack.
    - Stand with your feet shoulder-width apart and knees slightly bent.
- **Execution:**
    - Pull the rope toward your face, keeping your elbows high and shoulders back.
    - Pause when the rope reaches your face, squeezing your shoulder blades together.
    - Slowly return to the starting position.
- **Breathing:** Inhale as you pull the rope and exhale as you return to the start.
    `,
    "pointsToNote": `
- **Elbow Position:** Keep elbows above the shoulders throughout the movement.
- **Grip and Control:** Use a neutral grip and avoid jerking the rope.
- **Range of Motion:** Pull until your hands are just in front of your face; do not overextend.
    `
},
{
    "key": "planks",
    "title": "Planks",
    "videoId": "ASdvN_XEl_c",
    "sets": "3 sets of 30–60 seconds",
    "caloriesBurned": "30–50 per set",
    "instructions": `
- **Setup:** Lie face down on the ground and position your elbows directly under your shoulders.
- **Form:**
    - Lift your body off the ground, forming a straight line from head to heels.
    - Engage your core, glutes, and legs to maintain stability.
- **Execution:**
    - Hold this position without letting your hips sag or rise.
- **Breathing:** Maintain steady breathing throughout the hold.
    `,
    "pointsToNote": `
- **Sagging Hips:** Keep your hips aligned with the rest of your body.
- **Neck Position:** Keep your neck neutral by looking down at the floor.
- **Hold Duration:** Start with shorter holds and increase time as you build strength.
    `
},
{
    "key": "hanging-leg-raises",
    "title": "Hanging Leg Raises",
    "videoId": "JB2oyawG9KI",
    "sets": "3 to 4 sets of 10–15 reps",
    "caloriesBurned": "50–80",
    "instructions": `
- **Setup:** Hang from a pull-up bar with your hands slightly wider than shoulder-width apart.
- **Form:**
    - Keep your body straight and legs extended.
    - Engage your core and grip the bar firmly.
- **Execution:**
    - Slowly lift your legs until they are parallel to the ground.
    - Pause briefly at the top, then lower your legs in a controlled manner.
- **Breathing:** Inhale as you lift your legs and exhale as you lower them.
    `,
    "pointsToNote": `
- **Momentum:** Avoid swinging your legs; keep the movement controlled.
- **Core Engagement:** Focus on engaging your core, not your hip flexors.
- **Grip Strength:** Ensure a firm grip to prevent slipping.
    `
},
{
    "key": "russian-twists",
    "title": "Russian Twists",
    "videoId": "DJQGX2J4IVw",
    "sets": "3 to 4 sets of 20 reps (10 per side)",
    "caloriesBurned": "40–60",
    "instructions": `
- **Setup:** Sit on the ground with your knees bent and feet slightly elevated.
- **Form:**
    - Lean back slightly, keeping your back straight and core engaged.
    - Hold a weight or clasp your hands together in front of you.
- **Execution:**
    - Twist your torso to one side, bringing the weight or hands toward the ground.
    - Return to the center and twist to the opposite side.
- **Breathing:** Exhale as you twist and inhale as you return to the center.
    `,
    "pointsToNote": `
- **Back Position:** Keep your back straight and avoid rounding your spine.
- **Twist Depth:** Rotate fully, ensuring your obliques are engaged.
- **Foot Stability:** Keep your feet elevated or grounded based on comfort and skill level.
    `
},
{
    "key": "bicycle-crunches",
    "title": "Bicycle Crunches",
    "videoId": "9FGilxCbdz8",
    "sets": "3 to 4 sets of 15–20 reps per side",
    "caloriesBurned": "40–70",
    "instructions": `
- **Setup:** Lie flat on your back with your hands behind your head and legs extended.
- **Form:**
    - Lift your shoulders off the ground and bring one knee toward your chest.
    - Simultaneously, twist your torso to bring the opposite elbow toward the knee.
- **Execution:**
    - Alternate sides in a pedaling motion, keeping your movements controlled.
- **Breathing:** Exhale as you twist and inhale as you return to the center.
    `,
    "pointsToNote": `
- **Neck Strain:** Avoid pulling on your neck with your hands.
- **Control:** Focus on slow and deliberate movements.
- **Range of Motion:** Ensure your elbow comes close to the opposite knee for maximum effect.
    `
},
{
    "key": "cat-cow-stretch",
    "title": "Cat-Cow Stretch",
    "videoId": "vuyUwtHl694",
    "sets": "2 to 3 sets of 10–15 reps",
    "caloriesBurned": "5–10",
    "instructions": `
- **Setup:** Start on all fours with your wrists directly beneath your shoulders and your knees beneath your hips. Keep your spine neutral and your head aligned with your back.
- **Form:**
    - Inhale and drop your belly towards the floor, lifting your head and tailbone toward the ceiling (this is the "Cow" position).
    - Exhale and round your back, tucking your chin towards your chest and pulling your belly button towards your spine (this is the "Cat" position).
    - Continue moving between these two positions, following your breath.
- **Breathing:** Inhale as you arch your back and look up (Cow), exhale as you round your back and tuck your chin (Cat).
    `,
    "pointsToNote": `
- **Spinal Mobility:** Focus on moving your spine in a fluid, controlled manner to improve flexibility and mobility.
- **Neck Alignment:** Avoid straining your neck; keep your head in line with your spine during both positions.
- **Breathing:** Match the movements with your breath to maximize the stretch and create a rhythm.
    `
}
];

export default workouts;