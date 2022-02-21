import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

interface User {
    username: string,
    password: string
}

const UserSchema = new Schema<User>({
    username: { type: String, required: true },
    password: { type: String, required: true, select: false }
})

UserSchema.pre('save', async function() {

    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash

})

const UserModel = model<User>('User', UserSchema)

export default UserModel