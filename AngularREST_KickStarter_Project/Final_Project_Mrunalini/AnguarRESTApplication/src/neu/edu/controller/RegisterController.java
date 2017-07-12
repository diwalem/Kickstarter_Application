package neu.edu.controller;

import java.util.Date;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.bean.UserRegistrationBean;
import neu.edu.controller.error.ResponseError;
import neu.edu.service.RegisterService;
import neu.edu.service.UserService;

@Controller
@Path("/registration")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class RegisterController {
	
	@Autowired
	private RegisterService registerService;

	@POST
	public Response registerUser(UserRegistrationBean userRegistrationBean) {
		
		String status = registerService.createUser(userRegistrationBean);
	
		if (status == null || !status.equals("success")) {
			
			
			ResponseError registerResponseErr = new ResponseError();
			registerResponseErr.setMessage("Insertion failed");
			
			
			
			return Response.ok().status(422).entity(registerResponseErr).build();
			
			
		} else {
			//String key = generateKey();
			//UserSessionInfo userSessionInfo = userService.fetchUserAccountDetails(userId);

			ResponseError registerResponseErr = new ResponseError();
			registerResponseErr.setMessage("Insertion successful");
			
			
			
			
			return Response.ok().status(200).entity(registerResponseErr).build();
					
		}

	}

	private String generateKey() {
		Random rand = new Random();

		int n = rand.nextInt(50) + 1;

		return n + (new Date().toString());
	}


	

}
