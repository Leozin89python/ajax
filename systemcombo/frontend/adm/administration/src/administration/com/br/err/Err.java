package administration.com.br.err;

public class Err extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public Err(Exception msg) {
		super(msg);
	}
}
