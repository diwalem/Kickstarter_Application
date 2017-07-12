package neu.edu.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import neu.edu.bean.UserProjectBean;
import neu.edu.bean.UserRegistrationBean;
import neu.edu.entity.DonorServices;
import neu.edu.entity.ProjectDeleteReason;
import neu.edu.entity.UserAccount;
import neu.edu.entity.UserCategory;
import neu.edu.entity.UserProject;
import neu.edu.entity.UserProjectId;
import neu.edu.entity.UserProjects;
import neu.edu.entity.UserServices;
import neu.edu.service.UserService;

@Repository
public class UserDAO {

	@Autowired
	private SessionFactory sessionFactory;

	
	public UserAccount validateUser(String username, String password) {
		
		
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from UserAccount where userName=:username and password=:password ");
		query.setString("username", username);
		query.setString("password", password.hashCode()+"");

		UserAccount user = (UserAccount) query.uniqueResult();

		return user;

	}
	
	@Transactional
	public UserAccount createUser(UserAccount userAccount) {
		Session session = sessionFactory.openSession();
		session.save(userAccount);
		return userAccount;
	}

	public UserAccount fetchUserAccount(Integer userId) {
		Session session = sessionFactory.openSession();
		return session.load(UserAccount.class, userId);
	}


	/*@Transactional
	public boolean updateProject(UserProjectBean userProjectBean, Integer userId) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		
		UserProjectId userProjectId = new UserProjectId(userId, userProjectBean.getName());
		UserProject userProject = new UserProject();
		userProject.setId(userProjectId);
		userProject.setDescription(userProjectBean.getDesc());
		
		session.saveOrUpdate(userProject);
		session.flush();

		return true;
	}*/
	
	@Transactional
	public List<UserProjects> getAllProjects(Integer categoryId) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		//return session.createQuery(" from UserProjects")
		return session.createQuery(" from UserProjects where userCategory.categoryId = :categoryId")
			   .setParameter("categoryId", categoryId)
			    .list();

	}
	
	@Transactional
	public List<UserCategory> getAllCategories() {
		// TODO Auto-generated method stub
	//	System.out.println("user Dao User ID-->" + userId);
		
		Session session = sessionFactory.openSession();
		//return session.createQuery(" from UserCategory where userAccount.id = :userid")
		return session.createQuery(" from UserCategory")
			   // .setParameter("userid", userId)
			    .list();

	}
	
	@Transactional
	public List<UserServices> getAllServices(Integer projectId) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		//return session.createQuery(" from UserProjects")
		return session.createQuery(" from UserServices where userProjects.projectId = :projectId")
			   .setParameter("projectId", projectId)
			    .list();

	}
	
	@Transactional
	public String createCategory(UserCategory userCategory)
	{
		try
		{
		String msg="success";
		Session session = sessionFactory.openSession();
		session.save(userCategory);
		return msg;
		}
		catch(Exception e)
		{
			return e.getMessage();
		}
		
		
	}
	
	@Transactional
	public UserProjects createProject(UserProjects userProjects)
	{
		Session session = sessionFactory.openSession();
		session.save(userProjects);
		return userProjects;
		
	}
	
	@Transactional
	public UserServices createService(UserServices userServices)
	{
		Session session = sessionFactory.openSession();
		session.save(userServices);
		return userServices;
		
	}
	
	@Transactional
	public UserCategory updateCategory(UserCategory userCategory) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		session.saveOrUpdate(userCategory);
		session.flush();

		return userCategory;
	}
	
	@Transactional
	public String  deleteCategory(UserCategory userCategory) {
		// TODO Auto-generated method stub
		try
		{
		String msg="success";
		Session session = sessionFactory.openSession();
		session.delete(userCategory);
		session.flush();

		return msg;
		}
		catch(Exception e)
		{
			return e.getMessage();
		}
	}

	@Transactional
	public DonorServices addCard(DonorServices donorServices, Double serviceAmount, Integer projectId) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		session.save(donorServices);
		
		//update remaining balance
		
		String hql = "UPDATE UserProjects set remainingAmount = remainingAmount-:serviceAmount "  + 
	             "WHERE projectId = :projectId";
		Query query = session.createQuery(hql);
		query.setParameter("serviceAmount", serviceAmount);
		query.setParameter("projectId", projectId);
		int result = query.executeUpdate();
		System.out.println("Rows affected: " + result);
		
		
		
		return donorServices;
		
	}
	@Transactional
	public ProjectDeleteReason deleteProject(ProjectDeleteReason projectDeleteReason, Integer projectId) {
		Session session = sessionFactory.openSession();
		session.save(projectDeleteReason);
		
		String hql = "UPDATE UserProjects set endDate = :endDate "  + 
	             "WHERE projectId = :projectId";

		Query query = session.createQuery(hql);
		query.setParameter("endDate", new Date());
		query.setParameter("projectId", projectId);
		int result = query.executeUpdate();
		System.out.println("Rows affected: " + result);
		return projectDeleteReason;
	}


}
