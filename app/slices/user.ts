import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string | null;
  email: string;
  // 追加されるかも
};

const initialState: User = {
  id: null,
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return {
        id: action.payload.id,
        email: action.payload.email,
      };
    },
    signOut: () => {
      return initialState;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice;

const a = {
  uid: "FXVjCZv8QBVNBrnEbCGwjtC2aeo1",
  email: "a@gmail.com",
  emailVerified: false,
  isAnonymous: false,
  providerData: [
    {
      providerId: "password",
      uid: "a@gmail.com",
      displayName: null,
      email: "a@gmail.com",
      phoneNumber: null,
      photoURL: null,
    },
  ],
  stsTokenManager: {
    refreshToken:
      "AFxQ4_q3aE3nN6nJeTnVCRz61hVDxdytBZpCJ2gfAYA16KawG8Ku7hRksqk7dy8bnE6OLKdwPeWwUasCJBpjNZ4ZSJjX2xMM4RNL5YBoHzcnAKmmpNAyqkd-gZXilTbl3OA8Bi-dREu-pU1z9jrD9xygWb98P-x8R1q6jt8c3lDCfOTcLswkYLhl_4ZMV-QQnV8I8p-O1ZbQ",
    accessToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhYTE0OGNkMDcyOGUzMDNkMzI2ZGU1NjBhMzVmYjFiYTMyYTUxNDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3R1YnJvLTdkMjNhIiwiYXVkIjoic3R1YnJvLTdkMjNhIiwiYXV0aF90aW1lIjoxNjQzMDEwNTkxLCJ1c2VyX2lkIjoiRlhWakNadjhRQlZOQnJuRWJDR3dqdEMyYWVvMSIsInN1YiI6IkZYVmpDWnY4UUJWTkJybkViQ0d3anRDMmFlbzEiLCJpYXQiOjE2NDMwMTA1OTEsImV4cCI6MTY0MzAxNDE5MSwiZW1haWwiOiJhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.0h52Y9Mnn2JAQXjx-h6lB5PKeFhXrzoDlOwuSuC74zqaEZ7cZnCeToWJUEQ31jGRYYMP85f8POD0dssk1zUHx29B1FkSN5lxUSb_ej5wAYg70Mfo1ROgKAYyFl7KWf1jOmOasBVCKZOpvbb8St7BYdYklSq7ipsFF4NZlpRKU11yM6DJW3bj8AWTk81JjFyx8P56OuryibHTruZYSIuDylIq5rcc0G2Gaghf28yHlSV3NXRXbunMPJLdQIU-NQC_weYh41NDtZPFGbYXtf_y94Ve4gaLVtoOR-010GiLSmlBCJJsyG5GP5N56dNSiTzvML8Ouwon-tZThXjtQ_-LSQ",
    expirationTime: 1643014189014,
  },
  createdAt: "1643010223844",
  lastLoginAt: "1643010591067",
  apiKey: "AIzaSyCqjS0eSw5VEGlW2g21wXLH3x-egbyyF0E",
  appName: "[DEFAULT]",
};
