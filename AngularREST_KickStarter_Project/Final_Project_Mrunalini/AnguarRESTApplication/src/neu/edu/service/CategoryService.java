package neu.edu.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.dao.UserDAO;
import neu.edu.entity.UserAccount;
import neu.edu.entity.UserCategory;
import neu.edu.entity.UserProject;
import neu.edu.entity.UserProjects;

@Service
public class CategoryService {
	
	@Autowired
	private UserDAO userDao;
	
	public String addCategory(UserCategoryBean userCategoryBean, String userId) {

		UserCategory userCategory = new UserCategory();
		
		UserAccount userAccount = new UserAccount(); // Since user_id is foreign key in user_category table
		userAccount.setId(Integer.parseInt(userId));
		userCategory.setUserAccount(userAccount);
		userCategory.setCategoryName(userCategoryBean.getCategoryName());
		userCategory.setCategoryDesc(userCategoryBean.getCategoryDesc());
		userCategory.setCategoryStatus(userCategoryBean.getCategoryStatus());

		System.out.println("UserService Category Insertion");
		String msg = userDao.createCategory(userCategory);
		
		if(!msg.equalsIgnoreCase("success"))
		{
			
			return "Add failed";
		}
		else
		{
			
			return "success";
		}
		
		
	}
	
	
	@Transactional
	public List<UserCategoryBean> getAllCategory() {
		// TODO Auto-generated method stub
		//System.out.println("User ID-->" + userId);
		List<UserCategory> usercategories = userDao.getAllCategories();
		//System.out.println("Before User ID-->" + userId);
		
		List<UserCategoryBean> response = new ArrayList<>();
		for(UserCategory userCategory:usercategories){
			
			UserCategoryBean userCategoryBean = new UserCategoryBean();
			userCategoryBean.setCategoryName(userCategory.getCategoryName());
			userCategoryBean.setCategoryDesc(userCategory.getCategoryDesc());
			userCategoryBean.setCategoryStatus(userCategory.getCategoryStatus());
			userCategoryBean.setCategoryId(userCategory.getCategoryId());
			
			response.add(userCategoryBean);
		}
		return response;
	}
	
	public String updateCategory(UserCategoryBean userCategoryBean, String userId, Integer categoryId) {

		UserCategory userCategory = new UserCategory();
		
		UserAccount userAccount = new UserAccount(); // Since user_id is foreign key in user_category table
		userAccount.setId(Integer.parseInt(userId));
		userCategory.setCategoryId(categoryId);
		userCategory.setUserAccount(userAccount);
		userCategory.setCategoryName(userCategoryBean.getCategoryName());
		userCategory.setCategoryDesc(userCategoryBean.getCategoryDesc());
		userCategory.setCategoryStatus("Inactive");
		
		userCategory = userDao.updateCategory(userCategory);
		
		if(userCategory==null)
		{
			
			return "fail";
		}
		else
		{
			
			return "success";
		}
		
	}
	
	public String deleteCategory(UserCategoryBean userCategoryBean, String userId, Integer categoryId) {

		UserCategory userCategory = new UserCategory();
		
		UserAccount userAccount = new UserAccount(); // Since user_id is foreign key in user_category table
		userAccount.setId(Integer.parseInt(userId));
		userCategory.setCategoryId(categoryId);
		userCategory.setCategoryName(userCategoryBean.getCategoryName());
		userCategory.setCategoryDesc(userCategoryBean.getCategoryDesc());
		
		String msg = userDao.deleteCategory(userCategory);
		
		if(!msg.equalsIgnoreCase("success"))
		{
			
			return "Delete failed";
		}
		else
		{
			
			return "success";
		}
		
	}
	
}