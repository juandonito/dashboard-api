import mongoose, { Schema, Model } from 'mongoose'

interface ITask {
    _userId: Schema.Types.ObjectId,
    description: string,
    createdAt: Date,
    updatedAt: Date
    done: boolean,
    period: 0 | 1 | 2 | 3
}

interface ITaskDocument extends ITask, Document {}

interface ITaskModel extends Model<ITaskDocument> {}

const TaskSchema = new Schema<ITaskDocument>({
    _userId: { type: Schema.Types.ObjectId , required: true , ref: 'User'},
    description: { type: String, required: true },
    period: { type: Number, required: true },
    done: { type: Boolean, required: true, default: false }
}, { timestamps: true })

const Task = mongoose.model<ITaskDocument, ITaskModel>('Task', TaskSchema)

export default Task