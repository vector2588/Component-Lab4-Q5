<template>
    <p>Name: {{ passenger.name }}</p>
    <p>Trip: {{ passenger.trips }}</p>
</template>

<script>
export default {
    props: ['passenger']
}
</script>
