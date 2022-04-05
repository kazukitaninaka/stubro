import { useEffect, useState } from 'react';
import { ConsultationApi, ConsultationRequest } from '../api';
import useConsultationDetailsSlice from '../slices/consultationDetails/useConsultationDetailsSlice';
import useUserSlice from '../slices/user/useUserSlice';

export default function useConsultationFetchResult(merchantId: string | undefined) {
    const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const { consultationDetails } = useConsultationDetailsSlice();
    const { user } = useUserSlice();

    useEffect(() => {
        if (!merchantId) return;
        setIsRegistering(true)
        const consultation: ConsultationRequest = {
            mentorId: consultationDetails.mentorId!,
            userId: user.id!,
            desirableDate: consultationDetails.desirableDate,
            message: consultationDetails.message,
        };

        const api = new ConsultationApi();

        // api
        //     .postConsultation(consultation, { headers: { Authorization: `Bearer ${user.token}` } })
        //     .then(() => {
        //         setIsRegisterSuccess(true);
        //         setIsRegistering(false)
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //         setIsRegisterSuccess(false);
        //         setIsRegistering(false)
        //     });
    }, [merchantId]);
    return { isRegisterSuccess, isRegistering };
}
