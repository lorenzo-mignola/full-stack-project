<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Bookmark manager
      </div>
    </v-app-bar>

    <v-content>
      <AddBookmark />
      <div class="loading" v-if="loading">
        <v-progress-linear indeterminate />
      </div>
      <v-list class="bookmarkContainer" v-if="!loading">
        <Bookmark
          v-for="bookmark in bookmarks"
          :key="bookmark._id"
          :bookmark="bookmark"
        />
      </v-list>
    </v-content>
  </v-app>
</template>

<script>
import AddBookmark from "./components/AddBookmark";
import Bookmark from "./components/Bookmark";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    AddBookmark,
    Bookmark
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["init"])
  },
  computed: {
    ...mapState(["bookmarks", "loading"])
  }
};
</script>

<style lang="scss" scoped>
.bookmarkContainer {
  margin: 16px;
}
.loading {
  margin: 16px;
}
</style>
