import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import * as aboutData from './data/about';

const personalInfo = [
  {
    id: uuidv4(),
    title: 'bio',
    tabs: [{ id: uuidv4(), description: aboutData.BIO_INFORMATION, tabTitle: 'bio-informaion' }],
    iconColor: 'icon--red',
    isFolder: true,
  },
  {
    id: uuidv4(),
    title: 'education',
    tabs: [
      { id: uuidv4(), description: aboutData.UNIVERSITY, tabTitle: 'university' },
      { id: uuidv4(), description: aboutData.BOOTCAMPS, tabTitle: 'boot-camps' },
    ],
    iconColor: 'icon--green',
    isFolder: true,
  },
  {
    id: uuidv4(),
    title: 'experience',
    tabs: [
      { id: uuidv4(), description: aboutData.WORK_EXPERIENCE, tabTitle: 'work-experience' },
      { id: uuidv4(), description: aboutData.SKILLS, tabTitle: 'skills' },
    ],
    iconColor: 'icon--lavender',
    isFolder: true,
  },
];

const contactInfo = {
  id: uuidv4(),
  tabs: [
    { id: uuidv4(), description: '', tabTitle: 'mo7amed.salah@outlook.com' },
    { id: uuidv4(), description: '', tabTitle: '+964 770 208 4329' },
  ],
  isFolder: false,
};

const slice = createSlice({
  name: 'about',
  initialState: {
    personalInfo,
    contactInfo,
    activeTab: personalInfo[0].tabs[0],
  },
  reducers: {
    getPersonlaInfo: (state) => {
      return state.personalInfo;
    },
    getContactInfo: (state) => {
      return state.contactInfo;
    },
    setActiveTab: (state, action) => {
      const activeTab = state.personalInfo.find(({ id }) => id === action.payload.parentId);
      const tab = activeTab.tabs.find(({ id }) => id === action.payload.tabId);
      state.activeTab = tab;
    },
  },
});

export const { getPersonlaInfo, getContactInfo, setActiveTab } = slice.actions;
export default slice.reducer;
