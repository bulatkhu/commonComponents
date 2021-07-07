import React, {useEffect, useState} from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'


const initialCrop = {
  unit: '%',
  width: 30,
  aspect: 10 / 10,
}

const getCroppedImg = (image, crop, fileName) => {
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
  // const base64Image = canvas.toDataURL('image/jpeg');
  // console.log('base64', base64Image)
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) {
        //reject(new Error('Canvas is empty'));
        console.error('Canvas is empty');
        return;
      }
      blob.name = fileName;
      resolve(blob);
    }, 'image/jpeg');
  });
}



function UploadFile () {
  const [avatarSrc, setAvatarSrc] = useState(null)
  const [crop, setCrop] = useState(initialCrop)
  const [croppedImageUrl, setCroppedImageUrl] = useState(null)
  const [refToImage, setRefToImage] = useState(null)

  useEffect(() => {

    if (croppedImageUrl) {

      console.log('croppedImageUrl', croppedImageUrl)

    }

  },[croppedImageUrl])


  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setAvatarSrc(reader.result)
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const makeClientCrop = async crop => {
    if (refToImage && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        refToImage,
        crop,
        'newFile.jpeg'
      );
      setCroppedImageUrl(croppedImageUrl)
    }
  }


  return (
    <div className="App-workplace">
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      {avatarSrc && (
        <div className="img__wrapper">
          <ReactCrop
            src={avatarSrc}
            crop={crop}
            ruleOfThirds
            onImageLoaded={image => setRefToImage(image)}
            onComplete={crop => makeClientCrop(crop)}
            onChange={crop => setCrop(crop)}
          />
        </div>
      )}
      {croppedImageUrl && (
        <div className="img__wrapper">
          <img alt="Crop" style={{maxWidth: '100%', maxHeight: '30vh'}} src={window.URL.createObjectURL(croppedImageUrl)}/>
        </div>
      )}
    </div>
  );
}

export default UploadFile
