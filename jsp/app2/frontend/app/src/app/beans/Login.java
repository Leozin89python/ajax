package app.beans;

public class Login {
	
	private String login;
	private String senha;
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public boolean validarLogin(String login, String senha) {
		if(login.equals("admin") && senha.equals("admin")) {
			return true;
		}
		return false;
	}
	
}
