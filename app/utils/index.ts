import { User } from "firebase/auth";
import { UserApi } from "../api";

export async function getUserIdByUid(user: User): Promise<number | undefined> {
    try {
        const api = new UserApi()
        const token = await user.getIdToken()
        const res = await api.getUserByUid(user.uid, {
            headers:
                { Authorization: `Bearer ${token}` }
        })
        const userId = res.data.id;
        return userId
    } catch (error) {
        console.log(error);
        return undefined
    }
}