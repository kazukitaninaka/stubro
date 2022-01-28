import React, { useEffect } from 'react';
import useConsultationDetailsSlice from '../../slices/consultationDetails/useConsultationDetailsSlice';

export default function PaymentCompleted() {
  const { consultationDetails, setConsultationDetailsInitial } = useConsultationDetailsSlice();
  useEffect(() => {
    return () => {
      // ページを離れる時にpersistantのconsultationDetailsをリセット
      setConsultationDetailsInitial();
    };
  }, []);
  return (
    <div>
      <h2>Payment completed</h2>
      <p>詳細</p>
      <p>メンター名：{consultationDetails.username}</p>
      <p>希望日時：{consultationDetails.desirableDate}</p>
      <p>コメント：{consultationDetails.comments}</p>
      <p>
        メンターと日程を調整の上、決まり次第登録されたメールアドレスに日程とzoomリンクをお送りします。
      </p>
    </div>
  );
}
