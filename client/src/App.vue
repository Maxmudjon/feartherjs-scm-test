<template>
  <div id="app">
    <div class="row">
      <div class="card m-5 p-5 col-sm">
        <h1 class="text-center pb-5">Bugungi kun rasxodlari</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Rasxod nomini kiriting"
            aria-label="Rasxod nomini kiriting"
            aria-describedby="button-addon2"
            v-model="name"
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="button"
              id="button-addon2"
              @click.prevent="create({ name }); name = null"
              :disabled="!name"
            >Qo'shish</button>
          </div>
        </div>
        <ul class="list-group" v-for="(item, index) in payment().data" :key="index">
          <li class="list-group-item">
            <span class="name font-weight-bold" v-if="!item.finish">{{item.name}}</span>
            <s class="name" v-if="item.finish">{{item.name}}</s>
            <button
              class="btn btn-outline-danger float-right ml-2"
              @click.prevent="remove(item._id)"
            >O'chirish</button>
            <button
              class="btn btn-outline-success float-right"
              @click.prevent="update([item._id, {name:item.name, finish: true}, {}])"
              v-show="!item.finish"
            >Tugatish</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      name: null
    };
  },
  created() {
    this.$store.dispatch("payment/find");
  },
  computed: {
    ...mapGetters("payment", { payment: "find" })
  },
  methods: {
    ...mapActions("payment", ["create", "remove", "find", "update"])
  }
};
</script>

