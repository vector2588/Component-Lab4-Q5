<template>
  <div class="events">
    <PassengerCard v-for="pass in events" :key="pass.id" :passenger="pass" />
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from "@/components/PassengerCard.vue";
import PassengerService from "@/services/Service.js";
export default {
  name: "Home",
  props: {
    page: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  components: {
    PassengerCard,
  },
  data() {
    return {
      events: null,
      selectedpage: this.page,
    };
  },
  created() {
    PassengerService.getEvents(this.page, this.size)
      .then((response) => {
        this.events = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: rgb(20, 85, 55);
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

#selectedpage {
  flex: 1;
  text-align: left;
  flex-direction: column;
}
</style>