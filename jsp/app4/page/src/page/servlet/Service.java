package page.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import page.bean.Element;


@WebServlet("/Service")
public class Service extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Service() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//faz nada ainda!
		try {
			doGet(request, response);
			Element el = new Element();
			el.setElement(request.getParameter("element"));
			request.getRequestDispatcher("data.jsp");
		}catch(Exception e) {
			throw new RuntimeException("Error:" + e.getMessage());
		}
	}
}
