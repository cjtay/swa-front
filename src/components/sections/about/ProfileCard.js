import React, { useState } from "react";
import Image from "gatsby-image";
import ReactMarkdown from "react-markdown";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = ({ member }) => {
  const [showMod, setShowMod] = useState(false);
  const [itemId, setItemId] = useState({});

  const handleShow = id => {
    console.log("ID received", id);
    console.log("showMod: ", showMod);
    console.log("member selected - member", member);
    console.log("itemId set ", itemId);

    setShowMod(!showMod);
    setItemId(member);
  };

  const handleClose = () => {
    console.log("handleClose triggered");
    setShowMod(false);
  };

  const socialIcons = member.social.map((soc, i) => soc.socialicon);
  const socialUrls = member.social.map((soc, i) => soc.socialurl);

  return (
    <>
      <div
        className="relative flex flex-col w-full p-5 overflow-visible rounded-lg shadow-lg cursor-pointer md:w-11/12 md:flex-row md:items-start"
        onClick={() => handleShow(member.id)}
        onKeyDown={() => handleShow(member.id)}
      >
        <div className="p-2 mx-auto md:mr-5 md:w-1/4">
          {member.photo !== null && (
            <Image
              fluid={member.photo.childImageSharp.fluid}
              alt={member.name}
              className="object-cover object-center w-32 h-32 mx-auto rounded-full"
            />
          )}
        </div>
        <div className="justify-between w-full p-2 md:flex md:flex-col ">
          <div className="space-y-5 md:flex md:flex-col ">
            <div className="flex flex-col items-center md:items-start">
              <h2 className=" text-swa-1">{member.name}</h2>
              <p className="mb-2 text-sm text-gray-500">President</p>
              <div className="w-full leading-snug text-gray-700 line-clamp-2">
                <ReactMarkdown source={member.description} />
              </div>
              <button className="mt-2 mb-5 btn-dark ">Read more</button>
            </div>
            <div className="flex justify-center space-x-3 text-2xl sm:mr-auto text-swa-3">
              {socialIcons.map((icon, i) => (
                <div key={i}>
                  {icon === "Facebook" ? (
                    <a
                      href={socialUrls[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  ) : icon === "Instagram" ? (
                    <a
                      href={socialUrls[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  ) : icon === "Twitter" ? (
                    <a
                      href={socialUrls[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  ) : icon === "LinkedIn" ? (
                    <a
                      href={socialUrls[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
        <ProfileInfo
          showMod={showMod}
          member={member}
          itemId={itemId}
          handleClose={handleClose}
          className="absolute"
        />
      </div>
    </>
  );
};

export default ProfileCard;
