'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiemlmYW4iLCJhIjoiY2sxcjJqYmN6MDB1MjNucGQ3bHJsZGVydCJ9.5IpeH6mVL9K6QH6rH33VgQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zifan/ck22do3jb37rr1cmn3j9fi9t7',
    center: [ -122.670261, 45.449226],
    zoom: 15
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

// this is an event handler
geolocate.on('geolocate', function(event) {
    console.log(event.coords)
})


let data = [
    {
        location: [-122.667882, 45.450602],
        content: 'Arnold Gallery: The Hub'
    },
    {
        location: [-122.666323,45.450363],
        content: 'Sam'
    },
     {
        location: [-122.6687,45.4523],
        content: 'Orion'
    },
     {
        location: [-122.667, 45.4508],
        content: 'Sara'
    },
    {
        location: [-122.6682078, 45.4514583],
        content: 'Charlotte'
    },
     {
        location: [-122.669058, 45.450928],
        content: 'Library: Isabel, Ellory, Justin, Ashley, Dylan'
    },
    {
        location: [-122.6688562, 45.4493269],
        content: 'Frank'
    },
    {
        location: [-122.6676784, 45.4505302],
        content: 'Frank'
    },
    {
        location: [ -122.6724, 45.4470],
        content: 'Georgia'
    },
    {
        location: [-122.6700595, 45.4501421],
        content: 'Joanne'
    },
    {
        location: [ -122.6693,45.4513],
        content: 'Emma'
    }]

data.forEach(function(d) {

    var el = document.createElement('div');
    el.className = 'marker';

    let marker = new mapboxgl.Marker(el)    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})    
