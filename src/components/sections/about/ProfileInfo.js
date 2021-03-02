import React from "react";

import ReactMarkdown from "react-markdown";

const ProfileInfo = ({ showMod, member, itemId, handleClose }) => {
  console.log("modal member info", member);
  console.log("modal itemId info", itemId);
  console.log("modal showMod ", showMod);
  return (
    <>
      {/* ------ MODAL ------- */}

      <div
        className={
          showMod
            ? "visible opacity-100  inset-0 z-10 flex items-start justify-center transition-all duration-200 ease-out bg-black bg-opacity-70 fixed overflow-y-auto "
            : "invisible opacity-0  inset-0 z-10 flex items-start justify-center transition-all duration-200 ease-in bg-black bg-opacity-70  fixed overflow-y-auto "
        }
        onClick={handleClose}
      >
        <div className="w-11/12 p-5 mt-20 bg-white divide-y divide-gray-200 rounded-lg xl:w-6/12 text-swa-1">
          {member.name && (
            <>
              <h2 className="my-5">{member.name}</h2>
            </>
          )}
          {member.description && (
            <>
              <h4>Description</h4>
              <ReactMarkdown source={member.description} className="mb-5" />
            </>
          )}
          {member.experience && (
            <>
              <h4>Experience</h4>

              <ReactMarkdown source={member.experience} className="mb-5" />
            </>
          )}
          {member.contribution && (
            <>
              <h4>Contribution</h4>
              <ReactMarkdown source={member.contribution} className="mb-5 " />
            </>
          )}
          {member.aspiration && (
            <>
              <h4>Aspiration</h4>
              <ReactMarkdown source={member.aspiration} className="mb-5 " />
            </>
          )}
          <button className="w-full mt-8 btn-dark">close</button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
