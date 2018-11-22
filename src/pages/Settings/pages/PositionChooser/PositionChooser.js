import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import {
 Heading, Text, Flex, Box
} from 'rebass';
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

const SearchError = styled.div`
  color: red;
  font-size: 12px;
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

function getZoomByCircleRadius(radius) {
  if (radius > 20000) {
    return 8;
  }

  if (radius > 13000) {
    return 9;
  }
  if (radius > 6000) {
    return 10;
  }

  return 11;
}

class PositionChooser extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      userPosition: props.userPosition,
      userPositionRadius: props.userPositionRadius,
      userPositionError: false
    };
  }

  onSubmit = async (address) => {
    this.setState({ userPositionError: false });

    const userPosition = await geocode(address);

    console.log(userPosition);

    if (!userPosition.error) {
      this.setState({ userPosition });
    } else {
      this.setState({ userPositionError: true });
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

  handleResetButton() {
    this.props.updateUserPosition(false);
    this.setState({ userPosition: false });
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
        onClick={() => this.handleResetButton()}
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
    const { userPosition, userPositionError } = this.state;
    const { isOnboarding, nextStep, userPositionRadius } = this.props;

    const zoom = getZoomByCircleRadius(this.state.userPositionRadius);

    return (
      <Fragment>
        <Heading mb={3}>Wähle deinen Ort. Hier kannst du Dein Zuhause auswählen oder einen anderen Ort, aus dessen Umkreis du Molos (Nachrichten und Informationen) erhalten möchtest.</Heading>
        <Search
          onSubmit={this.onSubmit}
          placeholder="Gib eine Adresse ein"
          style={{ marginBottom: '16px' }}
        />
        { userPositionError && <SearchError>Adresse konnte nicht gefunden werden.</SearchError> }
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
            zoom={zoom}
            doubleClickZoom={false}
            dragging={false}
            keyboard={false}
            scrollWheelZoom={false}
            tap={false}
            touchZoom={false}
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
          <Flex mb={4}>
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
