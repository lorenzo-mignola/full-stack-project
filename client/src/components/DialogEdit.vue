<template>
  <v-dialog v-model="open" width="70%">
    <v-card>
      <v-card-title class="headline" primary-title>
        Edit Bookmark
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="newName" label="Name"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="newLink"
              hint="Ex. http://www.google.ch"
              persistent-hint
              label="Link"
              :rules="[testLinkFormat]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          Close
        </v-btn>
        <v-btn
          color="primary"
          :disabled="
            !newName ||
              !newLink ||
              testLinkFormat(newLink) === 'Link format is not valid'
          "
          @click="saveBookmarkEdited"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    bookmark: {
      type: Object,
      default: () => ({
        _id: "",
        name: "",
        link: ""
      })
    }
  },
  data: () => ({
    newName: null,
    newLink: null,
    testLinkFormat: value => {
      const regex = /^((ftp|http|https):\/\/)([A-z]+)\.([A-z]+)\.([A-z]{2,})/;
      return regex.test(value) || "Link format is not valid";
    }
  }),
  beforeUpdate() {
    // Imposta i valori iniziali
    this.newName = this.newName !== null ? this.newName : this.bookmark.name;
    this.newLink = this.newLink !== null ? this.newLink : this.bookmark.link;
  },
  methods: {
    ...mapActions(["editBookmark"]),
    closeDialog() {
      this.$emit("closeDialog", { status: false });
    },
    async saveBookmarkEdited() {
      await this.editBookmark({
        id: this.bookmark._id,
        bookmark: { name: this.newName, link: this.newLink }
      });
      this.closeDialog();
    }
  }
};
</script>
