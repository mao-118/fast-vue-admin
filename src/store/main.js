import { defineStore } from 'pinia';
import { menuMode, elSize, token } from '@/config';
export default defineStore('MainStore', {
  state: () => ({
    collapse: false,
    menuMode: localStorage.getItem(menuMode) || 'vertical', // horizontal
    elSize: localStorage.getItem(elSize) || 'default',
    fixedHeader: false,
    showLogo: false,
    vueuseColorScheme: localStorage.getItem('vueuse-color-scheme') || 'auto',
    token: localStorage.getItem(token) || '',
    errorList: []
  }),
  getters: {},
  actions: {
    addErrorList(error) {
      this.errorList.push(error);
    },
    setErrorList(error) {
      this.errorList = error;
    },
    setShowLogo(show) {
      this.showLogo = show;
    },
    setScheme() {
      this.vueuseColorScheme = localStorage.getItem('vueuse-color-scheme');
    },
    setToken(newToken) {
      this.token = newToken;
      localStorage.setItem(token, newToken);
    },
    setFixedHeader(value) {
      this.fixedHeader = value;
    },
    changeCollapse() {
      this.collapse = !this.collapse;
    },
    changeMenuMode() {
      if (this.menuMode === 'horizontal') {
        this.menuMode = 'vertical';
      } else {
        this.menuMode = 'horizontal';
      }
      localStorage.setItem(menuMode, this.menuMode);
    },
    changeSize(size) {
      this.elSize = size;
      localStorage.setItem(elSize, size);
      location.reload();
    }
  }
});
