import mongoose, { Schema, Model } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
    username: string,
    password: string
}

interface IUserDocument extends IUser, Document {
    checkPassword: (password: string) => Promise<void>
}

interface IUserModel extends Model<IUserDocument> {

}

const UserSchema = new Schema<IUserDocument>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
})

UserSchema.pre('save', async function() {

    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash

})

UserSchema.methods.checkPassword = async function(password: string) {

    const isMatch = await bcrypt.compare(password, this.password)

    return isMatch

}

const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema)

export default User