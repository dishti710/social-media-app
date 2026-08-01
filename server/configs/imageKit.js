import ImageKit from "imagekit";

console.log("IK Public:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("IK Private:", process.env.IMAGEKIT_PRIVATE_KEY);
console.log("IK Endpoint:", process.env.IMAGEKIT_URL_ENDPOINT);
var imagekit= new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

export default imagekit;