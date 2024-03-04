import React from 'react';

function ProfilePic({ src, alt, type }) {
  return (
    <img className={type} src={src} alt={ alt } />
  )
}

export default ProfilePic;