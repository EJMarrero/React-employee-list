import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { LoginContainer } from 'pods/login';
import { CenteredLayout } from 'layouts';

export const LoginScene: React.FC = () => {
  return (
    <CenteredLayout>
      <LoginContainer />
    </CenteredLayout>
  );
};
