import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import myImage from '../../assets/images/me.jpeg';

const codeSnippet = () => {
  const code = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`;

  return (
    <div className="code-snippet flex flex--column">
      <div className="code-header flex">
        <div className="user flex">
          <img src={myImage} />
          <div className="user-time flex flex--column">
            <p className="icon--blue">@Mo7amedSMahdi</p>
            <p>Created 5 months ago</p>
          </div>
        </div>
        <div className="actions">
          <ul>
            <li>
              <i className="ri-chat-smile-3-fill icon--gray" />
              <p>details</p>
            </li>
            <li>
              <i className="ri-star-fill icon--gray" />
              <p>3</p>
              <p>Stars</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="code">
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default codeSnippet;
