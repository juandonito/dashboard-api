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

export default {
    createTask,
    fetchOwnTasks
}