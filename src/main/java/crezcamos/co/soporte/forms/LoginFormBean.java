package crezcamos.co.soporte.forms;

import org.apache.log4j.Logger;

import java.io.Serializable;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;


@ManagedBean(name = "loginFormBean")
@ViewScoped
public class LoginFormBean implements Serializable {

  private static final long serialVersionUID = 5054442370199135620L;
  private static final Logger log = Logger.getLogger(LoginFormBean.class);

  private String usuario;
  private String clave;

  @PostConstruct
  public void init() {
    usuario = "";
    clave = "";
    System.out.println("init");
  }

  /**
   * Método para verificar la autenticación al sistema.
   * 
   * @throws Exception
   */
  public void autenticar() throws Exception {
    if (this.usuario.equals("user") && this.clave.equals("123")){
      FacesContext.getCurrentInstance().getExternalContext().redirect("../dashboard/dashboard.xhtml");
    }
    else {
      FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_WARN, null, "User incorrect"));
    }

  }


  public String getClave() {
    return clave;
  }

  public void setClave(String clave) {
    this.clave = clave;
  }

  public String getUsuario() {
    return usuario;
  }

  public void setUsuario(String usuario) {
    this.usuario = usuario;
  }

}
