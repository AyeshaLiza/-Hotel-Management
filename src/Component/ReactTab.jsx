import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ReactTab = () => {
 return (
  <div className='w-full max-w-lg mx-auto'>

  <Tabs>
    <TabList>
      <Tab>General access</Tab>
      <Tab>VIP Class</Tab>
    </TabList>

    <TabPanel>
    <TabList>
      <Tab>Couple Room</Tab>
      <Tab>Family Frieldly Suit</Tab>
      <Tab>Cottage</Tab>
    </TabList>
     
    </TabPanel>
    <TabPanel>
    <Tab>Delux Suit</Tab>
      <Tab>Business Room</Tab>
      <Tab>Urban Retreat</Tab>
    </TabPanel>
  </Tabs>
  </div>
 );
};

export default ReactTab;