import React from 'react'
import {
  Map,
  Popup,
  LayerPanel,
  Controls,
  ContextMenu,
  LayerStyler,
  LayerPanelPage,
  LayerPanelContent,
  BasemapContainer,
  VectorLayer,
  DrawContainer
} from '@bayer/ol-kit'
import olSourceVector from 'ol/source/Vector'
import getAlerts from './utils/getAlerts'
import getDriverLocations from './utils/getDriverLocations'
import QueryFilter from './components/QueryFilter'


class App extends React.Component {

  onMapInit = async (map) => {
    // create a vector layer and add to the map
    const alertsLayer = new VectorLayer({
      title: 'Alerts',
      source: new olSourceVector({})
    })

    const driversLayer = new VectorLayer({
      title: 'Driver',
      source: new olSourceVector({})
    })

    map.addLayer(driversLayer)
    map.addLayer(alertsLayer)

    window.map = map
  }

  render () {
    return (
      <Map onMapInit={this.onMapInit} fullScreen>
        <Popup />
        {/* <LayerPanel>
          <LayerPanelPage tabIcon='Layer Styler'>
            <LayerPanelContent style={{ padding: '0px', fontFamily: 'Roboto, Arial, sans-serif' }}>
              <LayerStyler />
            </LayerPanelContent>
          </LayerPanelPage>
          <LayerPanelPage label={'Draw'}>
            <LayerPanelContent style={{ padding: '0px', fontFamily: 'Roboto, Arial, sans-serif' }}>
              <DrawContainer style={{ position: 'relative', width: 'auto' }} />
            </LayerPanelContent>
          </LayerPanelPage>
        </LayerPanel> */}
        <ContextMenu />
        <QueryFilter />
        <Controls />
        <BasemapContainer />
      </Map>
    )
  }
}

export default App
