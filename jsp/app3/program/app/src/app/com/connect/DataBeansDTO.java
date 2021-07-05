package app.com.connect;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import app.com.entities.DataBeans;

public class DataBeansDTO {
		
	DataBeans dtb = new DataBeans();
	
	Connect connective = new Connect();
	Connection con = connective.getConnection();

	String sql = "SELECT * FROM appjsp3";
	
	Statement st = null;
	ResultSet rst = null;
	
	public void retornar() {
			
			try {
				
				st = con.createStatement();
				rst = st.executeQuery(sql);
				
				while (rst.next()) {
					System.out.println(rst.getInt("Id") + ", " + rst.getString("Name"));
				}
				
			}catch(Exception e) {
				System.out.println("erro:" + e.getMessage());
			}finally {
				try {
					con.close();
					st.close();
					rst.close();
				}catch (Exception e) {
					System.out.println("error:" + e.getMessage());
				}
			}
	}
}
