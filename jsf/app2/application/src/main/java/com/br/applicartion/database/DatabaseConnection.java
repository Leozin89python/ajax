package com.br.applicartion.database;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection  {
		
	private static String banco = "jdbc:postgresql://localhost/test";
	private static String user = "postgres";
	private static String password = "123456";
	private static Connection connection = null;
	
	
	static {
		con();
	}

	public DatabaseConnection() {
		con();
	}
	
	public static void con() {
		
		try {

			if (connection == null) {
					
					Class.forName("org.postgresql.Driver");
				 	connection = DriverManager.getConnection(banco, user, password);
					connection.setAutoCommit(false);
					connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
				
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
  

