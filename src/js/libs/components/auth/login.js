export function initLogin() {
  return {
    isLoading: false,
    login() {
      this.isLoading = true;
      setTimeout(() => {
        this.$store.app.isLoggedIn = true;
        window.location.href = "/home.html";
      }, 1500);
    },
  };
}

export function initLogout() {
  return {
    isLoading: false,
    logout() {
      this.isLoading = true;
      setTimeout(() => {
        this.$store.app.isLoggedIn = false;
        window.location.href = "/home.html";
      }, 200);
    },
  };
}
