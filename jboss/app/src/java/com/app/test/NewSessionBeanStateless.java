/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app.test;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.ejb.Asynchronous;
import javax.ejb.EJB;
import javax.ejb.Startup;
import javax.ejb.Stateful;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

/**
 *
 * @author Mendes
 */
@Stateful
public class NewSessionBeanStateless {
    
        
        @PostConstruct
        public void message() {
            System.out.println("iniciado");
        }
        
        @PreUpdate
        public void otherMessage() {
             System.out.println("novo inicio");
        }
        
        @PreRemove
        public void newOtherMessage() {
             System.out.println("perto do fim inicio");
        }
        @PreDestroy
        public void newOtherNewmessage(){
             System.out.println("mais perto do fim inicio");
        }
    
}
