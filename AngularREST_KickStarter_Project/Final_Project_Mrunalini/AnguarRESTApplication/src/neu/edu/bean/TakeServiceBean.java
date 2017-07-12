package neu.edu.bean;

public class TakeServiceBean {
	
	private String cardNo;
	private Integer cvv;
	private String expiry;
	
	
	public TakeServiceBean() {
		// TODO Auto-generated constructor stub
	}
	
	public TakeServiceBean(String cardNo, Integer cvv, String expiry) {
		super();
		this.cardNo = cardNo;
		this.cvv = cvv;
		this.expiry = expiry;
		
	}

	

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public Integer getCvv() {
		return cvv;
	}

	public void setCvv(Integer cvv) {
		this.cvv = cvv;
	}

	public String getExpiry() {
		return expiry;
	}

	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	
	
	
	

}

