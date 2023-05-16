import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import useAxiosPrivate from '../hooks/useAxios';
import { useLocation, useNavigate } from 'react-router-dom'
import "./Createimages.css"

function CreateImages() {
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate();
  const location  = useLocation();
  const id = location.pathname.split("/")[2]

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
    //   setLoading(true);
      e.preventDefault();
      const uploadimg = toast.loading("Loading...");
      try {
          const {data} = await axiosPrivate.post('/images', imagesdata)
          if  (data.success === true){
              setLoading(false);
              setImages([]);
              toast.success("additional images created!!", {
                id: uploadimg,
              });
          }
          console.log(data);
      } catch (error) {
          console.log(error)
          toast.error(error);
      }

  }


  return (
    <div className="add__image">
      <form
        onSubmit={submitForm}
        className=" col-sm-6 mx-3 pt-5 signup_form "
        encType="multipart/form-data"
      >
        <span className="goback" onClick={() => navigate(-1)}>
          Go Back
        </span>
        <div className="form-outline mb-4 label">
          <label className="form-label" htmlFor="form4Example2">
            More images <span>(Max of 3 products)</span>
          </label>
          <input
            onChange={handleImage}
            type="file"
            id="formupload"
            name="image"
            className="form-control"
            multiple
          />
        </div>
        <img className="img-fluid" alt="" />
        <button type="submit" className="btn btn-block mb-4 upload">
          {loading ? "Uploading..." : "Upload Images"}
        </button>
      </form>
    </div>
  );
}

export default CreateImages