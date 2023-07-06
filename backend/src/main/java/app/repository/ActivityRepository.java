package app.repository;

import app.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

//    @Query("SELECT a FROM date a WHERE a.date = ?1")
//    Activity findByDate(String date);

//    @Query("SELECT a FROM activity_type a WHERE a.activity_type = ?1")
//    Activity findByType(String activity_type);
}
