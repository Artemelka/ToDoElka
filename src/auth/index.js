export const fakeLogin = {
    isLogin: false,
    login: function(callback) {
        this.isLogin = true;
        setTimeout(callback, 100); // fake async
    },
    logout: function(callback) {
        this.isLogin = false;
        setTimeout(callback, 100);
    }
};