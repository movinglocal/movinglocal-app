import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Redirect from 'react-router-dom/Redirect';

import { actions } from '~/pages/Feed/actions';
import Privacy from '~/pages/Onboarding/steps/Privacy';
import TagChooser from '~/pages/Settings/pages/TagChooser';
import PositionChooser from '~/pages/Settings/pages/PositionChooser';
import OrganisationChooser from '~/pages/Settings/pages/OrganisationChooser';
import ScrollWrapper from '~/components/ScrollWrapper';

const stepComponents = [
  Privacy,
  TagChooser,
  PositionChooser,
  OrganisationChooser
];

class Onboarding extends PureComponent {
  state = {
    stepIndex: 0
  }

  nextStep = () => {
    if (this.state.stepIndex === stepComponents.length - 1) {
      return this.onOnboardingEnd();
    }

    this.setState(prevState => ({
      stepIndex: prevState.stepIndex + 1
    }));
  }

  onOnboardingEnd = () => {
    this.props.finishOnboarding();
  }

  render() {
    if (!this.props.isInitial) {
      return <Redirect to="/" />;
    }

    const StepComponent = stepComponents[this.state.stepIndex];
    const remainingSteps = stepComponents.length - this.state.stepIndex;
    return (
      <ScrollWrapper css={{ flexGrow: 1 }} p={3}>
        <h3>
          Noch
          {' '}
          {remainingSteps}
          {' '}
          Schritt
          {remainingSteps !== 1 && 'en'}
          ...
        </h3>
        <StepComponent
          nextStep={this.nextStep}
          isOnboarding
        />
      </ScrollWrapper>
    );
  }
}

export default connect(state => ({
  isInitial: state.isInitial
}), actions)(Onboarding);
