"use server"

import Promt from "../database/models/prompt.model"
import User from "../database/models/user.model"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"

export async function addPrompt({prompt,answer,userId}:AddImageParams){
    try {
        await connectToDatabase()
        const author = await User.findById(userId)
        if(!author){
            throw new Error("User Not found");
        }
        const newPrompt= await Promt.create({
            prompt,
            answer,
            author:author._id,
        })

        return JSON.parse(JSON.stringify(newPrompt))
    } catch (error) {
        handleError(error)
    }
}

export async function updatePrompt({prompt,answer,userId}:AddImageParams){
    try {
        await connectToDatabase()


        return JSON.parse(JSON.stringify(prompt))
    } catch (error) {
        handleError(error)
    }
}

export async function deletePrompt({prompt,answer,userId}:AddImageParams){
    try {
        await connectToDatabase()

        
        return JSON.parse(JSON.stringify(prompt))
    } catch (error) {
        handleError(error)
    }
}

export async function getPrompt({prompt,answer,userId}:AddImageParams){
    try {
        await connectToDatabase()

        
        return JSON.parse(JSON.stringify(prompt))
    } catch (error) {
        handleError(error)
    }
}