<template>
  <p>
    <span>
      <b> Name: </b>
      <span>{{ passenger.airline.name }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.name }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> ID: </b>
      <span>{{ passenger.airline.id }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.id }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Country: </b>
      <span>{{ passenger.airline.country }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.country }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Slogan: </b>
      <span>{{ passenger.airline.slogan }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.slogan }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Head Quaters: </b>
      <span>{{ passenger.airline.head_quaters }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.head_quaters }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Website: </b>
      <span>{{ passenger.airline.website }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.website }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Established: </b>
      <span>{{ passenger.airline.established }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.established }}
      </span>
    </span>
  </p>

  
</template>

<script>
export default {
  props: ["passenger"],
};
</script>
