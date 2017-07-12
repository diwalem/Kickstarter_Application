package neu.edu.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import neu.edu.bean.UserProjectBean;
import neu.edu.bean.UserServiceBean;
import neu.edu.service.ProjectService;
import neu.edu.service.ServiceService;

@Controller
@Path("/user/service/{projectId}")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class ServiceController {
	
	
	@Autowired
	private ServiceService serviceService;
	
	@GET
	public Response getAllService(@PathParam("projectId") Integer projectId){
		
		List<UserServiceBean> userServiceBeans =  serviceService.getAllService(projectId);
		return  Response.ok().status(200).entity(userServiceBeans).build();
		
	}

}
