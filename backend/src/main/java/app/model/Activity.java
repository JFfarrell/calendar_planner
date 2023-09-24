package app.model;


import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name="activities")
public class Activity {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String activity_type;
    private String date;
    private Integer duration;
    private String intensity;

    private String time_of_day;

    private String end_time;

    private String day_of_week;

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getDow() {
        return day_of_week;
    }

    public String getTod() {
        return time_of_day;
    }

    public void setTod(String tod) {
        this.time_of_day = tod;
    }

    public String getActivity_type() {
        return activity_type;
    }

    public void setActivity_type(String activity_type) {
        this.activity_type = activity_type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public String getIntensity() {
        return intensity;
    }

    public void setIntensity(String intensity) {
        this.intensity = intensity;
    }

    public int getId() {
        return id;
    }
}
