// src/Pages/Locator/ATMLocator.jsx
import React from 'react';
import LocatorTable from '../../components/LocatorTable';
import { atmLocations } from '../../data/locatorData';

const ATMLocator = () => {
  return <LocatorTable title="ATM Locator" data={atmLocations} />;
};

export default ATMLocator;