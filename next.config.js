/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

module.exports = withTM({
  // your custom config goes here
  reactStrictMode: true,
  images: {
    domains: [
      "crestlearn-profile-photos.s3.eu-west-2.amazonaws.com",
      "crestlearn-certificates.s3.eu-west-2.amazonaws.com",
    ], //  TODO: Remove once linked up to the real API
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
});
