export const fakeLogin = {
    login(callback) {
        setTimeout(() => { callback(this.isLogin) }, 1000); // fake async
    },
    logout(callback) {
        window.sessionStorage.setItem('user', '');
        setTimeout(() => { callback(this.isLogin) }, 100);
    },
    isAuth() {
        return Boolean(window.sessionStorage.getItem('user'));
    }
};