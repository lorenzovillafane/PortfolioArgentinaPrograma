package com.lvdevportfiolio.lvdev.Interface;

import com.lvdevportfiolio.lvdev.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Trae una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Elminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
    
}
