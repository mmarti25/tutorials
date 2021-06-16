package com.example.application.httprestserver.general.service.api.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/visitormanagement/v1")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface VisitormanagementRestService {

  @GET
  @Path("/clientrequest")
  public String returnResponseToClient(String args);

}