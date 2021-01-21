// CLOUDiNARY SETUP
var cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: "duajhdher",
    api_key: "222938518964742",
    api_secret: "qQEBIb8PHCj11ZR8azJDswvdcgM"
});

const uploadImages = (imageArray) => {
    const urlArray = []

    imageArray.forEach(image => {
        const { url } = await cloudinary.uploader.upload(image.file)
        urlArray.push(url)
    })

    return urlArray
}

export default uploadImages