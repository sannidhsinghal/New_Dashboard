import React from "react"
import './InMedia.css'
const InMedia = ({ title, itemType, placeholder, required, handleChange}) => (
    <div>
        <label style={{display:"flex", justifyContent:"center", paddingBottom:"5px"}}>{title}</label>
        <div style={{display:"flex", justifyContent:"center",marginBottom:"10px",textAlign:"center !important" }}>
        <input
        id="media"
        type="file"
        // value={title}
        itemType={itemType}
        required={required}
        placeholder={placeholder}
        onChange={handleChange}
        />
        </div>
    </div>
    );
    
    export default InMedia;