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

import neu.edu.bean.ReasonForDeleteBean;
import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.controller.error.ResponseError;
import neu.edu.service.CategoryService;
import neu.edu.service.ProjectService;
import neu.edu.service.UserService;

@Controller
@Path("/projectId/{projectId}")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ReasonForDeleteController {

	@Autowired
	private ProjectService projectService;

	@POST
	public Response deleteProject(ReasonForDeleteBean reasonForDeleteBean,@PathParam("projectId") Integer projectId) {
		
		String status = projectService.deleteProject(reasonForDeleteBean,projectId);
		
		if (status == null || !status.equals("success")) {
			
			
			ResponseError reasonForDeleteResponseErr = new ResponseError();
			reasonForDeleteResponseErr.setMessage("Delete failed");
			
			
			
			return Response.ok().status(422).entity(reasonForDeleteResponseErr).build();
			
			
		} else {
			//String key = generateKey();
			//UserSessionInfo userSessionInfo = userService.fetchUserAccountDetails(userId);

			ResponseError reasonForDeleteResponseErr = new ResponseError();
			reasonForDeleteResponseErr.setMessage("Deletion successful");
			
			
			
			
			return Response.ok().status(200).entity(reasonForDeleteResponseErr).build();
					
		}

	}

	private String generateKey() {
		Random rand = new Random();

		int n = rand.nextInt(50) + 1;

		return n + (new Date().toString());
	}


	

}


