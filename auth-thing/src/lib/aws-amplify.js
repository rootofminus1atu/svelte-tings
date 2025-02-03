import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'eu-west-1_rbdc3bxva',
      userPoolClientId: '4i8lgvtottsekmstkd7v9pipdp',
      // loginWith: {
      //   oauth: {
      //     domain: 'your-cognito-domain.auth.us-east-1.amazoncognito.com',
      //     scopes: ['openid', 'email', 'profile'],
      //     redirectSignIn: ['http://localhost:5173/'],
      //     redirectSignOut: ['http://localhost:5173/'],
      //     responseType: 'code'
      //   }
      // }
    }
  },
  API: {
    REST: {
      mockApi: {
        endpoint: 'https://m6uwezojqk.execute-api.eu-west-1.amazonaws.com/prod',
        region: 'eu-west-1'
      },
      scrapeApi: {
        endpoint: 'https://su577lt3di.execute-api.eu-west-1.amazonaws.com/v1',
        region: 'eu-west-1'
      }
    }
  }
});