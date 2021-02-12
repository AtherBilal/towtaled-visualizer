import React from 'react'
import {
  Map,
  Popup,
  LayerPanel,
  Controls,
  ContextMenu,
  loadDataLayer,
  LayerStyler,
  LayerPanelPage,
  LayerPanelContent,
  BasemapContainer,
  VectorLayer,
  DrawContainer
} from '@bayer/ol-kit'
import { fromLonLat } from 'ol/proj'
import olFeature from 'ol/Feature'
import olGeomPoint from 'ol/geom/Point'
import olSourceVector from 'ol/source/Vector'

import LayersIcon from '@material-ui/icons/Layers'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wipeOnRefresh: true
    }
  }
  onMapInit = async (map) => {
    // create a vector layer and add to the map
    const url = 'https://95gc0kospc.execute-api.ca-central-1.amazonaws.com/prod/alerts?radius=450000000&lat=43.7425651&long=-79.2148452&time=1'
    let locations = await fetch(url).then(res => res.json())
    locations = [ locations[0] ]

    const features = locations.map((location) => {
      return new olFeature({
        ...location,
        geometry: new olGeomPoint(fromLonLat([location.long, location.lat]))
      })
    })
    const layer = new VectorLayer({
      title: 'User Locations',
      source: new olSourceVector({
        features
      })
    })

    map.addLayer(layer)

    const getLocations = async () => {
      // const url = 'http://localhost:3000/locations'
      let locations = await fetch (url).then(res => res.json())
      // locations = [ locations[0] ] // remove this line,

      const features = locations.map((location) => {
        return new olFeature({
          ...location,
          timestamp: new Date(location.timestamp),
          geometry: new olGeomPoint(fromLonLat([location.long, location.lat]))
        })
      })

      if (this.state.wipeOnRefresh) layer.getSource().clear()

      layer.getSource().addFeatures(features)
    }

    setInterval(getLocations, 30000)

    window.map = map
  }

  render () {
    return (
      <Map onMapInit={this.onMapInit} fullScreen>
        <Popup />
        <LayerPanel>
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
        </LayerPanel>
        <ContextMenu />
        <Controls />
        <BasemapContainer />
      </Map>
    )
  }
}

export default App
