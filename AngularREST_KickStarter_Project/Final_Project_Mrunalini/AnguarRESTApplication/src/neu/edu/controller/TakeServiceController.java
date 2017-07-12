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

import neu.edu.bean.TakeServiceBean;
import neu.edu.bean.UserCategoryBean;
import neu.edu.bean.UserProjectBean;
import neu.edu.controller.error.ResponseError;
import neu.edu.service.UserService;

@Controller
@Path("/user/{id}/takeService/{projectId}/addCard/{serviceId}/serviceAmount/{serviceAmount}")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TakeServiceController {

	@Autowired
	private UserService userService;

	@POST
	public Response addCard(TakeServiceBean takeServiceBean,@PathParam("id") String id, @PathParam("projectId") Integer projectId, @PathParam("serviceId") Integer serviceId, @PathParam("serviceAmount") Double serviceAmount) {
		
		String status = userService.addCard(takeServiceBean,id,projectId, serviceId, serviceAmount);
		
		if (status == null || !status.equals("success")) {
			
			
			ResponseError cardResponseErr = new ResponseError();
			cardResponseErr.setMessage("Insertion failed");
			
			
			
			return Response.ok().status(422).entity(cardResponseErr).build();
			
			
		} else {
			//String key = generateKey();
			//UserSessionInfo userSessionInfo = userService.fetchUserAccountDetails(userId);

			ResponseError cardResponseErr = new ResponseError();
			cardResponseErr.setMessage("Insertion successful");
			
			
			
			
			return Response.ok().status(200).entity(cardResponseErr).build();
					
		}

	}

	private String generateKey() {
		Random rand = new Random();

		int n = rand.nextInt(50) + 1;

		return n + (new Date().toString());
	}


	

}

