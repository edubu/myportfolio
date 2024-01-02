import React from "react";

const ProfileImage = ({ imageUrl, altText }) => {
  return (
    <div className="h-32 w-32 md:h-48 md:w-48 overflow-hidden rounded-full border-2 border-gray-300 shadow-lg">
      <img
        src={imageUrl}
        alt={altText}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
