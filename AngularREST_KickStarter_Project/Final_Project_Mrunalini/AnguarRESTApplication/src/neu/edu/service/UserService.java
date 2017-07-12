package neu.edu.service;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import neu.edu.bean.TakeServiceBean;
import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.bean.UserSessionInfo;
import neu.edu.dao.UserDAO;
import neu.edu.entity.DonorServices;
import neu.edu.entity.DonorServicesId;
import neu.edu.entity.UserAccount;
import neu.edu.entity.UserCategory;
import neu.edu.entity.UserProject;
import neu.edu.entity.UserServices;

@Service
public class UserService {
	
	@Autowired
	private UserDAO userDao;
	
	
	public Integer validateUser(String username,String password){
		System.out.println("Service is called Called");
		UserAccount user = userDao.validateUser(username,password);
		
		if (user == null) {
			System.out.println("User Not Found");
			return null;
		} else {
			System.out.println("User  Found");
			return user.getId();
		}
	}
	
/*	public String addProject(UserProjectBean userProjectBean, String userId) {

		UserCategory userCategory = new UserCategory();
		//userCategory.setCategoryId(1);
		UserAccount userAccount = new UserAccount();
		userAccount.setId(Integer.parseInt(userId));
		
	
		userCategory.setUserAccount(userAccount);
		userCategory.setCategoryName(userProjectBean.getName());;
		userCategory.setCategoryDesc(userProjectBean.getDesc());
		System.out.println("User Id-->" + userId);
		

		//userCategory = userDao.createCategory(userCategory);
		
		if(userCategory==null)
		{
			
			return "fail";
		}
		else
		{
			
			return "success";
		}
		
	}*/
	
	

	public UserSessionInfo fetchUserAccountDetails(Integer userId) {
		// TODO Auto-generated method stub
		UserSessionInfo userSessionInfo=null;
		
		UserAccount userAccount = userDao.fetchUserAccount(userId);
		if(userAccount!=null){
			userSessionInfo = new UserSessionInfo(userAccount.getId());
			userSessionInfo.setName(userAccount.getName());
			userSessionInfo.setRole(userAccount.getRole());
			System.out.println("UserService-> Role"+ userAccount.getRole());
			userSessionInfo.getUserInformationBean().setUserName(userAccount.getUserName()); 
		}
		
		System.out.println(userAccount.getName());
	/*	Iterator<UserProject> userProjectIterator = userAccount.getUserProjects().iterator();
		
		while(userProjectIterator.hasNext()){
			UserProject userProject = userProjectIterator.next();
			UserProjectBean userProjectBean = new UserProjectBean(userProject.getP, userProject.getDescription());
			userSessionInfo.getUserProjectBeans().add(userProjectBean);
			System.out.println(userProject.getId().getName());
		}*/
		return userSessionInfo;
	}

	public String addCard(TakeServiceBean takeServiceBean, String userId, Integer projectId, Integer serviceId, Double serviceAmount) {

		UserAccount userAccount = new UserAccount();
		userAccount.setId(Integer.parseInt(userId));
		
		UserServices userServices = new UserServices();
		userServices.setServiceId(serviceId);
		
		
		DonorServices donorServices = new DonorServices();
		
		donorServices.setUserAccount(userAccount);
		donorServices.setUserServices(userServices);
		donorServices.setCardNo(takeServiceBean.getCardNo());
		donorServices.setCvv(takeServiceBean.getCvv());
		donorServices.setExpiry(takeServiceBean.getExpiry());
		
		donorServices = userDao.addCard(donorServices,serviceAmount,projectId);
		
		if(donorServices==null)
		{
			
			return "fail";
		}
		else
		{
			
			return "success";
		}
		
	}


	
	

}
