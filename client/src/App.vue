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
          @openDialog="handleDialog"
        />
      </v-list>
    </v-content>
    <DialogEdit
      :open="dialogOpen"
      :bookmark="bookmarkToEdit"
      @closeDialog="handleDialog"
    />
  </v-app>
</template>

<script>
import AddBookmark from "./components/AddBookmark";
import Bookmark from "./components/Bookmark";
import AppBar from "./components/AppBar";
import DialogEdit from "./components/DialogEdit";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    AddBookmark,
    Bookmark,
    AppBar,
    DialogEdit
  },
  data: () => ({
    dialogOpen: false,
    bookmarkToEdit: {}
  }),
  computed: {
    ...mapState(["bookmarks", "loading"])
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["init"]),
    handleDialog({ status, id = null }) {
      this.dialogOpen = status;
      if (id) {
        this.bookmarkToEdit = this.bookmarks.find(b => b._id === id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bookmarkContainer {
  margin: 16px;
}
.loading {
  margin: 16px;
  opacity: 1;
  animation-name: fadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
