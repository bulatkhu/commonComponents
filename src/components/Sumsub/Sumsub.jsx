import React, {useEffect} from 'react'
import snsWebSdk from '@sumsub/websdk'
import crypto from 'crypto'
// import jwt from 'jsonwebtoken'
import axios from 'axios'
// const axios = require('axios');
// const crypto = require('crypto');
// const fs = require('fs');
// const FormData = require('form-data');

// const proxy = require('http-proxy-middleware');
//
// module.exports = function (app) {
//   app.use(proxy('/api', {
//     target: 'http://www.api.com',
//     logLevel: 'debug',
//     changeOrigin: true
//   }));
// };

const getTimestamp = () => Math.floor(Date.now() / 1000)


// These parameters should be used for all requests
// const SUMSUB_APP_TOKEN = 'tst:MoTRKNTF0AIaN1WUnJ7KkjwA'; // Example: tst:uY0CgwELmgUAEyl4hNWxLngb.0WSeQeiYny4WEqmAALEAiK2qTC96fBad
const SUMSUB_APP_TOKEN = 'tst:uxpfgjiAHmrTJ8kvqxEwQ1Kq.rGf40IZhi05F0B66sRynHns3vxaYYyqS'; // Example: tst:uY0CgwELmgUAEyl4hNWxLngb.0WSeQeiYny4WEqmAALEAiK2qTC96fBad
const SUMSUB_SECRET_KEY = 'Ndj9Asbx4tZoGNhMrkn6vVOBZohdPn5S'; // Example: Hej2ch71kG2kTd1iIUDZFNsO5C1lh5Gq
const SUMSUB_BASE_URL = 'https://test-api.sumsub.com'; // Please don't forget to change when switching to production

var config = {};
config.baseURL = SUMSUB_BASE_URL;

async function createAccessToken(externalUserId, ttlInSecs = 600) {
  console.log('Creating an access token for initializng SDK...');

  const signature = createSignature(config)

  // console.log('signature', signature)

  const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-App-Token': SUMSUB_APP_TOKEN,
    ...signature,
  };

  try {
    return await axios.post(`${SUMSUB_BASE_URL}`, {
      userId: externalUserId,
      ttlInSecs,
    }, {
      headers,
    })
  } catch (e) {
    return e.response?.data
  }
  // const method = 'post';
  // const url = `/resources/accessTokens?userId=${externalUserId}&ttlInSecs=${ttlInSecs}`;
  //
  //
  //
  // config.method = method;
  // config.url = url;
  // config.headers = headers;
  // config.data = null;
  //
  // return config;
}

function createSignature(config) {
  console.log('Creating a signature for the request...');

  console.log('crypto', crypto)
  config.method = 'post'
  const ts = getTimestamp();
  const signature = crypto.createHmac('sha256', SUMSUB_SECRET_KEY);
  signature.update(ts + config.method.toUpperCase() + config.url);

  if (config.data instanceof FormData) {
    signature.update(config.data.getBuffer());
  } else if (config.data) {
    signature.update(config.data);
  }

  const headers = {}

  headers['X-App-Access-Ts'] = ts;
  headers['X-App-Access-Sig'] = signature.digest('hex');

  return headers;
}

function createApplicant(externalUserId) {
  console.log("Creating an applicant...");

  var method = 'post';
  var url = 'http://localhost:3000/sumsub/resources/applicants?levelName=basic-kyc-level';
  var ts = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac('sha256', SUMSUB_SECRET_KEY);
  signature.update(ts + method.toUpperCase() + '/resources/applicants?levelName=basic-kyc-level');
  var body = {
    externalUserId: externalUserId
  };

  if (config.data instanceof FormData) {
    signature.update(config.data.getBuffer());
  } else if (config.data) {
    signature.update(config.data);
  }

  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-App-Token': SUMSUB_APP_TOKEN,
    'X-App-Access-Ts': ts,
    'X-App-Access-Sig': signature.digest('hex'),
  };

  config.method = method;
  config.url = url;
  config.headers = headers;
  config.data = JSON.stringify(body);

  return config;
}

// function createApplicant(externalUserId) {
//   console.log('Creating an applicant...');
//
//   let method = 'post';
//   let url = '/sumsub/resources/applicants?levelName=basic-kyc-level';
//   let ts = Math.floor(Date.now() / 1000);
//
//   let body = {
//     externalUserId: externalUserId
//   };
//
//   let headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'X-App-Token': SUMSUB_APP_TOKEN,
//     'X-App-Access-Ts': ts,
//   };
//
//   config.method = method;
//   config.url = url;
//   config.headers = headers;
//   config.data = JSON.stringify(body);
//
//   return config;
// }

const externalUserId = () => 'random-JSToken-' + Math.random().toString(36).substr(2, 9);

const Sumsub = () => {

  function launchWebSdk(apiUrl, flowName, accessToken, applicantEmail, applicantPhone, customI18nMessages) {
    let snsWebSdkInstance = snsWebSdk.Builder(apiUrl, flowName)
      .withAccessToken(
        accessToken,
        async (newAccessTokenCallback) => {
          // Access token expired
          // get a new one and pass it to the callback to re-initiate the WebSDK
          // let newAccessToken = await createAccessToken(externalUserId,2000)// get a new token from your backend
          // console.log('new token', newAccessToken)
          newAccessTokenCallback(accessToken)
        }
      )
      .withConf({
        lang: 'en',
        email: applicantEmail,
        phone: applicantPhone,
        i18n: customI18nMessages,
        onMessage: (type, payload) => {
          // see below what kind of messages the WebSDK generates
          console.log('WebSDK onMessage', type, payload)
        },
        uiConf: {
          // customCss: "https://url.com/styles.css"
          // URL to css file in case you need change it dynamically from the code
          // the similar setting at Applicant flow will rewrite customCss
          // you may also use to pass string with plain styles `customCssStr:`
        },
        onError: (error) => {
          console.error('WebSDK onError', error)
        },
      })
      .build();

    // you are ready to go:
    // just launch the WebSDK by providing the container element for it
    snsWebSdkInstance.launch('#sumsub-websdk-container')
  }

  const asyncFunction = async () => {
    try {
      // const res = await axios(createApplicant(externalUserId))
      const data = {
        externalUserId,
      }
      const ts = Math.floor(Date.now() / 1000);
      console.log('ts', ts)
      const signature = crypto.createHmac('sha256', SUMSUB_SECRET_KEY);
      signature.update(ts + "POST".toUpperCase() + '/resources/applicants?levelName=basic-kyc');

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-App-Token': SUMSUB_APP_TOKEN,
        'X-App-Access-Ts': ts,
        'X-App-Access-Sig': signature.digest('hex'),
      };

      if (data instanceof FormData) {
        signature.update(config.data.getBuffer());
      } else if (config.data) {
        signature.update(config.data);
      }
      // if (headers) {
      //   signature.update(headers);
      // }
      const res = await axios.post(`/sumsub/resources/applicants?levelName=basic-kyc`, data, {
        headers,
      })
      console.log('res', res.data)
    } catch (e) {
      console.log('err', e)
    }
    // launchWebSdk(SUMSUB_BASE_URL, 'basic-kyc', accessToken)
  }

  return (
    <div>
      <h3>Sumsub</h3>
      <button onClick={asyncFunction}>upload file</button>
      <div id="sumsub-websdk-container"/>

    </div>
  )
}

export default Sumsub