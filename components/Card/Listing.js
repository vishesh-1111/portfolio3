import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
   const {
    imageUrl,
    GithubUrl,
    ProjectUrl,
    title,
    description,
    tags,
  } = data;

  return (
    <motion.div className="listing" 
    onClick={open} whileHover={{ scale: 1.1 }}
    >
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
            <div className="listing__type">CRUD</div>
          <div className="listing__row">
            <span className="listing__price">{title}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{description}</span>
          </div>
      
          </div>
      </div>
    </motion.div>
  );
};

export default Listing;
