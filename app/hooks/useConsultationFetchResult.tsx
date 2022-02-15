import { useEffect, useState } from 'react';
import { ConsultationApi, ConsultationRequest } from '../api';
import useConsultationDetailsSlice from '../slices/consultationDetails/useConsultationDetailsSlice';
import useUserSlice from '../slices/user/useUserSlice';

export default function useConsultationFetchResult() {
    const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);
    const { consultationDetails } = useConsultationDetailsSlice();
    const { user } = useUserSlice();
    useEffect(() => {
        const consultation: ConsultationRequest = {
            mentorId: consultationDetails.mentorId!,
            userId: user.id!,
            desirableDate: consultationDetails.desirableDate,
            message: consultationDetails.message,
        };

        const api = new ConsultationApi();
        api
            .postConsultation(consultation)
            .then(() => {
                setIsRegisterSuccess(true);
            })
            .catch((e) => {
                console.log(e);
                setIsRegisterSuccess(false);
            });
    }, []);
    return { isRegisterSuccess };
}
