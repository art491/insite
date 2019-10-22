'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiemlmYW4iLCJhIjoiY2sxcjJqYmN6MDB1MjNucGQ3bHJsZGVydCJ9.5IpeH6mVL9K6QH6rH33VgQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/zifan/ck22do3jb37rr1cmn3j9fi9t7',
    center: [-73.96024, 40.80877],
    zoom: 12
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
        location: [-73.96191,40.80762],
        content: 'I like to eat my lunch here'
    },
    {
        location: [-73.95936,40.80610],
        content: '15 years ago, you could see over the trees'
    },
    {
        location: [-73.96204,40.80994],
        content: 'This was once tennis courts'
    },
    ]

data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})    
