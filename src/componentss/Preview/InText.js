import React from 'react'

const InText = ({ title, itemType, placeholder, required, handleChange}) => (
<div>
    <label style={{display:"flex", justifyContent:"center",paddingBottom:"5px"}}>{title}</label>
    <div style={{display:"flex", justifyContent:"center",marginBottom:"10px"}}>
    <input
    type="text"
    // value={title}
    itemType={itemType}
    required={required}
    placeholder={placeholder}
    onChange={handleChange}
    />
    </div>
</div>
);

export default InText;