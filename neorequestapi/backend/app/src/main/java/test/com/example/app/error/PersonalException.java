package test.com.example.app.error;

public class PersonalException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public PersonalException(String msg) {
		super(msg);
	}
}
