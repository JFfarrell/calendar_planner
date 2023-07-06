package app.controller;

import app.model.Activity;
import app.repository.ActivityRepository;
import app.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ActivityController {

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    ActivityService activityService;

    @GetMapping("/api")
    public String index() {
        return "Greetings from Spring!";
    }

    @GetMapping("/activities")
    @CrossOrigin(origins = "http://localhost:5173")
    public List<Activity> listActivities(Model model) {
        return activityRepository.findAll();
    }

    @GetMapping("/activities/{activity_type}")
    public List<Activity> listActivitiesOfType(
            @PathVariable(value= "activity_type" ) String activity_type) {
        return activityService.getActivitiesFilteredByType(activity_type);
    }
}
