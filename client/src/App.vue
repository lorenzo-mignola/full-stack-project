<template>
  <v-app>
    <AppBar />
    <v-content>
      <AddBookmark />
      <div v-if="loading" class="loading">
        <v-progress-linear indeterminate />
      </div>
      <v-list v-if="!loading" class="bookmarkContainer">
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
import AppBar from "./components/AppBar";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    AddBookmark,
    Bookmark,
    AppBar
  },
  computed: {
    ...mapState(["bookmarks", "loading"])
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["init"])
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
