import mongoose from 'mongoose'

export default async (uri: string) => {

    try {

        await mongoose.connect(uri)

        console.log('Database connected')
        
    } catch (error) {
        throw error
    }

}