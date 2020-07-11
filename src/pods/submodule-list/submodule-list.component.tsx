import React from 'react';
import {
  DashboardComponent,
  DashboardItemProps,
} from 'common/components/dashboard';

interface Props {
  items: DashboardItemProps[];
}

export const SubmoduleListComponent: React.FunctionComponent<Props> = props => {
  const { items } = props;
  return <DashboardComponent items={items} />;
};
