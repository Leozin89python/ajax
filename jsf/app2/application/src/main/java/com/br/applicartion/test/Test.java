package com.br.applicartion.test;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import com.br.applicartion.database.DatabaseConnection;

public class Test {
	public static void main(String[] args) {

		DatabaseConnection con = new DatabaseConnection();
		Connection connect = null;
		String query = "SELECT * FROM testing";
		Statement state = null;
		ResultSet result = null;

		try {
			connect = con.getConnection();
			state = connect.createStatement();
			result = state.executeQuery(query);

			while (result.next()) {
				System.out.println("attribute:" + result.getString("data"));
			}

		} catch (Exception e) {
			System.out.println("error:" + e.getMessage());
		} finally {
			try {
				connect.close();
				state.close();
				result.close();
			} catch (Exception e2) {
				System.out.println("error:" + e2.getMessage());
			}
		}

	}
}
