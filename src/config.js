export default {
  STRIPE_KEY: "pk_test_PjxwV6A0vN3ZeH0nbEKIBsWK00yf0IQNrM",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "note-bucket-coleman"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://k5hwd4msy8.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_iddXII9PN",
    APP_CLIENT_ID: "32chvt2ps1rasempo7v4nu02ct",
    IDENTITY_POOL_ID: "us-west-2:0f7242aa-ca1a-43bb-897f-e67510e9bdec"
  }
};
