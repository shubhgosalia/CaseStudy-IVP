using SecMasterApi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SecMasterApi.Controllers
{
    
    public class ValuesController : ApiController
    {
        // GET api/values
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);

        EquityDB emp = new EquityDB();

        public List<EquityDB> Get()
        {
            SqlDataAdapter da = new SqlDataAdapter("GetActiveSecurities1", con);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<EquityDB> lstEmployee = new List<EquityDB>();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    EquityDB emp = new EquityDB();
                    emp.Security_Name = dt.Rows[i]["Security Name"].ToString();
                    emp.Is_Active_Security = dt.Rows[i]["Is Active Security"].ToString();
                    emp.Security_Id= Convert.ToInt32(dt.Rows[i]["Security ID"]);
                    emp.Security_Description = dt.Rows[i]["Security Description"].ToString();
                    emp.Has_Position = dt.Rows[i]["Has Position"].ToString();
                    emp.Lot_Size = dt.Rows[i]["Lot Size"].ToString();
                    emp.BBG_Unique_Name = dt.Rows[i]["BBG Unique Name"].ToString();
                    emp.CUSIP = dt.Rows[i]["CUSIP"].ToString();
                    emp.ISIN = dt.Rows[i]["ISIN"].ToString();
                    emp.SEDOL = dt.Rows[i]["SEDOL"].ToString();
                    emp.Bloomberg_Ticker = dt.Rows[i]["Bloomberg Ticker"].ToString();
                    emp.Bloomberg_Unique_ID = dt.Rows[i]["Bloomberg Unique ID"].ToString();
                    emp.BBG_Global_ID = dt.Rows[i]["BBG Global ID"].ToString();
                    emp.Ticker_and_Exchange = dt.Rows[i]["Ticker and Exchange"].ToString();
                    emp.Is_ADR_Flag = dt.Rows[i]["Is ADR Flag"].ToString();
                    emp.ADR_Underlying_Ticker = dt.Rows[i]["ADR Underlying Ticker"].ToString();
                    emp.ADR_Underlying_Currency = dt.Rows[i]["ADR Underlying Currency"].ToString();
                    emp.Shares_Per_ADR = dt.Rows[i]["Shares Per ADR"].ToString();
                    emp.IPO_Date = dt.Rows[i]["IPO Date"].ToString();
                    emp.Pricing_Currency = dt.Rows[i]["Pricing Currency"].ToString();
                    emp.Settle_Days = dt.Rows[i]["Settle Days"].ToString();
                    emp.Total_Shares_Outstanding = dt.Rows[i]["Total Shares Outstanding"].ToString();
                    emp.Voting_Rights_Per_Share = dt.Rows[i]["Voting Rights Per Share"].ToString();
                    emp.Average_Volume___20D = dt.Rows[i]["Average Volume - 20D"].ToString();
                    emp.Beta = dt.Rows[i]["Beta"].ToString();
                    emp.Short_Interest = dt.Rows[i]["Short Interest"].ToString();
                    emp.Return___YTD = dt.Rows[i]["Return - YTD"].ToString();
                    emp.Volatility___90D = dt.Rows[i]["Volatility - 90D"].ToString();
                    emp.PF_Asset_Class = dt.Rows[i]["PF Asset Class"].ToString();
                    emp.PF_Country = dt.Rows[i]["PF Country"].ToString();
                    emp.PF_Credit_Rating = dt.Rows[i]["PF Credit Rating"].ToString();
                    emp.PF_Currency = dt.Rows[i]["PF Currency"].ToString();
                    emp.PF_Instrument = dt.Rows[i]["PF Instrument"].ToString();
                    emp.PF_Liquidity_Profile = dt.Rows[i]["PF Liquidity Profile"].ToString();
                    emp.PF_Maturity = dt.Rows[i]["PF Maturity"].ToString();
                    emp.PF_NAICS_Code = dt.Rows[i]["PF NAICS Code"].ToString();
                    emp.PF_Region = dt.Rows[i]["PF Region"].ToString();
                    emp.PF_Sector = dt.Rows[i]["PF Sector"].ToString();
                    emp.PF_Sub_Asset_Class = dt.Rows[i]["PF Sub Asset Class"].ToString();
                    emp.Country_of_Issuance = dt.Rows[i]["Country of Issuance"].ToString();
                    emp.Exchange = dt.Rows[i]["Exchange"].ToString();
                    emp.Issuer = dt.Rows[i]["Issuer"].ToString();
                    emp.Issue_Currency = dt.Rows[i]["Issue Currency"].ToString();
                    emp.Trading_Currency = dt.Rows[i]["Trading Currency"].ToString();
                    emp.BBG_Industry_Sub_Group = dt.Rows[i]["BBG Industry Sub Group"].ToString();
                    emp.Bloomberg_Industry_Group = dt.Rows[i]["Bloomberg Industry Group"].ToString();
                    emp.Bloomberg_Sector = dt.Rows[i]["Bloomberg Sector"].ToString();
                    emp.Country_of_Incorporation = dt.Rows[i]["Country of Incorporation"].ToString();
                    emp.Risk_Currency = dt.Rows[i]["Risk Currency"].ToString();
                    emp.Open_Price = dt.Rows[i]["Open Price"].ToString();
                    emp.Close_Price = dt.Rows[i]["Close Price"].ToString();
                    emp.Volume = dt.Rows[i]["Volume"].ToString();
                    emp.Last_Price = dt.Rows[i]["Last Price"].ToString();
                    emp.Ask_Price = dt.Rows[i]["Ask Price"].ToString();
                    emp.Bid_Price = dt.Rows[i]["Bid Price"].ToString();
                    emp.PE_Ratio = dt.Rows[i]["PE Ratio"].ToString();
                    emp.Dividend_Declared_Date = dt.Rows[i]["Dividend Declared Date"].ToString();
                    emp.Dividend_Ex_Date = dt.Rows[i]["Dividend Ex Date"].ToString();
                    emp.Dividend_Record_Date_ = dt.Rows[i]["Dividend Record Date"].ToString();
                    emp.Dividend_Pay_Date = dt.Rows[i]["Dividend Pay Date"].ToString();
                    emp.Dividend_Amount = dt.Rows[i]["Dividend Amount"].ToString();
                    emp.Frequency = dt.Rows[i]["Frequency"].ToString();
                    emp.Dividend_Type = dt.Rows[i]["Dividend Type"].ToString();

                    lstEmployee.Add(emp);
                }
            }
            if (lstEmployee.Count > 0)
            {
                return lstEmployee;
            }
            else
            {
                return null;
            }
        }

        // GET api/values/5
        public EquityDB Get(int id)
        {
            SqlDataAdapter da = new SqlDataAdapter("GetById", con);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@SecurityID", id);
            EquityDB emp = new EquityDB();
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {

                int i = 0;
                emp.Security_Name = dt.Rows[i]["Security Name"].ToString();
                emp.Is_Active_Security = dt.Rows[i]["Is Active Security"].ToString();
                emp.Security_Id = Convert.ToInt32(dt.Rows[i]["Security ID"]);
                emp.Security_Description = dt.Rows[i]["Security Description"].ToString();
                emp.Has_Position = dt.Rows[i]["Has Position"].ToString();
                emp.Lot_Size = dt.Rows[i]["Lot Size"].ToString();
                emp.BBG_Unique_Name = dt.Rows[i]["BBG Unique Name"].ToString();
                emp.CUSIP = dt.Rows[i]["CUSIP"].ToString();
                emp.ISIN = dt.Rows[i]["ISIN"].ToString();
                emp.SEDOL = dt.Rows[i]["SEDOL"].ToString();
                emp.Bloomberg_Ticker = dt.Rows[i]["Bloomberg Ticker"].ToString();
                emp.Bloomberg_Unique_ID = dt.Rows[i]["Bloomberg Unique ID"].ToString();
                emp.BBG_Global_ID = dt.Rows[i]["BBG Global ID"].ToString();
                emp.Ticker_and_Exchange = dt.Rows[i]["Ticker and Exchange"].ToString();
                emp.Is_ADR_Flag = dt.Rows[i]["Is ADR Flag"].ToString();
                emp.ADR_Underlying_Ticker = dt.Rows[i]["ADR Underlying Ticker"].ToString();
                emp.ADR_Underlying_Currency = dt.Rows[i]["ADR Underlying Currency"].ToString();
                emp.Shares_Per_ADR = dt.Rows[i]["Shares Per ADR"].ToString();
                emp.IPO_Date = dt.Rows[i]["IPO Date"].ToString();
                emp.Pricing_Currency = dt.Rows[i]["Pricing Currency"].ToString();
                emp.Settle_Days = dt.Rows[i]["Settle Days"].ToString();
                emp.Total_Shares_Outstanding = dt.Rows[i]["Total Shares Outstanding"].ToString();
                emp.Voting_Rights_Per_Share = dt.Rows[i]["Voting Rights Per Share"].ToString();
                emp.Average_Volume___20D = dt.Rows[i]["Average Volume - 20D"].ToString();
                emp.Beta = dt.Rows[i]["Beta"].ToString();
                emp.Short_Interest = dt.Rows[i]["Short Interest"].ToString();
                emp.Return___YTD = dt.Rows[i]["Return - YTD"].ToString();
                emp.Volatility___90D = dt.Rows[i]["Volatility - 90D"].ToString();
                emp.PF_Asset_Class = dt.Rows[i]["PF Asset Class"].ToString();
                emp.PF_Country = dt.Rows[i]["PF Country"].ToString();
                emp.PF_Credit_Rating = dt.Rows[i]["PF Credit Rating"].ToString();
                emp.PF_Currency = dt.Rows[i]["PF Currency"].ToString();
                emp.PF_Instrument = dt.Rows[i]["PF Instrument"].ToString();
                emp.PF_Liquidity_Profile = dt.Rows[i]["PF Liquidity Profile"].ToString();
                emp.PF_Maturity = dt.Rows[i]["PF Maturity"].ToString();
                emp.PF_NAICS_Code = dt.Rows[i]["PF NAICS Code"].ToString();
                emp.PF_Region = dt.Rows[i]["PF Region"].ToString();
                emp.PF_Sector = dt.Rows[i]["PF Sector"].ToString();
                emp.PF_Sub_Asset_Class = dt.Rows[i]["PF Sub Asset Class"].ToString();
                emp.Country_of_Issuance = dt.Rows[i]["Country of Issuance"].ToString();
                emp.Exchange = dt.Rows[i]["Exchange"].ToString();
                emp.Issuer = dt.Rows[i]["Issuer"].ToString();
                emp.Issue_Currency = dt.Rows[i]["Issue Currency"].ToString();
                emp.Trading_Currency = dt.Rows[i]["Trading Currency"].ToString();
                emp.BBG_Industry_Sub_Group = dt.Rows[i]["BBG Industry Sub Group"].ToString();
                emp.Bloomberg_Industry_Group = dt.Rows[i]["Bloomberg Industry Group"].ToString();
                emp.Bloomberg_Sector = dt.Rows[i]["Bloomberg Sector"].ToString();
                emp.Country_of_Incorporation = dt.Rows[i]["Country of Incorporation"].ToString();
                emp.Risk_Currency = dt.Rows[i]["Risk Currency"].ToString();
                emp.Open_Price = dt.Rows[i]["Open Price"].ToString();
                emp.Close_Price = dt.Rows[i]["Close Price"].ToString();
                emp.Volume = dt.Rows[i]["Volume"].ToString();
                emp.Last_Price = dt.Rows[i]["Last Price"].ToString();
                emp.Ask_Price = dt.Rows[i]["Ask Price"].ToString();
                emp.Bid_Price = dt.Rows[i]["Bid Price"].ToString();
                emp.PE_Ratio = dt.Rows[i]["PE Ratio"].ToString();
                emp.Dividend_Declared_Date = dt.Rows[i]["Dividend Declared Date"].ToString();
                emp.Dividend_Ex_Date = dt.Rows[i]["Dividend Ex Date"].ToString();
                emp.Dividend_Record_Date_ = dt.Rows[i]["Dividend Record Date"].ToString();
                emp.Dividend_Pay_Date = dt.Rows[i]["Dividend Pay Date"].ToString();
                emp.Dividend_Amount = dt.Rows[i]["Dividend Amount"].ToString();
                emp.Frequency = dt.Rows[i]["Frequency"].ToString();
                emp.Dividend_Type = dt.Rows[i]["Dividend Type"].ToString();


            }
            if (emp != null)
            {
                return emp;
            }
            else
            {
                return null;
            }
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public string Put(int id, EquityDB stg)
        {
            string msg = "";
            if (stg != null)
            {
                SqlCommand cmd = new SqlCommand("UpdateEquityData", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@SecurityID", id);
                cmd.Parameters.AddWithValue("@SecurityDescription", stg.Security_Description);
                cmd.Parameters.AddWithValue("@PricingCurrency", stg.Pricing_Currency);
                cmd.Parameters.AddWithValue("@TotalSharesOutstanding", stg.Total_Shares_Outstanding);
                cmd.Parameters.AddWithValue("@OpenPrice", stg.Open_Price);
                cmd.Parameters.AddWithValue("@ClosePrice", stg.Close_Price);
                cmd.Parameters.AddWithValue("@DividendDeclaredDate", stg.Dividend_Declared_Date);
                cmd.Parameters.AddWithValue("@PFCreditRating", stg.PF_Credit_Rating);
                con.Open();
                int i = cmd.ExecuteNonQuery();
                con.Close();

                if (i > 0)
                {
                    msg = "Data has been updated";
                }
                else
                {
                    msg = "Error";
                }
            }
            return msg;
        }




        // DELETE api/values/5
        public string Delete(int id)
        {
            string msg = "";
            SqlCommand cmd = new SqlCommand("DeleteById", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@SecurityID", id);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();

            if (i > 0)
            {
                msg = "Data has been deleted";
            }
            else
            {
                msg = "Error";
            }
            return msg;
        }
    }
}
