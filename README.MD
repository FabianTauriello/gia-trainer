### Access

https://gia-trainer.vercel.app/

### v1 stack and functionality:

- React
- Tailwind
- Express js
- Redux / Redux Toolkit / React-Redux for state management
- RTK Query for data fetching and cache management
- Font Awesome for icons

### v2 stack and functionality:

- React
- Tailwind
- Next JS
- TRPC
- React Query / Zustand
- Testing library (e.g. Jest, Cypress)?
- build out feature set (e.g. ability to add friends and compare scores against them)

### Quiz Categories:

1. Reasoning
2. Perceptual Speed
3. Number Speed and Accuracy
4. Word Meaning
5. Spatial Visualisation

### Notes:

- follow the 60-30-10 rule for using color palette. 60% of the view should be a dominant color, 30% should be the secondary color or texture and the last 10% should be an accent
- make sure elements are semantic
- review for duplicate questions
- follow this style guide: https://redux.js.org/style-guide/
- combine names (first and last), and user id to uniquely identify users in the leaderboard
- 'wrapper' components wrap logic around its children. 'containers' simply render its children and contain minimal logic - they are primarily used to prevent code/styling duplication. // TODO still true?

### App Behaviour:

- Quiz attempts are only saved once completed.

### Git branch naming convention:

- feature/ new feature I'm adding or expaning
- bug/ fix for a bug

### TODOs:

- [x] persist auth state to local storage
- [ ] add "buy me a coffee" option
- [ ] fixed background when scrolled to far (background color is white)
- [ ] add sign out functionality
- [ ] work on navbar button options and responsiveness
- [ ] add admin login for question creation/addition to pool of questions
- [ ] consider using TRPC
- [ ] improve visibilty of correct/incorrect answers in review
- [ ] set rules on password characters
- [x] add a "not found" page
- [ ] add datetime to quiz attempt
- [x] make all components use an interface '<ComponentName>Props' to describe the parameters (see CustomButton)
- [ ] consider removing headless ui for Flowbite components
- [ ] add animation between sign-in and sign-up modal states
- [x] detect invalid emails in sign up and change error text to "Email is invalid or already taken"
- [x] rename project to gia-trainer
- [ ] add setting option to hide first and last name from appearing in the leaderboard (only the user id and score will be shown)
- [ ] add section about me as the developer to landing
- [ ] implement forgot password to sign in page
- [ ] add ability to practice categories separately
- [x] change components to use named export instead of default
- [x] rename pages folder to routes?
- [x] rename section reference
- [ ] remove empty classNames (i.e className="")
- [ ] add testing
- [ ] add confetti gun animation for when a user gets a new personal best
- [x] add dashboard page for logged in users
- [x] add ability to review previous quiz attempts? (e.g. /quiz-review/id)
- [x] add sign-in and user authentication
- [x] determine how selected choices will be recorded for questions - selectedChoiceIndex prop in Question type?
- [ ] make use of the timer
- [ ] replace onClickCapture with e.stopPropogation() logic
- [x] pull quiz data from server at beginning of quiz - use RTK Query
- [x] change data.json to hold questions only, and just render description, title etc as regular html?
- [x] get it working with section 1 first
- [ ] add a warning modal/dialog when exiting a quiz (e.g. pressing the back button)
- [ ] add preferences/settings section for toggling things like timer visibility and theme
- [x] create a custom hook for incrementing question index?
- [x] separate sections into completely different components
- [x] consolidate and decide on button types (fix Btn1, CustomButton etc).
- [x] consider adding correctChoiceIndex to a question object to cut down on data (isCorrect will not be needed).
- [ ] validate website against w3 standards (https://validator.w3.org/)

The magic of Redux:

![redux magic animation](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
