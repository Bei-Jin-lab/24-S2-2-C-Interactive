import java.util.Date;

/**
 * @author Yujing Zhang / U7671098
 **/
public interface Log {
    Long getLogId();
    String getUserId();
    String getLogDetails();
    void log();//save to database
}
