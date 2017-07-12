package neu.edu.controller;

import java.util.Date;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import neu.edu.bean.UserAccountBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.bean.UserSessionInfo;
import neu.edu.controller.error.ResponseError;
import neu.edu.controller.input.UserLoginBean;
import neu.edu.service.ProjectService;
import neu.edu.service.UserService;

@Controller
@Path("/user/{userId}/addProj/{categoryId}")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AddProjectController {

	@Autowired
	private ProjectService projectService;

	@POST
	public Response addProject(UserProjectBean userProjectBean,@PathParam("userId") String id,@PathParam("categoryId") Integer categoryId) {
		
		String status = projectService.addProject(userProjectBean,id, categoryId);
		System.out.println("Status-->" + status);
		
		if (status == null || !status.equals("success")) {
			
			
			ResponseError addProjectResponseErr = new ResponseError();
			addProjectResponseErr.setMessage("Insertion failed");
			
			
			
			return Response.ok().status(422).entity(addProjectResponseErr).build();
			
			
		} else {
			//String key = generateKey();
			//UserSessionInfo userSessionInfo = userService.fetchUserAccountDetails(userId);

			ResponseError addProjectResponseErr = new ResponseError();
			addProjectResponseErr.setMessage("Insertion successful");
			
			
			
			
			return Response.ok().status(200).entity(addProjectResponseErr).build();
					
		}

	}

	private String generateKey() {
		Random rand = new Random();

		int n = rand.nextInt(50) + 1;

		return n + (new Date().toString());
	}


	

}

