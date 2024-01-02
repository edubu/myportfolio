import React from "react";
import Image from "next/image";

const ProfileImage = ({ imageUrl, altText }) => {
  return (
    <div className="h-32 w-32 md:h-48 md:w-48 overflow-hidden rounded-full border-2 border-gray-300 shadow-lg relative">
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileImage;
