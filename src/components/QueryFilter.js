import React, { useState, useEffect, useCallback } from 'react'
import { connectToContext } from '@bayer/ol-kit'
import getDriverLocations from '../utils/getDriverLocations'
import getAlerts from '../utils/getAlerts'
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';

const QueryFilter = props => {
    const { map } = props
    const [ time, setTime ] = useState(1)
    const [ randomState, setRandomState ] = useState(new Date().toISOString())

    const layers = map.getLayers().getArray()
    const driversLayer = layers.find(layer => layer.get('title') === 'Driver')
    const alertsLayer = layers.find(layer => layer.get('title') === 'Alerts')

    const fetchEvents = useCallback(() => {
        console.log('new data fetched')

        getDriverLocations(driversLayer) // TODO: Move set interval inside getAlerts functions
        getAlerts(alertsLayer, { time })
    })

    useEffect(() => {
        console.log("using this effect")
        setTimeout(() => {
            setRandomState(new Date().toISOString())
        }, 30000)

        fetchEvents()
    }, [ randomState ])

    const handleQueryChange = selectedTime => {
        setTime(selectedTime)
    }


    return (
        <div style={styles.container}>
            <p>{time} hours</p>
            <input style={styles.slider} id='radius' type='range' min='0.25' max='10' step='0.25' value={time} onChange={(e) => handleQueryChange(e.target.value)}/>
            <IconButton onClick={fetchEvents}><RefreshIcon /></IconButton>
        </div>
    )
}

const styles = {
    container: {
        position: 'absolute',
        right: '15px',
        bottom: '80px',
        backgroundColor: 'white',
        width: '300px',
        opacity: '0.8',
        borderRadius: '4px',
        padding: '10px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: '1.5rem'
    },
    slider: {
        width: '250px',
        margin: '10px',
    }
}


export default connectToContext(QueryFilter)