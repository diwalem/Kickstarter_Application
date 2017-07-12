package neu.edu.bean;

public class UserRegistrationBean {
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	private String email;
	private String phone;
	private String title;
	private String role;
	//private String dob;
	
	
	
	public UserRegistrationBean() {
		// TODO Auto-generated constructor stub
	}
	


	public UserRegistrationBean(String firstName,String lastName, String username, String password, String email, String phone, String title, String role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.title = title;
		this.role = role;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}

	

	
	

}
