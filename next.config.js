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
    messagingSenderId:"749072108763",
    appId:"1:749072108763:web:73cb8a5fe8f09f414150fe",
    measurementId:"G-YZES48YEM7",
  },
}

module.exports = envConfig;

