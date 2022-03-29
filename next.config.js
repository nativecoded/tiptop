/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
envConfig = {env:{
    apiKey:"AIzaSyCXYmkv_zOQfGD4xmnLbfdng08P8_84zAY",
    authDomain:"jydago.firebaseapp.com",
    projectId:"jydago",
    storageBucket:"jydago.appspot.com",
    messagingSenderId:"",
    appId:"",
    measurementId:"",
  },
}

