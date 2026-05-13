import { api } from './api';

const uploadService = {
  /**
   * Upload a file (image or document)
   * @param {File} file - The file to upload
   * @returns {Promise<{success: boolean, url: string, fileName: string}>}
   */
  uploadFile: async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('upload', formData);

      return response;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Upload failed';
      throw new Error(errorMessage);
    }
  },
};

export default uploadService;
