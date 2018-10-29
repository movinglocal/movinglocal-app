import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Heading, Text } from 'rebass';
import styled, { withTheme } from 'styled-components';
import { Map, TileLayer, Circle } from 'react-leaflet';
import CloseIcon from 'react-feather/dist/icons/x';

import { settingsActions } from '~/pages/Settings/actions';
import Search from '~/components/Search';
import Button from '~/components/Button';
import { geocode } from '~/services/geocoder';
import 'leaflet/dist/leaflet.css';

const MapContainer = styled.div`
  height: 300px;
  margin-bottom: 16px;

  .leaflet-container {
    height: 100%;
  }
`;

class PositionChooser extends PureComponent {
  onSubmit = async (address) => {
    const position = await geocode(address);

    if (!position.error) {
      this.props.updateUserPosition(position);
    }
  }

  renderResetButton() {
    if (!this.props.userPosition) {
      return null;
    }

    const buttonCSS = {
      display: 'flex !important',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 600,
      top: '10px',
      right: '10px'
    };

    return (
      <Button
        css={buttonCSS}
        bg="white"
        onClick={() => this.props.updateUserPosition(false)}
        color="main"
        fontSize={1}
        fontWeight="normal"
        p={2}
        borderRadius={50}
      >
        <CloseIcon size={20} />
        <Text ml="1">Ort zurücksetzen</Text>
      </Button>
    );
  }

  render() {
    const { userPosition, nextStep, isOnboarding } = this.props;
    return (
      <Fragment>
        <Heading mb={3}>Ort auswählen</Heading>
        <Search
          onSubmit={this.onSubmit}
          placeholder="Adresse eingeben ..."
          style={{ marginBottom: '16px' }}
        />
        <MapContainer>
          <Map
            center={userPosition || config.map.center}
            zoom={11}
          >
            <TileLayer
              url={config.map.tileurl}
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {userPosition && (
              <Circle
                fillColor={this.props.theme.colors.main}
                color={this.props.theme.colors.main}
                radius={config.map.userRadius}
                center={userPosition}
              />
            )}
            {this.renderResetButton()}
          </Map>

        </MapContainer>
        {isOnboarding && <Button onClick={nextStep}>Weiter</Button>}
      </Fragment>
    );
  }
}

export default connect(
  state => ({ userPosition: state.userPosition }),
  settingsActions
)(withTheme(PositionChooser));
