import { fromLonLat } from 'ol/proj'
import olFeature from 'ol/Feature'
import olGeomPoint from 'ol/geom/Point'
import olStyle from 'ol/style/Style'
import olStroke from 'ol/style/Stroke'
import olIcon from 'ol/style/Icon'

const getDriverLocations = async (layer) => {
  const url = 'https://95gc0kospc.execute-api.ca-central-1.amazonaws.com/prod/locations'
  let driverLocations = await fetch (url).then(res => res.json())
  layer.getSource().clear()

  const driverLocationsFeatures = driverLocations.map((location) => {
    let driverLocationsFeature = new olFeature({
      name: location.userid,
      ...location,
      timestamp: new Date(location.timestamp),
      geometry: new olGeomPoint(fromLonLat([location.long, location.lat]))
    })

    const iconStyle = new olStyle({
      stroke: new olStroke(),
        image: new olIcon({
        opacity: 1,
        src: 'https://cdn3.iconfinder.com/data/icons/car-repair-icons/486/Tow_Truck-512.png',
        scale: .05
      })
    })
    driverLocationsFeature.setStyle(iconStyle)

    return driverLocationsFeature
  })


    layer.getSource().addFeatures(driverLocationsFeatures)
  }

export default getDriverLocations

// STYLING FOR LATER
//   const driverLocationsFeatures = driverLocations.map((location) => {
//     console.log(locations)
//     let driverLocationsFeature = olFeature({
//       ...location,
//       timestamp: new Date(location.timestamp),
//       geometry: new olGeomPoint(fromLonLat([location.long, location.lat]))
//     })

//     driverLocationsFeature.setStyle(
//       new olStyle({
//         image: new olCircleStyle({
//           radius: 10000,
//           fill: new olFill({ color: 'red' }),
//           stroke: new olStroke({
//             color: 'red',
//             width: 1
//           })
//         })
//       })
//     )
//     return driverLocationsFeature
//   })