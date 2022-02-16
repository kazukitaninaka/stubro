import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { Consultation, ConsultationApi } from "../api"
import useUserSlice from "../slices/user/useUserSlice"

export default function useConsultations() {
    const [consultations, setConsultations] = useState<Consultation[]>([])
    const [isError, setIsError] = useState<boolean>(false)
    const { user, isUserLoggedIn } = useUserSlice()

    useEffect(() => {
        if (!isUserLoggedIn) return
        (async () => {
            const api = new ConsultationApi()
            try {
                const currentUser = getAuth().currentUser
                if (!currentUser) return

                const token = await currentUser.getIdToken()
                const res = await api.getConsultations({ userId: user.id! }, {
                    headers: {
                        Authorization: token
                    }
                })
                setConsultations(res.data)
            } catch (error) {
                setIsError(true)
            }
        })()
    }, [])

    return { consultations, isError }
}
