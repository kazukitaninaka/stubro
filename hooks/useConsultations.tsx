import { useEffect, useState } from "react"
import { Consultation, ConsultationApi } from "../api"
import useUserSlice from "../slices/user/useUserSlice"

export default function useConsultations() {
    const [consultations, setConsultations] = useState<Consultation[]>([])
    const [isError, setIsError] = useState<boolean>(false)
    const { user, isUserLoggedIn } = useUserSlice()

    useEffect(() => {
        if (!isUserLoggedIn) return
        const api = new ConsultationApi()
        api.getConsultations(user.id!, undefined, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then((res) => {
            setConsultations(res.data)
        }).catch(() => {
            setIsError(true)
        })
    }, [])

    return { consultations, isError }
}
