package neu.edu.bean;

public class UserCategoryBean {
	
	private Integer categoryId;
	private String categoryName;
	private String categoryDesc;
	private String categoryStatus;
	
	public UserCategoryBean() {
		// TODO Auto-generated constructor stub
	}
	
	public UserCategoryBean(Integer categoryId, String categoryName, String categoryDesc, String categoryStatus) {
		super();
		this.categoryName = categoryName;
		this.categoryDesc = categoryDesc;
		this.categoryStatus = categoryStatus;
		this.categoryId = categoryId;
	}
	
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getCategoryDesc() {
		return categoryDesc;
	}
	public void setCategoryDesc(String categoryDesc) {
		this.categoryDesc = categoryDesc;
	}
	public String getCategoryStatus() {
		return categoryStatus;
	}
	public void setCategoryStatus(String categoryStatus) {
		this.categoryStatus = categoryStatus;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}
	
	

}
