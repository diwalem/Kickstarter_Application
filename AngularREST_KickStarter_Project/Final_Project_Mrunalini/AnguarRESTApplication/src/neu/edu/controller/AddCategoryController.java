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
import neu.edu.controller.error.ResponseError;
import neu.edu.service.CategoryService;
import neu.edu.service.UserService;

@Controller
@Path("/user/{id}/addCategory")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AddCategoryController {

	@Autowired
	private CategoryService categoryService;

	@POST
	public Response addCategory(UserCategoryBean userCategoryBean,@PathParam("id") String id) {
		
		String status = categoryService.addCategory(userCategoryBean,id);
		
		if (status == null || !status.equals("success")) {
			
			
			ResponseError categoryResponseErr = new ResponseError();
			categoryResponseErr.setMessage("Insertion failed");
			
			
			
			return Response.ok().status(422).entity(categoryResponseErr).build();
			
			
		} else {
			//String key = generateKey();
			//UserSessionInfo userSessionInfo = userService.fetchUserAccountDetails(userId);

			ResponseError categoryResponseErr = new ResponseError();
			categoryResponseErr.setMessage("Insertion successful");
			
			
			
			
			return Response.ok().status(200).entity(categoryResponseErr).build();
					
		}

	}

	private String generateKey() {
		Random rand = new Random();

		int n = rand.nextInt(50) + 1;

		return n + (new Date().toString());
	}


	

}

