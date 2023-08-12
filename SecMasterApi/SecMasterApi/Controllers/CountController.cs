using SecMasterApi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace SecMasterApi.Controllers
{
    public class CountController : ApiController
    {
        // GET: Count
        public int GetEmployeeCount()
        {
            using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
            {
                using (SqlCommand command = new SqlCommand("CountActives", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    int count = (int)command.ExecuteScalar();
                    return count;
                }
            }
        }
        

    }
}