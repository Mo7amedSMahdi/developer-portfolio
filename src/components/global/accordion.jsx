import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../../store/about';

const accordion = ({ folder, isFolder, isActive, accordion }) => {
  const [isActiveState, setIsActiveState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsActiveState(isActive);
  }, []);

  const handleClick = () => {
    setIsActiveState(!isActiveState);
  };

  const handleFileClick = (obj) => {
    dispatch(setActiveTab(obj));
  };

  return (
    <div className="accordion flex flex--column">
      {isFolder && (
        <div className="accordion-header flex" onClick={() => handleClick()}>
          <i className={`${(isActiveState && 'ri-arrow-down-s-line') || 'ri-arrow-right-s-line icon--gray'}`} />
          <i className={`ri-folder-3-fill ${folder}`} />
          <p className={`${isActiveState && 'white'}`}>{accordion.title}</p>
        </div>
      )}
      <div className={`accordion-body ${isActiveState || 'hidden'}`}>
        <ol>
          {accordion.tabs.map((tab) => {
            return (
              <li key={tab.id}>
                <div onClick={() => handleFileClick({ tabId: tab.id, parentId: accordion.id })} className="file-element flex">
                  <i className="ri-markdown-fill icon--gray" />
                  <p>{tab.tabTitle}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default accordion;
