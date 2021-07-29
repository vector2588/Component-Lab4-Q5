<template>
    <div v-if="passenger">
        <h1>{{ passenger.name }}</h1>
        <div id="nav">
            <router-link :to="{ name: 'Passenger', params: {_id}}">
                Passenger Detail
            </router-link> 
            |
            <router-link :to="{ name: 'Airline', params: {_id}}">
                Airline Detail
            </router-link>
            |
            <router-link :to="{ name: 'EditPassenger', params: {_id}}">
                Edit passenger detail
            </router-link>
            
        </div>
        <router-view :passenger="passenger" />
    </div>
</template>

<script>
import EventService from '@/services/Service.js'
export default {
    props: ['id'],
    data() {
        return {
            passenger: null
        }
    },
    created() {
        EventService.getEvent(this.id)
            .then((response) => {
                this.passenger = response.data
                if(response && response.status == 204){
                    this.$router.push({
                        name: '404Resource',
                        params: {resource: 'passenger'}
                    })
                }
            })
            .catch(() => {
                
            })
    }
}
</script>
