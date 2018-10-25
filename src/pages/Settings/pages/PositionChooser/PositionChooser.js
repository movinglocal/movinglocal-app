import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Heading } from 'rebass';
import styled from 'styled-components';
import { Map, TileLayer, Circle } from 'react-leaflet';

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

  render() {
    const { userPosition, nextStep = false } = this.props;
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
            {userPosition && <Circle radius={config.map.userRadius} center={userPosition} />}
          </Map>
        </MapContainer>
        {nextStep && <Button onClick={nextStep}>Weiter</Button>}
      </Fragment>
    );
  }
}

export default connect(
  state => ({ userPosition: state.userPosition }),
  settingsActions
)(PositionChooser);
