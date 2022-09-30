
package com.lvdevportfiolio.lvdev.Repository;

import com.lvdevportfiolio.lvdev.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
