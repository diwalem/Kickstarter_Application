package neu.edu.entity;
// Generated Apr 26, 2017 10:20:56 AM by Hibernate Tools 5.2.1.Final

/**
 * DonorServicesId generated by hbm2java
 */
public class DonorServicesId implements java.io.Serializable {

	private int serviceId;
	private int userId;

	public DonorServicesId() {
	}

	public DonorServicesId(int serviceId, int userId) {
		this.serviceId = serviceId;
		this.userId = userId;
	}

	public int getServiceId() {
		return this.serviceId;
	}

	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}

	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof DonorServicesId))
			return false;
		DonorServicesId castOther = (DonorServicesId) other;

		return (this.getServiceId() == castOther.getServiceId()) && (this.getUserId() == castOther.getUserId());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getServiceId();
		result = 37 * result + this.getUserId();
		return result;
	}

}
