using Microsoft.VisualBasic.FileIO;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;



namespace SecMasterApi.Controllers
{
    public class UploadController : ApiController
    {
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/Upload/Upload")]
        public IHttpActionResult UploadCsvFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files["file"];

                if (postedFile != null && postedFile.ContentLength > 0)
                {
                    var filePath = HttpContext.Current.Server.MapPath("~/App_Data/" + postedFile.FileName);
                    postedFile.SaveAs(filePath);

                    DataTable csvData = GetDataTableFromCSVFile(filePath);

                    if (csvData != null && csvData.Rows.Count > 0)
                    {
                        InsertDataIntoSQLServerUsingSQLBulkCopy(csvData);
                        return Ok("File uploaded and data inserted successfully.");
                    }
                }

                return BadRequest("No file uploaded or empty file.");
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        private static DataTable GetDataTableFromCSVFile(string csvFilePath)
        {
            DataTable csvData = new DataTable();

            try
            {
                using (TextFieldParser csvReader = new TextFieldParser(csvFilePath))
                {
                    csvReader.SetDelimiters(new string[] { "," });
                    csvReader.HasFieldsEnclosedInQuotes = true;

                    // Read the first row to create columns in DataTable
                    string[] colFields = csvReader.ReadFields();
                    foreach (string column in colFields)
                    {
                        DataColumn dataColumn = new DataColumn(column);
                        dataColumn.AllowDBNull = true;
                        csvData.Columns.Add(dataColumn);
                    }

                    // Read the remaining rows and populate DataTable
                    while (!csvReader.EndOfData)
                    {
                        string[] fieldData = csvReader.ReadFields();
                        // Making empty value as null
                        for (int i = 0; i < fieldData.Length; i++)
                        {
                            if (fieldData[i] == "")
                            {
                                fieldData[i] = null;
                            }
                        }
                        csvData.Rows.Add(fieldData);
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle exception as needed
                Console.WriteLine("An error occurred while reading CSV: " + ex.Message);
                return null;
            }

            return csvData;
        }

        private static void InsertDataIntoSQLServerUsingSQLBulkCopy(DataTable csvFileData)
        {
            // Implement the method to insert data into SQL Server using SqlBulkCopy
            // Example implementation:
            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString))
            {
                conn.Open();
                using (SqlBulkCopy s = new SqlBulkCopy(conn))
                {
                    s.DestinationTableName = "EquitiesDBase";
                    foreach (var column in csvFileData.Columns)
                        s.ColumnMappings.Add(column.ToString(), column.ToString());
                    s.WriteToServer(csvFileData);
                }
            }
        }
    }
}