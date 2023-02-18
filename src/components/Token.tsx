import React, { Component, useState } from "react";
import '@components/css/Token.css';

export default function Token(props: {} = {}) {

  const [formData, setFormData] = useState({
    token: ''
  })

  const handleChange = (e: any) => {
      let [name, value] = [e.target.name, e.target.value]
      setFormData({
          ...formData,
          [name]: value
      })
  }

  const submit = () => {
    localStorage.setItem("token", formData.token);
    location.reload();
  }
  
  return (
			<div className="token">
        <div className="form">
          <input 
            type="text" 
            name="token"
            id="token"
            placeholder="Github Developer Token" 
            value={formData.token}
            onChange={handleChange}
          />
          <button type="submit" onClick={submit}>Submit Github token</button>
        </div>
      </div>
  );

}
