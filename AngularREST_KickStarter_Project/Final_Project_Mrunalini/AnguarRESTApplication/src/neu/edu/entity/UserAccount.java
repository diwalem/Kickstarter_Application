package neu.edu.entity;
// Generated Apr 27, 2017 1:40:37 AM by Hibernate Tools 5.2.1.Final

import java.util.HashSet;
import java.util.Set;

/**
 * UserAccount generated by hbm2java
 */
public class UserAccount implements java.io.Serializable {

	private Integer id;
	private String userName;
	private String name;
	private String password;
	private String role;
	private String title;
	private String lastName;
	private String email;
	private String phone;
	private Set userProjectses = new HashSet(0);
	private Set userProjects = new HashSet(0);
	private UserInformation userInformation;
	private Set donorServiceses = new HashSet(0);
	private Set userCategories = new HashSet(0);

	public UserAccount() {
	}

	public UserAccount(String userName, String name, String password, String role, String title, String lastName,
			String email, String phone, Set userProjectses, Set userProjects, UserInformation userInformation,
			Set donorServiceses, Set userCategories) {
		this.userName = userName;
		this.name = name;
		this.password = password;
		this.role = role;
		this.title = title;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.userProjectses = userProjectses;
		this.userProjects = userProjects;
		this.userInformation = userInformation;
		this.donorServiceses = donorServiceses;
		this.userCategories = userCategories;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Set getUserProjectses() {
		return this.userProjectses;
	}

	public void setUserProjectses(Set userProjectses) {
		this.userProjectses = userProjectses;
	}

	public Set getUserProjects() {
		return this.userProjects;
	}

	public void setUserProjects(Set userProjects) {
		this.userProjects = userProjects;
	}

	public UserInformation getUserInformation() {
		return this.userInformation;
	}

	public void setUserInformation(UserInformation userInformation) {
		this.userInformation = userInformation;
	}

	public Set getDonorServiceses() {
		return this.donorServiceses;
	}

	public void setDonorServiceses(Set donorServiceses) {
		this.donorServiceses = donorServiceses;
	}

	public Set getUserCategories() {
		return this.userCategories;
	}

	public void setUserCategories(Set userCategories) {
		this.userCategories = userCategories;
	}

}
