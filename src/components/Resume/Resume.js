import React from 'react';

const Resume = () => {
  const resumePdfUrl = 'https://docs.google.com/document/d/13pQw8deL8BAnqVJg2eSrdIUzEL4xyu-QjKvHFsBotVM/edit';

  const handleDownload = () => {
    window.open(resumePdfUrl, '_blank');
  };

  return (
    <div className="full-height d-flex justify-content-center">
      <div className="resume-card w-25">
        <div className="card-footer text-center">
          <button className="btn btn-primary" onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
