import User from "../models/User";

export const getUser = async (req, res) => {
    try {
        const userOne = new User("gildong", "gildong@gmail.com");
        const userTwo = new User("minsu", "minsu@gmail.com");
        res.json({ users: [userOne, userTwo] });
    } catch (error) {
        res.status(400).json({ error: { message: error } });
    } finally {
        res.end();
    }
};

export const postUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new User(name, email);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: { message: error } });
    } finally {
        res.end();
    }
};
