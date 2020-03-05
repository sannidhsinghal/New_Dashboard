import React from 'react'

const InMCQ = ({ title,itemType, placeholder,required, handleChange}) =>(
    <div>
        <h5><b>{title}</b></h5>
        <input
        type="checkbox"
        // value={title}
        itemType={itemType}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        disabled
        />
</div>

);
export default InMCQ
