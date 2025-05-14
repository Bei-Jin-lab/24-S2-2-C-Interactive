/**
 * @author Yujing Zhang / U7671098
 **/
public class LoginHistoryLog implements Log {
    private Long logId;           // Unique identifier for the log entry
    private String userId;        // The ID of the user who logged in
    private String loginTime;     // The timestamp of when the user logged in
    private String ipAddress;     // The IP address from which the user logged in
    private String status;        // Status of the login attempt (e.g., "Success", "Failure")

    // Constructor
    public LoginHistoryLog(Long logId, String userId, String loginTime, String ipAddress, String status) {
        this.logId = logId;
        this.userId = userId;
        this.loginTime = loginTime;
        this.ipAddress = ipAddress;
        this.status = status;
    }

    // Getters and Setters
    public Long getLogId() {
        return logId;
    }

    public void setLogId(Long logId) {
        this.logId = logId;
    }

    public String getUserId() {
        return userId;
    }

    @Override
    public String getLogDetails() {
        return "";
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(String loginTime) {
        this.loginTime = loginTime;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // Method to log the details (This could be expanded to save to a database)
    public void log() {
        System.out.println("Log ID: " + logId);
        System.out.println("User ID: " + userId);
        System.out.println("Login Time: " + loginTime);
        System.out.println("IP Address: " + ipAddress);
        System.out.println("Status: " + status);
        // Here you would add the logic to save this log to a database
    }
}
