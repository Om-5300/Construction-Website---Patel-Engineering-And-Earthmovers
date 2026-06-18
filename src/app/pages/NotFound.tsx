import { Home, MoveLeft } from "lucide-react";
import { Link } from "react-router";
import "./NotFound.css";
import { useEffect } from "react";
import { updateSEO } from "../../utils/seo";

export function NotFound() {
  useEffect(() => {
    updateSEO({
      title: "404 - Page Not Found | Patel Engineering & Earthmovers",
      description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    });
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <div className="not-found-divider"></div>
        <h2 className="not-found-title">Page Under Construction?</h2>
        <p className="not-found-text">
          Oops! It seems like the page you're looking for has moved to a different site or is still under construction.
          Let's get you back on track.
        </p>
        <div className="not-found-btns">
          <Link to="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline">
            <MoveLeft size={18} /> Go Back
          </button>
        </div>
      </div>

      {/* Decorative element consistent with construction theme */}
      <div className="construction-icon-bg">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.05">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
