/**
 * @author Yujing Zhang / U7671098
 **/
public class ChatbotHistoryLog implements Log {
        private Long logId;
        private String userId;
        private String queryText;
        private String responseText;
        private String timestamp;

        public ChatbotHistoryLog(Long logId, String userId, String queryText, String responseText, String timestamp) {
            this.logId = logId;
            this.userId = userId;
            this.queryText = queryText;
            this.responseText = responseText;
            this.timestamp = timestamp;
        }

        @Override
        public Long getLogId() {
            return logId;
        }

        @Override
        public String getUserId() {
            return userId;
        }

        @Override
        public String getLogDetails() {
            return "ChatbotHistoryLog [Query: " + queryText + ", Response: " + responseText + ", Timestamp: " + timestamp + "]";
        }

    @Override
    public void log() {

    }
}
