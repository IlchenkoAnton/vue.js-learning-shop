class LocalStorageUtils {
    static userKey = 'user';
    
    static setUser(user) {
        localStorage.setItem(
            LocalStorageUtils.userKey,
            user.getUserString(),
        );
    }
}

export default LocalStorageUtils;