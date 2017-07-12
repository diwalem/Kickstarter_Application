package neu.edu.bean;

public class UserServiceBean {
	
	private Integer serviceId;
	private String serviceDesc;
	private Double serviceAmount;
	private String serviceStatus;
	
	public UserServiceBean() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public UserServiceBean(Integer serviceId, String serviceDesc, Double serviceAmount, String serviceStatus) {
		super();
		this.serviceId = serviceId;
		this.serviceDesc = serviceDesc;
		this.serviceAmount = serviceAmount;
		this.serviceStatus = serviceStatus;
		
	}



	public Integer getServiceId() {
		return serviceId;
	}



	public void setServiceId(Integer serviceId) {
		this.serviceId = serviceId;
	}



	public String getServiceDesc() {
		return serviceDesc;
	}



	public void setServiceDesc(String serviceDesc) {
		this.serviceDesc = serviceDesc;
	}



	public Double getServiceAmount() {
		return serviceAmount;
	}



	public void setServiceAmount(Double serviceAmount) {
		this.serviceAmount = serviceAmount;
	}



	public String getServiceStatus() {
		return serviceStatus;
	}



	public void setServiceStatus(String serviceStatus) {
		this.serviceStatus = serviceStatus;
	}
	
	


}
