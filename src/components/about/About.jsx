import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './about.css';
import Accordion from '../global/accordion';
import CodeSnippet from '../global/codeSnippet';
import useWindowDimensions from '../global/useWindowDimensions';

const about = () => {
  const about = useSelector((state) => state.aboutReducer);

  const code = `/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`;

  return (
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
              {about.personalInfo.map((accordion, index) => {
                return (
                  <Accordion
                    key={accordion.id}
                    folder={accordion.iconColor}
                    isActive={index === 0 ? true : false}
                    isFolder={accordion.isFolder}
                    accordion={accordion}
                  />
                );
              })}
            </div>
          </div>
          <div className="explorer-section flex flex--column">
            <div className="explorer-title flex">
              <i className="ri-arrow-down-s-line" />
              <p>contacts</p>
            </div>
            <div className="side-accordions flex flex--column">
              <Accordion isFolder={about.contactInfo.isFolder} isActive={true} accordion={about.contactInfo} />
            </div>
          </div>
        </div>
      </div>
      <div className="showcase flex">
        <div className="about-body flex flex--column">
          <div className="body-title flex">
            <p>{about.activeTab.tabTitle}</p>
            <i className="ri-close-fill icon--gray" />
          </div>
          {useWindowDimensions().width > 768 ? (
            <SyntaxHighlighter language="javascript" style={nightOwl} showLineNumbers={true}>
              {about.activeTab.description}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter language="javascript" style={nightOwl} showLineNumbers={false} wrapLines={true} wrapLongLines={true}>
              {about.activeTab.description}
            </SyntaxHighlighter>
          )}
        </div>

        <div className="code-snippets flex flex--column">
          <div className="title">
            <p>&#47;&#47;Code snippet showcase:</p>
          </div>
          <div className="codes-showcase flex flex--column">
            <CodeSnippet />
            <CodeSnippet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
