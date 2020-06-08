<template>
  <div class="addContainer">
    <v-expansion-panels :value="openPanel">
      <v-expansion-panel>
        <v-expansion-panel-header>Add Bookmark</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="name" label="Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="link"
                hint="Ex. http://www.google.ch"
                persistent-hint
                label="Link"
                :rules="[testLinkFormat]"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="buttonContainer">
            <v-btn
              color="primary"
              :disabled="
                !name ||
                  !link ||
                  testLinkFormat(link) === 'Link format is not valid'
              "
              @click="handleSaveBookmark"
              >Add</v-btn
            >
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    openPanel: 1,
    name: "",
    link: "",
    testLinkFormat: value => {
      const regex = /^((ftp|http|https):\/\/)([A-z]+)\.([A-z]+)\.([A-z]{2,})/;
      return regex.test(value) || "Link format is not valid";
    }
  }),
  methods: {
    ...mapActions(["saveBookmark"]),
    handleSaveBookmark() {
      const { name, link } = this;
      this.saveBookmark({ name, link });
      this.name = "";
      this.link = "";
      this.openPanel = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.addContainer {
  padding: 16px 16px 0px;
}
.buttonContainer {
  display: flex;
  justify-content: flex-end;
}
</style>
