import { UserApi } from "../api";

export async function getUserIdByUid(uid: string): Promise<number | undefined> {
    try {
        const api = new UserApi()
        const res = await api.getUserByUid(uid)
        const userId = res.data.id;
        return userId
    } catch (error) {
        console.log(error);
        return undefined
    }
}