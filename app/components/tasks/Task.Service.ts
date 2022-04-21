import Task from './Task.Model'

export const createTask = async ( _userId: string, task: {
    description: string,
    period: 0 | 1 | 2 | 3,
    done?: boolean
}) => {

    const newTask = new Task({_userId, ...task})

    const document = await newTask.save()
    
    return document

}

export const fetchOwnTasks = async ( _userId: string ) => {

    const taskList = await Task.find({ _userId })

    return taskList

}

export const updateTask = async ( _userId: string, _id: string, update: { description: string, done: boolean, periode: 0|1|2|3 } ) => {

    const task = await Task.findOneAndUpdate({ _userId, _id }, update, { new: true })

    return task
}

export default {
    createTask,
    fetchOwnTasks,
    updateTask
}