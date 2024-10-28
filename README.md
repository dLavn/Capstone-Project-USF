### `API`

The API used is API Ninja. (https://api.api-ninjas.com/v1/exercises)

--------

### `LoginPage Current Features`

- Email and Password input areas & Login button to log in, redirecting to the HomePage
- New User? Sign Up -> button sends you to SignUpPage to create an account
- Saved to Local Storage, PostgreSQL with token / JWT secret key

### `LoginPage Possible Future Features`

- Login with Google -> button authenticates your gmail login
- Login with google redirects you to the HomePage

--------

### `SignUpPage Current Features`

- Text area for Name, Email, and Password
- Sign Up Button that redirects you back to the LoginPage

### `SignUpPage Possible Future Features`

- No new features planned.

--------

### `HomePage Current Features`

- NavBar with links to various pages
- Welcome text

### `HomePage Possible Future Features`

- Widgets on the homepage so that all user interactions takeplace in one screen

--------

### `GoalsPage Current Features`

- Text area to enter the name of the goal, the start date, and the end date
- Add Goal button that saves the goal in local storage and displays it beneath the text areas
- Completed and Remove buttons adjacent to each goal that is added
- Connection to the ProgressPage where added goals are listed in the Current Goals section of the ProgressPage
- Remove button functionality - removes goal from GoalsPage and ProgressPage
- Completed button functionality - removes goal from GoalsPage and moves it from Current Goals to Completed Goals in ProgressPage
- Back to Home button that returns user to the home page
- Saved to local storage

### `GoalsPage Possible Future Features`

- No new features planned.

--------

### `ProgressPage Current Features`

- Four tiles in a gridlike format
- Current Goals tile that lists current goal name, start date, and end date
- Completed Goals tile showing goals that have been completed
- Progress Chart tile showing completed workouts in a bulleted format
- FastFit Completion Chart tile showing how many FastFit games the user has completed each day

### `ProgressPage Possible Future Features`

- General display upgrades.

--------

### `LogWorkoutPage Current Features`

- Text area for Goal name, Duration, and additional notes
- Log Workout button submits workout to the Progress Charts section of ProgressPage for viewing
- Back to Home button that returns user to the home page

### `LogWorkoutPage Possible Future Features`

- No new features planned.

--------

### `FastFitGamePage Current Features`

- Start Workout button begins the workout timer
- Fetches random exercises from an external exercise API
- Gentle animations to make the gameplay attractive
- Back to Home button that returns user to the home page
- Finish FastFit Workout button pops up upon completion
- Clicking the Finish button logs a completion in local storage and displays it in the fastFit Completion Chart section of Progresspage by listing the day and time of completion in Pacific Standard Time
- Clicking the Finish button also redirects you back to the Home page

### `FastFitGamePage Possible Future Features`

- Homemade API with specific exercises that don't require equipment
- Muscle group selection feature to target a specific part of the body
- More animations, such as a countdown to start, a 3 second countdown warning before the next exercise, and an "exercise completed" animation between exercises
- Introduction of a preset "rest/water" exercise for a quick break
- "Finish FastFit Workout" button updates your score in the Leaderboard in your FriendsPage
- Count up by 1 instead of 2
- Save completion in local time instead of just PST

--------

### `FriendsPage Current Features`

- Leaderboard section to display yours and your friend's FastFit scores
- Friend Requests section to display incoming friend requests
- Add a Friend section with text area to input friend's email to request them as a friend
- Add Friend button to submit friend request
- Back to Home button that returns user to the home page

### `FriendsPage Possible Future Features`

- link to progress page displaying your FastFit score in the leaderboard
- Accept/Decline buttons for incoming friend requests

--------

### `SettingsPage Current Features`

- Email shown from LoginPage, saved to local storage
- Change email button
- Password display showing the user's password as asterisks/bullets
- Show Password button that toggles to Hide Password and back, allowing the user to view their password and hide it
- Change Password button
- Account Created section displaying the creation date
- Allow friend requests checkbox
- Delete Account button deleting all information from local storage and returning the user to the LoginPage after an "Are you sure?" pop-up requiring a second confirmation.

### `SettingsPage Possible Future Features`

- Change Email button functionality allowing user to change their email
- Change Password button functionality allowing user to change their password
- Acquiring the account creation date from storage and displaying rather than the default display
- Allow friend requests checkbox selected on should automatically decline all incoming friend requests, while selected off should allow friend requests to pass

--------

### `LogOut Current Features`

- LogOut on the navbar logs the user out and returns the user to the LoginPage

### `LogOut Possible Futures Features`

- No new features planned.