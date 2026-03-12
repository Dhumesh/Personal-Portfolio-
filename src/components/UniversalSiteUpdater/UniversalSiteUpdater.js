import React from 'react';
import './UniversalSiteUpdater.css';
import video from '../../img/updater.mp4';
import { Link } from 'react-router-dom';

const UniversalSiteUpdater = () => {
    return (
        <div className="updater-container">
            <Link to="/" className="back-btn">&#8592; Back</Link>
            <h1 className="updater-title">Universal Site Updater</h1>
            <p className="updater-desc">
                Universal Page Updater is a PHP-based tool that helps sync and update website files from a local folder to a server without requiring a database. It works on any hosting environment, including shared hosting. The application can scan a local website folder and compare it with server files, marking each file as New, Updated, or Unchanged. New and Updated files are automatically selected for upload, while manual file selection is also supported. The tool ensures that the original folder structure is preserved during upload and provides a simple interface to view and safely replace server files when needed.
            </p>
            <p className="updater-tech">
                <strong>Tools & Technologies:</strong> PHP – Backend file handling, HTML, CSS, JavaScript – Frontend UI. Works locally on XAMPP or any shared hosting.
            </p>
            <div className="video-container">
                <video controls className="updater-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default UniversalSiteUpdater;
