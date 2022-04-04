import { getAuth, onAuthStateChanged } from "firebase/auth"
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
        const auth = getAuth()
        onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const token = await firebaseUser.getIdToken()
                api.getConsultations(user.id!, undefined, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    setConsultations(res.data)
                }).catch(() => {
                    setIsError(true)
                })
            } else {
                console.log("no user found")
            }
        })
    }, [])

    return { consultations, isError }
}
