import { defineStore } from 'pinia';
export default defineStore('TagViewStore', {
  state: () => ({
    tagViews: [],
    showTagView: true
  }),
  actions: {
    setShowTagView(show) {
      this.showTagView = show;
    },
    addTagViews(tag) {
      const index = this.tagViews.findIndex((item) => item.path === tag.path);
      if (index !== -1) return;
      this.tagViews.push(
        Object.assign({}, tag, {
          title: tag.meta.title || 'no-name'
        })
      );
    },
    closeTagView(tag) {
      const index = this.tagViews.findIndex((item) => item.path == tag.path);
      this.tagViews.splice(index, 1);
    },
    closeAllTagViews() {
      this.tagViews = [];
    },
    closeOthersTagViews(tag) {
      this.closeAllTagViews();
      this.addTagViews(tag);
    },
    closeLeftTagViews(tag) {
      const index = this.tagViews.findIndex((item) => item.path == tag.path);
      return this.tagViews.splice(0, index);
    },
    closeRightTagViews(tag) {
      const index = this.tagViews.findIndex((item) => item.path == tag.path);
      return this.tagViews.splice(index + 1);
    }
  }
});
