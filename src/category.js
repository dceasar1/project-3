import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    axios.get('/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      // Fetch questions for selected category
      axios.get(`/api/categories/${selectedCategoryId}/questions`)
        .then(res => setQuestions(res.data))
        .catch(err => console.error('Error fetching questions:', err));
    }
  }, [selectedCategoryId]);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Categories */}
      <div className="w-1/4 overflow-y-auto bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map(cat => (
            <li
              key={cat._id}
              onClick={() => setSelectedCategoryId(cat._id)}
              className={`cursor-pointer p-2 mb-2 rounded ${
                selectedCategoryId === cat._id ? 'bg-blue-200' : 'hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content - Questions */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedCategoryId ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">Questions</h2>
            {questions.length > 0 ? (
              <ul className="space-y-3">
                {questions.map((q, index) => (
                  <li key={index} className="p-4 bg-white shadow rounded">
                    <h3 className="font-medium">{q.title}</h3>
                    <p className="text-gray-600">{q.body}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No questions in this category.</p>
            )}
          </>
        ) : (
          <p className="text-lg text-gray-600">Select a category to view its questions.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
