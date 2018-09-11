import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Button } from 'rebass';

import { actions } from '~/pages/Feed/actions';
import ArticleTeaser from '~/components/ArticleTeaser';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';

import styled from 'styled-components';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

function renderItems(items) {
  return items.map(item => <ArticleTeaser {...item} key={item.id} />);
}

function renderButton(action) {
  return (
    <FullWidthButton onClick={action} width={1} borderRadius={0}>
      Mehr laden...
    </FullWidthButton>
  );
}

class Feed extends PureComponent {
  async componentDidMount() {
    await this.props.initSources();
    this.props.initData();
  }

  render() {
    const {
      isLoading,
      data,
      loadNextPage,
      count,
      pageSize,
      pageStart
    } = this.props;

    const hasNext = pageStart + pageSize < count;

    return (
      <Fragment>
        <FeedControls />
        <ScrollWrapper bg="gray">
          {renderItems(data)}
          {isLoading && <Loader />}
          {(!isLoading && hasNext) && renderButton(loadNextPage)}
        </ScrollWrapper>
      </Fragment>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
