/**
 * @author Yujing Zhang / U7671098
 **/
public interface ArticleInterface {
    void createArticle(String title, String content, User author, Section section);
    void editArticle(Long articleId, String newTitle, String newContent);
    void deleteArticle(Long articleId);
    void publishArticle(Long articleId);
    void updateArticleStatus(Long articleId, ArticleStatus status);
}
