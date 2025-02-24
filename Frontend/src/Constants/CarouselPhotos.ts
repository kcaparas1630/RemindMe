import scheduleMiss from '../../assets/schedule-miss.svg';
import taskOrganize from '../../assets/task-organize.svg';
import taskDone from '../../assets/task-done.svg';
import emailImg from '../../assets/email.svg';

export const carouselPhotos = [
    {
        id: 1,
        image:scheduleMiss,
        alt: 'Schedule Miss Image',
        heading: 'Never Miss a Schedule or a Task!',
    },
    {
        id: 2,
        image: taskOrganize,
        alt: 'Streamline Task Image',
        heading: 'Organize your task with ease!',
    },
    {
        id: 3,
        image: taskDone,
        alt: 'Task Done Image',
        heading: 'Get things done with RemindMe!',
    },
    {
        id: 4,
        image: emailImg,
        alt: 'Email Image',
        heading: 'RemindMe sends you email notifications, about your incoming tasks!',
    }
    
];
