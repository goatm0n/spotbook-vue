<template>
<l-map style="height: 300px" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng"></l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: "SpotMap",
    components: {
        LMap,
        LTileLayer,
        LMarker,
    }
}
</script>

<style>

</style>