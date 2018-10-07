export const fakeLogin = {
    isLogin: false,
    login: function(callback, user) {
        this.isLogin = true;
        const value = JSON.stringify(user);
        window.sessionStorage.setItem('user', value);
        setTimeout(() => { callback(this.isLogin) }, 100); // fake async
    },
    logout: function(callback) {
        this.isLogin = false;
        window.sessionStorage.setItem('user', '');
        window.sessionStorage.setItem('category', '');
        window.sessionStorage.setItem('tasks', '');
        setTimeout(() => { callback(this.isLogin) }, 100);
    },
    isAuth: function () {
        return Boolean(this.isLogin || window.sessionStorage.getItem('user'));
    }
};