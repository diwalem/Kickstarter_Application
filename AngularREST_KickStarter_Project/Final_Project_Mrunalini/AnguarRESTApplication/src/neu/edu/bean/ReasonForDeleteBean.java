package neu.edu.bean;

public class ReasonForDeleteBean {

	private String reason;
	private String comment;
	
	public ReasonForDeleteBean()
	{
		
	}
	
	public ReasonForDeleteBean(String reason, String comment) {
		super();
		this.reason = reason;
		this.comment = comment;
	}


	public String getReason() {
		return reason;
	}


	public void setReason(String reason) {
		this.reason = reason;
	}


	public String getComment() {
		return comment;
	}


	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
	
}
