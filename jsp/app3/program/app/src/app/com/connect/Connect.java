package app.com.connect;

import java.sql.Connection;
import java.sql.DriverManager;


public class Connect {
	
	private static String banco = "jdbc:mysql://localhost:3306/jspapp3?useSSL=false";
	private static String user = "root";
	private static String password = "123456";
	private static Connection connection = null;
	
	
	static {
		con();
	}

	public Connect() {
		con();
	}
	
	public static void con() {
			
		try {

			if (connection == null) {
					
					//Class.forName("com.mysql.cj.jdbc.Driver");
				 	connection = DriverManager.getConnection(banco, password, user);
					//connection.setAutoCommit(false);
					//connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
				
				}
			}catch (Exception e) {
				
				throw new RuntimeException("Erro ao conectar com a base de dados."
						+ e.getMessage());
				
			}
		
	}
	
	public static Connection getConnection() {
		return connection;
	}
	
}
