import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { updateRelation } from '~/services/apiUser';
import { actions } from '~/pages/Feed/actions';
import Privacy from '~/pages/Onboarding/steps/Privacy';
import TopicChooser from '~/pages/Onboarding/steps/TopicChooser';
import TagChooser from '~/pages/Settings/pages/TagChooser';
import PositionChooser from '~/pages/Settings/pages/PositionChooser';

const stepComponents = [
  Privacy,
  TopicChooser,
  TagChooser,
  PositionChooser
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
    const StepComponent = stepComponents[this.state.stepIndex];
    return (
      <StepComponent
        nextStep={this.nextStep}
      />
    );
  }
}

export default connect(() => {}, actions)(Onboarding);
