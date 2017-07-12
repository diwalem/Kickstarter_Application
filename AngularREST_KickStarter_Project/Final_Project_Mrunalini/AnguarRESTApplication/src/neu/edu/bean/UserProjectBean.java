package neu.edu.bean;

import java.util.Date;

public class UserProjectBean {
	
	private Integer projectId;
	private String projectName;
	private String projectDesc;
	private String endDate;
	private String projectDuration;
	private String projectStatus;
	private Double projectAmount;
	private Double remainingAmount;
	
	
	public UserProjectBean() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public UserProjectBean(Integer projectId, String projectName, String projectDesc, String endDate, String projectDuration, String projectStatus, Double projectAmount, Double remainingAmount) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.projectDesc = projectDesc;
		this.endDate = endDate;
		this.projectDuration = projectDuration;
		this.projectStatus = projectStatus;
		this.projectAmount = projectAmount;
		this.remainingAmount = remainingAmount;
		
	}



	public String getProjectName() {
		return projectName;
	}



	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}



	public String getProjectDesc() {
		return projectDesc;
	}



	public void setProjectDesc(String projectDesc) {
		this.projectDesc = projectDesc;
	}

	



	public String getEndDate() {
		return endDate;
	}



	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}



	public String getProjectDuration() {
		return projectDuration;
	}



	public void setProjectDuration(String projectDuration) {
		this.projectDuration = projectDuration;
	}



	public String getProjectStatus() {
		return projectStatus;
	}



	public void setProjectStatus(String projectStatus) {
		this.projectStatus = projectStatus;
	}



	public Double getProjectAmount() {
		return projectAmount;
	}



	public void setProjectAmount(Double projectAmount) {
		this.projectAmount = projectAmount;
	}



	public Integer getProjectId() {
		return projectId;
	}



	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}



	public Double getRemainingAmount() {
		return remainingAmount;
	}



	public void setRemainingAmount(Double remainingAmount) {
		this.remainingAmount = remainingAmount;
	}

	

	

}
