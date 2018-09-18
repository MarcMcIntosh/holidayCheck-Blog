// entry file for loading md files;
import FirstHurdle from './FirstHurdle.md';
import SetUp from './SetUp.md';
import BloggedDown from './BloggedDown.md';
import ToDoTimeManagement from './ToDoTimeManagement.md';
import RetrospectTimeManagement from './RetrospectTimeManagement.md';
import AllOnboarded from './AllOnboarded.md';
import PetProjects from './PetProjects.md';
import TDDTFP from './TDDTFP.md';

const posts = {
  '06254b2f-81f9-4917-a398-8605f093c1b5': {
    id: '06254b2f-81f9-4917-a398-8605f093c1b5',
    date: new Date(2018, 8, 3),
    title: 'First Hurdle',
    url: FirstHurdle,
  },
  '317dbab5-cf3a-43a8-a7a9-19b9372eabe9': {
    id: '317dbab5-cf3a-43a8-a7a9-19b9372eabe9',
    date: new Date(2018, 8, 4),
    title: 'Set Up',
    url: SetUp,
  },
  'a7dd9a5c-5ca5-4e4f-833a-647c6415b1ca': {
    id: 'a7dd9a5c-5ca5-4e4f-833a-647c6415b1ca',
    date: new Date(2018, 8, 5),
    title: 'Blogged Down',
    url: BloggedDown,
  },
  '709a024e-1413-4eaf-a623-9ee448ec1f27': {
    id: '709a024e-1413-4eaf-a623-9ee448ec1f27',
    date: new Date(2018, 8, 10),
    title: 'Todo - Time Management',
    url: ToDoTimeManagement,
  },
  'c21379a7-0a75-4f06-aa0a-a659cbccb378': {
    id: 'c21379a7-0a75-4f06-aa0a-a659cbccb378',
    date: new Date(2018, 8, 11),
    title: 'Retrospect - Time Management',
    url: RetrospectTimeManagement,
  },
  'df287b8e-2728-455c-8e36-d5ed8c7f6218': {
    id: 'df287b8e-2728-455c-8e36-d5ed8c7f6218',
    date: new Date(2018, 8, 12),
    title: 'All Onboarded',
    url: AllOnboarded,
  },
  '2996e8e9-a3a1-4e10-92c3-9dade98f4902': {
    id: '2996e8e9-a3a1-4e10-92c3-9dade98f4902',
    date: new Date(2018, 8, 13),
    title: 'The advantages of keeping a small pet (project)',
    url: PetProjects,
  },
  '08d7cb73-1044-433a-a950-35bb7888b0f6': {
    id: '08d7cb73-1044-433a-a950-35bb7888b0f6',
    date: new Date(2018, 8, 14),
    title: 'TDD, TFP, TL;DR',
    url: TDDTFP,
  },
};

export default posts;
