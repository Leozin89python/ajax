package administration.com.br.test;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import administration.com.br.Auth;
import administration.com.br.err.Err;

public class Test {

	//public static void main(String[] args) {}
			
		 Auth con = new Auth();
    	 Connection conect =  con.getConnection();
		
		 Statement st = null;
		 ResultSet rs = null;
		
		 
		 public void returnData() {
			 	
		      try {
		    	  String sql = "SELECT * FROM adm";  
		    	  st = conect.createStatement();
		    	  rs = st.executeQuery(sql);
		    	  
		    	  while(rs.next()) {
		    		  System.out.println(rs.getInt("id") 
		    				  				+ "," 
		    				  				+ rs.getString("user") 
		    				  			    +	"," 
		    				  				+ rs.getString("password"));
		    	  }
		    	  
			} catch (Exception e) {
				
			}finally {
				
				try {
					
					conect.close();
					st.close();
					rs.close();
					
				}catch (Exception e) {
					throw new Err(e);
				}
				
			}
			 
		 }
		 
		 
		 
		 
	
}
