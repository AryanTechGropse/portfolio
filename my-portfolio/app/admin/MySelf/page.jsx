"use client";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Upload, Save, User, FileText, Image as ImageIcon, X } from 'lucide-react';


import { useQuery } from '@tanstack/react-query'
import { getMySelf, updateMySelf } from '../../API_Services/Controllers/MySelf';


const MySelf = () => {
  const [preview, setPreview] = useState(null);


  const { data, isLoading, error } = useQuery({
    queryKey: ['self'],
    queryFn: async () => {
      const res = await getMySelf("6974ca2644f315c73a87a5dc")
      return res
    },
  })

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
    }
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        title: data.data.title,
        description: data.data.description,
      });

      setPreview(data.data.profilePhoto); // if image exists
    }
  }, [data, reset]);

  const onSubmit = async (formData) => {
    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        profilePhoto: preview, // image URL or base64
      };

      await updateMySelf("6974ca2644f315c73a87a5dc", payload);

      alert("Updated successfully ✅");
    } catch (error) {
      console.error("Update failed ❌", error);
      alert("Update failed");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className=""
    >
      <motion.div variants={itemVariants} className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">My Self Management</h1>
        <p className="text-gray-400">Update your personal profile information and background.</p>
        <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Profile Image Section */}
        <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <ImageIcon className="text-blue-500" size={20} />
            <h2 className="text-lg font-semibold text-white">Profile Photo</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full bg-gray-900 border-4 border-gray-700 overflow-hidden flex items-center justify-center relative">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <User size={60} className="text-gray-700" />
                )}
              </div>
              {preview && (
                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="absolute -top-1 -right-1 bg-red-500 text-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex-1 w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:bg-gray-700/30 transition-all hover:border-blue-500 group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="text-gray-500 group-hover:text-blue-500 mb-3 transition-colors" size={28} />
                  <p className="mb-2 text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG or WebP (MAX. 5MB)</p>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariants} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-500" size={20} />
              <h2 className="text-lg font-semibold text-white">General Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Greeting / Title</label>
                <input
                  {...register("title", { required: "Title is required" })}
                  className={`w-full bg-gray-900 border ${errors.title ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  placeholder="e.g. Hi, I'm Aryan Saini"
                />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description / About Me</label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                    minLength: { value: 20, message: "Minimum 20 characters required" }
                  })}
                  rows={6}
                  className={`w-full bg-gray-900 border ${errors.description ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                  placeholder="Write a brief introduction about yourself..."
                />
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex justify-end gap-4 pb-10">
          <button
            type="button"
            className="px-8 py-3 bg-gray-800 text-white rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 transition-all"
          >
            Discard
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-10 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
          >
            <Save size={18} />
            Save Changes
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default MySelf;