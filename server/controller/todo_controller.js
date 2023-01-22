// import { adNewTodo } from "../../client/src/redux/actions.js";
import Todo from "../model/Todo.js";

export const addTodo = async (request, response) => {
    // console.log(request.body);
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}