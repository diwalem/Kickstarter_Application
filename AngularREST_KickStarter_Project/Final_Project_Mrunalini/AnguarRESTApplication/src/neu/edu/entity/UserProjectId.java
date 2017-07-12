package neu.edu.entity;
// Generated Apr 27, 2017 1:40:37 AM by Hibernate Tools 5.2.1.Final

/**
 * UserProjectId generated by hbm2java
 */
public class UserProjectId implements java.io.Serializable {

	private int userId;
	private String name;

	public UserProjectId() {
	}

	public UserProjectId(int userId, String name) {
		this.userId = userId;
		this.name = name;
	}

	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserProjectId))
			return false;
		UserProjectId castOther = (UserProjectId) other;

		return (this.getUserId() == castOther.getUserId())
				&& ((this.getName() == castOther.getName()) || (this.getName() != null && castOther.getName() != null
						&& this.getName().equals(castOther.getName())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getUserId();
		result = 37 * result + (getName() == null ? 0 : this.getName().hashCode());
		return result;
	}

}