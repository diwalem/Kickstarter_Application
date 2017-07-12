package neu.edu.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import neu.edu.bean.UserRegistrationBean;
import neu.edu.dao.UserDAO;
import neu.edu.entity.UserAccount;

@Service
public class RegisterService {

	@Autowired
	private UserDAO userDao;

	public String createUser(UserRegistrationBean userRegistrationBean) {

		UserAccount userAccount = new UserAccount();
		userAccount.setName(userRegistrationBean.getFirstName());
		userAccount.setLastName(userRegistrationBean.getLastName());
		userAccount.setUserName(userRegistrationBean.getUsername());
		userAccount.setPassword(userRegistrationBean.getPassword().hashCode()+"");
		userAccount.setEmail(userRegistrationBean.getEmail());
		userAccount.setPhone(userRegistrationBean.getPhone());
		userAccount.setTitle(userRegistrationBean.getTitle());
		userAccount.setRole(userRegistrationBean.getRole());
		
		
		// 2017-12-31
	/*	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		if (userRegistrationBean.getDob() != null) {
			try {
				userAccount.setAge(sdf.parse(userRegistrationBean.getDob()));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}*/
		userAccount = userDao.createUser(userAccount);
		
		if(userAccount==null)
		{
			
			return "fail";
		}
		else
		{
			
			return "success";
		}

		
	}

}
