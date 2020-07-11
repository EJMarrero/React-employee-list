import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { EmployeeListContainer } from 'pods/employee-list';

export const EmployeeListScene: React.FC = () => {
  return (
    <>
      <EmployeeListContainer />
    </>
  );
};
