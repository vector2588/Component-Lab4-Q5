<template>
    <div v-if="GStore.passenger">
        <h1>{{ GStore.passenger.name }}</h1>
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
        <router-view :passenger="GStore.passenger" />
    </div>
</template>

<script>
export default {
    inject: ['GStore']
}
</script>
