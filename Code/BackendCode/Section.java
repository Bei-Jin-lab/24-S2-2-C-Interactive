/**
 * @author Yujing Zhang / U7671098
 **/
public class Section implements SectionInterface {
    private Long sectionId;
    private String name;
    private Section parentSection;

    // Constructor
    public Section(Long sectionId, String name, Section parentSection) {
        this.sectionId = sectionId;
        this.name = name;
        this.parentSection = parentSection;
    }

    @Override
    public void addSection(String name, Section parentSection) {
        this.sectionId = generateSectionId();
        this.name = name;
        this.parentSection = parentSection;
        System.out.println("Section " + name + " added.");
    }

    @Override
    public void editSection(Long sectionId, String newName) {
        if (this.sectionId.equals(sectionId)) {
            this.name = newName;
            System.out.println("Section with ID " + sectionId + " renamed to " + newName);
        }
    }

    @Override
    public void deleteSection(Long sectionId) {
        if (this.sectionId.equals(sectionId)) {
            // Code to delete the section, usually handled by a repository or service layer
            System.out.println("Section with ID " + sectionId + " deleted.");
        }
    }

    @Override
    public Section getParentSection(Long sectionId) {
        if (this.sectionId.equals(sectionId)) {
            return this.parentSection;
        }
        return null;
    }

    private Long generateSectionId() {
        // Simulated ID generation, replace with actual implementation
        return System.currentTimeMillis();
    }

    // Additional getters and setters as needed
}
