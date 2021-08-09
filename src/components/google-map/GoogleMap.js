import React, { useEffect, useRef } from 'react';
import CustomMarker from './CustomMarker';
import './googlemap.scss';

const CustomMap = ({ children, lat, lng, googleKey, data }) => {
    const googleMap = useRef();
    const center = { lat: parseFloat(lat), lng: parseFloat(lng) };
    const markers = useRef([]);

    //map settings
    const mapOptions = {
        zoom: 19,
        center: center,
        SENSOR: true,
        scrollwheel: false,
        clickableIcons: false,
        disableDefaultUI: false
    };

    const createGoogleMap = () => {
        return new window.google.maps.Map(document.getElementById('customMap'), mapOptions);
    };

    /*INIT */
    useEffect(() => {
        if (window.google && window.google.maps) {
            onLoad();
            return;
        }

        const googleScript = document.createElement('script');
        googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCy-gIl1vIjr7jJMc_dT11GvQiz_552pYk`;
        document.body.appendChild(googleScript);
        googleScript.addEventListener('load', onLoad);
    }, []);

    const onLoad = () => {
        googleMap.current = createGoogleMap();
        window.google.maps.event.addListenerOnce(googleMap.current, 'idle', function() {
            window.google.maps.event.trigger(googleMap.current, 'resize');
        });

        for (let i = 0; i < data.length; i++) {
            if (data[i].lat && data[i].lng) {
                let marker = new CustomMarker(googleMap.current, data[i]);
                markers.current.push(marker);
            }
        }

        window.google.maps.event.trigger(googleMap.current, 'resize');
    };

    return <div id="customMap" style={style}></div>;
};

export default CustomMap;

const style = { width: '100%', height: '100%' };
