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
import neu.edu.bean.UserServiceBean;
import neu.edu.bean.UserSessionInfo;
import neu.edu.controller.error.ResponseError;
import neu.edu.controller.input.UserLoginBean;
import neu.edu.service.ProjectService;
import neu.edu.service.ServiceService;
import neu.edu.service.UserService;

@Controller
@Path("/user/{userId}/addService/{projectId}/addEndDate/{endDate}")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AddServiceController {

	@Autowired
	private ServiceService serviceService;

	@POST
	public Response addService(UserServiceBean userServiceBean,@PathParam("userId") String id,@PathParam("projectId") Integer projectId, @PathParam("endDate") String endDate) {
		
		String status = serviceService.addService(userServiceBean,id, projectId, endDate);
		System.out.println("Status-->" + status);
		
		if (status == null || !status.equals("success")) {
			
			
			ResponseError addServiceResponseErr = new ResponseError();
			addServiceResponseErr.setMessage("Insertion failed");
			
			
			
			return Response.ok().status(422).entity(addServiceResponseErr).build();
			
			
		} else {
			//String key = generateKey();
			//UserSessionInfo userSessionInfo = userService.fetchUserAccountDetails(userId);

			ResponseError addServiceResponseErr = new ResponseError();
			addServiceResponseErr.setMessage("Insertion successful");
			
			
			
			
			return Response.ok().status(200).entity(addServiceResponseErr).build();
					
		}

	}

	private String generateKey() {
		Random rand = new Random();

		int n = rand.nextInt(50) + 1;

		return n + (new Date().toString());
	}
	
}

