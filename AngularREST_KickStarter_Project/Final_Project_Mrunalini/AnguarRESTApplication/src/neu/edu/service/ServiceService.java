package neu.edu.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.bean.UserServiceBean;
import neu.edu.dao.UserDAO;
import neu.edu.entity.UserAccount;
import neu.edu.entity.UserCategory;
import neu.edu.entity.UserProject;
import neu.edu.entity.UserProjects;
import neu.edu.entity.UserServices;

@Service
public class ServiceService {
	
	@Autowired
	private UserDAO userDao;
	
	@Transactional
	public List<UserServiceBean> getAllService(Integer projectId) {
		// TODO Auto-generated method stub
		
		List<UserServices> userServices = userDao.getAllServices(projectId);
		
		List<UserServiceBean> response = new ArrayList<>();
		
		for(UserServices userService:userServices){
			
			UserServiceBean userServiceBean = new UserServiceBean();
			userServiceBean.setServiceDesc(userService.getServiceDesc());
			userServiceBean.setServiceAmount(userService.getServiceAmount());
			userServiceBean.setServiceId(userService.getServiceId());
			
			
			String status="Inactive";
			/*	if(userProject.getEndDate()> new Date())
				{
					status="Active";
				}*/
				
				int compare = new Date().compareTo(userService.getServiceEndDate());
				if (compare < 0) {
					status="Active";
				} else {
					status="Inactive";
				}
				
				userServiceBean.setServiceStatus(status);
						
			response.add(userServiceBean);
		}
		return response;

	}
	
	public String addService(UserServiceBean userServiceBean, String userId, Integer projectId, String endDate) {

		UserServices userServices = new UserServices();
		
		userServices.setServiceId(userServiceBean.getServiceId());
		userServices.setServiceDesc(userServiceBean.getServiceDesc());
		userServices.setServiceAmount(userServiceBean.getServiceAmount());
		userServices.setServiceEndDate(stringToDate(endDate,"yyyy-MM-dd HH:mm:ss"));
		
		
		UserProjects userProjects = new UserProjects();
		userProjects.setProjectId(projectId);
		userServices.setUserProjects(userProjects);
		
		
		userServices = userDao.createService(userServices);
		
		if(userServices==null)
		{
			
			return "fail";
		}
		else
		{
			
			return "success";
		}
		
	}
	
	public Date stringToDate(String dateAsString, String format)
	{
		Date date=null;
		SimpleDateFormat sdf = new SimpleDateFormat(format);

		if (dateAsString != null) {
			try {
				date = sdf.parse(dateAsString);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return date;
	}
	
}