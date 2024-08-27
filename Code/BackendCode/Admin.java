/**
 * @author Yujing Zhang / U7671098
 **/
public class Admin extends User {

        // Constructor
        public Admin(Long userId, String username, String password) {
            super(userId, username, password);
        }

        @Override
        public void browseArticles() {
            System.out.println(username + " is browsing articles.");
        }

        @Override
        public void useChatbot(String query) {
            System.out.println(username + " is using the chatbot with query: " + query);
        }

        // Admin-specific method to change another user's password
        public void resetUserPassword(User user, String newPassword) {
            user.changePassword(newPassword);
            System.out.println("Admin " + username + " has reset the password for user " + user.username);
        }
    }
