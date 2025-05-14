/**
 * @author Yujing Zhang / U7671098
 **/
public abstract class User {
    protected Long userId;
    protected String username;
    protected String password;

    // Constructor
    public User(Long userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    // Common methods for all users
    public void login() {
        System.out.println(username + " has logged in.");
    }

    public void logout() {
        System.out.println(username + " has logged out.");
    }

    public void changePassword(String newPassword) {
        this.password = newPassword;
        System.out.println(username + " has changed their password.");
    }

    // Abstract methods for subclass-specific implementations
    public abstract void browseArticles(); // Browsing articles
    public abstract void useChatbot(String query); // Using the chatbot
}
