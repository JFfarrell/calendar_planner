package app.controller;

import app.model.Activity;
import app.repository.ActivityRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class HelloController {

    @Autowired
    ActivityRepository activityRepository;

//    HelloController(ActivityRepository activityRepository) {
//        this.activityRepository = activityRepository;
//    }

    @GetMapping("/api")
    public String index() {
        return "Greetings from Spring!";
    }

    @GetMapping("")
    public String test() {
        return "Greetings from!";
    }

    @GetMapping("/listActivities")
    public List<Activity> listUsers(Model model) {
        List<Activity> allActivities = activityRepository.findAll();
        return allActivities;
    }
}
