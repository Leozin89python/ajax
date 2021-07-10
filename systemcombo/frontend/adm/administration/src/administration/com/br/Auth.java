package administration.com.br;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import administration.com.br.err.Err;

public class Auth {
	
		private static String banco = "jdbc:mysql://localhost:3306/admin_combo?useTimezone=true&serverTimezone=UTC";
		private static String user = "root";
		private static String password = "123456";
		private static Connection connection = null;
		
		
		static {
			con();
		}

		public Auth() {
			con();
		}
		
		public static void con() {
				
			try {

				if (connection == null) {
						
						Class.forName("com.mysql.cj.jdbc.Driver");
					 	connection = DriverManager.getConnection(banco, user, password);
						connection.setAutoCommit(false);
						connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
					
					}
				}catch (SQLException e) {
					throw new Err(e); 
				}
				catch (Exception e) {
					throw new Err(e); 
				}
			
		}
		
		public static Connection getConnection() {
			return connection;
		}
		
	}
	

