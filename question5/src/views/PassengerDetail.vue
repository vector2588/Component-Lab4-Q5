<template>
    <div v-if="passenger">
        <h1>{{ passenger.name }}</h1>
        <p>ID: {{ passenger._id }}</p>
        <p>Trips: {{ passenger.trips }}</p>
    </div>
</template>

<script>
import EventService from '@/services/Service.js'
export default {
    props: ['id'],
    data() {
        return {
            passenger: null,
        }
    },
    created() {
        EventService.getEvent(this.id)
            .then(response => {
                this.passenger = response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>
