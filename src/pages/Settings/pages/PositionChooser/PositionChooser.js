import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Heading, Text, Flex, Box } from 'rebass';
import styled, { withTheme } from 'styled-components';
import { Map, TileLayer, Circle } from 'react-leaflet';
import Slider from 'rc-slider/lib/Slider';
import CloseIcon from 'react-feather/dist/icons/x';

import { settingsActions } from '~/pages/Settings/actions';
import Search from '~/components/Search';
import Button from '~/components/Button';
import { geocode } from '~/services/geocoder';

import 'leaflet/dist/leaflet.css';
import 'rc-slider/assets/index.css';

const MapContainer = styled.div`
  height: 300px;
  margin-bottom: 16px;

  .leaflet-container {
    height: 100%;
  }
`;

const SliderWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledSlider = styled(Slider)`
  .rc-slider-track, .rc-slider-rail {
    background: ${props => props.theme.colors.lightgray};
  }

  .rc-slider-handle {
    background: ${props => props.theme.colors.main};
    border-color: ${props => props.theme.colors.main};

    &:hover {
      border-color: ${props => props.theme.colors.main};
    }
  }
`;

class PositionChooser extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      userPosition: props.userPosition,
      userPositionRadius: props.userPositionRadius
    };
  }

  onSubmit = async (address) => {
    const userPosition = await geocode(address);

    if (!userPosition.error) {
      this.setState({ userPosition });
    }
  }

  onSliderChange = (userPositionRadius) => {
    this.setState({ userPositionRadius });
  }

  onSave = () => {
    this.props.updateUserPosition({
      ...this.state
    });

    if (this.props.isOnboarding) {
      this.props.nextStep();
    }
  }

  renderResetButton() {
    if (!this.state.userPosition) {
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
    const { userPosition } = this.state;
    const { isOnboarding, nextStep, userPositionRadius } = this.props;

    return (
      <Fragment>
        <Heading mb={3}>Ort auswählen:</Heading>
        <Search
          onSubmit={this.onSubmit}
          placeholder="Adresse eingeben ..."
          style={{ marginBottom: '16px' }}
        />
        <SliderWrapper>
          <StyledSlider
            min={3000}
            max={30000}
            step={1000}
            defaultValue={userPositionRadius}
            onChange={this.onSliderChange}
          />
          <Flex>
            <Text>3 km</Text>
            <Text ml="auto">30 km</Text>
          </Flex>
        </SliderWrapper>
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
                radius={this.state.userPositionRadius}
                center={userPosition}
              />
            )}
            {this.renderResetButton()}
          </Map>

        </MapContainer>
        {isOnboarding ? (
          <Flex>
            <Box ml="auto">
              <Button mr={3} bg="transparent" color="main" onClick={nextStep}>Überspringen</Button>
              <Button onClick={this.onSave}>Speichern und weiter</Button>
            </Box>
          </Flex>
        ) : (
          <Flex>
            <Button onClick={this.onSave} mb={3}>Speichern</Button>
          </Flex>
        )}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    userPosition: state.userPosition,
    userPositionRadius: state.userPositionRadius
  }),
  settingsActions
)(withTheme(PositionChooser));
