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
            ? "visible opacity-100  inset-0 z-50 flex items-start justify-center transition-all duration-200 ease-out bg-black bg-opacity-70 fixed overflow-y-auto "
            : "invisible opacity-0  inset-0 z-50 flex items-start justify-center transition-all duration-200 ease-in bg-black bg-opacity-70  fixed overflow-y-auto "
        }
        onClick={handleClose}
        onKeyDown={handleClose}
        onFocus={handleClose}
        role="close menu"
        aria-modal="true"
      >
        <div className="w-11/12 p-5 mt-20 bg-white rounded-lg lg:w-6/12">
          {member.name && (
            <div>
              <h2 className="my-5 text-swa-3">{member.name}</h2>
            </div>
          )}
          {member.description && (
            <>
              <h3 className="pt-2 text-lg font-black text-swa-3">
                Description
              </h3>
              <div className="markdown">
                <ReactMarkdown source={member.description} className="mb-5" />
              </div>
            </>
          )}
          {member.experience && (
            <>
              <h3 className="pt-2 font-bold text-swa-3 ">Experience</h3>
              <div className="markdown">
                <ReactMarkdown source={member.experience} className="mb-5" />
              </div>
            </>
          )}
          {member.contribution && (
            <>
              <h3 className="pt-2 font-bold text-swa-3 ">Contribution</h3>
              <div className="markdown">
                <ReactMarkdown source={member.contribution} className="mb-5 " />
              </div>
            </>
          )}
          {member.aspiration && (
            <>
              <h3 className="pt-2 font-bold text-swa-3 ">Aspiration</h3>
              <div className="markdown">
                <ReactMarkdown source={member.aspiration} className="mb-5 " />
              </div>
            </>
          )}
          <div className="w-full mt-8 btn-dark">close</div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
