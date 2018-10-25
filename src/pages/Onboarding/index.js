import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { actions } from '~/pages/Feed/actions';
import Privacy from '~/pages/Onboarding/components/Privacy';
import TopicChooser from '~/pages/Settings/pages/TopicChooser';
import TagChooser from '~/pages/Settings/pages/TagChooser';
import PositionChooser from '~/pages/Settings/pages/PositionChooser';

const stepCount = 4;

class Onboarding extends PureComponent {
  state = {
    stepIndex: 0
  }

  nextStep = () => {
    if (this.state.stepIndex === stepCount - 1) {
      return this.onOnboardingEnd();
    }

    this.setState(prevState => ({
      stepIndex: prevState.stepIndex + 1
    }));
  }

  onOnboardingEnd = () => {
    this.props.finishOnboarding();
  }

  renderStep() {
    switch (this.state.stepIndex) {
      case 0: return <Privacy nextStep={this.nextStep} />;
      case 1: return <TopicChooser nextStep={this.nextStep} />;
      case 2: return <TagChooser nextStep={this.nextStep} />;
      case 3: return <PositionChooser nextStep={this.nextStep} />;
      default: return null;
    }
  }

  render() {
    return this.renderStep();
  }
}

export default connect(() => {}, actions)(Onboarding);
