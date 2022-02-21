import UserModel from "./User.Model"

const createUser = async (user : {
    username: string,
    password: string
}) => {

    const newUser = new UserModel(user)

    const doc = await newUser.save()

    return doc

}

export default {
    createUser
}