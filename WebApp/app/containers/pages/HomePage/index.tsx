/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import Landing from 'components/views/ScratchPad';

interface OwnProps {}

interface DispatchProps {
}

type Props = DispatchProps & OwnProps;

const HomePage: React.SFC<Props> = (props: Props) => {
  const {
  } = props;


  return <Landing
  />;
};

export default HomePage;
