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
                const res = await api.getConsultations(user.id!)
                setConsultations(res.data)
            } catch (error) {
                setIsError(true)
            }
        })()
    }, [])

    return { consultations, isError }
}
