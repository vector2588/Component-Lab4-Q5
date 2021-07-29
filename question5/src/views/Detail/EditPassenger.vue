<template>
  <p>Edit passenger detail here</p>
  <button @click="edit">Edit</button>
</template>

<script>
export default {
  props: ["passenger"],
  inject: ["GStore"], // <--- Inject the Global Store
  methods: {
    edit() {
      //Assuming successful API call to register them

      //Set a flash message to appear on the next page loaded which says
      // 'You are succesfully registerd for ' + this.event.title

      this.GStore.flashMessage = "The passenger detail has been updated";
      setTimeout(() => {
        //After 3 second remove it
        this.GStore.flashMessage = "";
      }, 3000);
      // Set a flash message to appear on the next page loaded which says

      this.$router.push({
        name: "Home",
        params: { id: this.passenger.id },
      });
    },
  },
};
</script>
