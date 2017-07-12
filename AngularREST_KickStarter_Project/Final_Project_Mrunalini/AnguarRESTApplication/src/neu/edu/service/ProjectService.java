package neu.edu.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import neu.edu.bean.ReasonForDeleteBean;
import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.dao.UserDAO;
import neu.edu.entity.ProjectDeleteReason;
import neu.edu.entity.UserAccount;
import neu.edu.entity.UserCategory;
import neu.edu.entity.UserProject;
import neu.edu.entity.UserProjects;

@Service
public class ProjectService {
	
	@Autowired
	private UserDAO userDao;
	
	
	/*public boolean addProject(UserProjectBean userProjectBean,Integer userId){
		return userDAO.addProject(userProjectBean, userId);
	}*/
	
	public String addProject(UserProjectBean userProjectBean, String userId, Integer categoryId) {

		UserProjects userProjects = new UserProjects();
		
		UserAccount userAccount = new UserAccount(); // Since user_id is foreign key in user_category table
		userAccount.setId(Integer.parseInt(userId));
		userProjects.setUserAccount(userAccount);
		userProjects.setProjectName(userProjectBean.getProjectName());
		userProjects.setProjectDesc(userProjectBean.getProjectDesc());
		userProjects.setCreatedOn(new Date());
		userProjects.setProjectStatus(userProjectBean.getProjectStatus());
		userProjects.setProjectAmount(userProjectBean.getProjectAmount());
		userProjects.setRemainingAmount(userProjectBean.getProjectAmount());
		userProjects.setEndDate(stringToDate(userProjectBean.getEndDate(),"yyyy-MM-dd HH:mm:ss"));
		
		UserCategory userCategory = new UserCategory();
		userCategory.setCategoryId(categoryId);
		userProjects.setUserCategory(userCategory);
		
		userProjects = userDao.createProject(userProjects);
		
		if(userProjects==null)
		{
			
			return "fail";
		}
		else
		{
			
			return "success";
		}
		
	}

	/*public boolean updateProject(UserProjectBean userProjectBean, Integer userId) {
		// TODO Auto-generated method stub
		return userDAO.updateProject(userProjectBean, userId);
	}*/
	
	@Transactional
	public List<UserProjectBean> getAllProject(Integer categoryId) {
		// TODO Auto-generated method stub
		List<UserProjects> userProjects = userDao.getAllProjects(categoryId);
		
		List<UserProjectBean> response = new ArrayList<>();
		for(UserProjects userProject:userProjects){
			UserProjectBean userProjectBean = new UserProjectBean();
			userProjectBean.setProjectId(userProject.getProjectId());
			userProjectBean.setProjectName(userProject.getProjectName());
			userProjectBean.setProjectDesc(userProject.getProjectDesc());
			//TODO change accordingly
			String status="Inactive";
		/*	if(userProject.getEndDate()> new Date())
			{
				status="Active";
			}*/
			
			int compare = new Date().compareTo(userProject.getEndDate());
			if (compare < 0) {
				status="Active";
			} else {
				status="Inactive";
			}
			
			//userProjectBean.setCreatedOn(userProject.getCreatedOn());
			userProjectBean.setEndDate(dateToString(userProject.getEndDate(),"yyyy-MM-dd HH:mm:ss"));
			userProjectBean.setProjectAmount(userProject.getProjectAmount());
			userProjectBean.setRemainingAmount(userProject.getRemainingAmount());
			userProjectBean.setProjectStatus(status);
			
			response.add(userProjectBean);
		}
		return response;
	}
	
	public String dateToString(Date date, String format)
	{
		String dateAsString="";
		SimpleDateFormat sdf = new SimpleDateFormat(format);

		if (date != null) {
			dateAsString = sdf.format(date);
		}
		return dateAsString;
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
	
	public String deleteProject(ReasonForDeleteBean reasonForDeleteBean, Integer projectId) {

		ProjectDeleteReason projectDeleteReason = new ProjectDeleteReason();
		
		UserProjects userProjects = new UserProjects(); 
		userProjects.setProjectId(projectId);
		projectDeleteReason.setUserProjects(userProjects);
		projectDeleteReason.setReason(reasonForDeleteBean.getReason());
		projectDeleteReason.setComments(reasonForDeleteBean.getComment());
		
		projectDeleteReason = userDao.deleteProject(projectDeleteReason,projectId);
		
		if(projectDeleteReason==null)
		{
			
			return "Delete failed";
		}
		else
		{
			
			return "success";
		}
		
	}
	

}
