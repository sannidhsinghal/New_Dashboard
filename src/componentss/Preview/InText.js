import React from 'react'

const InText = ({ title, itemType, placeholder, required, handleChange}) => (
<div className="InText">
   <h5><b>{title}</b></h5>
    <input
    type="text"
    // value={title}
    itemType={itemType}
    required={required}
    placeholder={placeholder}
    onChange={handleChange}
    disabled
    />
    </div>
);

export default InText;