import React, { useState } from 'react';
import { db, storage } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../context/authContext';
import { toast } from 'react-toastify';

const TestForm = () => {
    const { user } = UserAuth();
  const [formData, setFormData] = useState({
    coverImage: null,
    datasetFile: null,
    title: '',
    description: '',
    country: '',
  });
  const [perc, setPerc] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

const { coverImage, datasetFile, title, description, country } = formData;
  // Handles changes to text inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles changes to file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleUpload = async () => {
    if (!formData.coverImage || !formData.datasetFile || !formData.title || !formData.description || !formData.country || !user) return;

    setIsUploading(true);
    const coverImageRef = ref(storage, `coverImages/${formData.coverImage.name}`);
    const datasetFileRef = ref(storage, `datasets/${formData.datasetFile.name}`);

    // Upload cover image
    const uploadTaskCoverImage = uploadBytesResumable(coverImageRef, formData.coverImage);
    uploadTaskCoverImage.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done for cover image');
        setPerc(progress);
      }, 
      (error) => {
        console.error("Error uploading cover image: ", error);
        setIsUploading(false);
      }, 
      () => {
        getDownloadURL(uploadTaskCoverImage.snapshot.ref).then(async (coverImageUrl) => {
          
          // Upload dataset file
          const uploadTaskDatasetFile = uploadBytesResumable(datasetFileRef, formData.datasetFile);
          uploadTaskDatasetFile.on('state_changed', 
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done for dataset file');
              setPerc(progress);
            }, 
            (error) => {
              console.error("Error uploading dataset file: ", error);
              setIsUploading(false);
            }, 
            () => {
              getDownloadURL(uploadTaskDatasetFile.snapshot.ref).then(async (datasetFileUrl) => {
                // Save dataset details to Firestore
              
                await addDoc(collection(db, "datasets"), {
                  title: formData.title,
                 description:   formData.description,
                    country: formData.country,
                    coverImageUrl: coverImageUrl,
                    datasetFileUrl: datasetFileUrl,
                      userUid: user.uid,
                 
                
                });
toast.success("Dataset uploaded successfully!");
setFormData({
    coverImage: null,
    datasetFile: null,
    title: '',
    description: '',
    country: '',
    });
                alert("Dataset uploaded successfully!");
                setIsUploading(false);
              });
            }
          );
        });
      }
    );
  };

  return (
    <div>
     
      <input type="file" name="coverImage" onChange={handleFileChange} />

      <input type="file" name="datasetFile" onChange={handleFileChange}  />
      <input type="text" name="title" value={formData.title} onChange={handleChange}  placeholder="Title" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country of Origin" />
      <button onClick={handleUpload} disabled={isUploading}>Upload Dataset</button>
      {isUploading && <p>Uploading: {perc.toFixed(2)}%</p>}
    </div>
  );
};

export default TestForm;