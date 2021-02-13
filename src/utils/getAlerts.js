import { fromLonLat } from 'ol/proj'
import olFeature from 'ol/Feature'
import olGeomPoint from 'ol/geom/Point'


const getAlerts = async (layer) => {
    const url = 'https://95gc0kospc.execute-api.ca-central-1.amazonaws.com/prod/alerts?radius=450000000&lat=43.7425651&long=-79.2148452&time=1'
    let locations = await fetch (url).then(res => res.json())

    const features = locations.map((location) => {
      return new olFeature({
        name: `${location.provider.toUpperCase()} ${new Date(location.timestamp)}`,
        ...{
          ...location,
          ...location.data
        },
        timestamp: new Date(location.timestamp),
        geometry: new olGeomPoint(fromLonLat([location.long, location.lat]))
      })
    })

    // if (this.state.wipeOnRefresh) layer.getSource().clear()
    layer.getSource().clear()

    layer.getSource().addFeatures(features)
  }

export default getAlerts