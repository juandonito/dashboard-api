import User from "./User.Model"

const createUser = async (user : {
    username: string,
    password: string
}) => {

    const newUser = new User(user)

    const doc = await newUser.save()

    return doc

}

const findById = async (id: string) => {

    const user = await User.findById(id)

    return user

}

const auth = async (credentials: {
    username: string, 
    password: string
}) => {

    const doc = await User.findOne({ username: credentials.username })

    const isMatch = await doc?.checkPassword(credentials.password)

    if(isMatch) return doc

    return null

}

export default {
    createUser,
    findById,
    auth
}