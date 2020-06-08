<template>
  <v-app-bar app color="primary">
    <div class="appBar">
      <div class="appTitle">
        Bookmark manager
      </div>
      <div>
        <v-text-field
          dense
          solo
          clearable
          placeholder="Search"
          append-icon="mdi-magnify"
          class="searchTextField"
          v-model="search"
          :background-color="isFocus ? focus : nonFocus"
          @focus="changeFocus"
          @blur="changeFocus"
          @keypress.enter="searchBookmark"
        ></v-text-field>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    search: "",
    isFocus: false,
    nonFocus: "rgb(130,177,255)",
    focus: "rgb(223, 235, 255)"
  }),
  methods: {
    ...mapActions(["findBookmark"]),
    changeFocus() {
      this.isFocus = !this.isFocus;
    },
    searchBookmark() {
      this.findBookmark(this.search);
    }
  }
};
</script>

<style lang="scss" scoped>
.appTitle {
  color: white;
}
.appBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.searchTextField {
  margin-top: 25px !important;
}
</style>
