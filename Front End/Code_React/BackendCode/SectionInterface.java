/**
 * @author Yujing Zhang / U7671098
 **/
public interface SectionInterface {
    void addSection(String name, Section parentSection);
    void editSection(Long sectionId, String newName);
    void deleteSection(Long sectionId);
    Section getParentSection(Long sectionId);
}