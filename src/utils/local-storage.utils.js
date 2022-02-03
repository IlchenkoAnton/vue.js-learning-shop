import User from '../core/user';

class LocalStorageUtils {
    static userKey = 'user';
    
    static setUser(user) {
        localStorage.setItem(
            LocalStorageUtils.userKey,
            user.getUserString(),
        );
    }

    static getUser() {
        const userValue = localStorage.getItem(LocalStorageUtils.userKey);
        const userObj = userValue ? JSON.parse(userValue) : {};

        if (!userObj.id || !userObj.name || !userObj.token) {
            LocalStorageUtils.clearUser();
            
            return;
        }

        return new User(userObj.id, userObj.name, userObj.token);
    }

    static clearUser() {
        localStorage.removeItem(LocalStorageUtils.userKey);
    }
}

export default LocalStorageUtils;