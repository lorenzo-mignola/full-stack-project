<template>
  <v-list-item @click="openLink">
    <v-list-item-avatar>
      <v-icon color="accent">mdi-bookmark</v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ bookmark.name }}</v-list-item-title>
      <v-list-item-subtitle>{{ bookmark.link }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="grey" @click.stop="editBookmark">mdi-pencil</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="grey" @click.stop="handleDelete">mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    bookmark: {
      type: Object,
      default: function() {
        return {
          _id: "",
          name: "",
          link: ""
        };
      }
    }
  },
  methods: {
    ...mapActions(["deleteBookmark"]),
    openLink() {
      window.open(this.bookmark.link, "_blank");
    },
    editBookmark() {
      console.log(this.bookmark);
    },
    handleDelete() {
      this.deleteBookmark(this.bookmark._id);
    }
  }
};
</script>

<style lang="scss" scoped>
.bookmarkItem {
  width: 100%;
}
</style>
