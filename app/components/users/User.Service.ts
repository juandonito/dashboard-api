import UserModel from "./User.Model"

const createUser = async (user : {
    username: string,
    password: string
}) => {

    const newUser = new UserModel(user)

    const doc = await newUser.save()

    return doc

}

const findById = async (id: string) => {

    const user = await UserModel.findById(id)

    return user

}

export default {
    createUser,
    findById
}