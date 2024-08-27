/**
 * @author Yujing Zhang / U7671098
 **/
public class OperationLog implements Log {
    private Long logId;
    private String userId;
    private OperationType operationType;
    private OperationTarget operationTarget; // Add operation target type (ARTICLE or SECTION)
    private String targetId; // The ID of the specific article or section
    private String operationDetails;
    private String timestamp;

    // Enum for the type of operation
    public enum OperationType {
        CREATE_DRAFT,   // Creating a draft article
        PUBLISH,        // Publishing an article
        EDIT,           // Editing an article or section
        DELETE,         // Deleting an article or section
        ADD_SECTION,    // Adding a new section
        EDIT_SECTION,   // Editing an existing section
        DELETE_SECTION; // Deleting a section
    }

    // Enum for the target of the operation
    public enum OperationTarget {
        ARTICLE,    // Operation on an article
        SECTION;    // Operation on a section
    }

    // Constructor
    public OperationLog(Long logId, String userId, OperationType operationType, OperationTarget operationTarget, String targetId, String operationDetails, String timestamp) {
        this.logId = logId;
        this.userId = userId;
        this.operationType = operationType;
        this.operationTarget = operationTarget;
        this.targetId = targetId;
        this.operationDetails = operationDetails;
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
        return "OperationLog [Operation: " + operationType + ", Target: " + operationTarget + " (ID: " + targetId + "), Details: " + operationDetails + ", Timestamp: " + timestamp + "]";
    }

    @Override
    public void log() {
        // Implementation of the logging action, e.g., saving to a database or printing to a console
        System.out.println(getLogDetails());
    }

    // Getters and setters (if necessary)
    public OperationType getOperationType() {
        return operationType;
    }

    public OperationTarget getOperationTarget() {
        return operationTarget;
    }

    public String getTargetId() {
        return targetId;
    }

    public String getOperationDetails() {
        return operationDetails;
    }

    public String getTimestamp() {
        return timestamp;
    }
}
