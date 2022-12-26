import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { userRequest } from "../requestMethods";
import { useLocation } from 'react-router-dom'
import "./Createimages.css"

function CreateImages() {
  const location  = useLocation()
  const id = location.pathname.split("/")[3]

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("images", images);
  console.log(id)

  //handlde images
  const handleImage = (e) =>{
      const files = Array.from(e.target.files);
      files.forEach(file =>{
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () =>{
              setImages(oldArray => [...oldArray, reader.result ])
          }
      })

  }
   const imagesdata={
    images,
    productid:id
   }
      //submit the form
  const submitForm = async (e) =>{
      setLoading(true);
      e.preventDefault();
      try {
          const {data} = await userRequest.post('/images/add', imagesdata)
          if  (data.success === true){
              setLoading(false);
              setImages([]);
              toast.success('other images uploaded successfully')
          }
          console.log(data);
      } catch (error) {
          console.log(error)
          toast.error(error);
      }

  }


  return (
   
    
    <form onSubmit={submitForm} className=" col-sm-6 offset-3 pt-5 signup_form " encType="multipart/form-data" >

    <div className="form-outline mb-4 label">
        <label className="form-label" htmlFor="form4Example2">More images <span>(Max of 3 products)</span></label>
        <input onChange={handleImage} type="file" id="formupload" name="image" className="form-control" multiple />
        
    </div>
    <img className="img-fluid"  alt="" />
    <button  type="submit" className="btn btn-primary btn-block mb-4 upload">{loading ? "Uploading..." : "Upload Images"}</button>
    
 </form>
    
   
  )
}

export default CreateImages