import React from 'react'

const InMCQ = ({ title,itemType, placeholder,required, handleChange}) =>(
    <div>
        <label style={{display:"flex", justifyContent:"center", paddingBottom:"5px"}}>{title}</label><br/>
        <div style={{display:"flex", justifyContent:"center", marginBottom:"10px"}}>
        <input
        type="checkbox"
        // value={title}
        itemType={itemType}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        />
</div>
        </div>
);
export default InMCQ
