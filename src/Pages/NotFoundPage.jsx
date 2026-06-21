import React from "react";
import "./Home.css"
import { Search, SearchAlert } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="empty-state">
      <div className="es-blob es-blob-1"></div>
      <div className="es-blob es-blob-2"></div>
      <div className="es-icon-ring">
        <span>
          <Search size={35} />
        </span>
      </div>
      <h2 className="es-title">No products found!</h2>
      <p className="es-sub">
        "<strong>{query}</strong>" Nothing was found for . Try a different
        spelling.
      </p>

      <div className="es-tags">
        <span className="es-tag tag-purple">Samsung</span>
        <span className="es-tag tag-pink">5G Phone</span>
        <span className="es-tag tag-blue">Mobile</span>
        <span className="es-tag tag-green">Flagship</span>
      </div>
    </div>
  );
}
