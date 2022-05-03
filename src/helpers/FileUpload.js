export const fileUpload = async(file) =>{
    const cloudUrl = "https://api.Cloudinary.com/v1_1/paolavbm/image/upload"
    const formData = new FormData()
    formData.append('upload_preset', 'porfis')
    formData.append('file', file)

    const resp = await fetch(cloudUrl,{
        method: 'POST',
        body: formData
    })
    const cloudResp = await resp.json()
    return cloudResp.secure_url
}