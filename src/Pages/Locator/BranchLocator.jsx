// src/Pages/Locator/BranchLocator.jsx
import React from 'react';
import LocatorTable from '../../components/LocatorTable';
import { branchLocations } from '../../data/locatorData';

const BranchLocator = () => {
  return <LocatorTable title="Branch Locator" data={branchLocations} />;
};

export default BranchLocator;