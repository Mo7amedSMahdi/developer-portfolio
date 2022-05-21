import React from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './about.css';
import Accordion from '../global/accordion';

const about = () => {
  const personalInfo = [
    {
      title: 'bio',
      files: [
        {
          fileName: 'bio-informaion',
        },
      ],
      iconColor: 'icon--red',
      isFolder: true,
    },
    {
      title: 'education',
      files: [
        {
          fileName: 'university',
        },
      ],
      iconColor: 'icon--green',
      isFolder: true,
    },
    {
      title: 'intersets',
      files: [
        {
          fileName: 'my-interests',
        },
      ],
      iconColor: 'icon--blue',
      isFolder: true,
    },
    {
      title: 'experience',
      files: [
        {
          fileName: 'work-experience',
        },
        {
          fileName: 'bootcamps',
        },
      ],
      iconColor: 'icon--lavender',
      isFolder: true,
    },
  ];

  const contact = [
    {
      files: [
        {
          fileName: 'mo7amed.salah@outlook.com',
        },
        {
          fileName: '+964 770 208 4329',
        },
      ],
      isFolder: false,
    },
  ];
  return (
    //   const code = `export const getMissions = () => async (dispatch, getState) => {
    //   const { lastFetch } = getState().missions;

    //   const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
    //   if (diffInMinutes < 10) return;
    //   dispatch(
    //     apiCallBegan({
    //       url,
    //       onStart: missionsRequested.type,
    //       onSuccess: missionsRecieved.type,
    //       onError: missionsRequestFailed.type,
    //     }),
    //   );
    // `;
    // <SyntaxHighlighter language="javascript" style={nightOwl}>
    //   {code}
    // </SyntaxHighlighter>
    <section className="about flex">
      <div className="side-container flex">
        <div className="side-icons flex flex--column">
          <i className="ri-terminal-box-fill" />
          <i className="ri-user-4-fill" />
          <i className="ri-gamepad-fill" />
        </div>
        <div className="explorer flex flex--column">
          <div className="explorer-section flex flex--column">
            <div className="explorer-title flex">
              <i className="ri-arrow-down-s-line" />
              <p>personal-info</p>
            </div>
            <div className="side-accordions flex flex--column">
              {personalInfo.map((accordion, index) => {
                <Accordion folder={accordion.iconColor} isActive={index === 0 ? true : false} isFolder={true} accordion={accordion.files} />;
              })}

              <Accordion folder="icon--green" isFolder={true} />
              <Accordion folder="icon--blue" isFolder={true} />
            </div>
          </div>
          <div className="explorer-section flex flex--column">
            <div className="explorer-title flex">
              <i className="ri-arrow-down-s-line" />
              <p>contacts</p>
            </div>
            <div className="side-accordions flex flex--column">
              <Accordion folder="icon--red" isFolder={false} isActive={true} accordion={contact.files} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
