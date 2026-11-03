import { ArrowLeftIcon, LoaderIcon, PenSquareIcon, Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { toast } from 'react-hot-toast';
import api from '../lib/axios';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading]=useState(true);
  const [saving ,setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        if (error.response?.status === 404) {
          toast.error("Note not found.");
        } else {
          toast.error("Failed to load the note.");
        }
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  },[id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields must be filled.");
      return;
    }

    setSaving(true);
    try {
      const res = await api.put(`/notes/${id}`, { title, content });
      setNote(res.data);
      setEditing(false);
      toast.success("Note updated successfully.");
    } catch (error) {
      toast.error("Failed to update the note.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully.");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete the note.");
    }
  };
  
  if(loading){
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10' />
      </div>
    );
  }
  return (
    <div className='min-h-screen bg-base-200'> 
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-between mb-6'>
          <Link to="/" className='btn btn-ghost'>
            <ArrowLeftIcon className='h-5 w-5' />
            Back to Notes
          </Link>
          <div className='flex gap-2'>
            <button className='btn btn-ghost text-primary' onClick={() => setEditing((current) => !current)}>
              <PenSquareIcon className='size-5' />
              {editing ? "Cancel" : "Edit"}
            </button>
            <button className='btn btn-ghost text-error' onClick={handleDelete}>
              <Trash2Icon className='size-5' />
              Delete
            </button>
          </div>
        </div>

        <div className='card mx-auto max-w-2xl border border-base-content/10 bg-base-100 shadow-sm'>
          <div className='card-body'>
            {editing ? (
              <form onSubmit={handleUpdate}>
                <div className='form-control mb-4'>
                  <label className='label' htmlFor='note-title'>Title</label>
                  <input id='note-title' className='input input-bordered w-full' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='form-control mb-4'>
                  <label className='label' htmlFor='note-content'>Content</label>
                  <textarea id='note-content' className='textarea textarea-bordered h-40 w-full' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={saving}>
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            ) : (
              <>
                <h1 className='card-title text-3xl'>{note.title}</h1>
                <p className='whitespace-pre-wrap text-base-content/80'>{note.content}</p>
                <p className='mt-4 text-sm text-base-content/60'>
                  Created {new Date(note.createdAt).toLocaleDateString()}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage;