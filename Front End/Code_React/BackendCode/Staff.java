/**
 * @author Yujing Zhang / U7671098
 **/
public class Staff extends User {
    // Constructor
    public Staff(Long userId, String username, String password) {
        super(userId, username, password);
    }

    @Override
    public void browseArticles() {
        // Implementation of browsing articles
        System.out.println(username + " is browsing articles.");
    }

    @Override
    public void useChatbot(String query) {
        // Implementation of using the chatbot
        System.out.println(username + " is using the chatbot with query: " + query);
    }

    // Staff-specific methods
    public void createArticle(String title, String content, Section section) {
        System.out.println("Creating article with title: " + title);
    }

    public void editArticle(Long articleId, String newTitle, String newContent) {
        System.out.println("Editing article with ID: " + articleId);
    }

    public void deleteArticle(Long articleId) {
        System.out.println("Deleting article with ID: " + articleId);
    }

    public void publishArticle(Long articleId) {
        System.out.println("Publishing article with ID: " + articleId);
    }

    public void addSection(String name, Section parentSection) {
        System.out.println("Adding section with name: " + name);
    }

    public void editSection(Long sectionId, String newName) {
        System.out.println("Editing section with ID: " + sectionId);
    }

    public void deleteSection(Long sectionId) {
        System.out.println("Deleting section with ID: " + sectionId);
    }

    public Section getParentSection(Long sectionId) {
        System.out.println("Getting parent section for section ID: " + sectionId);
        return null; // Replace with actual parent section retrieval logic
    }
}
