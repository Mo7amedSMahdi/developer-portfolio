import React, { useState, useEffect } from 'react';

const accordion = ({ folder, isFolder, isActive, accordion }) => {
  const [isActiveState, setIsActiveState] = useState(false);
  useEffect(() => {
    setIsActiveState(isActive);
  }, []);

  const handleClick = () => {
    setIsActiveState(!isActiveState);
  };

  return (
    <div className="accordion flex flex--column">
      {isFolder && (
        <div className="accordion-header flex" onClick={() => handleClick()}>
          <i className={`${(isActiveState && 'ri-arrow-down-s-line') || 'ri-arrow-right-s-line icon--gray'}`} />
          <i className={`ri-folder-3-fill ${folder}`} />
          <p className={`${isActiveState && 'white'}`}>bio</p>
        </div>
      )}
      <div className={`accordion-body ${isActiveState || 'hidden'}`}>
        <ol>
          <li>
            <div className="list-element flex">
              <i className="ri-markdown-fill icon--gray" />
              <p>hight-school</p>
            </div>
          </li>
          <li>
            <div className="list-element flex">
              <i className="ri-markdown-fill icon--gray" />
              <p>hight-school</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default accordion;
