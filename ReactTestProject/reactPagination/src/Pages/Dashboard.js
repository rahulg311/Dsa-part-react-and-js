import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-white text-center py-4">
              <h2 className="mb-0">Training Video Dashboard</h2>
            </div>
            <div className="card-body p-5">
              {/* <div className="text-center mb-4">
                <img src="/api/placeholder/400/225" alt="Video thumbnail" className="img-fluid rounded" />
              </div> */}
              <div className="mb-4">
                <h3 className="fs-5 fw-bold mb-3">Video Information</h3>
                <div className="d-flex align-items-center mb-2">
                  <CheckCircle className="text-success me-2" />
                  <span className="fw-semibold">Status:</span>
                  <span className="ms-2 badge bg-success">Complete</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <Clock className="text-primary me-2" />
                  <span className="fw-semibold">Duration:</span>
                  <span className="ms-2">532:898</span>
                </div>
                <div className="d-flex align-items-center">
                  <Clock className="text-warning me-2" />
                  <span className="fw-semibold">Current Time:</span>
                  <span className="ms-2">532:898</span>
                </div>
              </div>
              <div className="d-grid ">
                <button 
                  onClick={() => navigate("/Videos")} 
                  className="btn btn-primary  fs-6 btn-lg d-flex justify-content-center t-1 mt-4"
                >
                  <Play className="me-2 text-center" />
                  <h5 className='fs-6 mt-1'> Start Training Video</h5>
            
                </button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;