<template>
    <div>
        <h2>Headquarters Location</h2>
        <GMapMap
            :center="center"
            :zoom="15"
            map-type-id="terrain"
            style="width: 500px; height: 300px; margin-left: auto; margin-right: auto;"
        >
            <GMapMarker
                :key="marker.id"
                v-for="marker in markers"
                :position="marker.position"
            />
        </GMapMap>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                center: {
                    lat: 43.94568737222597, lng: -78.89682295317225
                },
                markers: [
                    {
                        id: 'mark_1',
                        position: {
                            lat: 43.94568737222597, lng: -78.89682295317225
                        },
                    }
                ]
            }
        }
    }
</script>
