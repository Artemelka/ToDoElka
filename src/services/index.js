export const fakeLogin = {
    isLogin: false,
    login: function(callback) {
        this.isLogin = true;
        setTimeout(() => {
            callback(this.isLogin)
        }, 100); // fake async
    },
    logout: function(callback) {
        this.isLogin = false;
        setTimeout(() => {
            callback(this.isLogin)
        }, 100);
    }
};