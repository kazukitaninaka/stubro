import PAYPAY from '@paypayopa/paypayopa-sdk-node';
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

PAYPAY.Configure({
  clientId: process.env.NEXT_PUBLIC_PAYPAY_API_KEY,
  clientSecret: process.env.NEXT_PUBLIC_PAYPAY_SECRET,
  merchantId: process.env.NEXT_PUBLIC_PAYPAY_MERCHANT_ID,
  productionMode: false,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userAgent = req.body.userAgent;
  const merchantPaymentId = uuidv4();
  const payload = {
    merchantPaymentId,
    amount: {
      amount: 1,
      currency: 'JPY',
    },
    codeType: 'ORDER_QR',
    orderDescription: "Mune's Favourite Cake",
    isAuthorization: false,
    redirectUrl: 'http://localhost:3000/',
    redirectType: 'WEB_LINK',
    userAgent,
  };
  // Calling the method to create a qr code
  PAYPAY.QRCodeCreate(payload, (response) => {
    console.log(response);
    // Printing if the method call was SUCCESS
    res.status(201).json(JSON.parse(response.BODY));
  });
}
