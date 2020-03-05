import React from "react"

const InMedia = ({ title, itemType, placeholder, required, handleChange}) => (
    <div>
        <h5><b>{title}</b></h5>
        <input
        id="media"
        type="file"
        // value={title}
        itemType={itemType}
        required={required}
        placeholder={placeholder}
        onChange={handleChange}
        disabled
        />
        </div>
    
    );
    
    export default InMedia;