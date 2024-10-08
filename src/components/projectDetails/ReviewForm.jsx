import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewForm = () => {
  return (
    <div>
      <div className="mb-6">
        <h6 className="mb-4 text-lg font-semibold text-secondary">Donnez votre évaluation</h6>
        <div className="flex flex-row justify-between items-center mb-3 text-gray-500">
          <span className="font-medium w-20">Qualité</span>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
          </div>
          <span className="font-medium text-gray-700">Exceptionnelle</span>
        </div>
        <div className="flex flex-row justify-between items-center text-gray-500">
          <span className="font-medium w-20">Ponctualité</span>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
          </div>
          <span className="font-medium text-gray-700">Exceptionnelle</span>
        </div>
      </div>
      <div className="mb-8">
        <h6 className="text-lg font-semibold mb-4 text-secondary">Votre avis</h6>
        <textarea
          name="feedback"
          className="w-full h-32 p-4 border rounded mb-4 outline-none bg-background"
          cols="10"
          rows="10"
          placeholder="Écrivez vos commentaires ici..."
        />
        <div className="text-right">
          <button className="bg-secondary border border-secondary hover:bg-white text-white hover:text-secondary text-sm font-semibold px-12 py-3">ENVOYER</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
