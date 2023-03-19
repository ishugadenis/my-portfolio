import PremiumImage from '../assets/images/projImages/premium.png';
import WorkoutGuide from '../assets/images/projImages/workout-helper.png'
const projects = [{
        name: 'Premium Fitness App',
        id: '001',
        image: PremiumImage,
        about: 'I came up with this app in order to be able to guide clients during their gym session. Clients get to sign in and can be able to:',
        functionalities: [
            'Follow workout tutorial guides',
            'Make weekly workout Routine',
            'Keep track of their gymprogress'
        ]
    },
    {
        name: 'Fitness and exercise App',
        id: '002',
        image: WorkoutGuide,
        about: 'This is a website that provides all the possible exercises a user would love to know about or practice. The exercises are fetched from an online rapid Api called "ExerciseDb". I was ebale to develop this project with help from an online You tube Tutorial by Javascript Mastery. The main purose of the app is to:',
        functionalities: [
            'Enable use search any workout',
            ' Enable user to view  related workouts to the specified on in youtube',
            'Allow user to view workouts by body parts'
        ]
    },

];
export function getProjects() {
    return projects
}

export function getProject(id) {
    return projects.find(p => p.id === id);
}