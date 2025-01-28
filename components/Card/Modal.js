import React from "react";
import "./Modal.css";
import { IoCloseCircleOutline, IoLogoGithub, IoArrowRedoCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ data, close }) => {
  const { videoUrl, title, body, GithubUrl, ProjectUrl } = data;

  const modalVariants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, scale: 0.9 },
  };

  const bodyVariants = {
    open: { opacity: 1, y: "0", transition: { duration: 0.5 } },
    closed: { opacity: 0, y: "20vh" },
  };
  const emsurl='/videos/EMS_DEMO.webm'
  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      initial="closed"
      animate="open"
      exit="closed"
      onClick={(e) => e.stopPropagation()}
    >
      {/* YouTube Video Embed */}
      <motion.div className="modal__video-wrapper">
        <iframe
          width="100%"
          height="200px" /* You can adjust the height as needed */
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          
        ></iframe>
      </motion.div>

      {/* Information Section */}
      <motion.div className="modal__info">
        <motion.div className="modal__row">
          <span className="modal__title">{title}</span>
        </motion.div>

        {/* Body Section with Animation */}
        <motion.div className="modal__row" variants={bodyVariants}>
          <span className="modal__body">{body}</span>
        </motion.div>

        {/* GitHub Logo and Project Link */}
        <motion.div className="modal__github flex gap-20">
          <a
            href={GithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal__github-link"
          >
            <IoLogoGithub size={60} style={{ color: "black", cursor: "pointer" }} />
          </a>
          <a
            href={ProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal__link-icon"
          >
            <IoArrowRedoCircleOutline size={60} style={{ color: "black", cursor: "pointer" }} />
          </a>
        </motion.div>
      </motion.div>

      {/* Close Button */}
      <motion.button
        className="modal__close-wrapper"
        whileHover={{ scale: 1.2 }}
        onClick={close}
      >
        <IoCloseCircleOutline className="modal__close-icon" />
      </motion.button>
    </motion.div>
  );
};

export default Modal;
