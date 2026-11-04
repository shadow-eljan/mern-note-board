import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import api from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // client side validation.
    if(!title.trim() || !content.trim()){
      toast.error("All fields must be filled.")
      return;
    }

    setLoading(true);
    try{
      await api.post("/notes",{
        title, 
        content
      })
      toast.success("Note Created Successfully.")
      navigate("/"); 
    }catch(error){
      if(error.response.status === 429){
        toast.error("Too many Requests.")
      }else{
        toast.error("Failed to create a note.")
      }
    }finally{
      setLoading(false);
    }
  }
  return (
  <div className='h-full w-auto'>
    <div className="container mx-auto px-4 py-8">
      <div className='max-w-2xl mx-auto'>
        <Link to={"/"} className='btn btn-ghost mb-6'>
          <ArrowLeftIcon className='size-5' /> Back to Notes
        </Link>

        <div className='card border border-base-content/10 bg-base-100 shadow-sm'>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input 
                  type="text" 
                  placeholder='Enter note title' 
                  className='input input-bordered w-full' 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                />
              </div>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea
                  placeholder='Enter note here' 
                  className='textarea textarea-bordered h-32 w-full' 
                  value={content} 
                  onChange={(e) => setContent(e.target.value)} 
                />
              </div>

              <div className='card-actions justify-end'>
                <button type="submit" className='btn btn-primary' disabled={loading}>
                  {loading?"Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default CreatePage;