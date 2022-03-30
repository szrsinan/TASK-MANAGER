import { CREATE_TASK } from "../actions/types";
import { EDIT_TASK } from "../actions/types";
import { REMOVE_TASK } from "../actions/types";


const initialState = [
    {
        id: 1,
        title: "Task Manager",
        description: "Develop Task Manager with React!",
        status: "Completed",
    }, 
    {
        id: 2,
        title: "Front-End",
        description: "Start and Complete Front-End Bootcamp",
        status: "In Progress",
    },
    {
        id: 3,
        title: "Learn UI/UX",
        description: "Take free online course about UI/UX design!",
        status: "Unstarted",
    }, 
    {
        id: 4,
        title: "Learn Figma",
        description: "Learn Figma and make designs!",
        status: "Unstarted",
    },
];

const tasks = (state = {tasks: initialState}, action) => {
    
    const{payload} = action;
    switch(action.type){
        case EDIT_TASK : {
            return {
                tasks: state.tasks.map((task) => {
                    if(task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task;
                }),
            };
        }
        case CREATE_TASK: {
            return{
                tasks: state.tasks.concat(action.payload)
            };
        }
        case REMOVE_TASK: {
            return {
                tasks: state.tasks.filter(task => task.id !==action.id)
            };
        }

        default:
            return state;
    }
};

export default tasks;