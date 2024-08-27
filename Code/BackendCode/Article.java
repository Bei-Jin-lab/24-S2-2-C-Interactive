import java.util.Date;

/**
 * @author Yujing Zhang / U7671098
 **/
public class Article implements ArticleInterface {
    private Long articleId;
    private String title;
    private String content;
    private Date createdDate;
    private Date updatedDate;
    private User author;
    private ArticleStatus status;
    private Section section;

    // Enum for Article status


    // Constructor
    public Article(Long articleId, String title, String content, User author, Section section) {
        this.articleId = articleId;
        this.title = title;
        this.content = content;
        this.author = author;
        this.section = section;
        this.createdDate = new Date();  // Sets the current date
        this.status = ArticleStatus.DRAFT;
    }

    @Override
    public void createArticle(String title, String content, User author, Section section) {
        // Code to create an article, generally handled by constructor or factory
        this.articleId = generateArticleId();
        this.title = title;
        this.content = content;
        this.author = author;
        this.section = section;
        this.createdDate = new Date();
        this.status = ArticleStatus.DRAFT;
    }

    @Override
    public void editArticle(Long articleId, String newTitle, String newContent) {
        if (this.articleId.equals(articleId)) {
            this.title = newTitle;
            this.content = newContent;
            this.updatedDate = new Date();
        }
    }

    @Override
    public void deleteArticle(Long articleId) {
        if (this.articleId.equals(articleId)) {
            // Code to delete the article, usually handled by a repository or service layer
            System.out.println("Article with ID " + articleId + " deleted.");
        }
    }

    @Override
    public void publishArticle(Long articleId) {
        if (this.articleId.equals(articleId)) {
            this.status = ArticleStatus.PUBLISHED;
            this.updatedDate = new Date();
            System.out.println("Article with ID " + articleId + " published.");
        }
    }

    @Override
    public void updateArticleStatus(Long articleId, ArticleStatus status) {
        if (this.articleId.equals(articleId)) {
            this.status = status;
            this.updatedDate = new Date();
        }
    }

    private Long generateArticleId() {
        // Simulated ID generation, replace with actual implementation
        return System.currentTimeMillis();
    }

    // Additional getters and setters as needed
}
